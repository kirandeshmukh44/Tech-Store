import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Lock,
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="border-t border-base-300 bg-base-100 text-base-content transition-colors duration-300">
      {/* Top Banner / Newsletter */}
      <div className="border-b border-base-300/60 bg-base-200/50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="badge badge-primary badge-sm font-bold uppercase tracking-wider mb-2">
                Newsletter
              </div>
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                Stay Ahead of Tech Trends
              </h3>
              <p className="mt-2 text-sm text-base-content/60 max-w-md">
                Subscribe for exclusive discounts, new product launches, and expert tech reviews.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-500 font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Thank you for subscribing to TechStore VIP!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your work or personal email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input input-bordered w-full rounded-2xl bg-base-100 focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary rounded-2xl px-6 font-bold shadow-lg shadow-primary/20 flex items-center gap-2 shrink-0"
                  >
                    <Send className="h-4 w-4" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content shadow-md">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                Tech<span className="text-primary">Store</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-base-content/60 max-w-sm">
              Your premier destination for high-performance laptops, smartphones, wearables, and cutting-edge digital accessories.
            </p>

            <div className="flex items-center gap-4 text-xs text-base-content/60 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Verified Brands</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-primary" />
                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/home" className="text-base-content/70 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-base-content/70 hover:text-primary transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base-content/70 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base-content/70 hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Categories
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products?category=Laptops" className="text-base-content/70 hover:text-primary transition">
                  Laptops & PC
                </Link>
              </li>
              <li>
                <Link to="/products?category=Smartphones" className="text-base-content/70 hover:text-primary transition">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/products?category=Wearable%20Technology" className="text-base-content/70 hover:text-primary transition">
                  Smart Wearables
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-base-content/70 hover:text-primary transition">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-xs text-base-content/70">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>support@techstore.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-base-300/60 pt-8 sm:flex-row text-xs text-base-content/50">
          <p>© 2026 TechStore. Engineered for technology enthusiasts worldwide.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-primary cursor-pointer transition">Security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
