import React from 'react'
import { Moon, Sun, ShoppingCart, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = ({ dark, toggleDark, openCart }) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-4 z-50 w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <button className="flex items-center gap-2 text-white/90">
          <Menu size={18} className="opacity-70" />
          <span className="text-sm font-semibold tracking-widest">CYBERLUX</span>
        </button>
        <div className="flex items-center gap-2">
          <button onClick={toggleDark} className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={openCart} className="group relative rounded-full bg-fuchsia-500/90 p-2 text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-500">
            <ShoppingCart size={18} />
            <span className="pointer-events-none absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/90 px-1 text-xs font-bold text-slate-900 shadow" id="cart-count">0</span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
