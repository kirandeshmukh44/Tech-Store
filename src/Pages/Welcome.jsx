import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Zap,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Lock,
} from 'lucide-react'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-base-200 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link to="/home" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-cyan-400 text-white shadow-md shadow-primary/25">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <div className="leading-none">
            <h2 className="text-xl font-black tracking-tight">
              Tech<span className="text-primary">Store</span>
            </h2>
            <p className="mt-0.5 text-[9px] font-bold tracking-widest text-base-content/50 uppercase">
              Smart Technology
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="btn btn-ghost btn-sm sm:btn-md font-semibold"
          >
            Sign In
          </Link>
          <Link
            to="/home"
            className="btn btn-primary btn-sm sm:btn-md rounded-xl font-bold shadow-lg shadow-primary/25 hover:scale-105 transition"
          >
            Enter Store →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <Sparkles className="h-4 w-4" />
              <span>THE FUTURE OF SHOPPING IS HERE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Elevate Your <br />
              <span className="text-gradient">Tech Life.</span>
            </h1>

            <p className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg leading-relaxed text-base-content/70">
              Discover flagship laptops, smart wearable tech, immersive visual displays, and high-performance accessories tailored for your lifestyle.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/home')}
                className="btn btn-primary btn-lg rounded-2xl px-8 font-bold shadow-xl shadow-primary/25 hover:scale-105 transition flex items-center gap-2"
              >
                <span>Browse Store</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => navigate('/register')}
                className="btn btn-outline btn-lg rounded-2xl px-7 font-bold hover:scale-105 transition"
              >
                Join TechStore Free
              </button>
            </div>

            {/* Trust Counters */}
            <div className="grid grid-cols-3 gap-4 border-t border-base-300/80 pt-8 mt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-primary">15K+</p>
                <p className="text-xs font-semibold text-base-content/60">Verified Users</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-cyan-500">500+</p>
                <p className="text-xs font-semibold text-base-content/60">Tech Products</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">4.9 ★</p>
                <p className="text-xs font-semibold text-base-content/60">Satisfaction Score</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-base-300 bg-base-100 p-4 shadow-2xl transition hover:-translate-y-1 duration-500">
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200"
                alt="TechStore Showcase"
                className="h-[380px] sm:h-[420px] w-full rounded-[2rem] object-cover"
              />

              <div className="mt-4 rounded-2xl bg-base-200/80 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">
                    Next-Gen Tech
                  </p>
                  <h4 className="text-base font-black">All Brands In One Place</h4>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                  <Zap className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature row */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3.5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Cutting-Edge Tech</h4>
              <p className="text-xs text-base-content/50">Latest models & hardware</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Express Shipping</h4>
              <p className="text-xs text-base-content/50">24-48 hr doorstep delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold">2-Year Warranty</h4>
              <p className="text-xs text-base-content/50">100% Genuine verified</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Secure Payments</h4>
              <p className="text-xs text-base-content/50">Encrypted checkout & COD</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Welcome
