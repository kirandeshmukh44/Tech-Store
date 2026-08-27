import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {

  const categories = [
    {
      icon: '📱',
      name: 'Smartphones',
      description: 'Latest smartphones and accessories'
    },
    {
      icon: '💻',
      name: 'Laptops',
      description: 'Powerful laptops for everyone'
    },
    {
      icon: '🎧',
      name: 'Headphones',
      description: 'Enjoy premium sound quality'
    },
    {
      icon: '🎮',
      name: 'Gaming',
      description: 'Level up your gaming setup'
    }
  ]

  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep.'
    },
    {
      icon: '🔒',
      title: 'Secure Shopping',
      description: 'Your personal information is safe with us.'
    },
    {
      icon: '⭐',
      title: 'Quality Products',
      description: 'We offer reliable and quality technology products.'
    },
    {
      icon: '💬',
      title: 'Customer Support',
      description: 'Our team is always ready to help you.'
    }
  ]

  return (
    <div className="min-h-screen bg-base-200">

      <Navbar />

      {/* Hero Section */}
      <section className="bg-base-100">

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>

              <div className="badge badge-primary badge-lg mb-5">
                Welcome to TechStore
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Upgrade Your
                <span className="text-primary"> Tech Life</span>
              </h1>

              <p className="text-lg text-base-content/60 mt-6 max-w-xl leading-relaxed">
                Discover the latest smartphones, laptops, headphones,
                gaming accessories and more. Everything you need for
                your digital lifestyle in one place.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="btn btn-primary btn-lg">
                  Explore Products
                </button>

                <button className="btn btn-outline btn-lg">
                  Learn More
                </button>

              </div>

            </div>

            {/* Image */}
            <div className="relative">

              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

              <img
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1000"
                alt="Technology Products"
                className="relative w-full rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <p className="text-primary font-semibold">
            EXPLORE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Shop By Category
          </h2>

          <p className="text-base-content/60 mt-3">
            Explore our popular technology categories.
          </p>

        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category) => (

            <div
              key={category.name}
              className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="card-body items-center text-center">

                <div className="text-5xl mb-3">
                  {category.icon}
                </div>

                <h3 className="font-bold text-lg">
                  {category.name}
                </h3>

                <p className="text-sm text-base-content/60">
                  {category.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="bg-base-100">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-12">

            <p className="text-primary font-semibold">
              WHY TECHSTORE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Why Choose Us?
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature) => (

              <div
                key={feature.title}
                className="card bg-base-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="card-body items-center text-center">

                  <div className="text-4xl">
                    {feature.icon}
                  </div>

                  <h3 className="font-bold text-lg">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-base-content/60">
                    {feature.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-primary text-primary-content">

        <div className="max-w-4xl mx-auto text-center px-6 py-20">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Upgrade Your Tech?
          </h2>

          <p className="mt-4 opacity-80">
            Discover amazing technology products at TechStore.
          </p>

          <button className="btn btn-neutral mt-8">
            Shop Now
          </button>

        </div>

      </section>


      <Footer />

    </div>
  )
}

export default Home