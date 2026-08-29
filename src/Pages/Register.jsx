import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      navigate('/home')
    } catch (error) {
      console.log(error)

      if (error.code === 'auth/email-already-in-use') {
        setError('An account already exists with this email.')
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak.')
      } else {
        setError('Unable to create account. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 relative overflow-hidden flex items-center justify-center px-4 py-10">

      {/* Background */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse" />

      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl animate-pulse" />

      <div className="relative w-full max-w-6xl">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-2xl">

          {/* LEFT SIDE */}
          <div className="relative overflow-hidden bg-primary text-primary-content p-12 flex flex-col justify-between order-2 lg:order-1">

            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl backdrop-blur">
                  🚀
                </div>

                <div>
                  <h2 className="text-xl font-black">
                    TechStore
                  </h2>

                  <p className="text-xs opacity-70">
                    Your Digital World
                  </p>
                </div>

              </div>

            </div>

            <div className="relative z-10 mt-12 lg:mt-0">

              <p className="text-sm font-semibold uppercase tracking-widest opacity-70">
                Join TechStore
              </p>

              <h1 className="mt-4 text-5xl font-black leading-tight">
                Start Your
                <br />
                Tech Journey.
              </h1>

              <p className="mt-6 max-w-md text-primary-content/75 leading-relaxed">
                Create your account and explore a world of
                smartphones, laptops, smart devices and more.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    ⚡
                  </div>

                  <span>
                    Latest technology products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    🔒
                  </div>

                  <span>
                    Secure and reliable shopping
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    🚚
                  </div>

                  <span>
                    Fast delivery to your doorstep
                  </span>
                </div>

              </div>

            </div>

            <div className="relative z-10 text-sm opacity-60 mt-10">
              © 2026 TechStore. All rights reserved.
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-7 sm:p-10 lg:p-12 order-1 lg:order-2">

            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl shadow-lg shadow-primary/30">
                🚀
              </div>

              <h1 className="mt-4 text-2xl font-black">
                TechStore
              </h1>

            </div>

            {/* Heading */}
            <div className="mb-8">

              <p className="font-semibold tracking-widest text-primary text-sm">
                CREATE ACCOUNT
              </p>

              <h1 className="mt-2 text-3xl sm:text-4xl font-black">
                Welcome to TechStore 🚀
              </h1>

              <p className="mt-3 text-base-content/60">
                Create your account and start exploring.
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="alert alert-error mb-6 shadow-sm">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleRegister}>

              {/* Email */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text font-bold">
                    Email Address
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-3 focus-within:input-primary">

                  <span className="text-xl opacity-60">
                    ✉️
                  </span>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="grow"
                    required
                  />

                </label>

              </div>

              {/* Password */}
              <div className="form-control mt-5">

                <label className="label">
                  <span className="label-text font-bold">
                    Password
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-3 focus-within:input-primary">

                  <span className="text-xl opacity-60">
                    🔒
                  </span>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="grow"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-lg opacity-60 hover:opacity-100"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>

                </label>

              </div>

              {/* Confirm Password */}
              <div className="form-control mt-5">

                <label className="label">
                  <span className="label-text font-bold">
                    Confirm Password
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-3 focus-within:input-primary">

                  <span className="text-xl opacity-60">
                    🔐
                  </span>

                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="grow"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="text-lg opacity-60 hover:opacity-100"
                  >
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </button>

                </label>

              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 mt-5">

                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mt-1"
                  required
                />

                <p className="text-sm text-base-content/60">
                  I agree to the Terms of Service and Privacy Policy.
                </p>

              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg w-full mt-7 shadow-xl shadow-primary/20 transition hover:scale-[1.02]"
              >

                {loading ? (
                  <>
                    <span className="loading loading-spinner" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <span className="text-xl">→</span>
                  </>
                )}

              </button>

            </form>

            {/* Divider */}
            <div className="divider my-8">
              OR
            </div>

            {/* Login */}
            <div className="text-center">

              <p className="text-base-content/60">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="btn btn-outline btn-primary mt-3 w-full"
              >
                Login to Your Account
              </Link>

            </div>

            <div className="mt-8 text-center">

              <Link
                to="/"
                className="text-sm text-base-content/50 hover:text-primary transition"
              >
                ← Back to Welcome
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register
