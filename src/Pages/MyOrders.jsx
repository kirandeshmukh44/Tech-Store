import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import {
  Package,
  MapPin,
  Truck,
  Clock,
} from 'lucide-react'

const MyOrders = () => {
  const navigate = useNavigate()
  const { orders } = useAuth()

  if (orders.length === 0) {
    return (
      <div className="min-h-[85vh] bg-base-200 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-base-300 bg-base-100 p-8 sm:p-12 text-center shadow-xl">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <Package className="h-12 w-12" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">
            ACCOUNT ORDERS
          </p>

          <h2 className="mt-2 text-3xl font-black">No Orders Yet</h2>

          <p className="mt-3 text-sm leading-relaxed text-base-content/60 max-w-sm mx-auto">
            You haven't placed any orders with TechStore yet. Browse our products and place your first order!
          </p>

          <button
            onClick={() => navigate('/products')}
            className="btn btn-primary btn-lg rounded-2xl mt-8 px-8 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition"
          >
            Explore Catalog →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-base-300 pb-6 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Order History
            </p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-black">
              My Past Orders
            </h1>
          </div>

          <span className="badge badge-primary badge-lg font-bold px-4 py-3">
            {orders.length} {orders.length === 1 ? 'Order' : 'Orders'} Placed
          </span>
        </div>

        <div className="space-y-6">
          {orders.map((order) => {
            const orderDate = new Date(order.createdAt).toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              }
            )

            return (
              <div
                key={order.id}
                className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition hover:shadow-md"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 bg-base-200/60 p-5 sm:px-7 sm:py-4 border-b border-base-300">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                    <div>
                      <span className="text-base-content/50 block">ORDER ID</span>
                      <span className="font-mono font-bold text-primary">
                        {order.id}
                      </span>
                    </div>

                    <div className="h-6 w-px bg-base-300 hidden sm:block" />

                    <div className="flex items-center gap-1.5 text-base-content/70">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{orderDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="badge badge-success badge-sm font-bold flex items-center gap-1">
                      <Truck className="h-3 w-3" />
                      {order.status || 'Processing'}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 space-y-6">
                  {/* Items List */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {order.items?.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 rounded-2xl bg-base-200/40 p-3 border border-base-300/50"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-base-100 p-2">
                          <img
                            src={item.image}
                            alt={item.heading}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold truncate">
                            {item.heading}
                          </h4>
                          <p className="text-[11px] text-base-content/60">
                            Qty: {item.quantity} × ₹
                            {Number(item.price).toLocaleString('en-IN')}
                          </p>
                        </div>

                        <span className="text-xs font-black text-primary">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-base-300/80 pt-4 text-xs">
                    <div className="flex items-center gap-2 text-base-content/60">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span>
                        Delivering to: {order.shippingAddress?.name}, {order.shippingAddress?.city} ({order.shippingAddress?.pincode})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                      <span className="text-base-content/60">Total Paid:</span>
                      <span className="text-lg font-black text-primary">
                        ₹{Number(order.total).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyOrders

