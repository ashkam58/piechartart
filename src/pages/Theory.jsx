import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

function ToggleCard({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-slate-800">{title}</h3>
        {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-2 text-slate-700"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Theory(){
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="card bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <h2 className="text-2xl font-bold text-slate-800">📊 Core Ideas & Cartoon Theory</h2>
        <p className="mt-1 text-slate-700">
          Let’s turn boring stats formulas into <span className="font-semibold">cartoon-style memory bites</span>. 
          Hover, click, and explore—your brain will do the rest!
        </p>
      </section>

      {/* Pie Chart */}
      <ToggleCard title="🍕 Pie Chart (fractions of a circle)">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <p>A circle sliced into <em>sectors</em>, each proportional to frequency.</p>
            <ul className="list-disc pl-5">
              <li>Angle = (count ÷ total) × 360°</li>
              <li>Percent = (count ÷ total) × 100</li>
              <li>Fractions simplify nicely into pizza slices</li>
            </ul>
            <p className="mt-2 text-slate-600 text-sm">Quick check: all angles must sum to 360°.</p>
          </div>
          <motion.img 
            src="https://via.placeholder.com/300x200/8B5CF6/ffffff?text=Pie+Chart"
            alt="Pie chart example"
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="rounded-xl shadow-md"
          />
        </div>
      </ToggleCard>

      {/* Bar Chart */}
      <ToggleCard title="📊 Bar Chart & Histogram">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <motion.img 
            src="https://via.placeholder.com/300x200/3B82F6/ffffff?text=Bar+Chart"
            alt="Bar chart example"
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="rounded-xl shadow-md"
          />
          <div>
            <p><strong>Bars = frequencies.</strong></p>
            <ul className="list-disc pl-5">
              <li>Bar chart → categories</li>
              <li>Histogram → numeric classes, bars touch each other</li>
              <li>Height = frequency (or frequency density if widths vary)</li>
            </ul>
          </div>
        </div>
      </ToggleCard>

      {/* Stem-and-Leaf */}
      <ToggleCard title="🌱 Stem-and-Leaf">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <p>Each number is split into:</p>
            <ul className="list-disc pl-5">
              <li><strong>Stem</strong> = leading digits</li>
              <li><strong>Leaf</strong> = last digit</li>
              <li>Shows distribution but keeps raw data intact</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">E.g. 2 | 5 = 25</p>
          </div>
          <motion.img 
            src="https://via.placeholder.com/300x200/10B981/ffffff?text=Stem+%26+Leaf"
            alt="Stem and leaf example"
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="rounded-xl shadow-md"
          />
        </div>
      </ToggleCard>

      {/* Grouped Frequency */}
      <ToggleCard title="📦 Grouped Frequency Table">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <motion.img 
            src="https://via.placeholder.com/300x200/F59E0B/ffffff?text=Frequency+Table"
            alt="Grouped frequency table example"
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="rounded-xl shadow-md"
          />
          <div>
            <p>Divide data into equal-width <em>bins</em>:</p>
            <ul className="list-disc pl-5">
              <li>Each bin is [lo, hi)</li>
              <li>Count frequencies → modal class = tallest bar</li>
              <li>Grouped mean = Σ(f × midpoint) ÷ Σf</li>
            </ul>
          </div>
        </div>
      </ToggleCard>

      {/* Population Pyramid */}
      <ToggleCard title="🏛️ Population Pyramid">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <p>Back-to-back bars (men vs women). Useful for:</p>
            <ul className="list-disc pl-5">
              <li>Comparing two distributions quickly</li>
              <li>Spotting symmetry / skewness</li>
              <li>Demography: younger vs older populations</li>
            </ul>
          </div>
          <motion.img 
            src="https://via.placeholder.com/300x200/EF4444/ffffff?text=Population+Pyramid"
            alt="Population pyramid example"
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="rounded-xl shadow-md"
          />
        </div>
      </ToggleCard>

      {/* Heuristics */}
      <ToggleCard title="🧠 UPSC-style Heuristics">
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li><em>Sanity:</em> total = 360° or 100%</li>
          <li><em>Comparisons:</em> use percentages, not raw counts</li>
          <li><em>Modal class:</em> tallest bar = mode</li>
          <li><em>Median location:</em> (n+1)/2 in ordered list</li>
          <li><em>Grouped mean:</em> use midpoints × frequency</li>
        </ul>
      </ToggleCard>

      {/* Memory hooks */}
      <ToggleCard title="🎣 Memory Hooks (Cartoon Mnemonics)">
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li><strong>“C-P-A mantra”:</strong> Count → Percent → Angle</li>
          <li><strong>“Left digits lead”:</strong> stems = leaders, leaves = followers</li>
          <li><strong>“Bins are boxes”:</strong> grouped classes are tidy boxes</li>
        </ul>
      </ToggleCard>
    </div>
  )
}
