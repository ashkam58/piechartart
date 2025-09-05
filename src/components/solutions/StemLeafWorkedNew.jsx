import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function StemLeafWorkedNew({ step }) {
  // Example data from the textbook images
  const rawData = [23, 25, 27, 31, 33, 34, 35, 38, 42, 44, 45, 47, 51, 53, 56, 58]
  const sortedData = [...rawData].sort((a, b) => a - b)
  
  // Create stem-and-leaf structure
  const stemLeafMap = {}
  sortedData.forEach(num => {
    const stem = Math.floor(num / 10)
    const leaf = num % 10
    if (!stemLeafMap[stem]) {
      stemLeafMap[stem] = []
    }
    stemLeafMap[stem].push(leaf)
  })

  // Calculate statistics
  const n = sortedData.length
  const median = n % 2 === 0 
    ? (sortedData[n/2 - 1] + sortedData[n/2]) / 2 
    : sortedData[Math.floor(n/2)]
  const range = Math.max(...sortedData) - Math.min(...sortedData)
  
  // Find mode
  const frequency = {}
  sortedData.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1
  })
  const maxFreq = Math.max(...Object.values(frequency))
  const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq).map(Number)

  return (
    <div className="space-y-6">
      {/* Problem Statement */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800">Problem: Stem-and-Leaf Display</h4>
        <p className="text-blue-700">
          Create a stem-and-leaf plot for this data and find the median, range, and mode:
          <br />
          <strong>Data:</strong> {rawData.join(', ')}
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
            <h5 className="font-semibold text-slate-800">Step 1: Organize the data</h5>
            <p className="text-slate-700">
              First, sort the data in ascending order:
            </p>
            <div className="bg-blue-50 p-3 rounded mt-2">
              <p className="text-blue-800 font-mono">
                {sortedData.join(', ')}
              </p>
            </div>
            <p className="text-slate-700 mt-2">
              <strong>Why sort?</strong> Stem-and-leaf plots require data to be ordered, and it makes finding median easier.
            </p>
          </motion.div>
        )}

        {step >= 1 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-green-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 2: Create the stem-and-leaf plot</h5>
            <p className="text-slate-700">
              Split each number into <strong>stem</strong> (tens digit) and <strong>leaf</strong> (units digit):
            </p>
            <div className="bg-green-50 p-4 rounded mt-2">
              <div className="flex justify-center">
                <table className="border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-2 text-center font-bold">Stem</th>
                      <th className="border border-slate-300 p-2 text-center font-bold">Leaf</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {Object.keys(stemLeafMap).map(stem => (
                      <tr key={stem}>
                        <td className="border border-slate-300 p-2 text-center font-bold">{stem}</td>
                        <td className="border border-slate-300 p-2 text-center">
                          {stemLeafMap[stem].join('  ')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-green-700 text-sm mt-2 text-center">
                <strong>Key:</strong> 2|3 means 23
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
            <h5 className="font-semibold text-slate-800">Step 3: Find the median</h5>
            <p className="text-slate-700">
              The median is the middle value when data is ordered. With {n} values:
            </p>
            <div className="bg-yellow-50 p-3 rounded mt-2">
              {n % 2 === 0 ? (
                <div className="text-yellow-800">
                  <p><strong>Even number of values ({n})</strong></p>
                  <p>Median = average of {n/2}th and {n/2 + 1}th values</p>
                  <p>Median = ({sortedData[n/2 - 1]} + {sortedData[n/2]}) ÷ 2 = <strong>{median}</strong></p>
                </div>
              ) : (
                <div className="text-yellow-800">
                  <p><strong>Odd number of values ({n})</strong></p>
                  <p>Median = {Math.floor(n/2) + 1}th value = <strong>{median}</strong></p>
                </div>
              )}
            </div>
            <div className="mt-2">
              <p className="text-slate-700 text-sm">
                Position in ordered list: {sortedData.map((val, i) => (
                  <span key={i} className={val === median || (n % 2 === 0 && (val === sortedData[n/2-1] || val === sortedData[n/2])) ? 'bg-yellow-200 px-1 rounded' : ''}>
                    {val}{i < sortedData.length - 1 ? ', ' : ''}
                  </span>
                ))}
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
            <h5 className="font-semibold text-slate-800">Step 4: Calculate the range</h5>
            <p className="text-slate-700">
              Range = Highest value - Lowest value
            </p>
            <div className="bg-purple-50 p-3 rounded mt-2">
              <p className="text-purple-800">
                Range = {Math.max(...sortedData)} - {Math.min(...sortedData)} = <strong>{range}</strong>
              </p>
            </div>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-red-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 5: Find the mode</h5>
            <p className="text-slate-700">
              The mode is the value(s) that appear most frequently.
            </p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-2 text-left">Value</th>
                    <th className="p-2 text-left">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(frequency).map(([value, freq]) => (
                    <tr key={value} className={`border-t ${freq === maxFreq ? 'bg-red-100 font-semibold' : ''}`}>
                      <td className="p-2">{value}</td>
                      <td className="p-2">{freq} {freq === maxFreq ? '← Highest' : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-red-50 p-3 rounded mt-2">
              <p className="text-red-800">
                {maxFreq === 1 ? (
                  <>
                    <strong>No mode</strong> - all values appear only once
                  </>
                ) : (
                  <>
                    <strong>Mode(s): {modes.join(', ')}</strong> - appear{modes.length > 1 ? '' : 's'} {maxFreq} time{maxFreq > 1 ? 's' : ''} each
                  </>
                )}
              </p>
            </div>
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="border-l-4 border-indigo-500 pl-4"
          >
            <h5 className="font-semibold text-slate-800">Step 6: Summary</h5>
            <div className="bg-indigo-50 p-4 rounded">
              <h6 className="font-semibold text-indigo-800">Statistical Summary:</h6>
              <ul className="text-indigo-700 mt-2 space-y-1">
                <li>• <strong>Number of values:</strong> {n}</li>
                <li>• <strong>Median:</strong> {median}</li>
                <li>• <strong>Range:</strong> {range}</li>
                <li>• <strong>Mode:</strong> {maxFreq === 1 ? 'No mode' : modes.join(', ')}</li>
                <li>• <strong>Minimum:</strong> {Math.min(...sortedData)}</li>
                <li>• <strong>Maximum:</strong> {Math.max(...sortedData)}</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      {/* Benefits of stem-and-leaf */}
      {step >= 1 && (
        <div className="card">
          <h4 className="font-semibold text-slate-800 mb-2">Why use stem-and-leaf plots?</h4>
          <ul className="text-slate-700 space-y-1 text-sm">
            <li>✓ <strong>Shows individual data values</strong> (unlike histograms)</li>
            <li>✓ <strong>Maintains original data</strong> while organizing it</li>
            <li>✓ <strong>Easy to find median and quartiles</strong> from the display</li>
            <li>✓ <strong>Shows the shape</strong> of the distribution</li>
            <li>✓ <strong>Quick to create</strong> by hand</li>
          </ul>
        </div>
      )}
    </div>
  )
}
