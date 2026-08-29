import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])


    // ================= ADD TO CART =================

    const addToCart = (product) => {

        setCartItems((currentItems) => {

            const existingProduct = currentItems.find(
                (item) => item.id === product.id
            )

            if (existingProduct) {

                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                )
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: 1,
                },
            ]
        })
    }


    // ================= REMOVE FROM CART =================

    const removeFromCart = (productId) => {

        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== productId
            )
        )
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
    }


    // ================= CART COUNT =================

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )


    // ================= CART TOTAL =================

    const cartTotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    )


    // ================= CONTEXT VALUE =================

    const value = {

        cartItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

        cartCount,

        cartTotal,

    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


// ================= CUSTOM HOOK =================

export const useCart = () => {
    return useContext(CartContext)
}
