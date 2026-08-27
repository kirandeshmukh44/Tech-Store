import React from 'react'

const Home = () => {
  const categories = [
    {
      icon: '📱',
      name: 'Smartphones',
      description: 'Latest smartphones and accessories',
    },
    {
      icon: '💻',
      name: 'Laptops',
      description: 'Powerful laptops for work & play',
    },
    {
      icon: '🎧',
      name: 'Headphones',
      description: 'Immersive sound for every moment',
    },
    {
      icon: '🎮',
      name: 'Gaming',
      description: 'Level up your gaming experience',
    },
  ]

  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep.',
    },
    {
      icon: '🔒',
      title: 'Secure Shopping',
      description: 'Your personal information is always protected.',
    },
    {
      icon: '⭐',
      title: 'Quality Products',
      description: 'Reliable technology from trusted brands.',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Our team is always ready to help you.',
    },
  ]

  return (
    <div className="min-h-screen bg-base-200">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-base-100">
        
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Hero Content */}
            <div>

              <div className="badge badge-primary badge-lg mb-6 px-4 py-4 font-semibold">
                🚀 Welcome to TechStore
              </div>

              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Upgrade Your
                <span className="block text-primary">
                  Tech Life.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-base-content/60">
                Discover the latest smartphones, laptops, headphones,
                gaming accessories and more — everything you need for
                your digital lifestyle in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="btn btn-primary btn-lg shadow-lg shadow-primary/20">
                  Explore Products →
                </button>

                <button className="btn btn-outline btn-lg">
                  Learn More
                </button>

              </div>

              {/* Small Stats */}
              <div className="mt-10 flex flex-wrap gap-8">

                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-base-content/50">
                    Happy Customers
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-base-content/50">
                    Products
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">4.9 ⭐</p>
                  <p className="text-sm text-base-content/50">
                    Customer Rating
                  </p>
                </div>

              </div>

            </div>


            {/* Hero Image */}
            <div className="relative">

              <div className="absolute inset-8 rounded-[3rem] bg-primary/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 p-3 shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200"
                  alt="Technology Products"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-12 text-center">

          <p className="font-semibold tracking-wider text-primary">
            EXPLORE
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Shop By Category
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Find everything you need to build your perfect tech setup.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          {categories.map((category) => (

            <div
              key={category.name}
              className="group cursor-pointer rounded-2xl border border-base-300 bg-base-100 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-5xl transition duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                {category.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-base-content/60">
                {category.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="bg-base-100">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-12 text-center">

            <p className="font-semibold tracking-wider text-primary">
              WHY TECHSTORE
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Why Choose Us?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-base-content/60">
              We make your technology shopping experience simple,
              secure and enjoyable.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (

              <div
                key={feature.title}
                className="group rounded-2xl border border-base-300 bg-base-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl transition group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-base-content/60">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-primary text-primary-content">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">

          <div className="mb-5 text-5xl">
            🚀
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            Ready to Upgrade Your Tech?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-primary-content/80">
            Discover amazing technology products and take your
            digital lifestyle to the next level.
          </p>

          <button className="btn btn-neutral mt-8 btn-lg px-8">
            Shop Now →
          </button>

        </div>

      </section>

    </div>
  )
}

export default Home