import React from 'react'
import SolutionCard from '../components/SolutionCard'
import PieWorked from '../components/solutions/PieWorked'
import StemLeafWorkedNew from '../components/solutions/StemLeafWorkedNew'
import GroupedWorkedNew from '../components/solutions/GroupedWorkedNew'
import ComparisonPieWorked from '../components/solutions/ComparisonPieWorked'
import PyramidWorkedNew from '../components/solutions/PyramidWorkedNew'
import CompoundBarWorked from '../components/solutions/CompoundBarWorked'
import PieChartStepByStepWorked from '../components/solutions/PieChartStepByStepWorked'

export default function Solutions(){
  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="text-3xl font-bold text-slate-800">Step-by-Step Statistics Solutions</h1>
        <p className="text-slate-700 mt-3 text-lg">
          Master statistical concepts with detailed, step-by-step solutions based on exam-style questions.
          Each solution breaks down the problem into clear, manageable steps with visual explanations.
        </p>
      </section>

      <SolutionCard
        title="Pie Chart Analysis — Calculating Angles & Percentages"
        prompt="A garden survey recorded different bird types. Calculate sector angles and percentages, then create a pie chart to visualize the data."
        StepsComponent={PieWorked}
        sandboxTitle="Practice with your own data"
      />

      <SolutionCard
        title="Advanced Pie Chart Problems — Step by Step Solutions"
        prompt="Master complex pie chart analysis including tourist attractions comparison, school language distribution, and critical thinking about proportions vs. actual numbers."
        StepsComponent={PieChartStepByStepWorked}
        sandboxTitle="Practice with advanced pie chart problems"
      />

      <SolutionCard
        title="Comparing Two Pie Charts — Identifying Changes"
        prompt="Compare family spending between 2004 and 2014. Identify categories that increased, decreased, or stayed the same based on visual analysis."
        StepsComponent={ComparisonPieWorked}
        sandboxTitle="Compare your own pie charts"
      />

      <SolutionCard
        title="Stem-and-Leaf Plots — Median, Range & Mode"
        prompt="Create a stem-and-leaf display from raw data and calculate key statistics including median, range, and mode."
        StepsComponent={StemLeafWorkedNew}
        sandboxTitle="Build your own stem-and-leaf plot"
      />

      <SolutionCard
        title="Grouped Frequency Tables — Modal Class & Estimated Mean"
        prompt="Analyze grouped height data to find the modal class, median class, and estimate the mean using midpoints."
        StepsComponent={GroupedWorkedNew}
        sandboxTitle="Analyze your own grouped data"
      />

      <SolutionCard
        title="Population Pyramid Analysis — Comparing Distributions"
        prompt="Compare age distributions between males and females using population pyramid data to identify demographic patterns."
        StepsComponent={PyramidWorkedNew}
        sandboxTitle="Create your own population pyramid"
      />

      <SolutionCard
        title="Two-Way Tables & Compound Bar Charts"
        prompt="Convert survey data from multiple groups into a compound bar chart and identify overall trends across categories."
        StepsComponent={CompoundBarWorked}
        sandboxTitle="Build your own compound bar chart"
      />

      {/* Quick reference guide */}
      <section className="card bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-xl font-bold text-indigo-800 mb-4">📝 Quick Reference Formulas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">Pie Charts</h3>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• <strong>Sector angle:</strong> (count ÷ total) × 360°</li>
              <li>• <strong>Percentage:</strong> (count ÷ total) × 100%</li>
              <li>• <strong>Check:</strong> All angles sum to 360°</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">Central Tendency</h3>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• <strong>Median:</strong> Middle value when ordered</li>
              <li>• <strong>Mode:</strong> Most frequent value</li>
              <li>• <strong>Range:</strong> Highest - Lowest</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">Grouped Data</h3>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• <strong>Modal class:</strong> Highest frequency</li>
              <li>• <strong>Median class:</strong> Contains n/2th value</li>
              <li>• <strong>Estimated mean:</strong> Σ(f×midpoint) ÷ Σf</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">Comparing Data</h3>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• Compare <strong>percentages</strong>, not raw counts</li>
              <li>• Look for <strong>visual changes</strong> in sector sizes</li>
              <li>• Consider <strong>context</strong> and total values</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study tips */}
      <section className="card bg-gradient-to-r from-green-50 to-emerald-50">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">💡 Study Tips for Success</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-emerald-700 mb-2">Understand the Question</h3>
            <p className="text-sm text-emerald-600">Read carefully and identify what statistics you need to calculate.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-semibold text-emerald-700 mb-2">Show Your Work</h3>
            <p className="text-sm text-emerald-600">Write down each step clearly, even for simple calculations.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-semibold text-emerald-700 mb-2">Check Your Answer</h3>
            <p className="text-sm text-emerald-600">Verify calculations make sense (e.g., percentages sum to 100%).</p>
          </div>
        </div>
      </section>
    </div>
  )
}
