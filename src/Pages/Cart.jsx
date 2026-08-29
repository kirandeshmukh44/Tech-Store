import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Cart = () => {

    const navigate = useNavigate()

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,
    } = useCart()


    // ================= EMPTY CART =================

    if (cartItems.length === 0) {

        return (
            <div className="min-h-screen bg-base-200">

                <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">

                    {/* Background Glow */}

                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

                    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />


                    {/* Empty Cart Card */}

                    <div className="relative w-full max-w-xl">

                        <div className="rounded-[2rem] border border-base-300 bg-base-100 p-8 text-center shadow-xl md:p-12">

                            {/* Icon */}

                            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 text-6xl">

                                🛒

                            </div>


                            <p className="mt-8 font-semibold tracking-widest text-primary">
                                YOUR CART
                            </p>


                            <h1 className="mt-3 text-4xl font-black">
                                Your Cart is Empty
                            </h1>


                            <p className="mx-auto mt-4 max-w-md leading-relaxed text-base-content/60">

                                Looks like you haven't added anything
                                to your cart yet. Explore our products
                                and find something you love.

                            </p>


                            <button
                                onClick={() => navigate('/products')}
                                className="btn btn-primary btn-lg mt-8 px-8 shadow-lg shadow-primary/20"
                            >
                                Explore Products →
                            </button>

                        </div>

                    </div>

                </section>

            </div>
        )
    }


    // ================= CART PAGE =================

    return (
        <div className="min-h-screen bg-base-200">


            {/* ================= HEADER ================= */}

            <section className="relative overflow-hidden bg-base-100">

                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-18">

                    <p className="font-semibold tracking-widest text-primary">
                        TECHSTORE
                    </p>

                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <h1 className="text-4xl font-black md:text-5xl">
                                Shopping Cart
                            </h1>

                            <p className="mt-3 text-base-content/60">
                                Review your selected products before checkout.
                            </p>

                        </div>


                        {/* Cart Count */}

                        <div className="badge badge-primary badge-lg px-5 py-4 font-semibold">

                            {cartCount}
                            {cartCount === 1 ? ' Item' : ' Items'}

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CART CONTENT ================= */}

            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-3">


                    {/* ================= CART ITEMS ================= */}

                    <div className="space-y-5 lg:col-span-2">

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center md:p-6">


                                    {/* ================= IMAGE ================= */}

                                    <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-2xl bg-base-200 p-5 sm:h-36 sm:w-36">

                                        <img
                                            src={item.image}
                                            alt={item.heading}
                                            className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
                                        />

                                    </div>


                                    {/* ================= PRODUCT INFO ================= */}

                                    <div className="flex min-w-0 flex-1 flex-col">

                                        <div className="flex items-start justify-between gap-4">

                                            <div>

                                                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                                    {item.category}
                                                </p>

                                                <h2 className="mt-1 text-xl font-bold">
                                                    {item.heading}
                                                </h2>

                                            </div>


                                            {/* Remove */}

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="btn btn-ghost btn-sm btn-circle text-error hover:bg-error/10"
                                                title="Remove item"
                                            >
                                                ✕
                                            </button>

                                        </div>


                                        {/* Description */}

                                        <p className="mt-2 line-clamp-2 text-sm text-base-content/50">
                                            {item.desc}
                                        </p>


                                        {/* Bottom */}

                                        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">


                                            {/* Quantity */}

                                            <div className="flex items-center">

                                                <div className="join border border-base-300 rounded-xl">

                                                    <button
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        disabled={item.quantity <= 1}
                                                        className="btn btn-sm join-item btn-ghost"
                                                    >
                                                        −
                                                    </button>

                                                    <div className="flex h-8 min-w-10 items-center justify-center bg-base-200 px-3 text-sm font-bold">
                                                        {item.quantity}
                                                    </div>

                                                    <button
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="btn btn-sm join-item btn-ghost"
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>


                                            {/* Price */}

                                            <div className="text-left sm:text-right">

                                                <p className="text-xs text-base-content/40">
                                                    ₹{Number(item.price).toLocaleString('en-IN')}
                                                    {' '}each
                                                </p>

                                                <p className="mt-1 text-xl font-black text-primary">
                                                    ₹{(
                                                        item.price *
                                                        item.quantity
                                                    ).toLocaleString('en-IN')}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}


                        {/* Continue Shopping */}

                        <button
                            onClick={() => navigate('/products')}
                            className="btn btn-ghost"
                        >
                            ← Continue Shopping
                        </button>

                    </div>


                    {/* ================= ORDER SUMMARY ================= */}

                    <div>

                        <div className="sticky top-24 overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-lg">


                            {/* Summary Header */}

                            <div className="border-b border-base-300 bg-base-200/50 p-6">

                                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                    Order Summary
                                </p>

                                <h2 className="mt-1 text-2xl font-black">
                                    Your Order
                                </h2>

                            </div>


                            <div className="p-6">


                                {/* Items */}

                                <div className="space-y-4">

                                    {cartItems.map((item) => (

                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between gap-4"
                                        >

                                            <div className="flex min-w-0 items-center gap-3">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 p-2">

                                                    <img
                                                        src={item.image}
                                                        alt={item.heading}
                                                        className="h-full w-full object-contain"
                                                    />

                                                </div>

                                                <div className="min-w-0">

                                                    <p className="truncate text-sm font-semibold">
                                                        {item.heading}
                                                    </p>

                                                    <p className="text-xs text-base-content/50">
                                                        Qty: {item.quantity}
                                                    </p>

                                                </div>

                                            </div>


                                            <p className="shrink-0 text-sm font-bold">
                                                ₹{(
                                                    item.price *
                                                    item.quantity
                                                ).toLocaleString('en-IN')}
                                            </p>

                                        </div>

                                    ))}

                                </div>


                                <div className="my-6 border-t border-base-300" />


                                {/* Subtotal */}

                                <div className="flex justify-between text-sm text-base-content/60">

                                    <span>
                                        Subtotal
                                    </span>

                                    <span className="font-semibold text-base-content">
                                        ₹{cartTotal.toLocaleString('en-IN')}
                                    </span>

                                </div>


                                {/* Delivery */}

                                <div className="mt-4 flex justify-between text-sm text-base-content/60">

                                    <span>
                                        Delivery
                                    </span>

                                    <span className="font-bold text-success">
                                        FREE
                                    </span>

                                </div>


                                {/* Discount */}

                                <div className="mt-4 flex justify-between text-sm text-base-content/60">

                                    <span>
                                        Discount
                                    </span>

                                    <span className="font-bold text-success">
                                        ₹0
                                    </span>

                                </div>


                                <div className="my-6 border-t border-base-300" />


                                {/* Total */}

                                <div className="flex items-center justify-between">

                                    <span className="text-lg font-bold">
                                        Total
                                    </span>

                                    <span className="text-3xl font-black text-primary">
                                        ₹{cartTotal.toLocaleString('en-IN')}
                                    </span>

                                </div>


                                {/* Checkout */}

                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="btn btn-primary btn-lg mt-6 w-full shadow-lg shadow-primary/20"
                                >
                                    Proceed to Checkout →
                                </button>


                                {/* Secure */}

                                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-base-content/50">

                                    <span>
                                        🔒
                                    </span>

                                    <span>
                                        Secure & trusted checkout
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BOTTOM CTA ================= */}

            <section className="bg-primary text-primary-content">

                <div className="mx-auto max-w-4xl px-6 py-14 text-center">

                    <div className="text-4xl">
                        ⚡
                    </div>

                    <h2 className="mt-4 text-3xl font-black">
                        Upgrade Your Tech Life
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl opacity-80">
                        Discover more products and complete your
                        perfect technology setup.
                    </p>

                    <button
                        onClick={() => navigate('/products')}
                        className="btn btn-neutral mt-6"
                    >
                        Continue Shopping
                    </button>

                </div>

            </section>

        </div>
    )
}

export default Cart
