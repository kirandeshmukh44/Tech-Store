import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="min-h-screen bg-base-200 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse" />

            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl animate-pulse" />

            {/* Navbar */}
            <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

                <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-2xl shadow-lg shadow-primary/30">
                        🚀
                    </div>

                    <div>
                        <h2 className="text-xl font-black">
                            TechStore
                        </h2>

                        <p className="text-xs text-base-content/50">
                            Your Digital World
                        </p>
                    </div>

                </div>

                <div className="hidden sm:flex items-center gap-3">

                    <NavLink
                        to="/login"
                        className="btn btn-ghost"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/register"
                        className="btn btn-primary shadow-lg shadow-primary/20"
                    >
                        Get Started →
                    </NavLink>

                </div>

            </nav>


            {/* Hero */}
            <main className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">

                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        <div className="badge badge-primary badge-lg px-5 py-4 font-semibold">
                            🚀 Welcome to TechStore
                        </div>

                        <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">

                            Upgrade Your

                            <span className="block text-primary">
                                Tech Life.
                            </span>

                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-base-content/60 lg:mx-0">
                            Discover the latest smartphones, laptops, smart
                            devices, gaming accessories and everything you need
                            for your digital lifestyle.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

                            <NavLink
                                to="/register"
                                className="btn btn-primary btn-lg px-8 shadow-xl shadow-primary/20 transition duration-300 hover:scale-105"
                            >
                                Create Account →
                            </NavLink>

                            <NavLink
                                to="/login"
                                className="btn btn-outline btn-primary btn-lg px-8 transition duration-300 hover:scale-105"
                            >
                                Login
                            </NavLink>

                        </div>

                        {/* Trust */}
                        <div className="mt-10 flex flex-wrap justify-center gap-7 lg:justify-start">

                            <div>
                                <p className="text-2xl font-black">
                                    10K+
                                </p>

                                <p className="text-sm text-base-content/50">
                                    Happy Customers
                                </p>
                            </div>

                            <div className="h-10 w-px bg-base-300" />

                            <div>
                                <p className="text-2xl font-black">
                                    500+
                                </p>

                                <p className="text-sm text-base-content/50">
                                    Products
                                </p>
                            </div>

                            <div className="h-10 w-px bg-base-300" />

                            <div>
                                <p className="text-2xl font-black">
                                    4.9 ⭐
                                </p>

                                <p className="text-sm text-base-content/50">
                                    Rating
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Right Visual */}
                    <div className="relative">

                        {/* Main Glow */}
                        <div className="absolute inset-10 rounded-[4rem] bg-primary/20 blur-3xl" />

                        {/* Image Card */}
                        <div className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 p-3 shadow-2xl transition duration-500 hover:-translate-y-2">

                            <img
                                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200"
                                alt="Technology Products"
                                className="h-[420px] w-full rounded-[1.5rem] object-cover"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-x-8 bottom-8">

                                <div className="rounded-2xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md shadow-xl">

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="text-xs font-semibold tracking-widest text-white/60">
                                                TECHSTORE
                                            </p>

                                            <h2 className="mt-1 text-2xl font-black">
                                                Everything Tech.
                                            </h2>
                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl shadow-lg">
                                            ⚡
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Floating Card 1 */}
                        <div className="absolute -left-4 top-12 hidden sm:block">

                            <div className="rounded-2xl border border-base-300 bg-base-100 px-5 py-4 shadow-xl animate-bounce">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-xl">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold">
                                            Secure Shopping
                                        </p>

                                        <p className="text-xs text-base-content/50">
                                            100% Protected
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Floating Card 2 */}
                        <div className="absolute -right-4 bottom-12 hidden sm:block">

                            <div className="rounded-2xl border border-base-300 bg-base-100 px-5 py-4 shadow-xl">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                                        🚚
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold">
                                            Fast Delivery
                                        </p>

                                        <p className="text-xs text-base-content/50">
                                            To your doorstep
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Features */}
                <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="text-3xl">⚡</div>
                        <h3 className="mt-3 font-bold">
                            Latest Technology
                        </h3>
                        <p className="mt-1 text-sm text-base-content/50">
                            Discover the newest tech products.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="text-3xl">🔒</div>
                        <h3 className="mt-3 font-bold">
                            Secure Shopping
                        </h3>
                        <p className="mt-1 text-sm text-base-content/50">
                            Your information stays protected.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="text-3xl">🚚</div>
                        <h3 className="mt-3 font-bold">
                            Fast Delivery
                        </h3>
                        <p className="mt-1 text-sm text-base-content/50">
                            Quick delivery to your doorstep.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="text-3xl">⭐</div>
                        <h3 className="mt-3 font-bold">
                            Trusted Quality
                        </h3>
                        <p className="mt-1 text-sm text-base-content/50">
                            Quality products from trusted brands.
                        </p>
                    </div>

                </div>

            </main>

        </div>
    )
}

export default Welcome
