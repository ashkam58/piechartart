import React, { useMemo, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts'

// Example tallies collapsed to numbers: three schools voting for four charities
const base = {
  'St Mary':     { Oxfam: 10, 'Save the Children': 8, RSPCA: 6, 'Age UK': 4 },
  'Chilbrook':   { Oxfam: 9,  'Save the Children': 12, RSPCA: 7, 'Age UK': 3 },
  'Oakmead':     { Oxfam: 6,  'Save the Children': 10, RSPCA: 5, 'Age UK': 2 },
}
const categories = ['Oxfam','Save the Children','RSPCA','Age UK']
const schools = Object.keys(base)

function toChart(school){
  return categories.map(cat => ({ charity: cat, votes: base[school][cat] }))
}

export default function CompoundBarWorked({ step }){
  const showChart   = step >= 0
  const showCompare = step >= 1
  const showWinner  = step >= 2

  // Totals per charity across all schools
  const totals = categories.map(cat => ({
    cat,
    total: schools.reduce((s,sch)=> s + base[sch][cat], 0)
  }))
  const best = totals.reduce((b,x)=> x.total>b.total ? x : b, totals[0])

  return (
    <div className="space-y-6">
      <div className="card">
        <ol className="list-decimal pl-5 text-slate-800 space-y-2">
          <li>From the two-way table, plot a compound bar chart (charities on x-axis, separate bars for schools).</li>
          {showCompare && <li>Compare bars per category to see which school contributed most to each charity.</li>}
          {showWinner && <li>Total across schools by category → overall most-voted charity is <strong>{best.cat}</strong> with <strong>{best.total}</strong> votes.</li>}
        </ol>
      </div>

      {/* Charts per school (stacked horizontally for clarity) */}
      <div className="grid md:grid-cols-3 gap-4">
        {schools.map((sch)=>(
          <div className="card h-72" key={sch}>
            <div className="font-semibold text-slate-800 mb-1">{sch}</div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={toChart(sch)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="charity" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="votes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* Overall comparison (compound) */}
      {showChart && (
        <div className="card h-80">
          <div className="font-semibold text-slate-800 mb-1">Compound comparison</div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categories.map(cat => ({
              charity: cat,
              ...schools.reduce((obj,sch)=>({ ...obj, [sch]: base[sch][cat]}), {})
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="charity" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              {schools.map((sch,i)=> <Bar key={sch} dataKey={sch} />)}
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

// Sandbox to tweak numbers
function CompSandbox(){
  const [data,setData]=useState(JSON.parse(JSON.stringify(base)))
  const tots = categories.map(cat=>({cat, total:Object.keys(data).reduce((s,sch)=>s+data[sch][cat],0)}))

  const update=(sch,cat,val)=> setData(prev=> ({...prev, [sch]:{...prev[sch],[cat]:Number(val)||0}}))

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead><tr className="text-left text-slate-600"><th className="p-2">School</th>{categories.map(c=><th key={c} className="p-2">{c}</th>)}</tr></thead>
          <tbody>
            {Object.keys(data).map(sch=>(
              <tr key={sch} className="border-t">
                <td className="p-2 font-semibold">{sch}</td>
                {categories.map(cat=>(
                  <td key={cat} className="p-2">
                    <input className="input w-20" type="number" value={data[sch][cat]} onChange={e=>update(sch,cat,e.target.value)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 text-sm text-slate-700">Overall top charity: {
          tots.reduce((b,x)=>x.total>b.total?x:b,tots[0]).cat
        } ({tots.reduce((b,x)=>x.total>b.total?x:b,tots[0]).total} votes)</div>
      </div>
      <div className="card h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categories.map(cat => ({
            charity: cat,
            ...Object.keys(data).reduce((obj,sch)=>({ ...obj, [sch]: data[sch][cat]}), {})
          }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="charity" />
            <YAxis allowDecimals={false} />
            <Tooltip /><Legend />
            {Object.keys(data).map((sch)=> <Bar key={sch} dataKey={sch} />)}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
CompoundBarWorked.Sandbox = CompSandbox
