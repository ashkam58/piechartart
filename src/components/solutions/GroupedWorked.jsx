import React, { useMemo, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { motion } from 'framer-motion'

function groupedMean(bins){
  const N = bins.reduce((s,b)=>s+b.freq,0)
  if(!N) return 0
  const sum = bins.reduce((s,b)=> s + ((b.lo+b.hi)/2)*b.freq, 0)
  return sum/N
}
function cumulative(bins){ let c=0; return bins.map(b=>{ c+=b.freq; return {...b, cf:c} }) }

export default function GroupedWorked({ step }){
  // Example classes like heights in cm (inspired by textbook)
  const bins = [
    {lo: 135, hi: 140, freq: 2, label: '135-140'},
    {lo: 140, hi: 145, freq: 7, label: '140-145'},
    {lo: 145, hi: 150, freq: 6, label: '145-150'},
    {lo: 150, hi: 155, freq: 4, label: '150-155'},
    {lo: 155, hi: 160, freq: 1, label: '155-160'},
  ]
  const N = bins.reduce((s,b)=>s+b.freq,0)
  const gMean = groupedMean(bins)
  const withCF = cumulative(bins)
  const medianCut = N/2
  const medianClass = withCF.find(b => b.cf >= medianCut)
  const modalClass = bins.reduce((best,b)=> b.freq>best.freq ? b : best, bins[0])

  const showTable   = step >= 0
  const showMean    = step >= 1
  const showMedian  = step >= 2
  const showMode    = step >= 3

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Steps explanation */}
      <div>
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl"
          >
            <h4 className="font-bold text-purple-800 text-lg mb-2">📦 Yuvaan's Height Data!</h4>
            <p className="text-purple-700">
              We measured 20 students' heights and grouped them into boxes. Let's find the patterns! 📏
            </p>
          </motion.div>

          <ol className="list-decimal pl-5 text-slate-800 space-y-3">
            <li>
              <strong>📊 Check our data:</strong> Total students = <span className="font-mono bg-yellow-200 px-2 py-1 rounded">{N}</span>
              {showTable && (
                <div className="mt-2 text-sm text-green-700">
                  ✅ Perfect! All students counted.
                </div>
              )}
            </li>
            
            {showMean && (
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <strong>🎯 Find average height:</strong>
                <div className="mt-2 p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                  <div className="text-sm text-green-800">
                    Formula: Σ(frequency × midpoint) ÷ total
                  </div>
                  <div className="font-mono text-lg text-green-700 mt-1">
                    Average ≈ <strong>{gMean.toFixed(1)} cm</strong> 🏃‍♂️
                  </div>
                </div>
              </motion.li>
            )}
            
            {showMedian && (
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <strong>🎪 Find the middle student:</strong>
                <div className="mt-2 p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                  <div className="text-sm text-blue-800">
                    Middle position = {medianCut}th student
                  </div>
                  <div className="font-mono text-lg text-blue-700 mt-1">
                    Median class: <strong>{medianClass?.label} cm</strong> 📍
                  </div>
                </div>
              </motion.li>
            )}
            
            {showMode && (
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <strong>👑 Find the most popular height:</strong>
                <div className="mt-2 p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                  <div className="text-sm text-orange-800">
                    Tallest bar = most students
                  </div>
                  <div className="font-mono text-lg text-orange-700 mt-1">
                    Modal class: <strong>{modalClass.label} cm</strong> 👥
                  </div>
                </div>
              </motion.li>
            )}
          </ol>
        </div>

        {showTable && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <div className="card bg-gradient-to-br from-purple-50 to-pink-50">
              <h4 className="font-bold text-purple-800 mb-3">📋 Data Table</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-purple-600 bg-purple-100">
                      <th className="p-2 rounded-l">Height (cm)</th>
                      <th className="p-2">Midpoint</th>
                      <th className="p-2">Freq</th>
                      {showMedian && <th className="p-2 rounded-r">Cum.Freq</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {withCF.map((b,i) => {
                      const midpoint = (b.lo + b.hi) / 2
                      const isModal = b === modalClass
                      const isMedian = showMedian && b === medianClass
                      return (
                        <tr key={i} className={`
                          border-t transition-colors
                          ${isModal ? 'bg-orange-100 border-orange-300' : ''}
                          ${isMedian ? 'bg-blue-100 border-blue-300' : ''}
                        `}>
                          <td className="p-2 font-mono">{b.label}</td>
                          <td className="p-2 font-mono">{midpoint}</td>
                          <td className="p-2 font-mono font-bold">{b.freq}</td>
                          {showMedian && <td className="p-2 font-mono">{b.cf}</td>}
                        </tr>
                      )
                    })}
                    <tr className="font-bold bg-gray-100 border-t-2">
                      <td className="p-2">Total</td>
                      <td className="p-2">—</td>
                      <td className="p-2 font-mono">{N}</td>
                      {showMedian && <td className="p-2">—</td>}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Visual histogram */}
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card"
        >
          <h4 className="font-bold text-slate-800 mb-2">📊 Height Histogram</h4>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bins.map((b,i) => ({
                ...b,
                name: b.label,
                midpoint: (b.lo + b.hi) / 2
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} students`,
                    name === 'freq' ? 'Frequency' : name
                  ]}
                />
                <Bar 
                  dataKey="freq" 
                  fill="#8884d8"
                  radius={[4, 4, 0, 0]}
                >
                  {bins.map((b, i) => (
                    <Bar
                      key={i}
                      fill={
                        b === modalClass ? '#ff6b6b' :
                        showMedian && b === medianClass ? '#4ecdc4' :
                        '#8884d8'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-slate-600 mt-2 space-y-1">
            {showMode && <div>🟠 Orange = Modal class (most popular)</div>}
            {showMedian && <div>🟢 Teal = Median class (middle student)</div>}
          </div>
        </motion.div>

        {/* Summary stats */}
        {(showMean || showMedian || showMode) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card bg-gradient-to-br from-yellow-100 to-orange-100"
          >
            <h4 className="font-bold text-orange-800 mb-3">🏆 Summary for Yuvaan</h4>
            <div className="space-y-2">
              {showMean && (
                <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                  <span className="flex items-center gap-2">
                    <span>🎯</span>
                    <span className="font-semibold">Average Height:</span>
                  </span>
                  <span className="font-mono text-lg">{gMean.toFixed(1)} cm</span>
                </div>
              )}
              {showMedian && (
                <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                  <span className="flex items-center gap-2">
                    <span>🎪</span>
                    <span className="font-semibold">Middle Group:</span>
                  </span>
                  <span className="font-mono text-lg">{medianClass?.label} cm</span>
                </div>
              )}
              {showMode && (
                <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                  <span className="flex items-center gap-2">
                    <span>👑</span>
                    <span className="font-semibold">Most Popular:</span>
                  </span>
                  <span className="font-mono text-lg">{modalClass.label} cm</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Optional sandbox
function GroupedSandbox(){
  const [rows,setRows]=useState([
    {lo:135,hi:140,freq:2},
    {lo:140,hi:145,freq:7},
    {lo:145,hi:150,freq:6},
    {lo:150,hi:155,freq:4},
    {lo:155,hi:160,freq:1},
  ])
  const N = rows.reduce((s,b)=>s+(Number(b.freq)||0),0)
  const gMean = groupedMean(rows)
  const withCF = cumulative(rows)

  const update=(i,field,val)=> setRows(prev=>{ const cp=[...prev]; cp[i]={...cp[i],[field]:Number(val)||0}; return cp })
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead><tr className="text-left text-slate-600"><th className="p-2">lo</th><th className="p-2">hi</th><th className="p-2">freq</th></tr></thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} className="border-t">
              <td className="p-2"><input className="input w-24" type="number" value={r.lo} onChange={e=>update(i,'lo',e.target.value)} /></td>
              <td className="p-2"><input className="input w-24" type="number" value={r.hi} onChange={e=>update(i,'hi',e.target.value)} /></td>
              <td className="p-2"><input className="input w-24" type="number" value={r.freq} onChange={e=>update(i,'freq',e.target.value)} /></td>
            </tr>
          ))}
        </tbody></table>
        <div className="mt-2 text-sm text-slate-700">Σf = {N} • Grouped mean ≈ {gMean.toFixed(2)}</div>
      </div>
      <div className="card h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rows.map(b=>({name:`${b.lo}-${b.hi}`, freq:b.freq}))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /><YAxis allowDecimals={false} />
            <Tooltip /><Bar dataKey="freq" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
GroupedWorked.Sandbox = GroupedSandbox
