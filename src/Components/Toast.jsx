import React from 'react'
import { useCart } from '../Context/CartContext'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

const Toast = () => {
  const { toast, closeToast } = useCart()

  if (!toast) return null

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />,
    info: <Info className="h-5 w-5 text-sky-400 shrink-0" />,
  }

  const borderColors = {
    success: 'border-emerald-500/30 bg-emerald-950/80 text-emerald-100',
    error: 'border-rose-500/30 bg-rose-950/80 text-rose-100',
    info: 'border-sky-500/30 bg-sky-950/80 text-sky-100',
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] max-w-sm animate-bounce-in">
      <div
        className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 shadow-2xl backdrop-blur-xl transition-all ${
          borderColors[toast.type] || borderColors.success
        }`}
      >
        {icons[toast.type] || icons.success}
        <p className="text-sm font-medium pr-2">{toast.message}</p>
        <button
          onClick={closeToast}
          className="ml-auto text-xs opacity-60 hover:opacity-100 transition p-1"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default Toast

