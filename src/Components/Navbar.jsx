import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { useWishlist } from '../Context/WishlistContext'
import { useAuth } from '../Context/AuthContext'
import { useTheme, themes } from '../Context/ThemeContext'
import {
  ShoppingCart,
  Heart,
  LogOut,
  Package,
  Palette,
  Menu,
  X,
  Zap,
  ChevronDown,
  Sparkles,
} from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()
  const { currentUser, logout } = useAuth()
  const { theme, changeTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleLogout = async () => {
    try {
      await logout()
      setUserDropdownOpen(false)
      navigate('/login')
    } catch (err) {
      console.error('Logout error', err)
    }
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <Link to="/home" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-cyan-400 text-white shadow-md shadow-primary/25 transition duration-300 group-hover:scale-105">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <div className="leading-none">
            <h1 className="text-xl font-black tracking-tight">
              Tech<span className="text-primary">Store</span>
            </h1>
            <p className="mt-0.5 text-[9px] font-bold tracking-widest text-base-content/50 uppercase">
              Smart Ecosystem
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-primary-content shadow-sm shadow-primary/20'
                    : 'text-base-content/75 hover:bg-base-200 hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ================= RIGHT CONTROLS ================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* THEME PICKER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="btn btn-ghost btn-circle btn-sm sm:btn-md"
              title="Change Theme"
              aria-label="Change Theme"
            >
              <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-base-content/75" />
            </button>

            {themeDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setThemeDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 z-40 w-52 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-2xl backdrop-blur-xl">
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-base-content/50 border-b border-base-300/50 mb-1">
                    Select Theme
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        changeTheme(t.id)
                        setThemeDropdownOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold transition ${
                        theme === t.id
                          ? 'bg-primary text-primary-content'
                          : 'hover:bg-base-200 text-base-content'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{t.icon}</span>
                        <span>{t.name}</span>
                      </div>
                      {theme === t.id && <Sparkles className="h-3.5 w-3.5" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* WISHLIST BUTTON */}
          <Link
            to="/products"
            className="btn btn-ghost btn-circle btn-sm sm:btn-md relative"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-base-content/75" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-black text-white shadow-sm">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART BUTTON */}
          <Link
            to="/cart"
            className="btn btn-ghost btn-circle btn-sm sm:btn-md relative"
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-base-content/75" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-black text-primary-content shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {/* USER PROFILE / AUTH BUTTONS */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 p-1 pl-2.5 pr-2 transition hover:bg-base-200"
              >
                <span className="hidden sm:inline text-xs font-bold max-w-28 truncate">
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                  {currentUser.email?.charAt(0).toUpperCase()}
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-base-content/50" />
              </button>

              {userDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setUserDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 z-40 w-56 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-2xl">
                    <div className="px-3 py-2 border-b border-base-300/60">
                      <p className="text-xs text-base-content/50">Signed in as</p>
                      <p className="text-xs font-bold truncate text-base-content">
                        {currentUser.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/my-orders"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold hover:bg-base-200 text-base-content"
                      >
                        <Package className="h-4 w-4 text-primary" />
                        My Orders
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-rose-500 hover:bg-rose-500/10"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/login"
                className="btn btn-ghost btn-sm font-semibold"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm rounded-xl font-bold shadow-md shadow-primary/20"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-circle btn-sm md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="border-t border-base-300 bg-base-100 px-5 py-5 md:hidden space-y-4 shadow-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-primary text-primary-content'
                      : 'text-base-content hover:bg-base-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="border-t border-base-300 pt-4 flex flex-col gap-2">
            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-xl bg-base-200 px-4 py-2.5 text-sm font-semibold"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-primary" />
                <span>Cart</span>
              </div>
              <span className="badge badge-primary badge-sm">{cartCount}</span>
            </Link>

            {currentUser ? (
              <>
                <Link
                  to="/my-orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-base-200 px-4 py-2.5 text-sm font-semibold"
                >
                  <Package className="h-4 w-4 text-primary" />
                  <span>My Orders</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setMobileMenuOpen(false)
                  }}
                  className="btn btn-error btn-outline btn-sm w-full rounded-xl mt-2"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-outline btn-primary btn-sm rounded-xl font-bold"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary btn-sm rounded-xl font-bold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
