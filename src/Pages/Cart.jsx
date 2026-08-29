import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Cart = () => {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
    } = useCart()


    // ================= EMPTY CART =================

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-base-200">

                <section className="relative overflow-hidden bg-neutral text-neutral-content">

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
                    <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-4xl shadow-xl">
                            🛒
                        </div>

                        <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                            TechStore Cart
                        </p>

                        <h1 className="mt-3 text-4xl font-black md:text-6xl">
                            Your cart is waiting.
                        </h1>

                        <p className="mx-auto mt-5 max-w-xl text-neutral-content/60">
                            You haven't added anything yet. Explore our collection
                            and find the perfect tech for you.
                        </p>

                        <Link
                            to="/products"
                            className="btn btn-primary mt-8 rounded-xl px-8 shadow-lg shadow-primary/30"
                        >
                            Explore Products →
                        </Link>

                    </div>

                </section>

            </div>
        )
    }


    return (
        <div className="min-h-screen bg-base-200">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-neutral text-neutral-content">

                <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

                <div className="absolute -bottom-40 -left-40 h-[25rem] w-[25rem] rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                        <div>

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">

                                <span className="h-2 w-2 rounded-full bg-success" />

                                Your shopping session is active

                            </div>

                            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                                Shopping
                                <span className="text-primary"> Cart.</span>
                            </h1>

                            <p className="mt-4 max-w-xl text-neutral-content/60">
                                Everything you've selected, all in one place.
                                Review your items and get ready to upgrade your tech.
                            </p>

                        </div>


                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">

                            <p className="text-sm text-neutral-content/50">
                                Items in cart
                            </p>

                            <p className="mt-1 text-3xl font-black">
                                {cartItems.reduce(
                                    (total, item) => total + item.quantity,
                                    0
                                )}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= MAIN ================= */}

            <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">


                    {/* ================= LEFT ================= */}

                    <div>

                        <div className="mb-5 flex items-center justify-between">

                            <div>

                                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                    Your Selection
                                </p>

                                <h2 className="mt-1 text-2xl font-black">
                                    Cart Items
                                </h2>

                            </div>

                            <span className="rounded-full bg-base-100 px-4 py-2 text-sm font-semibold shadow-sm">
                                {cartItems.length} products
                            </span>

                        </div>


                        {/* Product List */}

                        <div className="space-y-4">

                            {cartItems.map((item) => (

                                <div
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
                                >

                                    <div className="flex flex-col gap-5 sm:flex-row">


                                        {/* IMAGE */}

                                        <div className="relative flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-base-200 sm:h-32 sm:w-32">

                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                                            <img
                                                src={item.image}
                                                alt={item.heading}
                                                className="relative h-full w-full object-contain p-4 transition duration-500 group-hover:scale-110"
                                            />

                                            <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-content">
                                                NEW
                                            </span>

                                        </div>


                                        {/* DETAILS */}

                                        <div className="flex min-w-0 flex-1 flex-col">

                                            <div className="flex items-start justify-between gap-4">

                                                <div>

                                                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                                        {item.category}
                                                    </p>

                                                    <h3 className="mt-1 text-xl font-black">
                                                        {item.heading}
                                                    </h3>

                                                </div>


                                                {/* REMOVE */}

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="btn btn-ghost btn-sm rounded-lg text-error hover:bg-error/10"
                                                    title="Remove item"
                                                >
                                                    Remove
                                                </button>

                                            </div>


                                            {/* Rating */}

                                            <div className="mt-2 flex items-center gap-2">

                                                <span className="text-sm tracking-wide text-warning">
                                                    ★★★★★
                                                </span>

                                                <span className="text-xs text-base-content/40">
                                                    4.8 / 5
                                                </span>

                                            </div>


                                            {/* BOTTOM */}

                                            <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">


                                                {/* Quantity */}

                                                <div>

                                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-base-content/40">
                                                        Quantity
                                                    </p>

                                                    <div className="flex w-fit items-center overflow-hidden rounded-xl border border-base-300 bg-base-200">

                                                        <button
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            className="flex h-10 w-10 items-center justify-center text-lg font-bold transition hover:bg-base-300"
                                                        >
                                                            −
                                                        </button>

                                                        <span className="flex h-10 min-w-12 items-center justify-center border-x border-base-300 bg-base-100 px-3 font-bold">
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() => increaseQuantity(item.id)}
                                                            className="flex h-10 w-10 items-center justify-center text-lg font-bold transition hover:bg-base-300"
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </div>


                                                {/* PRICE */}

                                                <div className="sm:text-right">

                                                    <p className="text-xs text-base-content/40">
                                                        ₹{Number(item.price).toLocaleString('en-IN')}
                                                        {' '}each
                                                    </p>

                                                    <p className="mt-1 text-2xl font-black text-primary">
                                                        ₹{Number(
                                                            item.price * item.quantity
                                                        ).toLocaleString('en-IN')}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Continue Shopping */}

                        <Link
                            to="/products"
                            className="btn btn-outline mt-6 rounded-xl"
                        >
                            ← Continue Shopping
                        </Link>

                    </div>


                    {/* ================= RIGHT SUMMARY ================= */}

                    <aside>

                        <div className="sticky top-24 overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">


                            {/* Summary Header */}

                            <div className="relative overflow-hidden bg-primary p-6 text-primary-content">

                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                                <div className="relative">

                                    <p className="text-sm font-semibold uppercase tracking-widest opacity-70">
                                        Checkout
                                    </p>

                                    <h2 className="mt-1 text-2xl font-black">
                                        Order Summary
                                    </h2>

                                </div>

                            </div>


                            <div className="p-6">


                                {/* Price */}

                                <div className="space-y-4">

                                    <div className="flex justify-between">

                                        <span className="text-base-content/60">
                                            Subtotal
                                        </span>

                                        <span className="font-bold">
                                            ₹{Number(cartTotal).toLocaleString('en-IN')}
                                        </span>

                                    </div>


                                    <div className="flex justify-between">

                                        <span className="text-base-content/60">
                                            Delivery
                                        </span>

                                        <span className="font-bold text-success">
                                            FREE
                                        </span>

                                    </div>


                                    <div className="flex justify-between">

                                        <span className="text-base-content/60">
                                            Discount
                                        </span>

                                        <span className="font-bold text-success">
                                            − ₹0
                                        </span>

                                    </div>

                                </div>


                                <div className="my-6 border-t border-dashed border-base-300" />


                                {/* Total */}

                                <div className="flex items-end justify-between">

                                    <div>

                                        <p className="text-sm text-base-content/50">
                                            Total
                                        </p>

                                        <p className="mt-1 text-3xl font-black">
                                            ₹{Number(cartTotal).toLocaleString('en-IN')}
                                        </p>

                                    </div>

                                    <span className="badge badge-success">
                                        FREE DELIVERY
                                    </span>

                                </div>


                                {/* Checkout */}

                                <button className="btn btn-primary mt-7 h-14 w-full rounded-2xl text-base font-bold shadow-lg shadow-primary/20">

                                    Proceed to Checkout
                                    <span className="text-lg">→</span>

                                </button>


                                {/* Security */}

                                <div className="mt-5 rounded-2xl bg-base-200 p-4">

                                    <div className="flex gap-3">

                                        <div className="text-xl">
                                            🔒
                                        </div>

                                        <div>

                                            <p className="text-sm font-bold">
                                                Secure Checkout
                                            </p>

                                            <p className="mt-1 text-xs leading-relaxed text-base-content/50">
                                                Your payment and personal information
                                                are protected.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </aside>

                </div>

            </main>


            {/* ================= TRUST BAR ================= */}

            <section className="border-t border-base-300 bg-base-100">

                <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl">
                            🚚
                        </div>

                        <div>

                            <p className="font-bold">
                                Fast Delivery
                            </p>

                            <p className="text-xs text-base-content/50">
                                Delivered to your doorstep
                            </p>

                        </div>

                    </div>


                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl">
                            🛡️
                        </div>

                        <div>

                            <p className="font-bold">
                                Secure Shopping
                            </p>

                            <p className="text-xs text-base-content/50">
                                Safe & protected payments
                            </p>

                        </div>

                    </div>


                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl">
                            ⭐
                        </div>

                        <div>

                            <p className="font-bold">
                                Trusted Quality
                            </p>

                            <p className="text-xs text-base-content/50">
                                Quality tech products
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Cart
