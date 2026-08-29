import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

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
                            quantity: item.quantity + 1
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

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        )
    }

    const increaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        )
    }

    const decreaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId && item.quantity > 1
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            )
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )

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
        clearCart,
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
