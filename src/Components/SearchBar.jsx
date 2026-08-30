import React from 'react'
import { Search, X } from 'lucide-react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-base-content/40 pointer-events-none" />
        <input
          type="text"
          placeholder="Search products, brands, tech accessories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full rounded-2xl pl-12 pr-10 bg-base-100 shadow-sm focus:border-primary focus:outline-none transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-base-content/50 hover:bg-base-300 hover:text-base-content transition"
            title="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
