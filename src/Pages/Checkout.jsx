import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { useAuth } from '../Context/AuthContext'
import {
  Truck,
  CreditCard,
  Banknote,
  QrCode,
  Lock,
  ArrowRight,
} from 'lucide-react'

const Checkout = () => {
  const navigate = useNavigate()
  const { cartItems, cartTotal, subtotal, discountAmount, coupon, clearCart } = useCart()
  const { currentUser, addOrder } = useAuth()

  const [formData, setFormData] = useState({
    name: currentUser?.displayName || '',
    email: currentUser?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [loading, setLoading] = useState(false)

  // Redirect to cart if empty
  useEffect(() => {
    if (cartItems.length === 0 && !loading) {
      navigate('/cart')
    }
  }, [cartItems, navigate, loading])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const orderPayload = {
      items: [...cartItems],
      subtotal,
      discount: discountAmount,
      total: cartTotal,
      couponCode: coupon?.code || null,
      shippingAddress: { ...formData },
      paymentMethod:
        paymentMethod === 'cod'
          ? 'Cash on Delivery'
          : paymentMethod === 'upi'
          ? 'Instant UPI'
          : 'Credit / Debit Card',
    }

    setTimeout(() => {
      const createdOrder = addOrder(orderPayload)
      // Save last placed order in session for receipt display
      try {
        sessionStorage.setItem('last_order', JSON.stringify(createdOrder))
      } catch (err) {
        console.error(err)
      }

      clearCart()
      setLoading(false)
      navigate('/order-success')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Instant Express Checkout
          </p>
          <h1 className="mt-1 text-3xl sm:text-4xl font-black">
            Secure Delivery & Payment
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-base-content/60">
            Please fill in your shipping details to receive your genuine TechStore package.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          {/* ================= LEFT FORM ================= */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Truck className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold">1. Shipping Information</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label text-xs font-bold">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="input input-bordered w-full rounded-xl bg-base-100 focus:border-primary text-sm"
                    />
                  </div>

                  <div>
                    <label className="label text-xs font-bold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="input input-bordered w-full rounded-xl bg-base-100 focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="label text-xs font-bold">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                    className="input input-bordered w-full rounded-xl bg-base-100 focus:border-primary text-sm"
                  />
                </div>

                <div className="mt-4">
                  <label className="label text-xs font-bold">Delivery Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House/Flat number, building, street area..."
                    required
                    rows="3"
                    className="textarea textarea-bordered w-full rounded-xl bg-base-100 focus:border-primary text-sm"
                  />
                </div>

                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-3">
                  <div>
                    <label className="label text-xs font-bold">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                      className="input input-bordered w-full rounded-xl bg-base-100 text-sm"
                    />
                  </div>

                  <div>
                    <label className="label text-xs font-bold">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      required
                      className="input input-bordered w-full rounded-xl bg-base-100 text-sm"
                    />
                  </div>

                  <div>
                    <label className="label text-xs font-bold">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="6 digits"
                      maxLength="6"
                      required
                      className="input input-bordered w-full rounded-xl bg-base-100 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* PAYMENT METHOD */}
              <div className="border-t border-base-300 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold">2. Payment Method</h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {/* COD */}
                  <label
                    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 cursor-pointer transition ${
                      paymentMethod === 'cod'
                        ? 'border-primary bg-primary/10 text-primary shadow-sm'
                        : 'border-base-300 bg-base-200/50 hover:bg-base-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="hidden"
                    />
                    <Banknote className="h-6 w-6" />
                    <span className="text-xs font-bold">Cash on Delivery</span>
                  </label>

                  {/* UPI */}
                  <label
                    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 cursor-pointer transition ${
                      paymentMethod === 'upi'
                        ? 'border-primary bg-primary/10 text-primary shadow-sm'
                        : 'border-base-300 bg-base-200/50 hover:bg-base-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="hidden"
                    />
                    <QrCode className="h-6 w-6" />
                    <span className="text-xs font-bold">Instant UPI / QR</span>
                  </label>

                  {/* Card */}
                  <label
                    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 cursor-pointer transition ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary/10 text-primary shadow-sm'
                        : 'border-base-300 bg-base-200/50 hover:bg-base-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="hidden"
                    />
                    <CreditCard className="h-6 w-6" />
                    <span className="text-xs font-bold">Debit / Credit Card</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.01] transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner" />
                    <span>Securing Order...</span>
                  </>
                ) : (
                  <>
                    <span>Place Order (₹{cartTotal.toLocaleString('en-IN')})</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ================= ORDER SUMMARY ================= */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    Order Overview
                  </p>
                  <h3 className="text-xl font-black">Your Items</h3>
                </div>
                <span className="badge badge-neutral font-bold">
                  {cartItems.length} items
                </span>
              </div>

              {/* Items */}
              <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-2xl bg-base-200/60 p-2.5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-100 p-1">
                      <img
                        src={item.image}
                        alt={item.heading}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold truncate">{item.heading}</h4>
                      <p className="text-[10px] text-base-content/50">
                        Qty: {item.quantity} × ₹{Number(item.price).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <span className="text-xs font-black text-primary">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cost breakdown */}
              <div className="space-y-2 border-t border-b border-base-300 py-4 text-xs">
                <div className="flex justify-between text-base-content/70">
                  <span>Subtotal</span>
                  <span className="font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-500 font-bold">
                    <span>Discount ({coupon?.code})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-base-content/70">
                  <span>Delivery</span>
                  <span className="font-bold text-emerald-500">FREE</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Total Payable</span>
                <span className="text-2xl font-black text-primary">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-base-200 p-3 text-[11px] text-base-content/60">
                <Lock className="h-4 w-4 text-primary shrink-0" />
                <span>Zero spam, end-to-end encrypted order processing.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout