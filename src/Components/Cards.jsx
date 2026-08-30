import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { useWishlist } from '../Context/WishlistContext'
import ProductModal from './ProductModal'
import { ShoppingCart, Heart, Eye, Check, Star } from 'lucide-react'

const Cards = ({ product }) => {
  const { addToCart, cartItems } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [modalOpen, setModalOpen] = useState(false)

  const isInCart = cartItems.some((item) => item.id === product.id)
  const isFavorite = isInWishlist(product.id)

  const originalPrice = Math.round(Number(product.price) * 1.25)
  const discountPercent = 20

  return (
    <>
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
        {/* ================= IMAGE & OVERLAYS ================= */}
        <div className="relative h-60 w-full overflow-hidden bg-base-200/50 p-6 flex items-center justify-center">
          {/* Discount Badge */}
          <div className="absolute left-3.5 top-3.5 z-10">
            <span className="badge badge-primary font-bold px-2.5 py-1 text-[11px] shadow-sm tracking-wide">
              {discountPercent}% OFF
            </span>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleWishlist(product)
            }}
            className={`absolute right-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition duration-200 ${
              isFavorite
                ? 'border-rose-500 bg-rose-500 text-white'
                : 'border-base-300 bg-base-100/90 text-base-content/60 hover:text-rose-500 hover:scale-110'
            }`}
            title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.heading}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Quick View Button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-sm btn-neutral rounded-xl shadow-lg flex items-center gap-1.5 font-bold"
            >
              <Eye className="h-4 w-4" />
              Quick View
            </button>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-1 flex-col p-5">
          {/* Category */}
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
              {product.category}
            </p>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>4.9</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => setModalOpen(true)}
            className="mt-2 text-lg font-black tracking-tight text-base-content hover:text-primary transition cursor-pointer"
          >
            {product.heading}
          </h3>

          {/* Description */}
          <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-relaxed text-base-content/60">
            {product.desc}
          </p>

          {/* ================= PRICING & ACTION ================= */}
          <div className="mt-auto pt-5 border-t border-base-300/60">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                  Special Price
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl font-black text-primary">
                    ₹{Number(product.price).toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-base-content/40 line-through">
                    ₹{Number(originalPrice).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Free Delivery
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className={`btn w-full rounded-xl transition-all duration-300 font-bold flex items-center justify-center gap-2 ${
                isInCart
                  ? 'btn-success text-success-content shadow-md shadow-success/20'
                  : 'btn-primary shadow-lg shadow-primary/20 hover:scale-[1.02]'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="h-4 w-4" />
                  In Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={product}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default Cards
