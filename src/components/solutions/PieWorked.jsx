import React, { useMemo, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion, AnimatePresence } from 'framer-motion'

const colors = ['#60a5fa','#34d399','#f87171','#fbbf24','#a78bfa','#22d3ee']

// A tidy helper
const angle = (count, total) => total ? (count / total) * 360 : 0

// ---------- Steps renderer ----------
export default function PieWorked({ step }) {
  // Example dataset based on the statistics image (Birds in a garden)
  const base = [
    { name: 'Starling', count: 12 },
    { name: 'Sparrow',  count: 15 },
    { name: 'Robin',  count: 8 },
    { name: 'Other',count: 5 },
  ]
  const total = base.reduce((s, r) => s + r.count, 0)
  const targetIndex = 1 // Sparrow (most frequent)
  const target = base[targetIndex]

  // Progressive reveal of solution steps
  const showProblem = step >= 0
  const showStep1   = step >= 1
  const showStep2   = step >= 2
  const showStep3   = step >= 3
  const showStep4   = step >= 4
  const showStep5   = step >= 5

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {/* Step-by-step solution */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800">Problem:</h4>
          <p className="text-blue-700">A survey counted birds in a garden: Starling (12), Sparrow (15), Robin (8), Other (5). 
          Draw a pie chart and find the angle for Sparrow.</p>
        </div>

        <div className="space-y-3">
          {showProblem && (
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}}
              className="border-l-4 border-blue-500 pl-4"
            >
              <h5 className="font-semibold text-slate-800">Step 0: Understand the data</h5>
              <p className="text-slate-700">We have counts for each bird type. Total birds = 12 + 15 + 8 + 5 = {total}</p>
            </motion.div>
          )}

          {showStep1 && (
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}}
              className="border-l-4 border-green-500 pl-4"
            >
              <h5 className="font-semibold text-slate-800">Step 1: Remember the pie chart formula</h5>
              <p className="text-slate-700">Angle for each sector = (count ÷ total) × 360°</p>
              <p className="text-sm text-slate-600">This is because a full circle = 360°</p>
            </motion.div>
          )}

          {showStep2 && (
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}}
              className="border-l-4 border-yellow-500 pl-4"
            >
              <h5 className="font-semibold text-slate-800">Step 2: Calculate Sparrow's angle</h5>
              <p className="text-slate-700">Sparrow angle = ({target.count} ÷ {total}) × 360°</p>
              <p className="text-slate-700">= {(target.count/total).toFixed(3)} × 360°</p>
              <p className="text-slate-700 font-semibold">= {angle(target.count,total).toFixed(1)}°</p>
            </motion.div>
          )}

          {showStep3 && (
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}}
              className="border-l-4 border-purple-500 pl-4"
            >
              <h5 className="font-semibold text-slate-800">Step 3: Calculate percentage</h5>
              <p className="text-slate-700">Sparrow percentage = ({target.count} ÷ {total}) × 100%</p>
              <p className="text-slate-700 font-semibold">= {((target.count/total)*100).toFixed(1)}%</p>
            </motion.div>
          )}

          {showStep4 && (
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}}
              className="border-l-4 border-red-500 pl-4"
            >
              <h5 className="font-semibold text-slate-800">Step 4: Calculate all sectors</h5>
              <div className="overflow-x-auto mt-2">
                <table className="min-w-full text-sm border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="p-2 text-left">Bird Type</th>
                      <th className="p-2 text-left">Count</th>
                      <th className="p-2 text-left">Angle (°)</th>
                      <th className="p-2 text-left">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {base.map((r,i) => {
                      const a = angle(r.count, total)
                      const p = total ? (r.count/total)*100 : 0
                      const hl = i === targetIndex
                      return (
                        <tr key={r.name} className={`border-t ${hl ? 'bg-yellow-50 font-semibold' : ''}`}>
                          <td className="p-2">{r.name}</td>
                          <td className="p-2">{r.count}</td>
                          <td className="p-2">{a.toFixed(1)}°</td>
                          <td className="p-2">{p.toFixed(1)}%</td>
                        </tr>
                      )
                    })}
                    <tr className="font-bold bg-slate-100">
                      <td className="p-2">Total</td>
                      <td className="p-2">{total}</td>
                      <td className="p-2">{base.reduce((s,r)=>s+angle(r.count,total),0).toFixed(1)}°</td>
                      <td className="p-2">100.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {showStep5 && (
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}}
              className="border-l-4 border-indigo-500 pl-4"
            >
              <h5 className="font-semibold text-slate-800">Step 5: Check your work</h5>
              <p className="text-slate-700">✓ All angles sum to {base.reduce((s,r)=>s+angle(r.count,total),0).toFixed(1)}° ≈ 360°</p>
              <p className="text-slate-700">✓ All percentages sum to 100%</p>
              <p className="text-slate-700">✓ Sparrow has the largest sector ({((target.count/total)*100).toFixed(1)}%) as expected</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Pie visualization */}
      <div className="card">
        <h3 className="font-semibold text-slate-800 mb-2">Interactive Pie Chart</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={base}
                dataKey="count"
                nameKey="name"
                innerRadius={60}
                outerRadius={110}
                isAnimationActive
                label={showStep4}
              >
                {base.map((d,i)=>(
                  <Cell key={i}
                        fill={colors[i%colors.length]}
                        stroke={i===targetIndex && showStep2 ? '#111827' : 'white'}
                        strokeWidth={i===targetIndex && showStep2 ? 3 : 1}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip formatter={(value, name) => [
                `${value} birds (${((value/total)*100).toFixed(1)}%)`,
                name
              ]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {showStep2 && (
          <div className="bg-yellow-50 p-3 rounded mt-2">
            <p className="text-sm text-slate-700">
              <strong>{base[targetIndex].name}</strong> sector highlighted: 
              <span className="font-semibold"> {angle(base[targetIndex].count,total).toFixed(1)}° angle</span>
              {showStep3 && <span className="font-semibold"> ({((base[targetIndex].count/total)*100).toFixed(1)}%)</span>}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- Sandbox (free play) ----------
function PieSandbox() {
  const [rows, setRows] = useState([
    { name: 'Spanish', count: 14 },
    { name: 'German',  count: 8 },
    { name: 'French',  count: 6 },
    { name: 'Mandarin',count: 4 },
  ])
  const total = useMemo(() => rows.reduce((s,r)=>s+(Number(r.count)||0),0), [rows])

  const update = (i, field, value) => {
    setRows(prev => {
      const cp = [...prev]
      cp[i] = { ...cp[i], [field]: field==='count' ? Number(value)||0 : value }
      return cp
    })
  }
  const addRow = () => setRows(prev => [...prev, { name:'New', count:1 }])
  const removeRow = (i) => setRows(prev => prev.filter((_,idx)=>idx!==i))

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="p-2">Category</th>
              <th className="p-2">Count</th>
              <th className="p-2">Angle</th>
              <th className="p-2">Percent</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>{
              const a = angle(r.count, total)
              const p = total ? (r.count/total)*100 : 0
              return (
                <tr key={i} className="border-t">
                  <td className="p-2"><input className="input w-full" value={r.name} onChange={e=>update(i,'name',e.target.value)} /></td>
                  <td className="p-2"><input className="input w-24" type="number" value={r.count} onChange={e=>update(i,'count',e.target.value)} /></td>
                  <td className="p-2">{total ? a.toFixed(1) : '-'}</td>
                  <td className="p-2">{total ? p.toFixed(1)+'%' : '-'}</td>
                  <td className="p-2"><button className="text-red-500 hover:underline" onClick={()=>removeRow(i)}>remove</button></td>
                </tr>
              )
            })}
            <tr className="font-semibold">
              <td className="p-2">Total</td>
              <td className="p-2">{total}</td>
              <td className="p-2" colSpan="3"></td>
            </tr>
          </tbody>
        </table>
        <button className="btn mt-3" onClick={addRow}>+ Add row</button>
      </div>

      <div className="card">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={rows} dataKey="count" nameKey="name" innerRadius={60} outerRadius={110} label>
                {rows.map((_,i)=>(<Cell key={i} fill={colors[i%colors.length]} />))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-slate-600 mt-2">Angles = (count/total) × 360°. Percents = (count/total) × 100.</p>
      </div>
    </div>
  )
}

// Attach as a static property so SolutionCard can render it
PieWorked.Sandbox = PieSandbox
