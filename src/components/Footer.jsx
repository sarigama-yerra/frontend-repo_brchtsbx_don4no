import React from 'react'

const Footer = () => {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/60 py-12 text-center text-slate-300">
      <p className="text-sm">© {new Date().getFullYear()} CYBERLUX. Crafted for speed and motion.</p>
    </footer>
  )
}

export default Footer
