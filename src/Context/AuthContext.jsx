import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('techstore_orders')
      return savedOrders ? JSON.parse(savedOrders) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    try {
      localStorage.setItem('techstore_orders', JSON.stringify(orders))
    } catch (e) {
      console.error('Failed to save orders to localStorage', e)
    }
  }, [orders])

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (email, password, displayName = '') => {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    if (displayName && res.user) {
      await updateProfile(res.user, {
        displayName,
      })
    }

    return res
  }

  const logout = () => {
    return signOut(auth)
  }

  const addOrder = (order) => {
    const newOrder = {
      id:
        order.id ||
        `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,

      createdAt: new Date().toISOString(),

      items: order.items || [],
      total: order.total || 0,
      discount: order.discount || 0,
      subtotal: order.subtotal || 0,
      deliveryFee: order.deliveryFee || 0,

      shippingAddress: order.shippingAddress || {},

      paymentMethod:
        order.paymentMethod || 'Cash on Delivery',

      status: 'Processing',

      userEmail:
        currentUser?.email ||
        order.shippingAddress?.email ||
        'Guest',
    }

    setOrders((prev) => [newOrder, ...prev])

    return newOrder
  }

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
    orders,
    addOrder,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
