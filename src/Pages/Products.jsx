import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards'
import products from '../Props/Carddata'
import { SlidersHorizontal, ArrowUpDown, RotateCcw, Sparkles } from 'lucide-react'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(categoryParam)
  const [sortBy, setSortBy] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(65000)

  // Sync category state with URL query param if it changes
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam)
    }
  }, [categoryParam])

  const handleCategoryChange = (newCat) => {
    setCategory(newCat)
    if (newCat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', newCat)
    }
    setSearchParams(searchParams)
  }

  // Generate categories with counts
  const categoriesList = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ]

  // Filter products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.heading.toLowerCase().includes(search.toLowerCase()) ||
        product.desc.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'All' || product.category === category

      const matchesPrice = Number(product.price) <= maxPrice

      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name-asc') return a.heading.localeCompare(b.heading)
      if (sortBy === 'name-desc') return b.heading.localeCompare(a.heading)
      return a.id - b.id
    })

  const resetAllFilters = () => {
    setSearch('')
    setCategory('All')
    setSortBy('featured')
    setMaxPrice(65000)
    searchParams.delete('category')
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      {/* ================= HEADER HERO ================= */}
      <section className="bg-base-100 border-b border-base-300 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OFFICIAL TECHSTORE CATALOG</span>
          </div>

          <h1 className="text-3xl font-black sm:text-5xl tracking-tight">
            Explore All <span className="text-gradient">Products</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-base-content/60">
            Browse genuine smartphones, laptops, smart accessories, and cutting-edge devices with instant dispatch.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
        </div>
      </section>

      {/* ================= CONTROLS & FILTERS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {categoriesList.map((cat) => {
            const count =
              cat === 'All'
                ? products.length
                : products.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  category === cat
                    ? 'bg-primary text-primary-content shadow-md shadow-primary/25 scale-105'
                    : 'border border-base-300 bg-base-100 text-base-content hover:border-primary/50'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                    category === cat
                      ? 'bg-black/20 text-white'
                      : 'bg-base-200 text-base-content/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Filter bar & Sorting */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm mb-8">
          {/* Price Filter */}
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <SlidersHorizontal className="h-4 w-4 text-primary shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-base-content/60">Max Budget:</span>
                <span className="text-primary">
                  ₹{Number(maxPrice).toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="65000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="range range-primary range-xs"
              />
            </div>
          </div>

          {/* Right Side: Sort and Count */}
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <p className="text-xs font-semibold text-base-content/60">
              Showing <span className="font-bold text-base-content">{filteredProducts.length}</span> results
            </p>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-base-content/40" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered select-sm rounded-xl font-semibold bg-base-100"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-base-300 bg-base-100 p-12 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-base-200 text-3xl">
              🔍
            </div>
            <h3 className="mt-5 text-2xl font-black">No Products Match Your Criteria</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-base-content/60">
              Try adjusting your price slider, clearing the search query, or selecting another category.
            </p>
            <button
              onClick={resetAllFilters}
              className="btn btn-primary rounded-xl mt-6 font-bold flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="h-4 w-4" />
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Products
