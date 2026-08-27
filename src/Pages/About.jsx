import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description:
        'Our mission is to make modern technology simple, accessible and convenient for everyone.',
    },
    {
      icon: '💡',
      title: 'Our Vision',
      description:
        'We want to create a trusted online destination for technology products and accessories.',
    },
    {
      icon: '🤝',
      title: 'Our Promise',
      description:
        'We focus on quality products, simple shopping and a great customer experience.',
    },
  ]

  const stats = [
    {
      value: '500+',
      title: 'Products',
      description: 'Technology products',
    },
    {
      value: '50K+',
      title: 'Customers',
      description: 'Happy customers',
    },
    {
      value: '4.8 ⭐',
      title: 'Rating',
      description: 'Customer satisfaction',
    },
    {
      value: '24/7',
      title: 'Support',
      description: 'Always here to help',
    },
  ]

  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="font-semibold tracking-widest text-primary">
            ABOUT US
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            About <span className="text-primary">TechStore</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-base-content/60">
            Your destination for modern technology and digital products.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Technology workspace"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-semibold tracking-widest text-primary">
              WHO WE ARE
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Technology Made Simple
            </h2>

            <p className="mt-6 leading-relaxed text-base-content/70">
              TechStore is a modern e-commerce platform created for
              technology lovers. We provide smartphones, laptops,
              headphones, gaming accessories and more.
            </p>

            <p className="mt-4 leading-relaxed text-base-content/70">
              Our goal is to make technology shopping simple,
              convenient and enjoyable for everyone.
            </p>

            <Link
              to="/products"
              className="btn btn-primary mt-7"
            >
              Explore Products →
            </Link>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-12 text-center">
            <p className="font-semibold tracking-widest text-primary">
              OUR VALUES
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              What We Believe
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-base-content/60">
              The values behind TechStore.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.title}
                className="card border border-base-300 bg-base-200 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="card-body items-center text-center">

                  <div className="text-5xl">
                    {value.icon}
                  </div>

                  <h3 className="mt-2 text-xl font-bold">
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
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 text-center">
          <p className="font-semibold tracking-widest text-primary">
            TECHSTORE
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Our Numbers
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-base-300 bg-base-100 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-3xl font-bold text-primary">
                {stat.value}
              </p>

              <h3 className="mt-2 font-bold">
                {stat.title}
              </h3>

              <p className="mt-1 text-sm text-base-content/50">
                {stat.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-content">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <div className="text-5xl">
            🚀
          </div>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Ready to Upgrade Your Tech?
          </h2>

          <p className="mx-auto mt-4 max-w-xl opacity-80">
            Discover amazing technology products at TechStore.
          </p>

          <Link
            to="/products"
            className="btn btn-neutral mt-8"
          >
            Shop Now →
          </Link>

        </div>
      </section>

    </div>
  )
}

export default About
