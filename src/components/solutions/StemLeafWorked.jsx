import React, { useMemo, useState } from 'react'

function parse(nums){ return nums.slice().sort((a,b)=>a-b) }
function median(nums){
  const n=nums.length; if(!n) return 0
  const m=Math.floor(n/2)
  return n%2 ? nums[m] : (nums[m-1]+nums[m])/2
}
function range(nums){ if(!nums.length) return 0; return nums[nums.length-1]-nums[0] }
function mode(nums){
  const f=new Map(); nums.forEach(x=>f.set(x,(f.get(x)||0)+1))
  let best=[], mf=0
  for(const [k,v] of f){ if(v>mf){ mf=v; best=[k] } else if(v===mf){ best.push(k) } }
  return {values:best, freq:mf}
}
function buildStemLeaf(nums, base){
  const m=new Map()
  for(const n of nums){
    const s=Math.floor(n/base), l=Math.abs(n%base)
    if(!m.has(s)) m.set(s,[])
    m.get(s).push(l)
  }
  for(const v of m.values()) v.sort((a,b)=>a-b)
  return Array.from(m.entries()).sort((a,b)=>a[0]-b[0])
}

export default function StemLeafWorked({ step }){
  // Example from your sheet style
  const raw = [12,13,14,17,19,21,24,16,20,22]
  const data = useMemo(()=>parse(raw),[])
  const n = data.length
  const med = median(data)
  const rng = range(data)
  const md  = mode(data)
  const base = 10
  const table = buildStemLeaf(data, base)

  const showOrder   = step >= 0
  const showTable   = step >= 1
  const showMedian  = step >= 2
  const showRange   = step >= 3
  const showMode    = step >= 4
  const showKey     = step >= 1

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <ol className="list-decimal pl-5 text-slate-800 space-y-2">
          <li>Order the data (ascending). <span className="text-slate-600">n = {n}</span></li>
          {showTable && <li>Split into stems (10s) and leaves (1s). Build the stem-and-leaf table.</li>}
          {showMedian && <li>Median is the middle value(s): for n={n}, locate position (n+1)/2 → <strong>{med}</strong>.</li>}
          {showRange && <li>Range = max − min = <strong>{rng}</strong>.</li>}
          {showMode && <li>Mode(s) = most frequent value(s): <strong>{md.values.join(', ')}</strong> (freq {md.freq}).</li>}
        </ol>

        {showOrder && (
          <div className="mt-4 card">
            <div className="font-semibold text-slate-800 mb-1">Ordered data</div>
            <div className="text-slate-700">{data.join(', ')}</div>
          </div>
        )}
      </div>

      <div className="card">
        <div className="font-semibold text-slate-800 mb-2">Stem-and-leaf (base 10)</div>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="p-2">Stem</th>
              <th className="p-2">Leaves</th>
              <th className="p-2">Freq</th>
            </tr>
          </thead>
          <tbody>
            {showTable && table.map(([s, leaves])=>(
              <tr key={s} className="border-t">
                <td className="p-2">{s}</td>
                <td className="p-2">{leaves.join(' ')}</td>
                <td className="p-2">{leaves.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showKey && <p className="text-sm text-slate-600 mt-2">Key: 1 | 2 means 12</p>}
        {showMedian && <p className="mt-2">Median = <strong>{med}</strong></p>}
        {showRange && <p>Range = <strong>{rng}</strong></p>}
        {showMode && <p>Mode = <strong>{md.values.join(', ')}</strong> (freq {md.freq})</p>}
      </div>
    </div>
  )
}

// Optional sandbox
function SLSandbox(){
  const [text,setText]=useState('12 13 14 17 19 21 24 16 20 22')
  const nums = useMemo(()=> text.split(/[,\s]+/).map(Number).filter(n=>!Number.isNaN(n)).sort((a,b)=>a-b),[text])
  const med = median(nums), rng=range(nums), md=mode(nums)
  const rows = buildStemLeaf(nums,10)
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <textarea className="input w-full min-h-[120px]" value={text} onChange={e=>setText(e.target.value)} />
        <div className="mt-2 text-sm text-slate-700">
          n={nums.length} • Median {med} • Range {rng} • Mode {md.values.join(', ')} (freq {md.freq})
        </div>
      </div>
      <div className="overflow-x-auto card">
        <table className="min-w-full text-sm">
          <thead><tr className="text-left text-slate-600"><th className="p-2">Stem</th><th className="p-2">Leaves</th><th className="p-2">Freq</th></tr></thead>
          <tbody>{rows.map(([s,l])=> (<tr key={s} className="border-t"><td className="p-2">{s}</td><td className="p-2">{l.join(' ')}</td><td className="p-2">{l.length}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  )
}
StemLeafWorked.Sandbox = SLSandbox
