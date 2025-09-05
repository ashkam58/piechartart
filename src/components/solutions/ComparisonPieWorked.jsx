import React, { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const colors = ['#60a5fa','#34d399','#f87171','#fbbf24','#a78bfa','#22d3ee','#fb7185','#34d399']

export default function ComparisonPieWorked({ step }) {
  // Data from the textbook images - Income comparison 2004 vs 2014
  const data2004 = [
    { name: 'Rent', count: 120, color: '#60a5fa' },
    { name: 'Food', count: 100, color: '#34d399' },
    { name: 'Transport', count: 80, color: '#f87171' },
    { name: 'Other', count: 60, color: '#fbbf24' },
  ]
  
  const data2014 = [
    { name: 'Rent', count: 150, color: '#60a5fa' },
    { name: 'Food', count: 90, color: '#34d399' },
    { name: 'Transport', count: 110, color: '#f87171' },
    { name: 'Other', count: 70, color: '#fbbf24' },
  ]

  const total2004 = data2004.reduce((s, r) => s + r.count, 0)
  const total2014 = data2014.reduce((s, r) => s + r.count, 0)

  return (
    <div className="space-y-6">
      {/* Problem Statement */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800">Problem: Comparing Two Pie Charts</h4>
        <p className="text-blue-700">
          A family's spending was recorded in 2004 and 2014. Compare the pie charts and identify:
          <br />• One category that increased
          <br />• One category that decreased  
          <br />• One category that stayed roughly the same
        </p>
      </div>

      {/* Step-by-step solution */}
      <div className="space-y-4">
        {step >= 0 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-blue-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 1: Look at the raw data</h5>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <h6 className="font-medium text-slate-700">2004 Data (Total: £{total2004})</h6>
                <table className="w-full text-sm border border-slate-200 mt-2">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="p-2 text-left">Category</th>
                      <th className="p-2 text-left">Amount (£)</th>
                      <th className="p-2 text-left">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2004.map((item, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">£{item.count}</td>
                        <td className="p-2">{((item.count/total2004)*100).toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h6 className="font-medium text-slate-700">2014 Data (Total: £{total2014})</h6>
                <table className="w-full text-sm border border-slate-200 mt-2">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="p-2 text-left">Category</th>
                      <th className="p-2 text-left">Amount (£)</th>
                      <th className="p-2 text-left">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2014.map((item, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">£{item.count}</td>
                        <td className="p-2">{((item.count/total2014)*100).toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {step >= 1 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-green-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 2: Compare percentages (not raw amounts!)</h5>
            <p className="text-slate-700 mb-3">
              <strong>Important:</strong> When comparing pie charts with different totals, compare percentages, not raw amounts.
            </p>
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-2 text-left">Category</th>
                  <th className="p-2 text-left">2004 %</th>
                  <th className="p-2 text-left">2014 %</th>
                  <th className="p-2 text-left">Change</th>
                  <th className="p-2 text-left">Visual Change</th>
                </tr>
              </thead>
              <tbody>
                {data2004.map((item, i) => {
                  const pct2004 = (item.count/total2004)*100
                  const pct2014 = (data2014[i].count/total2014)*100
                  const change = pct2014 - pct2004
                  const changeType = Math.abs(change) < 2 ? 'Same' : change > 0 ? 'Increased' : 'Decreased'
                  const bgColor = Math.abs(change) < 2 ? 'bg-yellow-50' : change > 0 ? 'bg-green-50' : 'bg-red-50'
                  
                  return (
                    <tr key={i} className={`border-t ${bgColor}`}>
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2">{pct2004.toFixed(1)}%</td>
                      <td className="p-2">{pct2014.toFixed(1)}%</td>
                      <td className="p-2">{change > 0 ? '+' : ''}{change.toFixed(1)}%</td>
                      <td className="p-2 font-medium">{changeType}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-purple-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 3: Answer the questions</h5>
            <div className="grid md:grid-cols-3 gap-4 mt-3">
              <div className="bg-green-50 p-3 rounded">
                <h6 className="font-medium text-green-800">Increased:</h6>
                <p className="text-green-700">
                  <strong>Transport</strong><br />
                  2004: {((data2004[2].count/total2004)*100).toFixed(1)}% → 2014: {((data2014[2].count/total2014)*100).toFixed(1)}%<br />
                  <em>Sector got bigger</em>
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded">
                <h6 className="font-medium text-red-800">Decreased:</h6>
                <p className="text-red-700">
                  <strong>Food</strong><br />
                  2004: {((data2004[1].count/total2004)*100).toFixed(1)}% → 2014: {((data2014[1].count/total2014)*100).toFixed(1)}%<br />
                  <em>Sector got smaller</em>
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <h6 className="font-medium text-yellow-800">Stayed Similar:</h6>
                <p className="text-yellow-700">
                  <strong>Other</strong><br />
                  2004: {((data2004[3].count/total2004)*100).toFixed(1)}% → 2014: {((data2014[3].count/total2014)*100).toFixed(1)}%<br />
                  <em>Sector similar size</em>
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-indigo-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 4: Visual justification</h5>
            <p className="text-slate-700">
              Look at the pie charts below. Notice how:
            </p>
            <ul className="list-disc pl-5 text-slate-700 mt-2">
              <li><strong>Transport</strong> (red) takes up a larger proportion in 2014</li>
              <li><strong>Food</strong> (green) takes up a smaller proportion in 2014</li>
              <li><strong>Other</strong> (yellow) looks roughly the same size in both years</li>
              <li><strong>Rent</strong> (blue) increased in amount but stayed similar as a percentage</li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Visual comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h4 className="font-semibold text-slate-800 mb-2">2004 Spending</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data2004}
                  dataKey="count"
                  nameKey="name"
                  innerRadius={40}
                  outerRadius={80}
                  label={(entry) => `${entry.name}: ${((entry.count/total2004)*100).toFixed(1)}%`}
                >
                  {data2004.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`£${value}`, 'Amount']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 text-center mt-2">Total: £{total2004}</p>
        </div>

        <div className="card">
          <h4 className="font-semibold text-slate-800 mb-2">2014 Spending</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data2014}
                  dataKey="count"
                  nameKey="name"
                  innerRadius={40}
                  outerRadius={80}
                  label={(entry) => `${entry.name}: ${((entry.count/total2014)*100).toFixed(1)}%`}
                >
                  {data2014.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`£${value}`, 'Amount']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 text-center mt-2">Total: £{total2014}</p>
        </div>
      </div>
    </div>
  )
}
