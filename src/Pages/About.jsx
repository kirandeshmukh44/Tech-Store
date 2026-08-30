import React from 'react'
import { Link } from 'react-router-dom'
import {
  Zap,
  Target,
  Lightbulb,
  HeartHandshake,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Our Mission',
      description:
        'To democratize access to world-class personal computing, wearable intelligence, and digital lifestyle hardware with transparent pricing.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
      title: 'Our Vision',
      description:
        'To become the most reliable, customer-centric technology platform that bridges the gap between next-generation innovations and consumers.',
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-emerald-500" />,
      title: 'Our Promise',
      description:
        'Strict 100% authenticity standards, rigorous product testing, zero counterfeit tolerance, and 24/7 dedicated customer engineering support.',
    },
  ]

  const stats = [
    { value: '500+', title: 'Curated Devices', desc: 'Laptops, phones & wearables' },
    { value: '15K+', title: 'Active Enthusiasts', desc: 'Satisfied tech customers' },
    { value: '99.8%', title: 'On-Time Dispatch', desc: 'Priority express delivery' },
    { value: '24/7', title: 'Specialist Support', desc: 'Always ready to help' },
  ]

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      {/* Hero */}
      <section className="relative overflow-hidden bg-base-100 py-16 sm:py-24 border-b border-base-300">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DISCOVER OUR STORY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About <span className="text-gradient">TechStore</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-base-content/70 leading-relaxed">
            Founded with a passion for cutting-edge engineering, TechStore is built for technology lovers who demand uncompromising quality, authentic hardware, and effortless shopping.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-base-300 bg-base-100 p-3 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                alt="TechStore Innovation Center"
                className="h-[360px] sm:h-[420px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <div className="badge badge-primary font-bold">WHO WE ARE</div>
            <h2 className="text-3xl sm:text-4xl font-black text-base-content leading-tight">
              Technology Made Simple, Powerful & Accessible.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-base-content/70">
              TechStore was founded on a simple principle: buying high-performance technology shouldn't be complicated or full of doubts.
            </p>
            <p className="text-sm leading-relaxed text-base-content/70">
              Every device in our catalog is hand-vetted for verified serial authenticity, genuine manufacturer warranties, and uncompromised build quality.
            </p>
            <div className="pt-2">
              <Link
                to="/products"
                className="btn btn-primary rounded-xl font-bold px-6 shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <span>Explore Our Catalog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-base-100 py-16 border-t border-b border-base-300">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Core Principles
            </p>
            <h2 className="mt-1 text-3xl font-black">What Drives Us</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-base-300 bg-base-200/50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-base-100 shadow-sm mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-base-content/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((st) => (
            <div
              key={st.title}
              className="rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-sm"
            >
              <p className="text-3xl sm:text-4xl font-black text-primary">
                {st.value}
              </p>
              <h4 className="mt-2 font-bold text-base-content">{st.title}</h4>
              <p className="mt-1 text-xs text-base-content/50">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-6">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 p-8 sm:p-12 text-center text-white shadow-2xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md mx-auto mb-4">
            <Zap className="h-7 w-7 fill-current" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            Ready to Build Your Dream Setup?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
            Enjoy premium discounts, authentic warranties, and 24/7 support with TechStore today.
          </p>
          <Link
            to="/products"
            className="btn btn-neutral btn-lg rounded-2xl px-8 font-bold mt-6 shadow-xl"
          >
            Shop Now →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
