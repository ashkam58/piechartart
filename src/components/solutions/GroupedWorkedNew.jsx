import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

export default function GroupedWorked({ step }) {
  // Example data: Heights of students in a class
  const freqData = [
    { class: '150-154', frequency: 3, midpoint: 152 },
    { class: '155-159', frequency: 7, midpoint: 157 },
    { class: '160-164', frequency: 12, midpoint: 162 },
    { class: '165-169', frequency: 8, midpoint: 167 },
    { class: '170-174', frequency: 4, midpoint: 172 },
    { class: '175-179', frequency: 2, midpoint: 177 },
  ]

  const totalFreq = freqData.reduce((sum, item) => sum + item.frequency, 0)
  const modalClassIndex = freqData.findIndex(item => 
    item.frequency === Math.max(...freqData.map(d => d.frequency))
  )
  
  // Calculate cumulative frequency for median class
  let cumFreq = 0
  const cumFreqData = freqData.map(item => {
    cumFreq += item.frequency
    return { ...item, cumFreq }
  })
  
  const medianPosition = totalFreq / 2
  const medianClassIndex = cumFreqData.findIndex(item => item.cumFreq >= medianPosition)
  
  // Calculate estimated mean
  const sumFxM = freqData.reduce((sum, item) => sum + (item.frequency * item.midpoint), 0)
  const estimatedMean = sumFxM / totalFreq

  return (
    <div className="space-y-6">
      {/* Problem Statement */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800">Problem: Grouped Frequency Table Analysis</h4>
        <p className="text-blue-700">
          The heights (in cm) of 36 students were measured and grouped. Find:
          <br />• The modal class
          <br />• The median class
          <br />• An estimate of the mean height
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
            <h5 className="font-semibold text-slate-800">Step 1: Understand the grouped frequency table</h5>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-2 text-left">Height (cm)</th>
                    <th className="p-2 text-left">Frequency</th>
                    <th className="p-2 text-left">Midpoint</th>
                  </tr>
                </thead>
                <tbody>
                  {freqData.map((item, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2">{item.class}</td>
                      <td className="p-2">{item.frequency}</td>
                      <td className="p-2">{item.midpoint}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-slate-100">
                    <td className="p-2">Total</td>
                    <td className="p-2">{totalFreq}</td>
                    <td className="p-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 mt-2">
              <strong>Key concepts:</strong> Each class represents a range of values. 
              The midpoint is the middle value of each class interval.
            </p>
          </motion.div>
        )}

        {step >= 1 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-green-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 2: Find the modal class</h5>
            <p className="text-slate-700">
              The <strong>modal class</strong> is the class interval with the highest frequency.
            </p>
            <div className="bg-green-50 p-3 rounded mt-2">
              <p className="text-green-800">
                <strong>Modal class: {freqData[modalClassIndex].class} cm</strong><br />
                This class has the highest frequency of {freqData[modalClassIndex].frequency} students.
              </p>
            </div>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-2 text-left">Height (cm)</th>
                    <th className="p-2 text-left">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {freqData.map((item, i) => (
                    <tr key={i} className={`border-t ${i === modalClassIndex ? 'bg-green-100 font-semibold' : ''}`}>
                      <td className="p-2">{item.class}</td>
                      <td className="p-2">{item.frequency} {i === modalClassIndex ? '← Highest' : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-yellow-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 3: Find the median class</h5>
            <p className="text-slate-700">
              The <strong>median class</strong> contains the middle value. 
              With {totalFreq} students, the median is the {medianPosition}th value.
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-2 text-left">Height (cm)</th>
                    <th className="p-2 text-left">Frequency</th>
                    <th className="p-2 text-left">Cumulative Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {cumFreqData.map((item, i) => (
                    <tr key={i} className={`border-t ${i === medianClassIndex ? 'bg-yellow-100 font-semibold' : ''}`}>
                      <td className="p-2">{item.class}</td>
                      <td className="p-2">{item.frequency}</td>
                      <td className="p-2">
                        {item.cumFreq} 
                        {item.cumFreq >= medianPosition && cumFreqData[i-1]?.cumFreq < medianPosition ? ' ← Contains median' : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 p-3 rounded mt-2">
              <p className="text-yellow-800">
                <strong>Median class: {freqData[medianClassIndex].class} cm</strong><br />
                The {medianPosition}th value falls in this class interval.
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
            <h5 className="font-semibold text-slate-800">Step 4: Estimate the mean</h5>
            <p className="text-slate-700">
              For grouped data: <strong>Mean ≈ Σ(frequency × midpoint) ÷ Σ(frequency)</strong>
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-2 text-left">Height (cm)</th>
                    <th className="p-2 text-left">Frequency (f)</th>
                    <th className="p-2 text-left">Midpoint (x)</th>
                    <th className="p-2 text-left">f × x</th>
                  </tr>
                </thead>
                <tbody>
                  {freqData.map((item, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2">{item.class}</td>
                      <td className="p-2">{item.frequency}</td>
                      <td className="p-2">{item.midpoint}</td>
                      <td className="p-2">{item.frequency * item.midpoint}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-slate-100">
                    <td className="p-2">Total</td>
                    <td className="p-2">Σf = {totalFreq}</td>
                    <td className="p-2">—</td>
                    <td className="p-2">Σ(f×x) = {sumFxM}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50 p-3 rounded mt-2">
              <p className="text-purple-800">
                <strong>Estimated mean = {sumFxM} ÷ {totalFreq} = {estimatedMean.toFixed(1)} cm</strong>
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
            <h5 className="font-semibold text-slate-800">Step 5: Summary and interpretation</h5>
            <div className="bg-indigo-50 p-4 rounded">
              <h6 className="font-semibold text-indigo-800">Results:</h6>
              <ul className="text-indigo-700 mt-2 space-y-1">
                <li>• <strong>Modal class:</strong> {freqData[modalClassIndex].class} cm (most common height range)</li>
                <li>• <strong>Median class:</strong> {freqData[medianClassIndex].class} cm (middle value falls here)</li>
                <li>• <strong>Estimated mean:</strong> {estimatedMean.toFixed(1)} cm (average height)</li>
              </ul>
              <p className="text-indigo-600 text-sm mt-3">
                <strong>Note:</strong> The mean is an estimate because we used midpoints to represent all values in each class.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Visual representation */}
      <div className="card">
        <h4 className="font-semibold text-slate-800 mb-2">Frequency Distribution</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={freqData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip formatter={(value, name) => [value, 'Frequency']} />
              <Bar 
                dataKey="frequency" 
                fill="#60a5fa"
                stroke="#1e40af"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {step >= 1 && (
          <p className="text-sm text-slate-600 mt-2">
            The tallest bar represents the modal class ({freqData[modalClassIndex].class} cm).
          </p>
        )}
      </div>
    </div>
  )
}
