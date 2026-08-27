import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import products from './Props/Carddata'

const App = () => {

  const [search, setSearch] = useState('')

  const cardSearch = products.filter((product) =>
    product.heading.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-base-200">

      <Navbar />

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Tech <span className="text-primary">Store</span>
        </h1>

        <p className="text-gray-500 mt-2">
          Explore the latest technology products
        </p>
      </div>

      {/* Search Component */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Products */}
      <div className="flex flex-wrap gap-8 justify-center px-6 pb-12">

        {cardSearch.map((product) => (
          <Cards
            key={product.id}
            image={product.image}
            heading={product.heading}
            desc={product.desc}
            price={product.price}
          />
        ))}

      </div>

      <Footer />

    </div>
  )
}

export default App
