import React from 'react'

const examQuestions = [
  {
    file: '220912.png', 
    title: 'Mixed Statistics Practice',
    description: 'Population pyramid, frequency tables, and back-to-back stem plots',
    questions: [
      'Compare the age structure between males and females using the population pyramid',
      'Calculate the mean from the grouped frequency table using midpoints',
      'Find the median and range from the back-to-back stem-and-leaf plot'
    ]
  },
  {
    file: '220903.png', 
    title: 'Stem-and-Leaf Analysis',
    description: 'Back-to-back stem plots and statistical comparisons',
    questions: [
      'Create stem-and-leaf plots for both data sets',
      'Compare the medians of the two distributions',
      'Which distribution has the greater range? Justify your answer.'
    ]
  },
  {
    file: '220851.png', 
    title: 'Grouped Frequency Tables',
    description: 'Comparing two test results using grouped data',
    questions: [
      'Identify the modal class for each test',
      'Estimate the mean score for both tests using midpoints',
      'Which test had better performance overall? Explain your reasoning.'
    ]
  },
  {
    file: '220842.png', 
    title: 'Mean from Grouped Data',
    description: 'Calculate mean height from frequency distribution',
    questions: [
      'Find the midpoint of each class interval',
      'Calculate the estimated mean height using the formula: Σ(f×x)/Σf',
      'Identify the modal class and explain why it\'s the mode'
    ]
  },
  {
    file: '220834.png', 
    title: 'Two-Way Tables & Compound Charts',
    description: 'Convert survey data to compound bar chart',
    questions: [
      'Create a compound bar chart from the two-way table',
      'Which charity received the most votes overall?',
      'Compare voting patterns between the three schools'
    ]
  },
  {
    file: '220813.png', 
    title: 'Pie Chart Comparisons',
    description: 'Compare pie charts across years and schools',
    questions: [
      'Calculate the angle for each sector in both pie charts',
      'Identify one category that increased and one that decreased',
      'Convert the largest sector to a percentage'
    ]
  },
  {
    file: '220804.png', 
    title: 'Income & Lunch Choice Analysis',
    description: 'Dual pie chart analysis for 2004 vs 2014 data',
    questions: [
      'Compare income distribution between 2004 and 2014',
      'Which category shows the biggest change as a percentage?',
      'Calculate the sector angle for the largest category in 2014'
    ]
  },
  {
    file: '220754.png', 
    title: 'Birds & Distance Pie Charts',
    description: 'Multiple pie chart interpretation',
    questions: [
      'Find the angle for the largest sector in the birds pie chart',
      'Compare the proportion of different distance categories',
      'Which bird type represents exactly 25% of the total?'
    ]
  },
  {
    file: '215408.png', 
    title: 'Foundations Practice',
    description: 'Angles, fractions, and basic pie chart skills',
    questions: [
      'Convert the given fractions to percentages',
      'Calculate the corresponding angles for a pie chart',
      'Verify that all sectors sum to 360°'
    ]
  }
]

const studyTips = [
  {
    icon: '📐',
    title: 'Angle Calculations',
    tip: 'Remember: Sector angle = (count ÷ total) × 360°. Always check your angles sum to 360°!'
  },
  {
    icon: '📊',
    title: 'Comparing Pie Charts', 
    tip: 'When totals differ, compare percentages not raw counts. Look for visual changes in sector sizes.'
  },
  {
    icon: '📈',
    title: 'Grouped Data Mean',
    tip: 'Use midpoints: Mean ≈ Σ(frequency × midpoint) ÷ total frequency. The modal class has highest frequency.'
  },
  {
    icon: '🔢',
    title: 'Median in Grouped Data',
    tip: 'Find the class containing the n/2th value using cumulative frequency.'
  }
]

export default function Questions(){
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="card bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-3xl font-bold text-indigo-800">📚 Exam-Style Practice Questions</h1>
        <p className="text-indigo-700 mt-3 text-lg">
          Practice with real exam questions from statistics textbooks. Each image contains multiple problems 
          to test your understanding of pie charts, frequency tables, and data analysis.
        </p>
      </section>

      {/* Study Tips */}
      <section className="card">
        <h2 className="text-xl font-bold text-slate-800 mb-4">💡 Key Tips for Success</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {studyTips.map((tip, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-2xl">{tip.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-800">{tip.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{tip.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Questions */}
      <div className="grid lg:grid-cols-2 gap-8">
        {examQuestions.map((item, idx) => (
          <div key={idx} className="card">
            {/* Image */}
            <div className="mb-4">
              <img 
                src={`/images/${item.file}`} 
                alt={item.title} 
                className="w-full rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow" 
              />
            </div>
            
            {/* Content */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Practice Questions:</h4>
                <ol className="list-decimal list-inside space-y-1 text-slate-700 text-sm">
                  {item.questions.map((question, qIdx) => (
                    <li key={qIdx}>{question}</li>
                  ))}
                </ol>
              </div>
              
              <div className="pt-2 border-t border-slate-200">
                <p className="text-slate-500 text-xs">
                  💡 <strong>Tip:</strong> Work through each question step-by-step. 
                  Check the Solutions page for detailed worked examples of similar problems.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Answer Checking Guide */}
      <section className="card bg-gradient-to-r from-green-50 to-emerald-50">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">✅ Self-Check Guidelines</h2>
        <div className="space-y-3">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-emerald-700 mb-2">For Pie Charts:</h3>
              <ul className="text-emerald-600 text-sm space-y-1">
                <li>• All sector angles should sum to 360° (±1° for rounding)</li>
                <li>• All percentages should sum to 100%</li>
                <li>• Larger counts = larger sectors visually</li>
                <li>• Compare percentages when totals differ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-700 mb-2">For Frequency Tables:</h3>
              <ul className="text-emerald-600 text-sm space-y-1">
                <li>• Modal class = highest frequency</li>
                <li>• Median class contains the n/2th value</li>
                <li>• Mean estimate uses midpoints: Σ(f×x)/Σf</li>
                <li>• Check that frequencies sum to total sample size</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-emerald-100 rounded">
            <p className="text-emerald-800 text-sm">
              <strong>Remember:</strong> Show all working clearly, label your answers with appropriate units, 
              and always double-check your calculations. When comparing data, explain your reasoning with evidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
