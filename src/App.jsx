import React from 'react'
import Cards from './Components/Cards'
import products from './Props/Carddata'

const App = () => {
  return (
    <div className="min-h-screen bg-base-200">

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Tech <span className="text-primary">Store</span>
        </h1>

        <p className="text-gray-500 mt-2">
          Explore the latest technology products
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-8 justify-center px-6 pb-12">
        {products.map((product) => (
          <Cards
            key={product.id}
            image={product.image}
            heading={product.heading}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>

    </div>
  )
}

export default App
