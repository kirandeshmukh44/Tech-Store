import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Package,
  Truck,
  CheckCircle2,
  Home,
  ShoppingBag,
  MapPin,
  Calendar,
  Sparkles,
  Clock,
  ShieldCheck,
  CreditCard,
  Copy,
  Check,
  Printer,
  ArrowRight,
  Zap,
} from 'lucide-react'
import './OrderSuccess.css'

const OrderSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const [order] = useState(() => {
    // 1. Try React Router state
    if (location.state?.order) {
      return location.state.order
    }
    // 2. Try sessionStorage
    try {
      const sessionSaved = sessionStorage.getItem('last_order')
      if (sessionSaved) return JSON.parse(sessionSaved)
    } catch (e) {
      console.error(e)
    }
    // 3. Try localStorage
    try {
      const localSaved = localStorage.getItem('techstore_last_order')
      if (localSaved) return JSON.parse(localSaved)
    } catch (e) {
      console.error(e)
    }
    // 4. Fallback order structure
    return {
      id: `TS-${Date.now().toString().slice(-6)}`,
      items: [],
      total: 0,
      subtotal: 0,
      discount: 0,
      paymentMethod: 'Cash on Delivery',
      shippingAddress: {
        name: 'Valued Customer',
        city: 'Pune',
        state: 'Maharashtra',
        pincode: '411001',
      },
    }
  })

  // Estimated delivery date (2 days from now)
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 2)
  const formattedDelivery = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  const handleCopyOrderId = () => {
    if (order?.id) {
      navigator.clipboard.writeText(order.id)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="order-success-clean-page">
      {/* Background glowing gradients */}
      <div className="bg-glow bg-glow-primary" />
      <div className="bg-glow bg-glow-cyan" />

      <div className="order-success-content-wrapper">
        {/* ================= TOP HERO CELEBRATION ================= */}
        <div className="text-center celebration-hero">
          {/* Animated Success Badge */}
          <div className="success-badge-container">
            <div className="success-badge-outer-ring" />
            <div className="success-badge-inner">
              <CheckCircle2 className="h-14 w-14 text-emerald-400" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 mt-5">
            <Sparkles className="h-4 w-4" />
            <span>ORDER CONFIRMED & DISPATCHED</span>
          </div>

          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-white">
            Thank You For Your Order!
          </h1>

          <p className="mt-2 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
            We have received your order and our express fulfillment team is packing your genuine devices with warranty protection.
          </p>

          {/* Reference ID Pill */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-2 text-xs backdrop-blur-xl">
            <span className="text-white/50 font-semibold">Order ID:</span>
            <span className="font-mono font-bold text-primary text-sm">{order.id}</span>
            <button
              onClick={handleCopyOrderId}
              className="ml-1 p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition"
              title="Copy Order ID"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* ================= LIVE DELIVERY PROGRESS TRACKER ================= */}
        <div className="mt-10 delivery-tracker-card">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Live Dispatch Status
                </h3>
                <p className="text-xs text-white/50">Priority Express Corridor</p>
              </div>
            </div>

            <span className="badge badge-success badge-sm sm:badge-md font-bold flex items-center gap-1.5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>In Transit</span>
            </span>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="step-node active">
              <div className="step-icon-wrap">
                <Check className="h-4 w-4" />
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-white">1. Order Placed</p>
                <p className="text-[11px] text-white/50">Payment verified</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-node active">
              <div className="step-icon-wrap">
                <Package className="h-4 w-4" />
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-white">2. Quality Checked</p>
                <p className="text-[11px] text-white/50">Tamper-seal applied</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-node current">
              <div className="step-icon-wrap">
                <Truck className="h-4 w-4" />
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-primary">3. Express Transit</p>
                <p className="text-[11px] text-white/60">Heading to local hub</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="step-node">
              <div className="step-icon-wrap">
                <Home className="h-4 w-4" />
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-white/50">4. Doorstep Delivery</p>
                <p className="text-[11px] text-white/40">Est. {formattedDelivery}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ORDER DETAILS GRID ================= */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT: ORDERED ITEMS & WARRANTY */}
          <div className="space-y-6">
            {/* Items Card */}
            <div className="receipt-glass-card p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-black text-white">
                    Purchased Items ({order.items?.length || 0})
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                  <ShieldCheck className="h-4 w-4" />
                  <span>2-Year Warranty Included</span>
                </div>
              </div>

              {/* Items List */}
              {order.items && order.items.length > 0 ? (
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-3 border border-white/5 hover:border-white/15 transition"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 p-1.5">
                          <img
                            src={item.image}
                            alt={item.heading}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-white leading-snug">
                            {item.heading}
                          </h4>
                          <p className="text-xs text-white/50 mt-0.5">
                            Quantity: {item.quantity} × ₹
                            {Number(item.price).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-base font-black text-primary">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-white/50 text-sm">
                  Your order has been recorded into our logistics database.
                </div>
              )}
            </div>

            {/* Trust Assurance Card */}
            <div className="receipt-glass-card p-6 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">100% Genuine</h4>
                  <p className="text-[11px] text-white/50">Brand certified hardware</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Express Dispatch</h4>
                  <p className="text-[11px] text-white/50">24-48h Delivery Window</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">7-Day Return</h4>
                  <p className="text-[11px] text-white/50">Hassle-free replacement</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY & ACTIONS */}
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="receipt-glass-card p-6 space-y-4">
              <h3 className="text-lg font-black text-white border-b border-white/10 pb-3">
                Delivery & Payment
              </h3>

              {/* Delivery info */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 text-white/70">
                  <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase font-bold">
                      Expected Arrival
                    </span>
                    <span className="font-bold text-white text-sm">
                      {formattedDelivery} (Express Delivery)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase font-bold">
                      Delivery Address
                    </span>
                    <span className="font-semibold text-white block">
                      {order.shippingAddress?.name}
                    </span>
                    <span className="text-white/60">
                      {order.shippingAddress?.address ? `${order.shippingAddress.address}, ` : ''}
                      {order.shippingAddress?.city}, {order.shippingAddress?.state} - {order.shippingAddress?.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/70">
                  <CreditCard className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase font-bold">
                      Payment Mode
                    </span>
                    <span className="font-bold text-white">
                      {order.paymentMethod || 'Cash on Delivery'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/70">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase font-bold">
                      Order Status
                    </span>
                    <span className="font-bold text-emerald-400">
                      Confirmed & Dispatched
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="border-t border-b border-white/10 py-3 space-y-2 text-xs">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">
                    ₹{Number(order.subtotal || order.total || 0).toLocaleString('en-IN')}
                  </span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Discount</span>
                    <span>-₹{Number(order.discount).toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-white/70">
                  <span>Shipping Fee</span>
                  <span className="font-bold text-emerald-400">FREE</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-xs text-white/60">Total Paid</span>
                  <p className="text-[10px] text-white/40">Includes all taxes</p>
                </div>
                <span className="text-2xl font-black text-emerald-400">
                  ₹{Number(order.total || 0).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to="/my-orders"
                className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
              >
                <Package className="h-5 w-5" />
                <span>View in My Orders</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={handlePrint}
                className="btn btn-outline btn-md w-full rounded-2xl font-bold border-white/20 text-white hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Printer className="h-4 w-4" />
                <span>Print / Save Receipt</span>
              </button>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <Link
                  to="/products"
                  className="btn btn-ghost btn-sm rounded-xl text-xs font-bold text-white/70 hover:text-white"
                >
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  Shop More
                </Link>
                <Link
                  to="/home"
                  className="btn btn-ghost btn-sm rounded-xl text-xs font-bold text-white/70 hover:text-white"
                >
                  <Home className="h-4 w-4 mr-1" />
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
