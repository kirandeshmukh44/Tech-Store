import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem('techstore_cart')
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    })

    const [coupon, setCoupon] = useState(() => {
        try {
            const saved = localStorage.getItem('techstore_coupon')
            return saved ? JSON.parse(saved) : null
        } catch {
            return null
        }
    })

    const [toast, setToast] = useState(null)

    // Save cart to localStorage
    useEffect(() => {
        try {
            localStorage.setItem('techstore_cart', JSON.stringify(cartItems))
        } catch (e) {
            console.error('Failed to save cart', e)
        }
    }, [cartItems])

    // Save coupon to localStorage
    useEffect(() => {
        try {
            if (coupon) {
                localStorage.setItem('techstore_coupon', JSON.stringify(coupon))
            } else {
                localStorage.removeItem('techstore_coupon')
            }
        } catch (e) {
            console.error('Failed to save coupon', e)
        }
    }, [coupon])

    const showToast = (message, type = 'success') => {
        setToast({ message, type, id: Date.now() })
        setTimeout(() => {
            setToast((current) => (current?.message === message ? null : current))
        }, 3000)
    }

    const closeToast = () => {
        setToast(null)
    }

    // ================= ADD TO CART =================
    const addToCart = (product, qty = 1) => {
        setCartItems((currentItems) => {
            const existingProduct = currentItems.find((item) => item.id === product.id)

            if (existingProduct) {
                showToast(`Updated quantity for ${product.heading}!`, 'info')
                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + qty,
                          }
                        : item
                )
            }

            showToast(`Added ${product.heading} to cart!`, 'success')
            return [
                ...currentItems,
                {
                    ...product,
                    quantity: qty,
                },
            ]
        })
    }

    // ================= REMOVE FROM CART =================
    const removeFromCart = (productId) => {
        const itemToRemove = cartItems.find((item) => item.id === productId)
        setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
        if (itemToRemove) {
            showToast(`Removed ${itemToRemove.heading} from cart`, 'info')
        }
    }

    // ================= INCREASE QUANTITY =================
    const increaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        )
    }

    // ================= DECREASE QUANTITY =================
    const decreaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId && item.quantity > 1
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item
            )
        )
    }

    // ================= CLEAR CART =================
    const clearCart = () => {
        setCartItems([])
        setCoupon(null)
    }

    // ================= COUPON CODES =================
    const applyCoupon = (code) => {
        const cleanCode = code.trim().toUpperCase()
        if (cleanCode === 'TECH10') {
            const applied = { code: 'TECH10', type: 'percent', value: 10, label: '10% Discount' }
            setCoupon(applied)
            showToast('Applied coupon TECH10 (10% OFF)!', 'success')
            return { success: true, message: 'Coupon applied successfully!' }
        } else if (cleanCode === 'WELCOME500') {
            const applied = { code: 'WELCOME500', type: 'flat', value: 500, label: '₹500 Discount' }
            setCoupon(applied)
            showToast('Applied coupon WELCOME500 (₹500 OFF)!', 'success')
            return { success: true, message: 'Coupon applied successfully!' }
        } else if (cleanCode === 'SMART20') {
            const applied = { code: 'SMART20', type: 'percent', value: 20, label: '20% Discount' }
            setCoupon(applied)
            showToast('Applied coupon SMART20 (20% OFF)!', 'success')
            return { success: true, message: 'Coupon applied successfully!' }
        } else {
            showToast('Invalid promo code. Try TECH10 or WELCOME500', 'error')
            return { success: false, message: 'Invalid coupon code' }
        }
    }

    const removeCoupon = () => {
        setCoupon(null)
        showToast('Promo code removed', 'info')
    }

    // ================= CALCULATIONS =================
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    const subtotal = cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    )

    let discountAmount = 0
    if (coupon) {
        if (coupon.type === 'percent') {
            discountAmount = Math.round((subtotal * coupon.value) / 100)
        } else if (coupon.type === 'flat') {
            discountAmount = Math.min(coupon.value, subtotal)
        }
    }

    const deliveryFee = 0 // Free shipping
    const cartTotal = Math.max(0, subtotal - discountAmount + deliveryFee)

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        subtotal,
        discountAmount,
        coupon,
        applyCoupon,
        removeCoupon,
        deliveryFee,
        cartTotal,
        toast,
        showToast,
        closeToast,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
    return useContext(CartContext)
}
