import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ageBands = ['10s','20s','30s','40s','50s','60s','70s','80s','90s']

export default function PopulationPyramid(){
  const [men, setMen] = useState([4,5,3,2,4,2,1,1,0])
  const [women, setWomen] = useState([3,4,5,3,4,3,2,1,0])

  const data = ageBands.map((band, i)=> ({
    band,
    men: -Math.abs(men[i]||0), // negative to show left
    women: women[i]||0
  }))

  const update = (arrSetter, i, value) => {
    arrSetter(prev => {
      const cp = [...prev]
      cp[i] = Number(value)||0
      return cp
    })
  }

  return (
    <div className="card">
      <h3 className="font-semibold text-slate-800 mb-3">Back-to-back Bar (Population Pyramid)</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{left: 40}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(v)=>Math.abs(v)} />
              <YAxis type="category" dataKey="band" />
              <Tooltip formatter={(v,n)=>[Math.abs(v), n]} />
              <Bar dataKey="men" stackId="a" />
              <Bar dataKey="women" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-sm text-slate-600 mb-2">Edit frequencies for each 10-year band:</p>
          <div className="grid grid-cols-3 gap-2">
            {ageBands.map((b,i)=>(
              <div key={b} className="p-2 rounded-xl bg-slate-100">
                <div className="text-xs text-slate-600">{b}</div>
                <div className="flex items-center gap-1 mt-1">
                  <input className="input w-16" type="number" value={men[i]||0} onChange={e=>update(setMen,i,e.target.value)} />
                  <span className="text-slate-700 text-xs">Men</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <input className="input w-16" type="number" value={women[i]||0} onChange={e=>update(setWomen,i,e.target.value)} />
                  <span className="text-slate-700 text-xs">Women</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-2">Interpretation: Bars to the left are men, to the right are women. Compare by visual symmetry.</p>
        </div>
      </div>
    </div>
  )
}
