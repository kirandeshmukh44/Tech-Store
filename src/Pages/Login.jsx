import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const Login = () => {
    const navigate = useNavigate()

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
            await signInWithEmailAndPassword(auth, email, password)

            navigate('/home')
        } catch (error) {
            console.log(error)

            if (error.code === 'auth/invalid-credential') {
                setError('Invalid email or password.')
            } else if (error.code === 'auth/invalid-email') {
                setError('Please enter a valid email address.')
            } else {
                setError('Unable to login. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-base-200 relative overflow-hidden flex items-center justify-center px-4 py-10">

            {/* Animated Background */}
            <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse" />

            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl animate-pulse" />

            <div className="relative w-full max-w-6xl">

                <div className="grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-2xl">

                    {/* LEFT SIDE */}
                    <div className="hidden lg:flex relative overflow-hidden bg-primary text-primary-content p-12 flex-col justify-between">

                        {/* Glow */}
                        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

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

                        <div className="relative z-10">

                            <p className="text-sm font-semibold uppercase tracking-widest opacity-70">
                                Welcome Back
                            </p>

                            <h1 className="mt-4 text-5xl font-black leading-tight">
                                Your Tech.
                                <br />
                                Your World.
                            </h1>

                            <p className="mt-6 max-w-md text-primary-content/75 leading-relaxed">
                                Discover the latest technology, powerful devices,
                                smart accessories and everything you need for your
                                digital lifestyle.
                            </p>

                            <div className="mt-8 flex gap-3 flex-wrap">

                                <div className="badge badge-lg bg-white/10 border-white/20 text-white">
                                    ⚡ Latest Technology
                                </div>

                                <div className="badge badge-lg bg-white/10 border-white/20 text-white">
                                    🔒 Secure Shopping
                                </div>

                            </div>

                        </div>

                        <div className="relative z-10 text-sm opacity-60">
                            © 2026 TechStore. All rights reserved.
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="p-7 sm:p-10 lg:p-12">

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
                                ACCOUNT LOGIN
                            </p>

                            <h1 className="mt-2 text-3xl sm:text-4xl font-black">
                                Welcome Back 👋
                            </h1>

                            <p className="mt-3 text-base-content/60">
                                Sign in to continue your TechStore journey.
                            </p>

                        </div>

                        {/* Error */}
                        {error && (
                            <div className="alert alert-error mb-6 shadow-sm">
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleLogin}>

                            {/* Email */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text font-bold">
                                        Email Address
                                    </span>
                                </label>

                                <label className="input input-bordered flex items-center gap-3 focus-within:input-primary transition">

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

                                <div className="flex justify-between items-center">

                                    <label className="label">
                                        <span className="label-text font-bold">
                                            Password
                                        </span>
                                    </label>

                                    <span className="text-xs text-primary cursor-pointer hover:underline">
                                        Forgot password?
                                    </span>

                                </div>

                                <label className="input input-bordered flex items-center gap-3 focus-within:input-primary transition">

                                    <span className="text-xl opacity-60">
                                        🔒
                                    </span>

                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
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

                            {/* Remember */}
                            <div className="flex items-center gap-2 mt-5">

                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary checkbox-sm"
                                />

                                <span className="text-sm text-base-content/60">
                                    Remember me
                                </span>

                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary btn-lg w-full mt-7 shadow-xl shadow-primary/20 transition hover:scale-[1.02]"
                            >

                                {loading ? (
                                    <>
                                        <span className="loading loading-spinner" />
                                        Signing In...
                                    </>
                                ) : (
                                    <>
                                        Sign In
                                        <span className="text-xl">→</span>
                                    </>
                                )}

                            </button>

                        </form>

                        {/* Divider */}
                        <div className="divider my-8">
                            OR
                        </div>

                        {/* Register */}
                        <div className="text-center">

                            <p className="text-base-content/60">
                                Don't have an account?
                            </p>

                            <Link
                                to="/register"
                                className="btn btn-outline btn-primary mt-3 w-full"
                            >
                                Create New Account
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

export default Login
