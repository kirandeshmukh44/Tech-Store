import React from 'react'

const Cards = ({ image, heading, desc, price }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-200">

      {/* Product Image */}
      <figure className="h-56 bg-gray-100 p-5">
        <img
          src={image}
          alt={heading}
          className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body">

        {/* Title + Badge */}
        <div className="flex justify-between items-center gap-2">
          <h2 className="card-title text-xl">
            {heading}
          </h2>

          <div className="badge badge-primary">
            New
          </div>
        </div>

        {/* Rating */}
        <div className="rating rating-sm my-1">
          <input
            type="radio"
            name={`rating-${heading}`}
            className="mask mask-star-2 bg-orange-400"
          />

          <input
            type="radio"
            name={`rating-${heading}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />

          <input
            type="radio"
            name={`rating-${heading}`}
            className="mask mask-star-2 bg-orange-400"
          />

          <input
            type="radio"
            name={`rating-${heading}`}
            className="mask mask-star-2 bg-orange-400"
          />

          <input
            type="radio"
            name={`rating-${heading}`}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2">
          {desc}
        </p>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-4">

          <span className="text-2xl font-bold text-primary">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>

          <button className="btn btn-primary btn-sm">
            Buy Now
          </button>

        </div>

      </div>
    </div>
  )
}

export default Cards
