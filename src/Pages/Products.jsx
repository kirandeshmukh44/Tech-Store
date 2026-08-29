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
      category === 'All' ||
      product.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-base-200">

      {/* ================= HERO ================= */}
      <section className="bg-base-100">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:py-20">

          <p className="font-semibold tracking-widest text-primary">
            TECHSTORE COLLECTION
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Our{' '}
            <span className="text-primary">
              Products
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-base-content/60 md:text-lg">
            Discover the latest technology products,
            gadgets and accessories for your digital lifestyle.
          </p>
        </div>
      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        {/* Search */}
        <div className="mx-auto max-w-2xl">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>


        {/* ================= CATEGORY ================= */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                category === item
                  ? 'bg-primary text-primary-content shadow-md'
                  : 'border border-base-300 bg-base-100 hover:border-primary hover:text-primary'
              }`}
            >
              {item}
            </button>
          ))}
        </div>


        {/* ================= HEADER ================= */}
        <div className="mt-12 flex flex-col gap-2 border-b border-base-300 pb-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Explore
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Featured Products
            </h2>
          </div>

          <p className="text-sm text-base-content/60">
            Showing{' '}

            <span className="font-bold text-base-content">
              {filteredProducts.length}
            </span>
            {' '}products
          </p>
        </div>


        {/* ================= CARDS ================= */}

        {filteredProducts.length > 0 ? (

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="w-full"
              >

                <Cards
                  image={product.image}
                  heading={product.heading}
                  desc={product.desc}
                  price={product.price}
                  category={product.category}
                />
              </div>
            ))}

          </div>

        ) : (

          /* ================= NO PRODUCTS ================= */

          <div className="mt-10 rounded-3xl border border-base-300 bg-base-100 px-6 py-20 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-base-200 text-4xl">
              🔍
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No Products Found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-base-content/60">
              We couldn't find any products matching your search.
              Try another keyword or category.
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


      {/* ================= CTA ================= */}

      <section className="bg-primary text-primary-content">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="text-4xl">
          </div>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Upgrade Your Tech
          </h2>

          <p className="mx-auto mt-3 max-w-xl opacity-80">
            Discover reliable and modern technology products
            at TechStore.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Products