import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import products from '../Props/Carddata'
import Cards from '../Components/Cards'
import {
  Zap,
  Smartphone,
  Laptop,
  Watch,
  Tv,
  Camera,
  Headphones,
  Truck,
  ShieldCheck,
  Award,
  HeadphonesIcon,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()

  const categories = [
    {
      name: 'Smartphones',
      icon: <Smartphone className="h-7 w-7 text-primary" />,
      desc: 'Next-gen chips & pro cameras',
      count: '12+ Models',
    },
    {
      name: 'Laptops',
      icon: <Laptop className="h-7 w-7 text-cyan-500" />,
      desc: 'Powerful machines for creators',
      count: '18+ Models',
    },
    {
      name: 'Wearable Technology',
      icon: <Watch className="h-7 w-7 text-indigo-500" />,
      desc: 'Smart rings & AI smart glasses',
      count: '8+ Models',
    },
    {
      name: 'Television',
      icon: <Tv className="h-7 w-7 text-emerald-500" />,
      desc: '4K OLED & Smart Displays',
      count: '6+ Models',
    },
    {
      name: 'Cameras',
      icon: <Camera className="h-7 w-7 text-rose-500" />,
      desc: 'Capture 4K cinematic memories',
      count: '5+ Models',
    },
    {
      name: 'Accessories',
      icon: <Headphones className="h-7 w-7 text-amber-500" />,
      desc: 'Keyboards, wireless mice & more',
      count: '30+ Models',
    },
  ]

  const features = [
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: 'Free Express Delivery',
      desc: 'Lightning-fast dispatch to your door within 24-48 hours.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-500" />,
      title: '2-Year Official Warranty',
      desc: 'All products covered with 100% genuine brand warranty.',
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-500" />,
      title: 'Certified Authentic',
      desc: 'Direct manufacturer sourcing with verified serials.',
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-indigo-500" />,
      title: '24/7 Tech Support',
      desc: 'Dedicated technical specialists ready to assist anytime.',
    },
  ]

  const reviews = [
    {
      name: 'Rahul Sharma',
      role: 'Software Architect',
      rating: 5,
      comment: 'Ordered the new laptop and AI glasses. Delivery was within 24 hours, perfectly packaged and authentic products!',
    },
    {
      name: 'Priya Mehta',
      role: 'Digital Designer',
      rating: 5,
      comment: 'The checkout experience with the discount code was seamless. TechStore is my go-to tech gadgets platform!',
    },
    {
      name: 'Aniket Deshmukh',
      role: 'Tech Enthusiast',
      rating: 5,
      comment: 'Customer support answered my specs inquiry in 2 minutes. Best pricing and 100% authentic devices.',
    },
  ]

  // Pick top 4 featured products
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-base-100 py-16 sm:py-24 lg:py-32">
        {/* Glow ambient circles */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                <span>2026 NEXT-GEN TECH ECOSYSTEM</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
                Power Your <br />
                <span className="text-gradient">Digital Life.</span>
              </h1>

              <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-base-content/70 lg:mx-0">
                Experience ultra-fast computing, high-fidelity audio, immersive smart displays, and intelligent wearables designed to redefine your workflow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <button
                  onClick={() => navigate('/products')}
                  className="btn btn-primary btn-lg rounded-2xl px-8 font-bold shadow-xl shadow-primary/25 hover:scale-105 transition duration-300 flex items-center gap-2"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  onClick={() => navigate('/about')}
                  className="btn btn-outline btn-lg rounded-2xl px-7 font-bold hover:scale-105 transition duration-300"
                >
                  Why TechStore
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-base-300/80 pt-8 mt-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-primary">15K+</p>
                  <p className="text-xs font-semibold text-base-content/60">Delivered Orders</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-cyan-500">500+</p>
                  <p className="text-xs font-semibold text-base-content/60">Smart Gadgets</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">4.9 ★</p>
                  <p className="text-xs font-semibold text-base-content/60">Customer Score</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-base-300 bg-gradient-to-b from-base-100 to-base-200 p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200"
                  alt="Premium Tech Devices"
                  className="h-[380px] sm:h-[440px] w-full rounded-[2rem] object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Floating pill 1 */}
                <div className="absolute left-8 bottom-8 rounded-2xl border border-white/20 bg-black/60 p-4 text-white backdrop-blur-xl shadow-xl hidden sm:flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Free 24hr Shipping</p>
                    <p className="text-[10px] text-white/70">On all prepaid orders</p>
                  </div>
                </div>

                {/* Floating pill 2 */}
                <div className="absolute right-8 top-8 rounded-2xl border border-white/20 bg-black/60 p-3.5 text-white backdrop-blur-xl shadow-xl hidden sm:flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold">100% Genuine Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Curated Ecosystem
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Shop By Department
          </h2>
          <p className="mt-3 text-sm text-base-content/60">
            Click any department to explore high-spec products tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => navigate(`/products?category=${encodeURIComponent(cat.name)}`)}
              className="group cursor-pointer rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-base-200 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                  {cat.icon}
                </div>
                <span className="badge badge-neutral badge-sm font-semibold">
                  {cat.count}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-primary transition">
                {cat.name}
              </h3>
              <p className="mt-2 text-xs text-base-content/60 leading-relaxed">
                {cat.desc}
              </p>

              <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                <span>View Products</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-base-100 py-20 border-t border-b border-base-300">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Top Rated Picks
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Featured Tech Gadgets
              </h2>
            </div>

            <Link
              to="/products"
              className="btn btn-outline btn-primary rounded-xl font-bold flex items-center gap-2 self-start sm:self-auto"
            >
              <span>View All 12 Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            The TechStore Advantage
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Engineered For Excellence
          </h2>
          <p className="mt-3 text-sm text-base-content/60">
            Enjoy premium peace of mind with guaranteed authentic hardware and priority logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-base-200">
                {feat.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-base-content">
                {feat.title}
              </h3>
              <p className="mt-2 text-xs text-base-content/60 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-base-100/70 py-20 border-t border-base-300">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Customer Experiences
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Loved by 15,000+ Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.name}
                className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-base-content/80 italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-base-300 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{rev.name}</h4>
                    <p className="text-xs text-base-content/50">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMO CTA BANNER ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 p-8 sm:p-14 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="badge bg-white/20 text-white border-0 font-bold">
              PROMO CODE: TECH10
            </div>
            <h2 className="text-3xl font-black sm:text-5xl leading-tight">
              Ready to Upgrade Your Tech Setup?
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Apply coupon <code className="bg-black/30 px-2 py-0.5 rounded font-bold">TECH10</code> at checkout to get an instant 10% discount on your order today!
            </p>
            <div className="pt-4">
              <button
                onClick={() => navigate('/products')}
                className="btn btn-neutral btn-lg rounded-2xl px-8 font-bold shadow-xl hover:scale-105 transition"
              >
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home