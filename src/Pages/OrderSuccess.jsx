import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './OrderSuccess.css'

const STAGE_COPY = {
    packing: {
        eyebrow: 'Preparing Your Order',
        title: 'Packing your order…',
    },
    loading: {
        eyebrow: 'Packing Complete',
        title: 'Loading onto the truck…',
    },
    shipping: {
        eyebrow: 'Your Order Is On The Way',
        title: 'Your order is speeding your way!',
    },
    arrived: {
        eyebrow: 'Almost There',
        title: 'Your order has arrived!',
    },
}

const OrderSuccess = () => {
    const [stage, setStage] = useState('packing')

    useEffect(() => {
        const timers = [
            setTimeout(() => setStage('loading'), 2200),
            setTimeout(() => setStage('shipping'), 3600),
            setTimeout(() => setStage('arrived'), 8200),
            setTimeout(() => setStage('success'), 9600),
        ]
        return () => timers.forEach(clearTimeout)
    }, [])

    const packed = stage !== 'packing'
    const onWay = stage === 'shipping' || stage === 'arrived' || stage === 'success'
    const delivered = stage === 'success'

    return (
        <div className={`order-success-page stage-${stage}`}>
            <div className="success-glow glow-one" />
            <div className="success-glow glow-two" />

            {/* ================= TOP STATUS ================= */}
            <div className="order-status">
                <div className="status-step active">
                    <span>✓</span>
                    <p>Order Confirmed</p>
                </div>
                <div className={`status-line ${packed ? 'filled' : ''}`} />
                <div className={`status-step ${packed ? 'active' : ''}`}>
                    <span>📦</span>
                    <p>Packed</p>
                </div>
                <div className={`status-line ${onWay ? 'filled' : ''}`} />
                <div className={`status-step ${onWay ? 'active' : ''}`}>
                    <span>🚚</span>
                    <p>On the Way</p>
                </div>
                <div className={`status-line ${delivered ? 'filled' : ''}`} />
                <div className={`status-step ${delivered ? 'active' : ''}`}>
                    <span>✓</span>
                    <p>Delivered</p>
                </div>
            </div>

            {/* ================= SCENE ================= */}
            <div className="delivery-scene">
                <svg
                    className="scene-svg"
                    viewBox="0 0 1100 420"
                    preserveAspectRatio="xMidYMax slice"
                >
                    <defs>
                        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0f1830" />
                            <stop offset="100%" stopColor="#182a52" />
                        </linearGradient>
                        <linearGradient id="roadFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#20293d" />
                            <stop offset="100%" stopColor="#0e131f" />
                        </linearGradient>
                        <linearGradient id="cargoGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4f8ef7" />
                            <stop offset="100%" stopColor="#2f5fd6" />
                        </linearGradient>
                        <linearGradient id="cabGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7fb4ff" />
                            <stop offset="100%" stopColor="#3f7de0" />
                        </linearGradient>
                        <linearGradient id="boxTop" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#f0c07f" />
                            <stop offset="100%" stopColor="#e2a758" />
                        </linearGradient>
                        <linearGradient id="boxFront" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#e0a35a" />
                            <stop offset="100%" stopColor="#b97a34" />
                        </linearGradient>
                        <linearGradient id="boxSide" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#a6702f" />
                            <stop offset="100%" stopColor="#8c5c24" />
                        </linearGradient>
                        <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#34d399" stopOpacity=".55" />
                            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* sky */}
                    <rect x="0" y="0" width="1100" height="420" fill="url(#skyFade)" />

                    {/* soft hills */}
                    <ellipse className="hill hill-a" cx="140" cy="330" rx="260" ry="90" />
                    <ellipse className="hill hill-b" cx="560" cy="345" rx="320" ry="80" />
                    <ellipse className="hill hill-c" cx="960" cy="335" rx="280" ry="90" />

                    {/* clouds */}
                    <g className="cloud cloud-a">
                        <ellipse cx="0" cy="0" rx="34" ry="16" />
                        <ellipse cx="26" cy="-6" rx="24" ry="13" />
                        <ellipse cx="-24" cy="-4" rx="20" ry="11" />
                    </g>
                    <g className="cloud cloud-b">
                        <ellipse cx="0" cy="0" rx="26" ry="12" />
                        <ellipse cx="20" cy="-5" rx="18" ry="10" />
                    </g>
                    <g className="cloud cloud-c">
                        <ellipse cx="0" cy="0" rx="30" ry="14" />
                        <ellipse cx="22" cy="-5" rx="20" ry="11" />
                        <ellipse cx="-22" cy="-4" rx="18" ry="10" />
                    </g>

                    {/* road */}
                    <rect x="0" y="330" width="1100" height="90" fill="url(#roadFade)" />
                    <rect x="0" y="330" width="1100" height="3" fill="#334155" />
                    <g className="road-dashes">
                        <g className="road-dashes-track">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <rect key={i} x={i * 90} y="373" width="46" height="6" rx="3" fill="#5b6b85" />
                            ))}
                            {Array.from({ length: 16 }).map((_, i) => (
                                <rect key={`b${i}`} x={1440 + i * 90} y="373" width="46" height="6" rx="3" fill="#5b6b85" />
                            ))}
                        </g>
                    </g>

                    {/* warehouse */}
                    <g className="warehouse" transform="translate(50,168)">
                        <polygon points="0,42 130,0 260,42 260,52 0,52" fill="#2c3b5c" />
                        <rect x="10" y="52" width="240" height="110" rx="4" fill="#1a2540" stroke="#324067" strokeWidth="2" />
                        <text x="30" y="90" className="warehouse-sign">
                            TECH<tspan fill="#7fb4ff">STORE</tspan>
                        </text>
                        <rect x="150" y="90" width="80" height="72" rx="3" fill="#0f172a" stroke="#425073" strokeWidth="2" />
                        <rect x="150" y="112" width="80" height="3" fill="#324067" />
                        <rect x="150" y="134" width="80" height="3" fill="#324067" />
                        <rect x="150" y="156" width="80" height="3" fill="#324067" />
                        <rect x="30" y="100" width="46" height="46" rx="4" fill="#101c34" stroke="#324067" strokeWidth="2" className="warehouse-window" />
                    </g>

                    {/* package (packing / loading stages) */}
                    <g className="package-group" transform="translate(330,255)">
                        <ellipse cx="30" cy="70" rx="34" ry="7" className="package-shadow" />
                        <g className="package-box">
                            <polygon points="0,18 30,0 60,18 30,36" fill="url(#boxTop)" />
                            <polygon points="0,18 30,36 30,66 0,48" fill="url(#boxFront)" />
                            <polygon points="60,18 30,36 30,66 60,48" fill="url(#boxSide)" />
                            <line x1="30" y1="0" x2="30" y2="36" stroke="#7c5427" strokeWidth="1.5" opacity=".5" />
                            <rect x="14" y="20" width="10" height="30" fill="rgba(255,224,160,.5)" transform="skewY(20)" />
                            <text x="30" y="55" textAnchor="middle" className="package-label">TS</text>
                        </g>
                    </g>

                    {/* truck */}
                    <g className="truck-anim">
                        <g className="truck-group" transform="translate(430,222)">
                            {/* cargo */}
                            <rect x="0" y="0" width="150" height="92" rx="8" fill="url(#cargoGrad)" stroke="#8fc0ff" strokeWidth="2" />
                            <text x="22" y="40" className="truck-logo">TECH<tspan fill="#cfe3ff">STORE</tspan></text>
                            <rect x="12" y="52" width="126" height="4" rx="2" fill="rgba(255,255,255,.18)" />
                            <rect x="12" y="64" width="90" height="4" rx="2" fill="rgba(255,255,255,.12)" />
                            <rect x="146" y="10" width="6" height="72" fill="#1d3f8c" opacity=".5" />

                            {/* cab */}
                            <path d="M150 92 V28 Q150 18 160 18 H196 Q206 18 212 28 L232 62 Q236 68 236 76 V92 Z" fill="url(#cabGrad)" stroke="#bfe0ff" strokeWidth="2" />
                            <path d="M170 26 H198 Q203 26 206 31 L218 54 H170 Z" fill="#0f1e3d" opacity=".85" />
                            <circle cx="230" cy="82" r="6" fill="#ffe27a" className="headlight" />
                            <rect x="205" y="70" width="14" height="3" rx="1.5" fill="#eaf4ff" opacity=".8" />

                            {/* wheels */}
                            <g transform="translate(38,92)">
                                <g className="wheel">
                                    <circle r="24" fill="#0b0f1a" stroke="#33415c" strokeWidth="6" />
                                    <circle r="7" fill="#5b6b85" stroke="#0b0f1a" strokeWidth="3" />
                                    <line x1="-16" y1="0" x2="16" y2="0" stroke="#33415c" strokeWidth="3" />
                                    <line x1="0" y1="-16" x2="0" y2="16" stroke="#33415c" strokeWidth="3" />
                                </g>
                            </g>
                            <g transform="translate(196,92)">
                                <g className="wheel">
                                    <circle r="24" fill="#0b0f1a" stroke="#33415c" strokeWidth="6" />
                                    <circle r="7" fill="#5b6b85" stroke="#0b0f1a" strokeWidth="3" />
                                    <line x1="-16" y1="0" x2="16" y2="0" stroke="#33415c" strokeWidth="3" />
                                    <line x1="0" y1="-16" x2="0" y2="16" stroke="#33415c" strokeWidth="3" />
                                </g>
                            </g>

                            {/* speed lines */}
                            <g className="speed-lines">
                                <rect x="-60" y="10" width="40" height="4" rx="2" />
                                <rect x="-80" y="28" width="55" height="4" rx="2" />
                                <rect x="-50" y="46" width="34" height="4" rx="2" />
                                <rect x="-70" y="64" width="46" height="4" rx="2" />
                            </g>
                        </g>
                    </g>

                    {/* destination pin */}
                    <g className="destination" transform="translate(1010,272)">
                        <circle cx="0" cy="0" r="46" fill="url(#pinGlow)" className="pin-glow" />
                        <ellipse cx="0" cy="46" rx="26" ry="6" fill="rgba(16,185,129,.25)" />
                        <path
                            d="M0,-34 C16,-34 28,-22 28,-8 C28,10 0,42 0,42 C0,42 -28,10 -28,-8 C-28,-22 -16,-34 0,-34 Z"
                            fill="#10b981"
                            stroke="#34d399"
                            strokeWidth="2"
                        />
                        <path d="M-9,-8 L-2,0 L11,-15" fill="none" stroke="#ecfdf5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>

            {/* ================= MESSAGE ================= */}
            <div className="success-content">
                {stage !== 'success' && (
                    <>
                        <div className="loading-ring" />
                        <p className="eyebrow">{STAGE_COPY[stage].eyebrow}</p>
                        <h1>{STAGE_COPY[stage].title}</h1>
                        <p className="success-description">Sit back and relax. We are taking care of everything.</p>
                    </>
                )}

                {stage === 'success' && (
                    <div className="final-success">
                        <div className="success-check">
                            <svg viewBox="0 0 52 52">
                                <circle cx="26" cy="26" r="24" />
                                <path d="M15 27 L22 34 L38 18" />
                            </svg>
                        </div>

                        <p className="eyebrow">ORDER COMPLETED</p>
                        <h1>
                            Your Order
                            <span> Is Placed!</span>
                        </h1>
                        <p>Thank you for shopping with TechStore. Your package is officially on its journey to you.</p>

                        <div className="success-actions">
                            <Link to="/products" className="btn btn-primary btn-lg">
                                Continue Shopping →
                            </Link>
                            <Link to="/home" className="btn btn-outline btn-lg">
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
