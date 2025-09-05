import React, { useMemo, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const colors = ['#f87171','#34d399','#60a5fa','#fbbf24','#a78bfa','#fb7185','#22d3ee','#f59e0b']

function randomSet(){
  const cats = ['Sparrow','Starling','Pigeon','Goldfinch','Other','Spanish','German','French','Mandarin']
  const n = 4 + Math.floor(Math.random()*3)
  const used = new Set()
  const rows = []
  for(let i=0;i<n;i++){
    let name
    do { name = cats[Math.floor(Math.random()*cats.length)] } while(used.has(name))
    used.add(name)
    rows.push({name, count: 1 + Math.floor(Math.random()*12)})
  }
  return rows
}

export default function QuizPie(){
  const [rows, setRows] = useState(randomSet())
  const total = useMemo(()=> rows.reduce((s,r)=>s+r.count,0),[rows])
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const target = rows[idx % rows.length]

  const check = ()=>{
    const correct = (target.count/total)*360
    const given = Number(answer)
    const ok = Math.abs(given - correct) <= 2  // within 2 degrees
    setScore(s=> s + (ok?1:0))
    setIdx(i=> i+1)
    setAnswer('')
    if((idx+1) % rows.length === 0){
      // new round
      setRows(randomSet())
      setIdx(0)
    }
  }

  return (
    <div className="card">
      <h3 className="font-semibold text-slate-800 mb-3">Slice & Sector — Angle Challenge</h3>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={rows} dataKey="count" nameKey="name" innerRadius={60} outerRadius={110} label>
                {rows.map((d,i)=>(<Cell key={i} fill={colors[i%colors.length]} />))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-slate-700">Total = <span className="font-semibold">{total}</span></p>
          <p className="mt-2">What is the sector angle (in degrees) for <span className="font-semibold">{target?.name}</span>?</p>
          <div className="flex items-center gap-2 mt-2">
            <input className="input w-32" placeholder="e.g., 72" value={answer} onChange={e=>setAnswer(e.target.value)} />
            <button className="btn" onClick={check}>Check</button>
            <button className="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300" onClick={()=>{setRows(randomSet()); setIdx(0); setScore(0); setAnswer('')}}>New</button>
          </div>
          <p className="mt-3 text-slate-600 text-sm">You’re correct if you’re within ±2° of the exact angle.</p>
          <p className="mt-4">Score: <span className="font-semibold">{score}</span></p>
        </div>
      </div>
    </div>
  )
}
