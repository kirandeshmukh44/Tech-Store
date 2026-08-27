import React, { useState } from 'react'

import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

import products from '../Props/Carddata'

const Products = () => {

  const [search, setSearch] = useState('')

  const [category, setCategory] = useState('All')


  // Get unique categories
  const categories = [
    'All',
    ...new Set(products.map((product) => product.category))
  ]


  // Search + Category Filter
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.heading
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' ||
      product.category === category

    return matchesSearch && matchesCategory
  })


  return (
    <div className="min-h-screen bg-base-200">

      <Navbar />


      {/* Header */}
      <section className="bg-base-100 py-16">

        <div className="text-center px-6">

          <p className="text-primary font-semibold">
            TECHSTORE COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Our <span className="text-primary">Products</span>
          </h1>

          <p className="text-base-content/60 mt-3">
            Explore the latest technology products.
          </p>

        </div>

      </section>


      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />


        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`btn btn-sm ${
                category === item
                  ? 'btn-primary'
                  : 'btn-outline'
              }`}
            >
              {item}
            </button>

          ))}

        </div>


        {/* Product Count */}
        <div className="mb-6">

          <p className="text-sm text-base-content/60">
            Showing {filteredProducts.length} products
          </p>

        </div>


        {/* Cards */}
        {filteredProducts.length > 0 ? (

          <div className="flex flex-wrap gap-8 justify-center">

            {filteredProducts.map((product) => (

              <Cards
                key={product.id}
                image={product.image}
                heading={product.heading}
                desc={product.desc}
                price={product.price}
              />

            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <div className="text-6xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold">
              No Products Found
            </h2>

            <p className="text-base-content/60 mt-2">
              Try another search or category.
            </p>

          </div>

        )}

      </section>


      <Footer />

    </div>
  )
}

export default Products