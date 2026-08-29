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

import { CartProvider } from './Context/CartContext'

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


                {/* ================= MAIN WEBSITE ================= */}

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

        <CartProvider>
            <AppRouter />
        </CartProvider>

    </StrictMode>

)
