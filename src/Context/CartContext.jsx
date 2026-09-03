import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

// ===============================
// NORMALIZE CART ITEMS
// ===============================
const normalizeCartItems = (items) => {
    if (!Array.isArray(items)) return []

    const mergedItems = []

    items.forEach((item) => {
        if (!item || item.id === undefined || item.id === null) return

        const existingIndex = mergedItems.findIndex(
            (cartItem) => cartItem.id === item.id
        )

        const quantity = Math.max(
            1,
            Number(item.quantity) || 1
        )

        if (existingIndex !== -1) {
            mergedItems[existingIndex] = {
                ...mergedItems[existingIndex],
                quantity:
                    mergedItems[existingIndex].quantity + quantity,
            }
        } else {
            mergedItems.push({
                ...item,
                quantity,
            })
        }
    })

    return mergedItems
}

export const CartProvider = ({ children }) => {
    // ===============================
    // CART
    // ===============================
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem('techstore_cart')

            if (!saved) return []

            const parsed = JSON.parse(saved)

            // Automatically remove/merge old duplicates
            return normalizeCartItems(parsed)
        } catch (error) {
            console.error('Failed to load cart:', error)
            return []
        }
    })

    // ===============================
    // COUPON
    // ===============================
    const [coupon, setCoupon] = useState(() => {
        try {
            const saved = localStorage.getItem('techstore_coupon')

            return saved ? JSON.parse(saved) : null
        } catch (error) {
            console.error('Failed to load coupon:', error)
            return null
        }
    })

    // ===============================
    // TOAST
    // ===============================
    const [toast, setToast] = useState(null)

    // ===============================
    // SAVE CART
    // ===============================
    useEffect(() => {
        try {
            localStorage.setItem(
                'techstore_cart',
                JSON.stringify(cartItems)
            )
        } catch (error) {
            console.error('Failed to save cart:', error)
        }
    }, [cartItems])

    // ===============================
    // SAVE COUPON
    // ===============================
    useEffect(() => {
        try {
            if (coupon) {
                localStorage.setItem(
                    'techstore_coupon',
                    JSON.stringify(coupon)
                )
            } else {
                localStorage.removeItem('techstore_coupon')
            }
        } catch (error) {
            console.error('Failed to save coupon:', error)
        }
    }, [coupon])

    // ===============================
    // SHOW TOAST
    // ===============================
    const showToast = (message, type = 'success') => {
        const toastId = Date.now()

        setToast({
            message,
            type,
            id: toastId,
        })

        setTimeout(() => {
            setToast((current) => {
                if (current?.id === toastId) {
                    return null
                }

                return current
            })
        }, 3000)
    }

    // ===============================
    // CLOSE TOAST
    // ===============================
    const closeToast = () => {
        setToast(null)
    }

    // ===============================
    // ADD TO CART
    // ===============================
    const addToCart = (product, qty = 1) => {
        if (!product || product.id === undefined || product.id === null) {
            showToast('Invalid product!', 'error')
            return
        }

        const quantityToAdd = Math.max(
            1,
            Number(qty) || 1
        )

        setCartItems((currentItems) => {
            const existingProduct = currentItems.find(
                (item) => item.id === product.id
            )

            // Product already exists
            if (existingProduct) {
                showToast(
                    `Updated quantity for ${product.heading}!`,
                    'info'
                )

                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  (Number(item.quantity) || 1) +
                                  quantityToAdd,
                          }
                        : item
                )
            }

            // New product
            showToast(
                `Added ${product.heading} to cart!`,
                'success'
            )

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: quantityToAdd,
                },
            ]
        })
    }

    // ===============================
    // REMOVE FROM CART
    // ===============================
    const removeFromCart = (productId) => {
        const itemToRemove = cartItems.find(
            (item) => item.id === productId
        )

        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== productId
            )
        )

        if (itemToRemove) {
            showToast(
                `Removed ${itemToRemove.heading} from cart`,
                'info'
            )
        }
    }

    // ===============================
    // INCREASE QUANTITY
    // ===============================
    const increaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                          ...item,
                          quantity:
                              (Number(item.quantity) || 1) + 1,
                      }
                    : item
            )
        )
    }

    // ===============================
    // DECREASE QUANTITY
    // ===============================
    const decreaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                          ...item,
                          quantity: Math.max(
                              1,
                              (Number(item.quantity) || 1) - 1
                          ),
                      }
                    : item
            )
        )
    }

    // ===============================
    // CLEAR CART
    // ===============================
    const clearCart = () => {
        setCartItems([])
        setCoupon(null)

        showToast('Cart cleared successfully', 'info')
    }

    // ===============================
    // COUPONS
    // ===============================
    const applyCoupon = (code) => {
        const cleanCode = code?.trim().toUpperCase()

        if (!cleanCode) {
            showToast(
                'Please enter a promo code',
                'error'
            )

            return {
                success: false,
                message: 'Please enter a promo code',
            }
        }

        // TECH10
        if (cleanCode === 'TECH10') {
            const applied = {
                code: 'TECH10',
                type: 'percent',
                value: 10,
                label: '10% Discount',
            }

            setCoupon(applied)

            showToast(
                'Applied coupon TECH10 (10% OFF)!',
                'success'
            )

            return {
                success: true,
                message: 'Coupon applied successfully!',
            }
        }

        // WELCOME500
        if (cleanCode === 'WELCOME500') {
            const applied = {
                code: 'WELCOME500',
                type: 'flat',
                value: 500,
                label: '₹500 Discount',
            }

            setCoupon(applied)

            showToast(
                'Applied coupon WELCOME500 (₹500 OFF)!',
                'success'
            )

            return {
                success: true,
                message: 'Coupon applied successfully!',
            }
        }

        // SMART20
        if (cleanCode === 'SMART20') {
            const applied = {
                code: 'SMART20',
                type: 'percent',
                value: 20,
                label: '20% Discount',
            }

            setCoupon(applied)

            showToast(
                'Applied coupon SMART20 (20% OFF)!',
                'success'
            )

            return {
                success: true,
                message: 'Coupon applied successfully!',
            }
        }

        // INVALID
        showToast(
            'Invalid promo code. Try TECH10, WELCOME500 or SMART20',
            'error'
        )

        return {
            success: false,
            message: 'Invalid coupon code',
        }
    }

    // ===============================
    // REMOVE COUPON
    // ===============================
    const removeCoupon = () => {
        setCoupon(null)

        showToast(
            'Promo code removed',
            'info'
        )
    }

    // ===============================
    // CART COUNT
    // ===============================
    const cartCount = cartItems.reduce(
        (total, item) =>
            total + (Number(item.quantity) || 0),
        0
    )

    // ===============================
    // SUBTOTAL
    // ===============================
    const subtotal = cartItems.reduce(
        (total, item) => {
            const price = Number(item.price) || 0
            const quantity =
                Number(item.quantity) || 0

            return total + price * quantity
        },
        0
    )

    // ===============================
    // DISCOUNT
    // ===============================
    let discountAmount = 0

    if (coupon) {
        if (coupon.type === 'percent') {
            discountAmount = Math.round(
                (subtotal * coupon.value) / 100
            )
        }

        if (coupon.type === 'flat') {
            discountAmount = Math.min(
                coupon.value,
                subtotal
            )
        }
    }

    // ===============================
    // DELIVERY
    // ===============================
    const deliveryFee = 0

    // ===============================
    // TOTAL
    // ===============================
    const cartTotal = Math.max(
        0,
        subtotal - discountAmount + deliveryFee
    )

    // ===============================
    // CONTEXT VALUE
    // ===============================
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

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
