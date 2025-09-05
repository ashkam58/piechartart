import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`

export default function NavBar() {
  return (
    <motion.header 
      initial={{y:-20, opacity:0}} 
      animate={{y:0, opacity:1}} 
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            📊
          </span>
          <div>
            <h1 className="font-bold text-slate-800 text-xl">Visual Stats Lab</h1>
            <p className="text-slate-600 text-xs">Master Statistics Step-by-Step</p>
          </div>
        </div>
        <nav className="flex gap-1">
          <NavLink to="/" className={linkClass}>🏠 Home</NavLink>
          <NavLink to="/questions" className={linkClass}>📚 Questions</NavLink>
          <NavLink to="/solutions" className={linkClass}>📝 Solutions</NavLink>
          <NavLink to="/interactive" className={linkClass}>🎮 Tools</NavLink>
        </nav>
      </div>
    </motion.header>
  )
}
