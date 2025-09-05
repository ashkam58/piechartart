import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const bands = ['10s','20s','30s','40s','50s','60s','70s','80s','90s']

export default function PyramidWorked({ step }){
  const [men]   = useState([4,5,3,2,4,2,1,1,0])
  const [women] = useState([3,4,5,3,4,3,2,1,0])
  const data = bands.map((b,i)=>({band:b, men:-men[i], women:women[i]}))

  const showBasics = step >= 0
  const showMid    = step >= 1
  const showSeniors= step >= 2
  const showSummary= step >= 3

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <ol className="list-decimal pl-5 text-slate-800 space-y-2">
          <li>Read left (men) vs right (women). Compare bar lengths at each age band.</li>
          {showMid && <li>Middle bands (30s–50s): women slightly exceed men (right bars a bit longer).</li>}
          {showSeniors && <li>Older bands (70s+): both taper; women remain marginally higher.</li>}
          {showSummary && <li><strong>Summary:</strong> Younger bands balanced; women dominate mid-to-old bands → likely higher female longevity.</li>}
        </ol>
      </div>

      <div className="card h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{left: 40}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={v=>Math.abs(v)} />
            <YAxis type="category" dataKey="band" />
            <Tooltip formatter={(v,n)=>[Math.abs(v), n]} />
            <Bar dataKey="men" stackId="a" />
            <Bar dataKey="women" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// Sandbox: tweak values and compare
function PyramidSandbox(){
  const [men, setMen] = useState([4,5,3,2,4,2,1,1,0])
  const [women, setWomen] = useState([3,4,5,3,4,3,2,1,0])
  const data = bands.map((b,i)=>({band:b, men:-Math.abs(men[i]||0), women:Math.abs(women[i]||0)}))
  const upd = (set, i, v)=> set(prev=>{ const cp=[...prev]; cp[i]=Number(v)||0; return cp })

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="grid grid-cols-3 gap-2">
        {bands.map((b,i)=>(
          <div key={b} className="p-2 rounded-xl bg-slate-100">
            <div className="text-xs text-slate-600">{b}</div>
            <input className="input w-20 mt-1" type="number" value={men[i]} onChange={e=>upd(setMen,i,e.target.value)} />
            <div className="text-xs mt-1 text-slate-600">Men</div>
            <input className="input w-20 mt-1" type="number" value={women[i]} onChange={e=>upd(setWomen,i,e.target.value)} />
            <div className="text-xs mt-1 text-slate-600">Women</div>
          </div>
        ))}
      </div>
      <div className="card h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{left: 40}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={v=>Math.abs(v)} />
            <YAxis type="category" dataKey="band" />
            <Tooltip formatter={(v,n)=>[Math.abs(v), n]} />
            <Bar dataKey="men" stackId="a" />
            <Bar dataKey="women" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
PyramidWorked.Sandbox = PyramidSandbox
