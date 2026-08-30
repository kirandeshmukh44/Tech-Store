import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { useWishlist } from '../Context/WishlistContext'
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingCart,
  Zap,
  Heart,
} from 'lucide-react'

const ProductModal = ({ product, isOpen, onClose }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !product) return null

  const isFavorite = isInWishlist(product.id)
  const originalPrice = Math.round(product.price * 1.25)
  const discountPercent = 20

  const handleAddToCart = () => {
    addToCart(product, quantity)
    onClose()
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    onClose()
    navigate('/checkout')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-base-200/80 text-base-content/70 hover:bg-base-300 hover:text-base-content transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Left Column: Image */}
          <div className="relative flex flex-col items-center justify-center rounded-2xl bg-base-200/60 p-6">
            <div className="absolute top-4 left-4">
              <span className="badge badge-primary font-bold px-3 py-1 text-xs uppercase tracking-wider">
                {discountPercent}% OFF
              </span>
            </div>

            <img
              src={product.image}
              alt={product.heading}
              className="max-h-64 sm:max-h-72 w-full object-contain transition-transform duration-500 hover:scale-105"
            />

            <div className="mt-4 flex items-center gap-2 text-xs text-base-content/60">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>100% Genuine & Brand Certified</span>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category & Wishlist */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {product.category}
                </span>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                    isFavorite
                      ? 'border-rose-500 bg-rose-500/10 text-rose-500'
                      : 'border-base-300 bg-base-200 text-base-content/60 hover:text-rose-500'
                  }`}
                  title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Title */}
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                {product.heading}
              </h2>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold">4.9</span>
                <span className="text-xs text-base-content/50">(128 reviews)</span>
                <span className="badge badge-success badge-sm ml-2 text-[10px] font-bold">
                  In Stock
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-base-content/70">
                {product.desc}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-black text-primary">
                  ₹{Number(product.price).toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-base-content/40 line-through">
                  ₹{Number(originalPrice).toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-success">
                  Save ₹{Number(originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </div>

              {/* Perks */}
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-b border-base-300 py-3 text-xs text-base-content/70">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Free Express Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 text-primary" />
                  <span>7 Days Replacement</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              {/* Quantity */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Quantity:</span>
                <div className="join border border-base-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="btn btn-sm join-item btn-ghost"
                  >
                    −
                  </button>
                  <span className="flex h-8 w-10 items-center justify-center bg-base-200 text-sm font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="btn btn-sm join-item btn-ghost"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-outline btn-primary rounded-xl flex items-center justify-center gap-2 font-bold"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="btn btn-primary rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20"
                >
                  <Zap className="h-4 w-4" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

