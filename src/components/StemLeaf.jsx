import React, { useMemo, useState } from 'react'

function parseNums(txt){
  return txt.split(/[,\s]+/).map(Number).filter(n=>!Number.isNaN(n)).sort((a,b)=>a-b)
}

function makeStemLeaf(nums, base){
  const map = new Map()
  for(const n of nums){
    const stem = Math.floor(n/base)
    const leaf = Math.abs(n % base)
    if(!map.has(stem)) map.set(stem, [])
    map.get(stem).push(leaf)
  }
  // sort leaves
  for(const [k,v] of map.entries()) v.sort((a,b)=>a-b)
  // return array
  return Array.from(map.entries()).sort((a,b)=>a[0]-b[0])
}

function mean(nums){
  if(nums.length===0) return 0
  return nums.reduce((a,b)=>a+b,0)/nums.length
}
function median(nums){
  const n = nums.length
  if(n===0) return 0
  const mid = Math.floor(n/2)
  return n%2? nums[mid] : (nums[mid-1]+nums[mid])/2
}

export default function StemLeaf(){
  const [text,setText] = useState("12 13 14 17 19 21 24 16 20 22")
  const [base,setBase] = useState(10)
  const nums = useMemo(()=>parseNums(text),[text])
  const table = useMemo(()=>makeStemLeaf(nums, base),[nums, base])

  return (
    <div className="card">
      <h3 className="font-semibold text-slate-800 mb-3">Stem-and-Leaf Builder</h3>
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Paste/Type numbers (comma/space separated)</label>
          <textarea rows={6} className="input w-full min-h-[120px]" value={text} onChange={e=>setText(e.target.value)} />
          <div className="mt-3 flex items-center gap-3">
            <label className="text-sm text-slate-600">Stem base</label>
            <select className="input" value={base} onChange={e=>setBase(Number(e.target.value))}>
              <option value={10}>10s</option>
              <option value={5}>5s</option>
              <option value={1}>1s</option>
            </select>
          </div>
          <div className="mt-4 text-sm text-slate-700">
            <p><span className="font-semibold">n</span> = {nums.length}</p>
            <p><span className="font-semibold">Mean</span> = {mean(nums).toFixed(2)}</p>
            <p><span className="font-semibold">Median</span> = {median(nums)}</p>
            <p className="text-slate-500 mt-1">Key: <em>{Math.floor((nums[0]||0)/base)}</em> | <em>{(nums[0]||0)%base}</em> means {(nums[0]||0)}</p>
          </div>
        </div>
        <div>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="p-2">Stem</th>
                <th className="p-2">Leaves</th>
                <th className="p-2">Freq</th>
              </tr>
            </thead>
            <tbody>
              {table.map(([stem, leaves])=> (
                <tr key={stem} className="border-t">
                  <td className="p-2">{stem}</td>
                  <td className="p-2">{leaves.join(' ')}</td>
                  <td className="p-2">{leaves.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-slate-600 text-sm mt-3">Tip: For a back-to-back stem-and-leaf, build two lists and align stems side-by-side.</p>
    </div>
  )
}
