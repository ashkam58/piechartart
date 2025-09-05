import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const PieChartStepByStepWorked = () => {
  const [activeTab, setActiveTab] = useState('q1');

  // Data for different questions
  const q1BirdsData = [
    { name: 'Starling', value: 36, color: '#FF6B6B', angle: 180 },
    { name: 'Sparrow', value: 9, color: '#4ECDC4', angle: 45 },
    { name: 'Goldfinch', value: 6, color: '#45B7D1', angle: 30 },
    { name: 'Robin', value: 21, color: '#96CEB4', angle: 105 }
  ];

  const q2DistanceData = [
    { name: '0-3 miles', value: 9, color: '#FF6B6B', angle: 162 },
    { name: '3-6 miles', value: 5, color: '#4ECDC4', angle: 90 },
    { name: '6-9 miles', value: 4, color: '#45B7D1', angle: 72 },
    { name: '9-12 miles', value: 2, color: '#96CEB4', angle: 36 }
  ];

  const q3CalorieData = [
    { name: 'Fruit & vegetables', value: 33, color: '#4ECDC4' },
    { name: 'Starchy foods', value: 33, color: '#FF6B6B' },
    { name: 'Milk/dairy', value: 15, color: '#45B7D1' },
    { name: 'Non-dairy protein', value: 12, color: '#96CEB4' },
    { name: 'Fats & sugar', value: 7, color: '#FFA726' }
  ];

  const q7Data1981 = [
    { name: 'Theme parks', value: 33, color: '#FF6B6B' },
    { name: 'Museums & gardens', value: 47, color: '#4ECDC4' },
    { name: 'Historic houses', value: 16, color: '#45B7D1' },
    { name: 'Wildlife parks', value: 4, color: '#96CEB4' }
  ];

  const q7Data1999 = [
    { name: 'Theme parks', value: 38, color: '#FF6B6B' },
    { name: 'Museums & gardens', value: 37, color: '#4ECDC4' },
    { name: 'Historic houses', value: 16, color: '#45B7D1' },
    { name: 'Wildlife parks', value: 9, color: '#96CEB4' }
  ];

  const q8DataA = [
    { name: 'German', value: 50, color: '#FF6B6B' },
    { name: 'French', value: 25, color: '#4ECDC4' },
    { name: 'Spanish', value: 12.5, color: '#45B7D1' },
    { name: 'No language', value: 12.5, color: '#96CEB4' }
  ];

  const q8DataB = [
    { name: 'German', value: 25, color: '#FF6B6B' },
    { name: 'French', value: 25, color: '#4ECDC4' },
    { name: 'Spanish', value: 25, color: '#45B7D1' },
    { name: 'No language', value: 25, color: '#96CEB4' }
  ];

  const StepBox = ({ step, title, children, color = "blue" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border-l-4 border-${color}-500 bg-${color}-50 p-4 mb-4 rounded-r-lg`}
    >
      <h4 className={`font-bold text-${color}-800 mb-2`}>
        Step {step}: {title}
      </h4>
      <div className="text-gray-700">{children}</div>
    </motion.div>
  );

  const TheoryBox = ({ children }) => (
    <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mb-6">
      <h3 className="font-bold text-purple-800 mb-2 flex items-center">
        🧠 Core Theory (30-sec recap)
      </h3>
      <div className="text-purple-700">{children}</div>
    </div>
  );

  const AnswerBox = ({ children }) => (
    <div className="bg-green-100 border border-green-300 rounded-lg p-4 mt-4">
      <h4 className="font-bold text-green-800 mb-2">✅ Final Answers:</h4>
      <div className="text-green-700">{children}</div>
    </div>
  );

  const MemoryBox = ({ children }) => (
    <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mt-4">
      <h4 className="font-bold text-yellow-800 mb-2">🧠 Memory Cues:</h4>
      <div className="text-yellow-700">{children}</div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🎯 Pie Charts - Step by Step Solutions
        </h1>
        <p className="text-gray-600">Chapter 3.1 - Advanced Pie Chart Problems</p>
      </div>

      <TheoryBox>
        <ul className="space-y-2">
          <li>• <strong>Whole pie</strong> = 360° = 100% = total amount</li>
          <li>• <strong>From fraction/percent → amount:</strong> Amount = (fraction or % of whole) × total</li>
          <li>• <strong>From frequency → angle:</strong> Angle = (frequency ÷ total) × 360°</li>
          <li>• <strong>Bigger total rule:</strong> A smaller slice of a bigger pie can still be more people/money</li>
          <li>• <strong>Compare proportions first,</strong> then multiply by totals for actual numbers</li>
        </ul>
      </TheoryBox>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'q1', label: 'Q1: Birds' },
          { id: 'q2', label: 'Q2: Distance' },
          { id: 'q3', label: 'Q3: Calories' },
          { id: 'q4', label: 'Q4: Rock Band' },
          { id: 'q5', label: 'Q5: Lunch' },
          { id: 'q6', label: 'Q6: Energy' },
          { id: 'q7', label: 'Q7: Tourism' },
          { id: 'q8', label: 'Q8: Languages' },
          { id: 'q9', label: 'Q9: Critical' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Question 1: Birds in Garden */}
      {activeTab === 'q1' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q1. Interpreting a Pie Chart (Birds in a Garden)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Birds Distribution (Total: 72)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={q1BirdsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label={({ name, value, angle }) => `${name}: ${value} (${angle}°)`}
                  >
                    {q1BirdsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-3">🧠 Theory:</h4>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• A pie chart shows parts of a whole as sectors of a circle</li>
                <li>• The full circle is 360° (like a pizza 🍕)</li>
                <li>• Calculate each category: (angle ÷ 360) × total birds</li>
                <li>• Or use fractions: fraction × total birds</li>
              </ul>
            </div>
          </div>

          <StepBox step="1" title="Read the angles/fractions from the pie chart" color="blue">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>From the chart:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Starling: half (½) of circle → 180°</li>
                  <li>• Sparrow: 1/8 of circle → 45°</li>
                  <li>• Goldfinch: 1/12 of circle → 30°</li>
                  <li>• Robin: remaining → 105°</li>
                </ul>
              </div>
              <div>
                <strong>Total birds = 72</strong>
                <p className="mt-2 text-sm">We can use either:</p>
                <ul className="mt-1 text-sm">
                  <li>• Fraction × total</li>
                  <li>• (angle ÷ 360) × total</li>
                </ul>
              </div>
            </div>
          </StepBox>

          <StepBox step="2" title="Calculate each bird type" color="green">
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <strong>a) Starling:</strong>
                <p>Fraction = ½ = 180° out of 360°</p>
                <p>👉 Birds = 72 × (180 ÷ 360) = 72 × ½ = <strong>36 birds</strong></p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <strong>b) Sparrow:</strong>
                <p>Fraction = 45° ÷ 360° = 1/8</p>
                <p>👉 Birds = 72 × 1/8 = <strong>9 birds</strong></p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <strong>c) Goldfinch:</strong>
                <p>Fraction = 30° ÷ 360° = 1/12</p>
                <p>👉 Birds = 72 × 1/12 = <strong>6 birds</strong></p>
              </div>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> Starling: 36 birds</p>
            <p><strong>b)</strong> Sparrow: 9 birds</p>
            <p><strong>c)</strong> Goldfinch: 6 birds</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 2: Distance Travelled */}
      {activeTab === 'q2' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q2. Drawing a Pie Chart + Interpreting Data
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Distance Travelled Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={q2DistanceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label={({ name, value, angle }) => `${name}: ${value} (${angle}°)`}
                  >
                    {q2DistanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-3">📊 Frequency Table:</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-200">
                    <th className="text-left py-1">Distance (miles)</th>
                    <th className="text-left py-1">Frequency</th>
                  </tr>
                </thead>
                <tbody className="text-purple-700">
                  <tr><td>0 ≤ d &lt; 3</td><td>9</td></tr>
                  <tr><td>3 ≤ d &lt; 6</td><td>5</td></tr>
                  <tr><td>6 ≤ d &lt; 9</td><td>4</td></tr>
                  <tr><td>9 ≤ d &lt; 12</td><td>2</td></tr>
                  <tr className="border-t border-purple-200 font-bold">
                    <td>Total</td><td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <StepBox step="1" title="Calculate angles for pie chart" color="blue">
            <p className="mb-3"><strong>🧠 Theory:</strong> Each slice's angle = (Frequency ÷ Total) × 360°</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>0–3 miles: (9 ÷ 20) × 360 = <strong>162°</strong></p>
                <p>3–6 miles: (5 ÷ 20) × 360 = <strong>90°</strong></p>
              </div>
              <div className="space-y-2">
                <p>6–9 miles: (4 ÷ 20) × 360 = <strong>72°</strong></p>
                <p>9–12 miles: (2 ÷ 20) × 360 = <strong>36°</strong></p>
              </div>
            </div>
            <p className="mt-3 text-sm bg-blue-50 p-2 rounded">
              ✅ Check: 162° + 90° + 72° + 36° = 360° ✓
            </p>
          </StepBox>

          <StepBox step="2" title="Answer the interpretation questions" color="green">
            <div className="space-y-4">
              <div>
                <strong>i) Modal distance (most frequent):</strong>
                <p>The highest frequency = 9, which corresponds to <strong>0 ≤ d &lt; 3 miles</strong></p>
              </div>
              <div>
                <strong>ii) Fewer than half travelled less than how many miles?</strong>
                <p>Half of 20 = 10 shoppers</p>
                <p>0–3 miles = 9 shoppers (less than 10)</p>
                <p>So fewer than half travelled less than <strong>6 miles</strong></p>
              </div>
              <div>
                <strong>iii) More than 25% travelled more than how many miles?</strong>
                <p>25% of 20 = 5 shoppers</p>
                <p>More than 6 miles: 6–9 (4) + 9–12 (2) = 6 shoppers &gt; 5 ✓</p>
                <p>Answer: <strong>6 miles</strong></p>
              </div>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> Angles: 162°, 90°, 72°, 36°</p>
            <p><strong>b)</strong> i) 0 &le; d &lt; 3 miles ii) 6 miles iii) 6 miles</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 3: Calorie Pie Chart */}
      {activeTab === 'q3' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q3. Interpreting Calorie Pie Chart
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Healthy Diet Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={q3CalorieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q3CalorieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-800 mb-3">📊 Percentage Breakdown:</h4>
              <ul className="text-orange-700 space-y-1 text-sm">
                <li>• Fruit & vegetables: 33%</li>
                <li>• Starchy foods: 33%</li>
                <li>• Milk/dairy: 15%</li>
                <li>• Non-dairy protein: 12%</li>
                <li>• Fats & sugar: 7%</li>
              </ul>
              <p className="mt-3 text-xs text-orange-600">
                Total: 33% + 33% + 15% + 12% + 7% = 100% ✓
              </p>
            </div>
          </div>

          <StepBox step="1" title="Calculate calories for teenager (2400 calories)" color="blue">
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <strong>i) Non-dairy protein = 12% of 2400</strong>
                <p>= (12 ÷ 100) × 2400 = <strong>288 calories</strong></p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <strong>ii) Fruit and vegetables = 33% of 2400</strong>
                <p>= (33 ÷ 100) × 2400 = <strong>792 calories</strong></p>
              </div>
            </div>
          </StepBox>

          <StepBox step="2" title="Calculate calories for adult male (3000 calories)" color="green">
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <strong>i) Milk and dairy = 15% of 3000</strong>
                <p>= (15 ÷ 100) × 3000 = <strong>450 calories</strong></p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <strong>ii) Starchy foods = 33% of 3000</strong>
                <p>= (33 ÷ 100) × 3000 = <strong>990 calories</strong></p>
              </div>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> Teenager (2400 cal): i) 288 cal ii) 792 cal</p>
            <p><strong>b)</strong> Adult male (3000 cal): i) 450 cal ii) 990 cal</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 4: Rock Band Income */}
      {activeTab === 'q4' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q4. Rock Band's Income (2004 vs 2014)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">2004 (Total: £120,000)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q4Data2004}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  >
                    {q4Data2004.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">2014 (Total: £400,000)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q4Data2014}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  >
                    {q4Data2014.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <StepBox step="1" title="Calculate 2004 concert income" color="blue">
            <div className="bg-blue-50 p-3 rounded">
              <p><strong>2004: 1/3 from concerts</strong></p>
              <p>Concerts₂₀₀₄ = 1/3 × £120,000 = <strong>£40,000</strong></p>
            </div>
          </StepBox>

          <StepBox step="2" title="Calculate 2014 CD income" color="green">
            <div className="bg-green-50 p-3 rounded">
              <p><strong>2014: Three roughly equal sectors</strong></p>
              <p>Concerts / Downloads / CDs ⇒ each ≈ 1/3</p>
              <p>CDs₂₀₁₄ = 1/3 × £400,000 = <strong>£133,333 (approx)</strong></p>
            </div>
          </StepBox>

          <StepBox step="3" title="Analyze Hedda's claim" color="red">
            <div className="bg-red-50 p-4 rounded">
              <p><strong>Hedda says:</strong> "More from CDs in 2004 than 2014"</p>
              <div className="mt-3 space-y-2">
                <p>2004 CDs ≈ 2/3 of £120,000 = £80,000</p>
                <p>2014 CDs ≈ 1/3 of £400,000 = £133,333</p>
                <p className="font-bold text-red-700">
                  Even though the slice is smaller in 2014, the pie is much larger—so actual money is higher in 2014!
                </p>
              </div>
              <p className="mt-3 font-bold">
                Conclusion: Hedda is wrong because proportion ≠ amount when totals differ.
              </p>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> £40,000</p>
            <p><strong>b)</strong> ≈£133,333</p>
            <p><strong>c)</strong> She ignores different totals; 2014 CDs earn more.</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 5: Year 8 vs Year 9 Lunch */}
      {activeTab === 'q5' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q5. Year-8 vs Year-9 Lunch Choices
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Year 8 (Total: 180 students)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q5DataY8}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q5DataY8.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Year 9 (Total: 220 students)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q5DataY9}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q5DataY9.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <StepBox step="1" title="Read the proportions from visual estimation" color="blue">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Year 8 "Go home" slice:</strong>
                <p>≈ one-eighth of circle (about 45°) ⇒ ~12.5%</p>
              </div>
              <div>
                <strong>Year 9 "Go home" slice:</strong>
                <p>≈ about one-twelfth (≈30°) ⇒ ~9%</p>
              </div>
            </div>
          </StepBox>

          <StepBox step="2" title="Convert proportions to actual student counts" color="green">
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <strong>Year 8 go home:</strong>
                <p>≈ 0.125 × 180 = 22–23 students</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <strong>Year 9 go home:</strong>
                <p>≈ 0.09 × 220 ≈ 19 students</p>
              </div>
            </div>
          </StepBox>

          <StepBox step="3" title="Check Zoe's claim" color="purple">
            <div className="bg-purple-50 p-4 rounded">
              <p><strong>Zoe's claim:</strong> "More Year-9s than Year-8s go home for lunch."</p>
              <div className="mt-3">
                <p>Year-8 students going home ≈ 22–23</p>
                <p>Year-9 students going home ≈ 19</p>
                <p className="font-bold text-purple-700 mt-2">
                  Verdict: Zoe is not correct—fewer Year-9s go home.
                </p>
              </div>
            </div>
          </StepBox>

          <AnswerBox>
            <p>Zoe is wrong. Year-8 has more students going home (~23) than Year-9 (~19), even though Year-9 has more total students.</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 6: Renewable Energy */}
      {activeTab === 'q6' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q6. Renewable Energy (France vs Germany, 2016)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">France (Total: 1,011,587 GWh)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q6DataFrance}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q6DataFrance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Germany (Total: 193,930 GWh)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q6DataGermany}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q6DataGermany.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <StepBox step="1" title="Read fractions from visual estimation" color="blue">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>France 2016:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Hydropower ≈ 55%</li>
                  <li>• Wind ≈ 35%</li>
                  <li>• Biomass ≈ 7%</li>
                  <li>• Solar ≈ 3%</li>
                </ul>
              </div>
              <div>
                <strong>Germany 2016:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Wind ≈ 40%</li>
                  <li>• Biomass ≈ 30%</li>
                  <li>• Solar ≈ 15%</li>
                  <li>• Hydropower ≈ 15%</li>
                </ul>
              </div>
            </div>
          </StepBox>

          <StepBox step="2" title="Answer fraction questions" color="green">
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <strong>a) i) Hydropower in France ≈ 0.55</strong>
                <p>(or 11/20 as a tidy fraction)</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <strong>a) ii) Biomass in Germany ≈ 0.30</strong>
                <p>(or 3/10 as a tidy fraction)</p>
              </div>
            </div>
          </StepBox>

          <StepBox step="3" title="Calculate actual energy amounts" color="purple">
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded">
                <strong>b) France hydropower:</strong>
                <p>≈ 0.55 × 1,011,587 ≈ 556,000 GWh</p>
                <p>(≈ 5.56×10⁵ GWh in scientific notation)</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <strong>c) Germany biomass:</strong>
                <p>≈ 0.30 × 193,930 ≈ 58,000 GWh</p>
                <p>(≈ 5.82×10⁴ GWh in scientific notation)</p>
              </div>
            </div>
          </StepBox>

          <StepBox step="4" title="Compare energy strategies" color="orange">
            <div className="bg-orange-50 p-4 rounded">
              <strong>d) Comparison:</strong>
              <ul className="mt-2 space-y-1">
                <li>• <strong>France:</strong> dominated by Hydropower (~55%), with Wind next; Biomass/Solar are small</li>
                <li>• <strong>Germany:</strong> led by Wind (~40%), with Biomass substantial (~30%); Hydro is minor (~15%)</li>
                <li>• <strong>Takeaway:</strong> France leans on rivers (hydro); Germany leans on wind + biomass</li>
              </ul>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> i) ~55% (≈11/20) ii) ~30% (≈3/10)</p>
            <p><strong>b)</strong> ≈ 5.56×10⁵ GWh hydropower in France</p>
            <p><strong>c)</strong> ≈ 5.82×10⁴ GWh biomass in Germany</p>
            <p><strong>d)</strong> France is hydro-heavy; Germany is wind/biomass-heavy</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 7: Tourist Attractions */}
      {activeTab === 'q7' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q7. British Tourist Attractions (1981 vs 1999)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">1981 Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q7Data1981}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q7Data1981.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">1999 Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q7Data1999}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q7Data1999.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <StepBox step="1" title="Read the percentages from both pie charts" color="blue">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>1981:</strong>
                <ul className="mt-2">
                  <li>• Theme parks: 33%</li>
                  <li>• Museums & gardens: 47%</li>
                  <li>• Historic houses: 16%</li>
                  <li>• Wildlife parks: 4%</li>
                </ul>
              </div>
              <div>
                <strong>1999:</strong>
                <ul className="mt-2">
                  <li>• Theme parks: 38%</li>
                  <li>• Museums & gardens: 37%</li>
                  <li>• Historic houses: 16%</li>
                  <li>• Wildlife parks: 9%</li>
                </ul>
              </div>
            </div>
          </StepBox>

          <StepBox step="2" title="Compare proportions for part (a)" color="green">
            <p><strong>a) Three comparison sentences:</strong></p>
            <ul className="mt-2 space-y-1">
              <li>1. <strong>Theme parks increased</strong> from 33% → 38% (+5%)</li>
              <li>2. <strong>Museums & gardens decreased</strong> from 47% → 37% (-10%)</li>
              <li>3. <strong>Historic houses stayed constant</strong> at 16%, while <strong>wildlife parks increased</strong> from 4% → 9% (+5%)</li>
            </ul>
          </StepBox>

          <StepBox step="3" title="Analyze the newspaper claim for part (b)" color="red">
            <p><strong>b) Why the newspaper claim can be wrong:</strong></p>
            <p className="mt-2">
              <strong>Claim:</strong> "More people visited museums & gardens in 1981 than in 1999."
            </p>
            <div className="mt-3 p-3 bg-red-50 rounded">
              <p><strong>Problem:</strong> The percentage fell (47% → 37%), but the <em>total visitors</em> might have risen dramatically.</p>
              <p className="mt-2"><strong>Example:</strong></p>
              <ul className="mt-1">
                <li>• If 1981 total = 10 million visitors</li>
                <li>• If 1999 total = 15 million visitors</li>
                <li>• Then: 47% of 10m = 4.7m vs 37% of 15m = 5.55m</li>
                <li>• Result: 1999 actually has <strong>more people</strong> despite smaller percentage!</li>
              </ul>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> Theme parks ↑, Museums & gardens ↓, Historic houses =, Wildlife parks ↑</p>
            <p><strong>b)</strong> Without knowing the totals, claims about actual numbers are unsafe. Proportion ≠ number when totals differ.</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 8: School Languages */}
      {activeTab === 'q8' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q8. Languages in Year 10 (Schools A & B)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">School A (Total: 240 students)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q8DataA}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q8DataA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">School B (Total: 120 students)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={q8DataB}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {q8DataB.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <StepBox step="1" title="Read the proportions from the pie charts" color="blue">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>School A:</strong>
                <ul className="mt-2">
                  <li>• German: 1/2 (50%)</li>
                  <li>• French: 1/4 (25%)</li>
                  <li>• Spanish: 1/8 (12.5%)</li>
                  <li>• No language: 1/8 (12.5%)</li>
                </ul>
              </div>
              <div>
                <strong>School B:</strong>
                <ul className="mt-2">
                  <li>• German: 1/4 (25%)</li>
                  <li>• French: 1/4 (25%)</li>
                  <li>• Spanish: 1/4 (25%)</li>
                  <li>• No language: 1/4 (25%)</li>
                </ul>
              </div>
            </div>
          </StepBox>

          <StepBox step="2" title="Use the given information to find School A's total" color="green">
            <p><strong>Given:</strong> French(A) is twice French(B), and School B total = 120</p>
            <div className="mt-3 p-3 bg-green-50 rounded">
              <p>French(B) = 25% of 120 = 30 students</p>
              <p>French(A) = 2 × 30 = 60 students</p>
              <p>In School A, French is 25% of total</p>
              <p><strong>Total(A) = 60 ÷ 0.25 = 240 students</strong></p>
            </div>
          </StepBox>

          <StepBox step="3" title="Answer each part by comparing proportions and numbers" color="purple">
            <div className="space-y-3">
              <div>
                <strong>a) Greater proportion studying Spanish?</strong>
                <p>A: 12.5% vs B: 25% → <strong>School B</strong></p>
              </div>
              <div>
                <strong>b) Greater proportion not studying a language?</strong>
                <p>A: 12.5% vs B: 25% → <strong>School B</strong></p>
              </div>
              <div>
                <strong>c) Number of Year-10 students in School A?</strong>
                <p><strong>240 students</strong> (calculated above)</p>
              </div>
              <div>
                <strong>d) Greater number studying Spanish?</strong>
                <p>Spanish(A) = 12.5% of 240 = 30</p>
                <p>Spanish(B) = 25% of 120 = 30</p>
                <p>→ <strong>Same number in both schools</strong></p>
              </div>
              <div>
                <strong>e) Greater number not studying a language?</strong>
                <p>No-lang(A) = 12.5% of 240 = 30</p>
                <p>No-lang(B) = 25% of 120 = 30</p>
                <p>→ <strong>Same number in both schools</strong></p>
              </div>
            </div>
          </StepBox>

          <AnswerBox>
            <p><strong>a)</strong> School B (25% vs 12.5%)</p>
            <p><strong>b)</strong> School B (25% vs 12.5%)</p>
            <p><strong>c)</strong> 240 students</p>
            <p><strong>d)</strong> Same number (30 each)</p>
            <p><strong>e)</strong> Same number (30 each)</p>
          </AnswerBox>
        </motion.div>
      )}

      {/* Question 9: Critical Thinking */}
      {activeTab === 'q9' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            ✅ Q9. Reflect — Francesca's History Conclusion
          </h2>

          <StepBox step="1" title="Identify Francesca's claim" color="red">
            <div className="bg-red-50 p-3 rounded">
              <p><strong>Francesca says:</strong> "The pie chart shows that more students take history in School A than School B."</p>
            </div>
          </StepBox>

          <StepBox step="2" title="Analyze the fundamental problem" color="orange">
            <p><strong>The Problem:</strong> A pie chart shows <em>proportions</em>, not <em>absolute numbers</em>.</p>
            <div className="mt-3 space-y-2">
              <p>• Even if School A has a bigger history slice (higher %), School A might have fewer total students</p>
              <p>• Conversely, a smaller slice in School B could represent more actual students if School B is much larger</p>
            </div>
          </StepBox>

          <StepBox step="3" title="Provide a concrete example" color="yellow">
            <div className="bg-yellow-50 p-3 rounded">
              <p><strong>Example:</strong></p>
              <ul className="mt-2 space-y-1">
                <li>• School A: 40% take history, total = 100 students → 40 history students</li>
                <li>• School B: 30% take history, total = 200 students → 60 history students</li>
                <li>• Result: School A has a bigger slice but fewer history students!</li>
              </ul>
            </div>
          </StepBox>

          <StepBox step="4" title="State the correct approach" color="green">
            <p><strong>What Francesca needs:</strong></p>
            <ul className="mt-2 space-y-1">
              <li>• The total number of students in each school</li>
              <li>• Then calculate: (percentage) × (total) for each school</li>
              <li>• Compare the actual numbers, not just the slice sizes</li>
            </ul>
          </StepBox>

          <AnswerBox>
            <p><strong>Francesca is wrong.</strong> Pie charts show proportions, not absolute numbers. Without knowing the total students in each school, she cannot conclude which school has more history students. A bigger slice doesn't always mean more people when the pie sizes differ.</p>
          </AnswerBox>
        </motion.div>
      )}

      <MemoryBox>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <strong>🧠 Core Rules:</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Full pie = 360° = 100%</li>
              <li>• Angle = (freq ÷ total) × 360°</li>
              <li>• Amount = (% ÷ 100) × total</li>
            </ul>
          </div>
          <div>
            <strong>⚠️ Common Traps:</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Proportion ≠ actual number</li>
              <li>• Bigger pie paradox</li>
              <li>• Always check totals first</li>
            </ul>
          </div>
          <div>
            <strong>✅ Problem-Solving:</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Read % → Write equation → Calculate → Conclude</li>
              <li>• Visual estimation ± 3-5% is acceptable</li>
              <li>• Show working for full marks</li>
            </ul>
          </div>
          <div>
            <strong>📊 Key Concepts:</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Modal = most frequent</li>
              <li>• Fractions: ½ = 180°, ¼ = 90°</li>
              <li>• Check answers sum to 100%/360°</li>
            </ul>
          </div>
          <div>
            <strong>🎯 Exam Tips:</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Use protractor for drawing</li>
              <li>• Label sectors clearly</li>
              <li>• Round sensibly (whole degrees)</li>
            </ul>
          </div>
          <div>
            <strong>🚀 Memory Aid:</strong>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Pizza slices = pie sectors 🍕</li>
              <li>• Bigger pizza ≠ bigger slice</li>
              <li>• Always ask: "% of what total?"</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
          <p className="text-center font-bold text-yellow-800">
            🎓 IAS-style Memory: "Ashkam's Healthy Pie" - Each topping (food group) takes space proportional to its importance (calories)!
          </p>
        </div>
      </MemoryBox>
    </div>
  );
};

export default PieChartStepByStepWorked;
