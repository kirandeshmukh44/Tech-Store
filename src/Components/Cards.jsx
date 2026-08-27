import React from 'react'

const Cards = ({ image, heading, desc, price }) => {
  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">

      {/* ================= IMAGE ================= */}
      <figure className="relative h-56 overflow-hidden bg-base-200 p-6">

        {/* New Badge */}
        <div className="absolute left-4 top-4 z-10">
          <span className="badge badge-primary font-semibold">
            New
          </span>
        </div>

        {/* Image */}
        <img
          src={image}
          alt={heading}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

      </figure>


      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-5">

        {/* Product Name */}
        <h2 className="text-xl font-bold tracking-tight">
          {heading}
        </h2>


        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">

          <div className="flex text-sm text-orange-400">
            ★★★★★
          </div>

          <span className="text-xs text-base-content/50">
            4.8
          </span>

        </div>


        {/* Description */}
        <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-relaxed text-base-content/60">
          {desc}
        </p>


        {/* ================= PRICE ================= */}
        <div className="mt-auto pt-5">

          <div className="mb-4 flex items-center justify-between">

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-base-content/40">
                Price
              </p>

              <p className="mt-1 text-2xl font-black text-primary">
                ₹{Number(price).toLocaleString('en-IN')}
              </p>
            </div>

          </div>


          {/* Button */}
          <button className="btn btn-primary w-full rounded-xl">
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default Cards