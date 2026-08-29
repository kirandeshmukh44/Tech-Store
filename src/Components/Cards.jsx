import React from 'react'
import { useCart } from '../Context/CartContext'

const Cards = ({ product }) => {

  const { addToCart, cartItems } = useCart()

  const isInCart = cartItems.some(
    (item) => item.id === product.id
  )

  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}

      <figure className="relative h-60 overflow-hidden bg-base-200 p-6">

        {/* New Badge */}
        <div className="absolute left-4 top-4 z-10">
          <span className="badge badge-primary font-semibold shadow-sm">
            New
          </span>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.heading}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
        />

      </figure>


      {/* ================= CONTENT ================= */}

      <div className="flex flex-1 flex-col p-5">

        {/* Category */}

        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          {product.category}
        </p>


        {/* Product Name */}

        <h2 className="mt-2 text-xl font-black tracking-tight">
          {product.heading}
        </h2>


        {/* Rating */}

        <div className="mt-2 flex items-center gap-2">

          <div className="text-sm text-orange-400">
            ★★★★★
          </div>

          <span className="text-xs text-base-content/50">
            4.8
          </span>

        </div>


        {/* Description */}

        <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-relaxed text-base-content/60">
          {product.desc}
        </p>


        {/* ================= PRICE ================= */}

        <div className="mt-auto pt-5">

          <div className="mb-4">

            <p className="text-xs font-medium uppercase tracking-wider text-base-content/40">
              Price
            </p>

            <p className="mt-1 text-2xl font-black text-primary">
              ₹{Number(product.price).toLocaleString('en-IN')}
            </p>

          </div>


          {/* ================= ADD TO CART ================= */}

          <button
            onClick={() => addToCart(product)}
            className={`btn w-full rounded-xl transition-all duration-300 ${
              isInCart
                ? 'btn-success'
                : 'btn-primary shadow-lg shadow-primary/20'
            }`}
          >

            {isInCart ? (
              <>
                ✓ Added to Cart
              </>
            ) : (
              <>
                🛒 Add to Cart
              </>
            )}

          </button>

        </div>

      </div>

    </div>
  )
}

export default Cards
