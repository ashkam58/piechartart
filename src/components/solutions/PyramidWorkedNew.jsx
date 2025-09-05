import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { motion } from 'framer-motion'

export default function PyramidWorkedNew({ step }) {
  // Example data representing population by age group
  const ageGroups = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+']
  const maleData = [12, 15, 18, 16, 14, 12, 8, 5, 2]
  const femaleData = [11, 14, 17, 17, 15, 13, 10, 7, 4]
  
  // Prepare data for the chart (males as negative for left side)
  const chartData = ageGroups.map((age, i) => ({
    ageGroup: age,
    males: -maleData[i], // Negative for left side
    females: femaleData[i],
    maleCount: maleData[i], // Actual positive count for calculations
    femaleCount: femaleData[i]
  }))

  const totalMales = maleData.reduce((sum, val) => sum + val, 0)
  const totalFemales = femaleData.reduce((sum, val) => sum + val, 0)
  const totalPop = totalMales + totalFemales

  return (
    <div className="space-y-6">
      {/* Problem Statement */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800">Problem: Population Pyramid Analysis</h4>
        <p className="text-blue-700">
          Analyze the population pyramid below and write three comparison statements about the age structure 
          between males and females, focusing on young, middle-aged, and older groups.
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
            <h5 className="font-semibold text-slate-800">Step 1: Understand the population pyramid</h5>
            <p className="text-slate-700">
              A population pyramid shows age distribution with males on the left (negative values) and females on the right (positive values).
            </p>
            <div className="bg-blue-50 p-3 rounded mt-2">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h6 className="font-medium text-blue-800">Males (Left Side)</h6>
                  <p className="text-blue-700">Total: {totalMales.toLocaleString()} ({((totalMales/totalPop)*100).toFixed(1)}%)</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-800">Females (Right Side)</h6>
                  <p className="text-blue-700">Total: {totalFemales.toLocaleString()} ({((totalFemales/totalPop)*100).toFixed(1)}%)</p>
                </div>
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
            <h5 className="font-semibold text-slate-800">Step 2: Analyze young age groups (0-29)</h5>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-2 text-left">Age Group</th>
                    <th className="p-2 text-left">Males</th>
                    <th className="p-2 text-left">Females</th>
                    <th className="p-2 text-left">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.slice(0, 3).map((item, i) => {
                    const diff = item.femaleCount - item.maleCount
                    return (
                      <tr key={i} className="border-t">
                        <td className="p-2">{item.ageGroup}</td>
                        <td className="p-2">{item.maleCount}</td>
                        <td className="p-2">{item.femaleCount}</td>
                        <td className="p-2 font-medium">
                          {diff > 0 ? `+${diff} more females` : diff < 0 ? `${Math.abs(diff)} more males` : 'Equal'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 p-3 rounded mt-2">
              <p className="text-green-800">
                <strong>Young age groups (0-29):</strong> Males slightly outnumber females in the youngest groups, 
                but the difference decreases with age. This reflects typical birth patterns where slightly more boys are born.
              </p>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-yellow-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 3: Analyze middle age groups (30-59)</h5>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="p-2 text-left">Age Group</th>
                    <th className="p-2 text-left">Males</th>
                    <th className="p-2 text-left">Females</th>
                    <th className="p-2 text-left">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.slice(3, 6).map((item, i) => {
                    const diff = item.femaleCount - item.maleCount
                    return (
                      <tr key={i} className="border-t">
                        <td className="p-2">{item.ageGroup}</td>
                        <td className="p-2">{item.maleCount}</td>
                        <td className="p-2">{item.femaleCount}</td>
                        <td className="p-2 font-medium">
                          {diff > 0 ? `+${diff} more females` : diff < 0 ? `${Math.abs(diff)} more males` : 'Equal'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 p-3 rounded mt-2">
              <p className="text-yellow-800">
                <strong>Middle age groups (30-59):</strong> The gender balance evens out in middle age, 
                with females beginning to slightly outnumber males. This reflects the start of differential mortality rates.
              </p>
            </div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-purple-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 4: Analyze older age groups (60+)</h5>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="p-2 text-left">Age Group</th>
                    <th className="p-2 text-left">Males</th>
                    <th className="p-2 text-left">Females</th>
                    <th className="p-2 text-left">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.slice(6).map((item, i) => {
                    const diff = item.femaleCount - item.maleCount
                    return (
                      <tr key={i} className="border-t">
                        <td className="p-2">{item.ageGroup}</td>
                        <td className="p-2">{item.maleCount}</td>
                        <td className="p-2">{item.femaleCount}</td>
                        <td className="p-2 font-medium">
                          {diff > 0 ? `+${diff} more females` : diff < 0 ? `${Math.abs(diff)} more males` : 'Equal'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50 p-3 rounded mt-2">
              <p className="text-purple-800">
                <strong>Older age groups (60+):</strong> Females significantly outnumber males in all older age groups, 
                reflecting higher female life expectancy. The difference becomes more pronounced in the oldest groups.
              </p>
            </div>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-indigo-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 5: Write comparison statements</h5>
            <div className="bg-indigo-50 p-4 rounded">
              <h6 className="font-semibold text-indigo-800 mb-3">Three Comparison Statements:</h6>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <h7 className="font-medium text-green-800">1. Young Age Groups (0-29):</h7>
                  <p className="text-green-700 text-sm mt-1">
                    "In the younger age groups, males slightly outnumber females, particularly in the 0-9 and 10-19 age ranges, 
                    reflecting the typical pattern of more male births."
                  </p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                  <h7 className="font-medium text-yellow-800">2. Middle Age Groups (30-59):</h7>
                  <p className="text-yellow-700 text-sm mt-1">
                    "In the middle age groups, the gender distribution becomes more balanced, 
                    with females beginning to slightly outnumber males as age increases."
                  </p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                  <h7 className="font-medium text-purple-800">3. Older Age Groups (60+):</h7>
                  <p className="text-purple-700 text-sm mt-1">
                    "In the older age groups, females significantly outnumber males, 
                    with the difference becoming more pronounced in the 70+ age ranges, demonstrating higher female longevity."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Visual representation */}
      <div className="card">
        <h4 className="font-semibold text-slate-800 mb-4">Population Pyramid Visualization</h4>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="horizontal"
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                tickFormatter={(value) => Math.abs(value).toString()}
                domain={['dataMin', 'dataMax']}
              />
              <YAxis type="category" dataKey="ageGroup" />
              <Tooltip 
                formatter={(value, name) => [
                  Math.abs(value), 
                  name === 'males' ? 'Males' : 'Females'
                ]}
              />
              <Bar dataKey="males" fill="#3b82f6" name="males" />
              <Bar dataKey="females" fill="#ec4899" name="females" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Males (Left)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-pink-500 rounded"></div>
            <span>Females (Right)</span>
          </div>
        </div>
      </div>

      {/* Key insights */}
      {step >= 4 && (
        <div className="card bg-gradient-to-r from-gray-50 to-slate-50">
          <h4 className="font-semibold text-slate-800 mb-3">🔍 Key Insights from Population Pyramids</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-slate-700 mb-2">What to Look For:</h5>
              <ul className="text-slate-600 space-y-1">
                <li>• Shape indicates population growth patterns</li>
                <li>• Width of bars shows population size</li>
                <li>• Left-right balance shows gender ratios</li>
                <li>• Age-specific patterns reveal demographic trends</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-slate-700 mb-2">Common Patterns:</h5>
              <ul className="text-slate-600 space-y-1">
                <li>• More males born, but higher female longevity</li>
                <li>• Narrow top = aging population</li>
                <li>• Wide base = young, growing population</li>
                <li>• Bulges = baby boom generations</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
