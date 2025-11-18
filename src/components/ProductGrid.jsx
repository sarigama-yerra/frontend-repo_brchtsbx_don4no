import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const filters = ['All', 'Apparel', 'Accessories', 'Footwear', 'Outerwear', 'Wearables']

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img src={`${product.thumbnail || product.images?.[0]}&auto=format&fit=crop&w=800&q=60`} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-90" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white">{product.title}</h3>
          <p className="mt-1 text-xs text-slate-300">{product.category}</p>
        </div>
        <div className="text-white">${product.price.toFixed(2)}</div>
      </div>
      <button onClick={() => addToCart(product)} className="mt-3 w-full rounded-xl bg-fuchsia-500/90 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-500">Add to cart</button>
    </motion.div>
  )
}

const ProductGrid = ({ addToCart }) => {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('All')
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section id="shop" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">New Arrivals</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${active === f ? 'bg-white text-slate-900' : 'bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20'}`}>{f}</button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {loading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/5" />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />)
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProductGrid
