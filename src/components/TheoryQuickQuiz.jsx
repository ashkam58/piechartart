import React, { useMemo, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const COLORS = ['#60a5fa','#34d399','#f87171','#fbbf24','#a78bfa','#22d3ee','#f59e0b','#fb7185']

function makeSet(){
  const pool = ['Sparrow','Starling','Pigeon','Goldfinch','Robin','Swift','Wren','Jay']
  const n = 4 + Math.floor(Math.random()*3) // 4–6 categories
  const used = new Set()
  const rows = []
  while(rows.length < n){
    const name = pool[Math.floor(Math.random()*pool.length)]
    if(used.has(name)) continue
    used.add(name)
    rows.push({ name, count: 2 + Math.floor(Math.random()*13) }) // 2–14
  }
  return rows
}

export default function TheoryQuickQuiz(){
  // dataset + target
  const [rows, setRows] = useState(makeSet())
  const total = useMemo(()=> rows.reduce((s,r)=>s+r.count,0), [rows])
  const [idx, setIdx] = useState(0)
  const target = rows[idx % rows.length]

  // student guess (angle)
  const [guess, setGuess] = useState(90)
  const [result, setResult] = useState(null) // 'correct' | 'close' | 'wrong'

  const trueAngle = useMemo(()=> total ? (target.count/total)*360 : 0, [target, total])
  const tolerance = 3 // degrees

  const check = () => {
    const diff = Math.abs(guess - trueAngle)
    if (diff <= tolerance) setResult('correct')
    else if (diff <= 8) setResult('close')
    else setResult('wrong')
  }

  const next = () => {
    // move to next target; if wrapped, refresh rows
    const nextIdx = idx + 1
    if (nextIdx % rows.length === 0) {
      setRows(makeSet())
      setIdx(0)
    } else {
      setIdx(nextIdx)
    }
    setGuess(90)
    setResult(null)
  }

  const resetSet = () => {
    setRows(makeSet())
    setIdx(0)
    setGuess(90)
    setResult(null)
  }

  return (
    <section className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800">🎯 Quick Quiz — Guess the Sector Angle</h3>
        <button className="px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95" onClick={resetSet}>
          New Set
        </button>
      </div>

      <p className="text-slate-700 mt-1">
        Total = <span className="font-semibold">{total}</span>.  
        What’s the sector angle for <span className="font-semibold">{target?.name}</span>? 
        Use <em>Angle = (count / total) × 360°</em>.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-4 items-center">
        {/* Pie chart with highlight */}
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={rows} dataKey="count" nameKey="name" innerRadius={60} outerRadius={110} label>
                {rows.map((r,i)=>(
                  <Cell
                    key={r.name}
                    fill={COLORS[i % COLORS.length]}
                    stroke={i === (idx % rows.length) ? '#111827' : 'white'}
                    strokeWidth={i === (idx % rows.length) ? 3 : 1}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip formatter={(v,n,p)=>[v, p.payload.name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Controls */}
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-600">
                  <th className="p-2">Category</th>
                  <th className="p-2">Count</th>
                  <th className="p-2">Angle (exact)</th>
                  <th className="p-2">Percent</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r,i)=>{
                  const a = total ? (r.count/total)*360 : 0
                  const p = total ? (r.count/total)*100 : 0
                  const hl = i === (idx % rows.length)
                  return (
                    <tr key={r.name} className={`border-t ${hl ? 'bg-indigo-50' : ''}`}>
                      <td className="p-2">{r.name}</td>
                      <td className="p-2">{r.count}</td>
                      <td className="p-2">{hl ? a.toFixed(1) : '—'}</td>
                      <td className="p-2">{hl ? p.toFixed(1)+'%' : '—'}</td>
                    </tr>
                  )
                })}
                <tr className="font-semibold">
                  <td className="p-2">Total</td>
                  <td className="p-2">{total}</td>
                  <td className="p-2">{rows.reduce((s,r)=> s + (total ? (r.count/total)*360 : 0), 0).toFixed(1)}</td>
                  <td className="p-2">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Guess slider */}
          <div className="mt-4">
            <label className="block text-sm text-slate-600 mb-1">Your guess (degrees)</label>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={guess}
              onChange={(e)=>setGuess(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex items-center justify-between mt-1 text-slate-700">
              <span>0°</span>
              <span className="font-semibold">{guess}°</span>
              <span>360°</span>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95" onClick={check}>
                Check
              </button>
              <button className="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300" onClick={next}>
                Next
              </button>
            </div>

            {result && (
              <motion.div
                initial={{opacity:0, y:6}}
                animate={{opacity:1, y:0}}
                className={`mt-3 px-3 py-2 rounded-xl text-sm ${
                  result==='correct' ? 'bg-green-100 text-green-800' :
                  result==='close'   ? 'bg-yellow-100 text-yellow-800' :
                                       'bg-red-100 text-red-800'
                }`}
              >
                {result==='correct' && <>✅ Nailed it! True angle ≈ <strong>{trueAngle.toFixed(1)}°</strong> (±{tolerance}° accepted).</>}
                {result==='close'   && <>🟡 Close! True angle ≈ <strong>{trueAngle.toFixed(1)}°</strong>. Nudge your estimate.</>}
                {result==='wrong'   && <>❌ Not yet. True angle ≈ <strong>{trueAngle.toFixed(1)}°</strong>. Try the next one!</>}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <p className="text-slate-600 text-sm mt-4">
        Memory hook: <strong>C → P → A</strong> (Count → Percent → Angle). If you know counts and total, the rest is just buttons on a calculator.
      </p>
    </section>
  )
}
