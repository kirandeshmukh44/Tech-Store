import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Package, CheckCircle2, Home, ShoppingBag, MapPin, Calendar } from 'lucide-react'
import './OrderSuccess.css'

const STAGE_COPY = {
    packing: {
        eyebrow: 'STAGE 1 / 4',
        title: 'Packing your authentic gear…',
    },
    loading: {
        eyebrow: 'STAGE 2 / 4',
        title: 'Inspected & loaded onto express transit…',
    },
    shipping: {
        eyebrow: 'STAGE 3 / 4',
        title: 'Speeding on the highway to your doorstep…',
    },
    arrived: {
        eyebrow: 'STAGE 4 / 4',
        title: 'Arrived at your local delivery hub!',
    },
}

const OrderSuccess = () => {
    const [stage, setStage] = useState('packing')
    const [order, setOrder] = useState(null)

    useEffect(() => {
        try {
            const saved = sessionStorage.getItem('last_order')
            if (saved) {
                setOrder(JSON.parse(saved))
            }
        } catch (e) {
            console.error(e)
        }

        const timers = [
            setTimeout(() => setStage('loading'), 1800),
            setTimeout(() => setStage('shipping'), 3200),
            setTimeout(() => setStage('arrived'), 6500),
            setTimeout(() => setStage('success'), 7800),
        ]
        return () => timers.forEach(clearTimeout)
    }, [])

    const packed = stage !== 'packing'
    const onWay = stage === 'shipping' || stage === 'arrived' || stage === 'success'
    const delivered = stage === 'success'

    // Estimated delivery date (2 days from now)
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 2)
    const formattedDelivery = deliveryDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    })

    return (
        <div className={`order-success-page stage-${stage}`}>
            <div className="success-glow glow-one" />
            <div className="success-glow glow-two" />

            {/* ================= TOP STEPPER ================= */}
            <div className="order-status">
                <div className="status-step active">
                    <span>✓</span>
                    <p>Confirmed</p>
                </div>
                <div className={`status-line ${packed ? 'filled' : ''}`} />
                <div className={`status-step ${packed ? 'active' : ''}`}>
                    <span>📦</span>
                    <p>Packed</p>
                </div>
                <div className={`status-line ${onWay ? 'filled' : ''}`} />
                <div className={`status-step ${onWay ? 'active' : ''}`}>
                    <span>🚚</span>
                    <p>On Way</p>
                </div>
                <div className={`status-line ${delivered ? 'filled' : ''}`} />
                <div className={`status-step ${delivered ? 'active' : ''}`}>
                    <span>✓</span>
                    <p>Delivered</p>
                </div>
            </div>

            {/* ================= SVG DELIVERY SCENE ================= */}
            <div className="delivery-scene">
                <svg
                    className="scene-svg"
                    viewBox="0 0 1100 420"
                    preserveAspectRatio="xMidYMax slice"
                >
                    <defs>
                        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0B0F19" />
                            <stop offset="100%" stopColor="#1E1B4B" />
                        </linearGradient>
                        <linearGradient id="roadFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1E293B" />
                            <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="cargoGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366F1" />
                            <stop offset="100%" stopColor="#4338CA" />
                        </linearGradient>
                        <linearGradient id="cabGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#818CF8" />
                            <stop offset="100%" stopColor="#4F46E5" />
                        </linearGradient>
                        <linearGradient id="boxTop" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                        <linearGradient id="boxFront" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#D97706" />
                            <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                        <linearGradient id="boxSide" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#92400E" />
                            <stop offset="100%" stopColor="#78350F" />
                        </linearGradient>
                        <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity=".55" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    <rect x="0" y="0" width="1100" height="420" fill="url(#skyFade)" />

                    <ellipse className="hill hill-a" cx="140" cy="330" rx="260" ry="90" fill="rgba(99,102,241,0.06)" />
                    <ellipse className="hill hill-b" cx="560" cy="345" rx="320" ry="80" fill="rgba(6,182,212,0.06)" />
                    <ellipse className="hill hill-c" cx="960" cy="335" rx="280" ry="90" fill="rgba(99,102,241,0.06)" />

                    <rect x="0" y="330" width="1100" height="90" fill="url(#roadFade)" />
                    <rect x="0" y="330" width="1100" height="3" fill="#334155" />
                    <g className="road-dashes">
                        <g className="road-dashes-track">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <rect key={i} x={i * 90} y="373" width="46" height="6" rx="3" fill="#64748B" />
                            ))}
                            {Array.from({ length: 16 }).map((_, i) => (
                                <rect key={`b${i}`} x={1440 + i * 90} y="373" width="46" height="6" rx="3" fill="#64748B" />
                            ))}
                        </g>
                    </g>

                    {/* Warehouse */}
                    <g className="warehouse" transform="translate(50,168)">
                        <polygon points="0,42 130,0 260,42 260,52 0,52" fill="#312E81" />
                        <rect x="10" y="52" width="240" height="110" rx="4" fill="#1E1B4B" stroke="#4338CA" strokeWidth="2" />
                        <text x="30" y="90" className="warehouse-sign" fill="#FFFFFF" fontWeight="bold">
                            TECH<tspan fill="#818CF8">STORE</tspan>
                        </text>
                        <rect x="150" y="90" width="80" height="72" rx="3" fill="#0F172A" stroke="#4338CA" strokeWidth="2" />
                        <rect x="30" y="100" width="46" height="46" rx="4" fill="#1E1B4B" stroke="#4338CA" strokeWidth="2" className="warehouse-window" />
                    </g>

                    {/* Package */}
                    <g className="package-group" transform="translate(330,255)">
                        <ellipse cx="30" cy="70" rx="34" ry="7" className="package-shadow" />
                        <g className="package-box">
                            <polygon points="0,18 30,0 60,18 30,36" fill="url(#boxTop)" />
                            <polygon points="0,18 30,36 30,66 0,48" fill="url(#boxFront)" />
                            <polygon points="60,18 30,36 30,66 60,48" fill="url(#boxSide)" />
                        </g>
                    </g>

                    {/* Truck */}
                    <g className="truck-anim">
                        <g className="truck-group" transform="translate(430,222)">
                            <rect x="0" y="0" width="150" height="92" rx="8" fill="url(#cargoGrad)" stroke="#A5B4FC" strokeWidth="2" />
                            <text x="22" y="40" className="truck-logo" fill="#FFFFFF" fontWeight="900">TECH<tspan fill="#A5B4FC">STORE</tspan></text>
                            <path d="M150 92 V28 Q150 18 160 18 H196 Q206 18 212 28 L232 62 Q236 68 236 76 V92 Z" fill="url(#cabGrad)" stroke="#C7D2FE" strokeWidth="2" />
                            <circle cx="230" cy="82" r="6" fill="#FDE047" className="headlight" />
                            <g transform="translate(38,92)">
                                <g className="wheel">
                                    <circle r="24" fill="#0B0F19" stroke="#334155" strokeWidth="6" />
                                </g>
                            </g>
                            <g transform="translate(196,92)">
                                <g className="wheel">
                                    <circle r="24" fill="#0B0F19" stroke="#334155" strokeWidth="6" />
                                </g>
                            </g>
                        </g>
                    </g>

                    {/* Destination Pin */}
                    <g className="destination" transform="translate(1010,272)">
                        <circle cx="0" cy="0" r="46" fill="url(#pinGlow)" className="pin-glow" />
                        <path
                            d="M0,-34 C16,-34 28,-22 28,-8 C28,10 0,42 0,42 C0,42 -28,10 -28,-8 C-28,-22 -16,-34 0,-34 Z"
                            fill="#10B981"
                            stroke="#34D399"
                            strokeWidth="2"
                        />
                        <path d="M-9,-8 L-2,0 L11,-15" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>

            {/* ================= MESSAGE & FINAL RECEIPT ================= */}
            <div className="success-content">
                {stage !== 'success' && (
                    <>
                        <div className="loading-ring" />
                        <p className="eyebrow">{STAGE_COPY[stage].eyebrow}</p>
                        <h1>{STAGE_COPY[stage].title}</h1>
                        <p className="success-description">
                            Preparing your hardware securely with warranty authentication.
                        </p>
                    </>
                )}

                {stage === 'success' && (
                    <div className="final-success">
                        <div className="success-check">
                            <CheckCircle2 className="h-20 w-20 text-emerald-400 mx-auto" />
                        </div>

                        <p className="eyebrow text-emerald-400">ORDER PLACED SUCCESSFULLY</p>
                        <h1 className="text-3xl sm:text-5xl font-black">
                            Thank You For Your Order!
                        </h1>

                        {order && (
                            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-left max-w-lg mx-auto space-y-4">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-xs text-white/60">Order ID</span>
                                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                                        {order.id}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-xs text-white/70">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        <span>Estimated Delivery</span>
                                    </div>
                                    <span className="font-bold text-white">{formattedDelivery}</span>
                                </div>

                                <div className="flex items-center justify-between text-xs text-white/70">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        <span>Delivering to</span>
                                    </div>
                                    <span className="font-bold text-white truncate max-w-44">
                                        {order.shippingAddress?.city}, {order.shippingAddress?.pincode}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                    <span className="text-sm font-bold">Total Paid</span>
                                    <span className="text-xl font-black text-emerald-400">
                                        ₹{Number(order.total).toLocaleString('en-IN')}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="success-actions mt-8 flex flex-wrap justify-center gap-3">
                            <Link to="/my-orders" className="btn btn-primary btn-lg rounded-2xl font-bold shadow-xl shadow-primary/25">
                                <Package className="h-5 w-5 mr-1" />
                                View Order History
                            </Link>
                            <Link to="/products" className="btn btn-outline btn-lg rounded-2xl font-bold border-white/20 text-white hover:bg-white/10">
                                <ShoppingBag className="h-5 w-5 mr-1" />
                                Shop More
                            </Link>
                            <Link to="/home" className="btn btn-ghost btn-lg rounded-2xl">
                                <Home className="h-5 w-5 mr-1" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrderSuccess
