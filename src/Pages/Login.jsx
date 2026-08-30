import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      navigate('/home')
    } catch (err) {
      console.error(err)
      if (
        err.code === 'auth/invalid-credential' ||
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found'
      ) {
        setError('Invalid email address or password.')
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many unsuccessful attempts. Please try again later.')
      } else {
        setError('Unable to login. Please check your credentials.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden transition-colors duration-300">
      {/* Background glow ambient circles */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-base-300 bg-base-100 shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* LEFT HERO PANEL */}
          <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-cyan-600 p-12 text-white">
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

            <div className="relative z-10 my-auto py-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                <span>WELCOME BACK</span>
              </div>

              <h1 className="text-4xl font-black leading-tight">
                Unlock Next-Gen <br />
                Technology.
              </h1>

              <p className="text-sm leading-relaxed text-white/80 max-w-sm">
                Sign in to manage your orders, access exclusive VIP discounts, and sync your tech wishlist.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>256-Bit SSL Encrypted Account Security</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>Track Real-Time Deliveries</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs text-white/60">
              © 2026 TechStore Inc. All rights reserved.
            </div>
          </div>

          {/* RIGHT LOGIN FORM */}
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 lg:hidden mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-lg font-black">TechStore</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Account Sign In
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-base-content">
                Welcome Back 👋
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-base-content/60">
                Please enter your registered credentials to continue.
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-3.5 text-xs text-rose-500 font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <label className="label text-xs font-bold">Password</label>
                  <span className="text-xs text-primary hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 h-4 w-4 text-base-content/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
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

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.01] transition mt-6 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="divider my-6 text-xs text-base-content/40">OR</div>

            <div className="text-center space-y-4">
              <p className="text-xs text-base-content/60">
                Don't have an account yet?
              </p>
              <Link
                to="/register"
                className="btn btn-outline btn-primary w-full rounded-2xl font-bold text-xs sm:text-sm"
              >
                Create Free TechStore Account
              </Link>
              <Link
                to="/home"
                className="block text-xs font-semibold text-base-content/50 hover:text-primary transition pt-2"
              >
                ← Continue as Guest to Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
