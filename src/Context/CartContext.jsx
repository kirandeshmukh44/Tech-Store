import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    // Add product to cart
    const addToCart = (product) => {

        setCartItems((currentItems) => {

            const existingProduct = currentItems.find(
                (item) => item.id === product.id
            )

            // If product already exists
            if (existingProduct) {

                return currentItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            // If product is new
            return [
                ...currentItems,
                {
                    ...product,
                    quantity: 1,
                },
            ]
        })
    }


    // Remove product completely
    const removeFromCart = (productId) => {

        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        )
    }


    // Increase quantity
    const increaseQuantity = (productId) => {

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }


    // Decrease quantity
    const decreaseQuantity = (productId) => {

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        )
    }


    // Total quantity
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )


    // Total price
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )


    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


// Custom hook
export const useCart = () => {
    return useContext(CartContext)
}
