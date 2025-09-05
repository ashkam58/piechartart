import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        className="card bg-gradient-to-r from-blue-50 to-indigo-50 text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">📊 Visual Statistics Lab</h1>
        <p className="text-xl text-indigo-700 mb-6 max-w-3xl mx-auto">
          Master statistics concepts with interactive tools and step-by-step solutions. 
          Perfect for GCSE/A-Level students and teachers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="btn bg-indigo-600 text-white hover:bg-indigo-700" to="/solutions">
            📝 Step-by-Step Solutions
          </Link>
          <Link className="btn bg-green-600 text-white hover:bg-green-700" to="/questions">
            📚 Practice Questions
          </Link>
          <Link className="btn bg-purple-600 text-white hover:bg-purple-700" to="/interactive">
            🎮 Interactive Tools
          </Link>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.1}}
          className="card text-center"
        >
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Comprehensive Solutions</h3>
          <p className="text-slate-700 mb-4">
            Detailed step-by-step solutions for pie charts, frequency tables, 
            stem-and-leaf plots, and more with clear explanations.
          </p>
          <Link to="/solutions" className="btn btn-sm">View Solutions →</Link>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="card text-center"
        >
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Exam-Style Practice</h3>
          <p className="text-slate-700 mb-4">
            Real textbook questions covering all major statistics topics 
            with guided practice and self-check guidelines.
          </p>
          <Link to="/questions" className="btn btn-sm">Practice Now →</Link>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.3}}
          className="card text-center"
        >
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Interactive Learning</h3>
          <p className="text-slate-700 mb-4">
            Build charts with your own data and see calculations update live. 
            Perfect for understanding concepts visually.
          </p>
          <Link to="/interactive" className="btn btn-sm">Explore Tools →</Link>
        </motion.div>
      </div>

      {/* Topics Covered */}
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:0.4}}
        className="card"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-4">📖 Topics Covered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">🥧 Pie Charts</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Calculating sector angles</li>
              <li>• Converting to percentages</li>
              <li>• Comparing multiple pie charts</li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">📊 Frequency Tables</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Modal and median classes</li>
              <li>• Estimating mean from grouped data</li>
              <li>• Cumulative frequency</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">🌿 Stem-and-Leaf</h4>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Creating ordered displays</li>
              <li>• Finding median and range</li>
              <li>• Back-to-back comparisons</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">📈 Bar Charts</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Simple and compound bars</li>
              <li>• Two-way table conversion</li>
              <li>• Comparative analysis</li>
            </ul>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">👥 Population Data</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Population pyramids</li>
              <li>• Demographic comparisons</li>
              <li>• Age structure analysis</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-3 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">🔢 Statistics</h4>
            <ul className="text-indigo-700 text-sm space-y-1">
              <li>• Mean, median, mode</li>
              <li>• Range and quartiles</li>
              <li>• Data interpretation</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Getting Started */}
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:0.5}}
        className="card bg-gradient-to-r from-emerald-50 to-teal-50"
      >
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">🚀 How to Get Started</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="font-semibold text-emerald-700 mb-2">Start with Questions</h3>
            <p className="text-emerald-600 text-sm">
              Browse the practice questions to see what types of problems you'll solve.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="font-semibold text-emerald-700 mb-2">Learn with Solutions</h3>
            <p className="text-emerald-600 text-sm">
              Follow detailed step-by-step solutions to understand the methods.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="font-semibold text-emerald-700 mb-2">Practice Interactively</h3>
            <p className="text-emerald-600 text-sm">
              Use the interactive tools to experiment with your own data.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
