import React, { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const pastel = [
  '#60a5fa','#34d399','#f87171','#fbbf24','#c084fc','#f472b6','#22d3ee','#a3e635'
]

function angleOf(count,total){
  if(total===0) return 0
  return (count/total)*360
}

export default function PieBuilder(){
  const [rows,setRows] = useState([
    {name:'Spanish', count: 12},
    {name:'German', count: 8},
    {name:'French', count: 6},
    {name:'Mandarin', count: 4},
  ])

  const total = useMemo(()=> rows.reduce((s,r)=>s+(Number(r.count)||0),0),[rows])

  const addRow = ()=> setRows([...rows, {name:'New', count: 1}])
  const removeRow = (i)=> setRows(rows.filter((_,idx)=> idx!==i))

  const update = (i, field, value)=>{
    const copy = [...rows]
    copy[i] = {...copy[i], [field]: field==='count' ? Number(value) : value}
    setRows(copy)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-800">Data table</h3>
          <button className="btn" onClick={addRow}>+ Add</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="p-2">Category</th>
                <th className="p-2">Count</th>
                <th className="p-2">Fraction</th>
                <th className="p-2">Percent</th>
                <th className="p-2">Angle (°)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i)=>{
                const frac = total? (r.count/total):0
                return (
                  <tr key={i} className="border-t">
                    <td className="p-2">
                      <input className="input w-full" value={r.name} onChange={(e)=>update(i,'name',e.target.value)} />
                    </td>
                    <td className="p-2">
                      <input type="number" className="input w-24" value={r.count} onChange={(e)=>update(i,'count',e.target.value)} />
                    </td>
                    <td className="p-2">{total? frac.toFixed(3):'-'}</td>
                    <td className="p-2">{total? (frac*100).toFixed(1)+'%':'-'}</td>
                    <td className="p-2">{total? angleOf(r.count,total).toFixed(1):'-'}</td>
                    <td className="p-2">
                      <button onClick={()=>removeRow(i)} className="text-red-500 hover:underline">remove</button>
                    </td>
                  </tr>
                )
              })}
              <tr className="font-semibold">
                <td className="p-2">Total</td>
                <td className="p-2">{total}</td>
                <td className="p-2" colSpan="3"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-slate-600 text-sm">Angles = (count / total) × 360. Fractions/percentages update instantly.</p>
      </div>

      <div className="card">
        <h3 className="font-semibold text-slate-800 mb-3">Pie chart</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie dataKey="count" data={rows} innerRadius={60} outerRadius={110} nameKey="name" label>
                {rows.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pastel[index % pastel.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip formatter={(v, n, p)=>[v, p.payload.name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
