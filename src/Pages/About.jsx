import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {

  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description:
        'Our mission is to make modern technology simple, accessible and convenient for everyone.'
    },
    {
      icon: '💡',
      title: 'Our Vision',
      description:
        'We want to create a trusted online destination for technology products and accessories.'
    },
    {
      icon: '🤝',
      title: 'Our Promise',
      description:
        'We focus on quality products, simple shopping and a great customer experience.'
    }
  ]


  return (
    <div className="min-h-screen bg-base-200">

      <Navbar />


      {/* Header */}
      <section className="bg-base-100 py-16">

        <div className="text-center px-6">

          <p className="text-primary font-semibold">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            About <span className="text-primary">TechStore</span>
          </h1>

          <p className="text-base-content/60 mt-3 max-w-2xl mx-auto">
            Your destination for modern technology and digital products.
          </p>

        </div>

      </section>


      {/* Main About */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Technology"
              className="w-full rounded-3xl shadow-xl"
            />

          </div>


          {/* Content */}
          <div>

            <p className="text-primary font-semibold">
              WHO WE ARE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technology Made Simple
            </h2>

            <p className="mt-6 text-base-content/70 leading-relaxed">
              TechStore is a modern e-commerce platform created
              for technology lovers. We provide a wide range of
              products including smartphones, laptops, headphones,
              gaming accessories and more.
            </p>

            <p className="mt-4 text-base-content/70 leading-relaxed">
              Our goal is to make technology shopping simple,
              convenient and enjoyable for everyone.
            </p>

          </div>

        </div>


        {/* Values */}
        <div className="mt-24">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold">
              What We Believe
            </h2>

            <p className="text-base-content/60 mt-3">
              The values behind TechStore.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {values.map((value) => (

              <div
                key={value.title}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
              >

                <div className="card-body text-center items-center">

                  <div className="text-5xl">
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="text-base-content/60">
                    {value.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full mt-20">

          <div className="stat text-center">

            <div className="stat-title">
              Products
            </div>

            <div className="stat-value text-primary">
              500+
            </div>

            <div className="stat-desc">
              Technology products
            </div>

          </div>


          <div className="stat text-center">

            <div className="stat-title">
              Customers
            </div>

            <div className="stat-value text-primary">
              50K+
            </div>

            <div className="stat-desc">
              Happy customers
            </div>

          </div>


          <div className="stat text-center">

            <div className="stat-title">
              Rating
            </div>

            <div className="stat-value text-primary">
              4.8
            </div>

            <div className="stat-desc">
              Customer satisfaction
            </div>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  )
}

export default About