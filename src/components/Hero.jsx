import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(124,58,237,0.25),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          CYBERLUX
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-slate-200 md:text-xl"
        >
          Minimal futurism apparel and objects. Crafted with precision. Designed for motion.
        </motion.p>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#shop" className="group relative overflow-hidden rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20">
            <span className="relative z-10">Shop Featured</span>
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-r from-fuchsia-500/30 to-indigo-500/30 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a href="#collections" className="rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 ring-1 ring-white/20 transition hover:bg-white/10">Explore Collections</a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 mx-auto flex w-full max-w-7xl justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 text-slate-300"
        >
          <div className="h-6 w-3 rounded-full border border-white/30 p-0.5">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="h-2 w-2 rounded-full bg-white" />
          </div>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
