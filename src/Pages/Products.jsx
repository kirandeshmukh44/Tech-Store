import { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards'
import products from '../Props/Carddata'

const Products = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.heading
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || product.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <p className="font-semibold tracking-widest text-primary">
            TECHSTORE COLLECTION
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Our <span className="text-primary">Products</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-base-content/60">
            Explore our collection of the latest technology
            products, gadgets and accessories.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Search */}
        <div className="mx-auto mb-8 max-w-2xl">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">

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

        {/* Result Info */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">

          <div>
            <h2 className="text-2xl font-bold">
              Explore Products
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              Find the perfect technology for you.
            </p>
          </div>

          <div className="badge badge-primary badge-lg">
            {filteredProducts.length} Products
          </div>

        </div>

        {/* Product Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <Cards
                key={product.id}
                image={product.image}
                heading={product.heading}
                desc={product.desc}
                price={product.price}
                category={product.category}
              />
            ))}

          </div>
        ) : (
          <div className="rounded-2xl border border-base-300 bg-base-100 px-6 py-20 text-center shadow-sm">

            <div className="text-6xl">
              🔍
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              No Products Found
            </h2>

            <p className="mt-2 text-base-content/60">
              Try another search or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch('')
                setCategory('All')
              }}
              className="btn btn-primary mt-6"
            >
              Clear Filters
            </button>

          </div>
        )}

      </section>

    </div>
  )
}

export default Products