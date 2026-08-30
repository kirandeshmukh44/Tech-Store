import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import {
  ShoppingCart,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Tag,
  CheckCircle2,
  X,
} from 'lucide-react'

const Cart = () => {
  const navigate = useNavigate()
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
    subtotal,
    discountAmount,
    coupon,
    applyCoupon,
    removeCoupon,
    cartTotal,
  } = useCart()

  const [couponInput, setCouponInput] = useState('')

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (couponInput.trim()) {
      applyCoupon(couponInput)
      setCouponInput('')
    }
  }

  // ================= EMPTY CART =================
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[85vh] bg-base-200 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-base-300 bg-base-100 p-8 sm:p-12 text-center shadow-xl">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner">
            <ShoppingCart className="h-12 w-12" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">
            YOUR CART
          </p>

          <h2 className="mt-2 text-3xl font-black">Your Cart is Empty</h2>

          <p className="mt-3 text-sm leading-relaxed text-base-content/60 max-w-sm mx-auto">
            Explore our curated selection of high-spec laptops, smartphones, and intelligent gadgets.
          </p>

          <button
            onClick={() => navigate('/products')}
            className="btn btn-primary btn-lg rounded-2xl mt-8 px-8 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition"
          >
            Start Shopping →
          </button>
        </div>
      </div>
    )
  }

  // ================= CART ITEMS PAGE =================
  return (
    <div className="min-h-screen bg-base-200 py-10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-base-300 pb-6 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Checkout Bag
            </p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-black">
              Shopping Cart
            </h1>
          </div>

          <span className="badge badge-primary badge-lg font-bold px-4 py-3">
            {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* ================= ITEMS LIST ================= */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-5 rounded-3xl border border-base-300 bg-base-100 p-5 sm:p-6 shadow-sm transition hover:shadow-md"
              >
                {/* Image */}
                <div className="flex h-28 w-28 sm:h-32 sm:w-32 shrink-0 items-center justify-center rounded-2xl bg-base-200/70 p-4">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between w-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-black text-base-content mt-0.5">
                        {item.heading}
                      </h3>
                      <p className="text-xs text-base-content/50 line-clamp-1 mt-1">
                        {item.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-ghost btn-circle btn-sm text-base-content/40 hover:text-rose-500 hover:bg-rose-500/10"
                      title="Remove from Cart"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-base-300/60">
                    <div className="join border border-base-300 rounded-xl overflow-hidden">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="btn btn-xs sm:btn-sm join-item btn-ghost"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="flex h-7 sm:h-8 w-9 sm:w-10 items-center justify-center bg-base-200 text-xs sm:text-sm font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="btn btn-xs sm:btn-sm join-item btn-ghost"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-base-content/40 block">
                        ₹{Number(item.price).toLocaleString('en-IN')} each
                      </span>
                      <span className="text-lg sm:text-xl font-black text-primary">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-3">
              <Link
                to="/products"
                className="btn btn-ghost font-bold text-sm text-primary"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* ================= ORDER SUMMARY & COUPON ================= */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Summary
                </p>
                <h3 className="mt-1 text-2xl font-black">Order Total</h3>
              </div>

              {/* COUPON SECTION */}
              <div className="rounded-2xl bg-base-200/70 p-4">
                <p className="text-xs font-bold text-base-content/70 flex items-center gap-1.5 mb-2.5">
                  <Tag className="h-3.5 w-3.5 text-primary" />
                  <span>Promo / Discount Code</span>
                </p>

                {coupon ? (
                  <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs font-bold text-emerald-500">
                        {coupon.code} ({coupon.label})
                      </span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="btn btn-ghost btn-circle btn-xs text-base-content/50 hover:text-rose-500"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Try: TECH10"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="input input-bordered input-sm w-full rounded-xl uppercase font-bold"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm rounded-xl font-bold px-4"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* BREAKDOWN */}
              <div className="space-y-3 text-sm border-t border-b border-base-300 py-4">
                <div className="flex justify-between text-base-content/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-base-content">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-500 font-semibold">
                    <span>Discount ({coupon?.code})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-base-content/70">
                  <span>Express Shipping</span>
                  <span className="font-bold text-emerald-500">FREE</span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-base-content/60">
                    Grand Total
                  </span>
                  <p className="text-[11px] text-base-content/40">Includes all taxes</p>
                </div>
                <span className="text-3xl font-black text-primary">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={() => navigate('/checkout')}
                className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-base-content/50 pt-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>256-Bit SSL Encrypted & Verified Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
