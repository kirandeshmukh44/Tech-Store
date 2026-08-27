import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center px-6 mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xl"
      />
    </div>
  )
}

export default SearchBar
