import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CartDrawer = ({ open, items, close, checkout }) => {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20 }}
          className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/10 bg-slate-900/90 p-6 text-white backdrop-blur-2xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Your Cart</h3>
            <button onClick={close} className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20">Close</button>
          </div>

          <div className="flex max-h-[60vh] flex-col gap-3 overflow-y-auto pr-2">
            {items.length === 0 && <p className="text-slate-300">Your cart is empty.</p>}
            {items.map((i) => (
              <div key={i.id} className="flex gap-3 rounded-xl bg-white/5 p-3">
                <img src={`${i.thumbnail || i.images?.[0]}&auto=format&fit=crop&w=240&q=60`} alt={i.title} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-semibold">{i.title}</p>
                    <span className="text-sm">${(i.price * i.qty).toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-slate-300">Qty: {i.qty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 rounded-2xl bg-white/5 p-4">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Tax (8%)</span>
              <span>${(subtotal * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-2 text-white">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${(subtotal * 1.08).toFixed(2)}</span>
            </div>
            <button onClick={checkout} className="mt-3 w-full rounded-xl bg-fuchsia-500/90 px-4 py-2 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-500">Checkout</button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
