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
import Cart from './Pages/Cart.jsx'

import Layout from './Layout.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Welcome from './Pages/Welcome.jsx'

import { CartProvider } from './Context/CartContext'


const AppRouter = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= WELCOME PAGE ================= */}

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

        <Route element={<Layout />}>

          {/* Home */}

          <Route
            path="/home"
            element={<Home />}
          />


          {/* Products */}

          <Route
            path="/products"
            element={<Products />}
          />


          {/* About */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* Contact */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* Cart */}

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Route>

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
