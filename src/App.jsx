import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(true)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id)
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    const el = document.getElementById('cart-count')
    if (el) el.textContent = String(cart.reduce((s, i) => s + i.qty, 1))
  }

  const checkout = async () => {
    const payload = {
      items: cart.map((i) => ({
        product_id: i.id,
        title: i.title,
        price: i.price,
        quantity: i.qty,
        thumbnail: i.thumbnail || i.images?.[0]
      })),
      email: 'demo@cyberlux.co',
      notes: 'MVP simulated checkout'
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      alert(`Order confirmed! ID: ${data.order_id}\nTotal: $${data.total}`)
      setCart([])
      setCartOpen(false)
    } catch (e) {
      alert('Checkout failed. Please try again.')
    }
  }

  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} openCart={openCart} />
      <Hero />
      <main>
        {/* Featured collections horizontal scroll could go here */}
        <ProductGrid addToCart={addToCart} />
      </main>
      <Footer />

      <CartDrawer open={cartOpen} items={cart} close={closeCart} checkout={checkout} />
    </div>
  )
}

export default App
