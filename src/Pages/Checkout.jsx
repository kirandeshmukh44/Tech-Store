import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { auth, db } from '../firebase'


const Checkout = () => {

    const navigate = useNavigate()

    const {
        cartItems,
        cartTotal,
    } = useCart()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        // Temporary delay.
        // Firebase order creation will be added next.
        setTimeout(() => {
            setLoading(false)
            navigate('/order-success')
        }, 1200)
    }


    return (
        <div className="min-h-screen bg-base-200">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-base-100">

                {/* Background Glow */}

                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />


                <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">

                    <div className="text-center">

                        <p className="font-semibold tracking-[0.25em] text-primary">
                            TECHSTORE
                        </p>

                        <h1 className="mt-3 text-4xl font-black md:text-5xl">

                            Secure{' '}

                            <span className="text-primary">
                                Checkout
                            </span>

                        </h1>

                        <p className="mx-auto mt-4 max-w-xl text-base text-base-content/60 md:text-lg">
                            Complete your details and place your order
                            securely and quickly.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CHECKOUT ================= */}

            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-[1fr_420px]">


                    {/* ================= CUSTOMER DETAILS ================= */}

                    <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">

                        {/* Header */}

                        <div className="mb-8 flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                                📦
                            </div>

                            <div>

                                <h2 className="text-2xl font-black">
                                    Delivery Details
                                </h2>

                                <p className="text-sm text-base-content/50">
                                    Where should we deliver your order?
                                </p>

                            </div>

                        </div>


                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name + Email */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="input input-bordered w-full rounded-xl focus:border-primary"
                                        required
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="input input-bordered w-full rounded-xl focus:border-primary"
                                        required
                                    />

                                </div>

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="input input-bordered w-full rounded-xl focus:border-primary"
                                    required
                                />

                            </div>


                            {/* Address */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Delivery Address
                                </label>

                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="House number, street, area..."
                                    className="textarea textarea-bordered min-h-28 w-full rounded-xl focus:border-primary"
                                    required
                                />

                            </div>


                            {/* City / State / Pincode */}

                            <div className="grid gap-5 md:grid-cols-3">

                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        className="input input-bordered w-full rounded-xl"
                                        required
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        State
                                    </label>

                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder="State"
                                        className="input input-bordered w-full rounded-xl"
                                        required
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-semibold">
                                        Pincode
                                    </label>

                                    <input
                                        type="text"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        placeholder="Pincode"
                                        maxLength="6"
                                        className="input input-bordered w-full rounded-xl"
                                        required
                                    />

                                </div>

                            </div>


                            {/* Payment */}

                            <div className="rounded-2xl border border-base-300 bg-base-200 p-5">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-xl">
                                        💳
                                    </div>

                                    <div>

                                        <h3 className="font-bold">
                                            Payment Method
                                        </h3>

                                        <p className="text-sm text-base-content/50">
                                            Dummy payment for now
                                        </p>

                                    </div>

                                </div>


                                <div className="mt-4 flex items-center justify-between rounded-xl border border-success/30 bg-success/10 p-4">

                                    <div className="flex items-center gap-3">

                                        <span className="text-xl">
                                            💵
                                        </span>

                                        <div>

                                            <p className="font-semibold">
                                                Cash on Delivery
                                            </p>

                                            <p className="text-xs text-base-content/50">
                                                Pay when your order arrives
                                            </p>

                                        </div>

                                    </div>

                                    <input
                                        type="radio"
                                        checked
                                        readOnly
                                        className="radio radio-success"
                                    />

                                </div>

                            </div>


                            {/* Place Order */}

                            <button
                                type="submit"
                                disabled={loading || cartItems.length === 0}
                                className="btn btn-primary h-14 w-full rounded-xl text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]"
                            >

                                {loading ? (

                                    <>
                                        <span className="loading loading-spinner" />
                                        Processing Order...
                                    </>

                                ) : (

                                    <>
                                        Place Order
                                        <span className="text-xl">
                                            →
                                        </span>
                                    </>

                                )}

                            </button>

                        </form>

                    </div>


                    {/* ================= ORDER SUMMARY ================= */}

                    <div>

                        <div className="sticky top-24 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                        Your Cart
                                    </p>

                                    <h2 className="mt-1 text-2xl font-black">
                                        Order Summary
                                    </h2>

                                </div>

                                <div className="badge badge-primary badge-lg">
                                    {cartItems.length}
                                </div>

                            </div>


                            {/* Products */}

                            <div className="mt-6 max-h-80 space-y-4 overflow-y-auto pr-1">

                                {cartItems.map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex items-center gap-4 rounded-2xl bg-base-200 p-3"
                                    >

                                        <div className="h-16 w-16 shrink-0 rounded-xl bg-base-100 p-2">

                                            <img
                                                src={item.image}
                                                alt={item.heading}
                                                className="h-full w-full object-contain"
                                            />

                                        </div>


                                        <div className="min-w-0 flex-1">

                                            <h3 className="truncate font-bold">
                                                {item.heading}
                                            </h3>

                                            <p className="mt-1 text-sm text-base-content/50">
                                                Qty: {item.quantity}
                                            </p>

                                        </div>


                                        <p className="font-bold text-primary">
                                            ₹{(
                                                item.price * item.quantity
                                            ).toLocaleString('en-IN')}
                                        </p>

                                    </div>

                                ))}

                            </div>


                            {/* Divider */}

                            <div className="my-6 border-t border-base-300" />


                            {/* Price Details */}

                            <div className="space-y-3 text-sm">

                                <div className="flex justify-between">

                                    <span className="text-base-content/60">
                                        Subtotal
                                    </span>

                                    <span className="font-semibold">
                                        ₹{cartTotal.toLocaleString('en-IN')}
                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span className="text-base-content/60">
                                        Delivery
                                    </span>

                                    <span className="font-semibold text-success">
                                        FREE
                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span className="text-base-content/60">
                                        Tax
                                    </span>

                                    <span className="font-semibold">
                                        Included
                                    </span>

                                </div>

                            </div>


                            {/* Total */}

                            <div className="mt-5 rounded-2xl bg-primary/10 p-5">

                                <div className="flex items-center justify-between">

                                    <span className="font-semibold">
                                        Total Amount
                                    </span>

                                    <span className="text-2xl font-black text-primary">
                                        ₹{cartTotal.toLocaleString('en-IN')}
                                    </span>

                                </div>

                            </div>


                            {/* Security */}

                            <div className="mt-5 flex items-center gap-3 rounded-xl border border-base-300 p-4">

                                <span className="text-xl">
                                    🔒
                                </span>

                                <p className="text-xs leading-relaxed text-base-content/60">
                                    Your order information is securely handled.
                                    We never share your personal details.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Checkout