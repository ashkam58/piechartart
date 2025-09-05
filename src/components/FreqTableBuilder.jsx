import React, { useMemo, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

function parseNums(txt){
  return txt.split(/[,\s]+/).map(Number).filter(n=>!Number.isNaN(n)).sort((a,b)=>a-b)
}

function groupedTable(nums, width){
  if(nums.length===0) return []
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  const start = Math.floor(min/width)*width
  const end = Math.ceil((max+1)/width)*width
  const bins = []
  for(let lo=start; lo<end; lo+=width){
    const hi = lo+width
    bins.push({lo, hi, freq:0})
  }
  for(const n of nums){
    const idx = Math.min(Math.floor((n-start)/width), bins.length-1)
    bins[idx].freq++
  }
  return bins
}

function mean(nums){ return nums.length? nums.reduce((a,b)=>a+b,0)/nums.length : 0 }
function median(nums){ const n=nums.length; if(!n) return 0; const m=Math.floor(n/2); return n%2? nums[m] : (nums[m-1]+nums[m])/2 }

export default function FreqTableBuilder(){
  const [text,setText] = useState("12 19 25 30 31 42 18 30 29 15 13 24 21 11 20 23 25 12 15 13")
  const [width,setWidth] = useState(5)
  const nums = useMemo(()=>parseNums(text),[text])
  const table = useMemo(()=>groupedTable(nums, width),[nums, width])

  // grouped mean by midpoints
  const groupedMean = useMemo(()=>{
    const n = nums.length
    if(!n) return 0
    const total = table.reduce((s,b)=> s + ((b.lo + b.hi)/2) * b.freq, 0)
    return total / n
  }, [table, nums])

  return (
    <div className="card">
      <h3 className="font-semibold text-slate-800 mb-3">Grouped Frequency Table & Histogram</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Paste/Type numbers</label>
          <textarea rows={6} className="input w-full min-h-[120px]" value={text} onChange={e=>setText(e.target.value)} />
          <div className="mt-3 flex items-center gap-3">
            <label className="text-sm text-slate-600">Class width</label>
            <input type="number" className="input w-24" value={width} onChange={e=>setWidth(Number(e.target.value)||1)} />
          </div>
          <div className="mt-3 text-sm text-slate-700">
            <p><span className="font-semibold">n</span> = {nums.length}</p>
            <p><span className="font-semibold">Raw mean</span> = {mean(nums).toFixed(2)} | <span className="font-semibold">Median</span> = {median(nums)}</p>
            <p><span className="font-semibold">Grouped mean</span> (midpoints) = {groupedMean.toFixed(2)}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="p-2">Class interval [lo, hi)</th>
                <th className="p-2">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {table.map((b, i)=> (
                <tr key={i} className="border-t">
                  <td className="p-2">{b.lo} ≤ x &lt; {b.hi}</td>
                  <td className="p-2">{b.freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-72 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={table.map(b=>({name:`${b.lo}-${b.hi}`, freq:b.freq}))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="freq" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
