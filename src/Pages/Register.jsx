import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import {
  Zap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const Register = () => {
  const navigate = useNavigate()
  const { register } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    setLoading(true)

    try {
      await register(email, password, name)
      navigate('/home')
    } catch (err) {
      console.error(err)
      if (err.code === 'auth/email-already-in-use') {
        setError('An account already exists with this email address.')
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use a stronger password.')
      } else {
        setError('Unable to create account. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden transition-colors duration-300">
      {/* Glow ambient background */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-base-300 bg-base-100 shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* LEFT HERO PANEL */}
          <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-cyan-600 p-12 text-white order-2 lg:order-1">
            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-lg">
                <Zap className="h-6 w-6 fill-current" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight">TechStore</h2>
                <p className="text-[10px] font-bold tracking-widest text-white/70 uppercase">
                  Digital Ecosystem
                </p>
              </div>
            </div>

            <div className="relative z-10 my-auto py-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                <span>JOIN THE COMMUNITY</span>
              </div>

              <h1 className="text-4xl font-black leading-tight">
                Start Your Smart <br />
                Tech Journey.
              </h1>

              <p className="text-sm leading-relaxed text-white/80 max-w-sm">
                Get immediate access to verified devices, priority customer service, and order tracking.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>Exclusive New Member Welcome Discount</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>Free 24hr Dispatch on Priority Gadgets</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>100% Secure Checkout Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs text-white/60">
              © 2026 TechStore Inc. All rights reserved.
            </div>
          </div>

          {/* RIGHT REGISTER FORM */}
          <div className="p-8 sm:p-12 order-1 lg:order-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 lg:hidden mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-lg font-black">TechStore</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                New Membership
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-base-content">
                Create Account 🚀
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-base-content/60">
                Join thousands of tech enthusiasts today.
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-3.5 text-xs text-rose-500 font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="label text-xs font-bold">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 h-4 w-4 text-base-content/40" />
                  <input
                    type="text"
                    placeholder="e.g. Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input input-bordered w-full rounded-2xl pl-11 bg-base-100 text-sm focus:border-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="label text-xs font-bold">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 h-4 w-4 text-base-content/40" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input input-bordered w-full rounded-2xl pl-11 bg-base-100 text-sm focus:border-primary"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="label text-xs font-bold">Create Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 h-4 w-4 text-base-content/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input input-bordered w-full rounded-2xl pl-11 pr-11 bg-base-100 text-sm focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-base-content/40 hover:text-base-content transition"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label text-xs font-bold">Confirm Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 h-4 w-4 text-base-content/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input input-bordered w-full rounded-2xl pl-11 bg-base-100 text-sm focus:border-primary"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.01] transition mt-5 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="divider my-5 text-xs text-base-content/40">OR</div>

            <div className="text-center space-y-3">
              <p className="text-xs text-base-content/60">
                Already have an account?
              </p>
              <Link
                to="/login"
                className="btn btn-outline btn-primary w-full rounded-2xl font-bold text-xs sm:text-sm"
              >
                Sign In to Existing Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
