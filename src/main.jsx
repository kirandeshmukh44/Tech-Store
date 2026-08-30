import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import Layout from './Layout.jsx'

import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Welcome from './Pages/Welcome.jsx'

import Cart from './Pages/Cart.jsx'
import Checkout from './Pages/Checkout.jsx'
import OrderSuccess from './Pages/OrderSuccess.jsx'
import MyOrders from './Pages/MyOrders.jsx'

import { ThemeProvider } from './Context/ThemeContext'
import { AuthProvider } from './Context/AuthContext'
import { WishlistProvider } from './Context/WishlistContext'
import { CartProvider } from './Context/CartContext'
import Toast from './Components/Toast'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* ================= WELCOME ================= */}
                <Route
                    path="/"
                    element={<Welcome />}
                />

                {/* ================= AUTHENTICATION ================= */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* ================= MAIN WEBSITE WITH LAYOUT ================= */}
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        path="home"
                        element={<Home />}
                    />

                    <Route
                        path="products"
                        element={<Products />}
                    />

                    <Route
                        path="about"
                        element={<About />}
                    />

                    <Route
                        path="contact"
                        element={<Contact />}
                    />

                    <Route
                        path="cart"
                        element={<Cart />}
                    />

                    <Route
                        path="checkout"
                        element={<Checkout />}
                    />

                    <Route
                        path="my-orders"
                        element={<MyOrders />}
                    />
                </Route>

                {/* ================= ORDER SUCCESS ================= */}
                <Route
                    path="/order-success"
                    element={<OrderSuccess />}
                />
            </Routes>
        </BrowserRouter>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <WishlistProvider>
                    <CartProvider>
                        <AppRouter />
                        <Toast />
                    </CartProvider>
                </WishlistProvider>
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>
)
