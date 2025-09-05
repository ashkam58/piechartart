import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FloatingIcon = ({ emoji, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="text-4xl"
  >
    {emoji}
  </motion.div>
)

const BounceText = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      delay
    }}
  >
    {children}
  </motion.span>
)

export default function Home(){
  return (
    <div className="space-y-8">
      {/* Hero Section - Super Fun for Grade 7! */}
      <motion.div 
        initial={{opacity:0, scale:0.8}} 
        animate={{opacity:1, scale:1}} 
        transition={{type: "spring", stiffness: 100}}
        className="card bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 text-center relative overflow-hidden"
      >
        {/* Floating Background Icons */}
        <div className="absolute top-4 left-4">
          <FloatingIcon emoji="📊" delay={0} />
        </div>
        <div className="absolute top-8 right-8">
          <FloatingIcon emoji="🎯" delay={0.5} />
        </div>
        <div className="absolute bottom-4 left-8">
          <FloatingIcon emoji="🏆" delay={1} />
        </div>
        <div className="absolute bottom-8 right-4">
          <FloatingIcon emoji="✨" delay={1.5} />
        </div>

        <motion.h1 
          className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "bounce", stiffness: 200 }}
        >
          📊 <BounceText delay={0.1}>YUVAAN</BounceText> <BounceText delay={0.2}>STATS</BounceText> <BounceText delay={0.3}>LAB</BounceText> 🎮
        </motion.h1>
        
        <motion.p 
          className="text-2xl text-purple-700 mb-2 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          🎊 Grade 7 Math Made Fun & Easy! 🎊
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Learn pie charts, graphs, and data with <strong>cool animations</strong>, <strong>step-by-step solutions</strong>, and <strong>interactive games</strong>!
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          <Link className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all" to="/solutions">
            🧠 Smart Solutions
          </Link>
          <Link className="btn bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all" to="/questions">
            🎯 Practice Questions
          </Link>
          <Link className="btn bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all" to="/interactive">
            🎮 Fun Tools
          </Link>
        </motion.div>
      </motion.div>

      {/* Key Features - Animated Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div 
          initial={{opacity:0, x:-50}} 
          animate={{opacity:1, x:0}} 
          transition={{delay:0.3, type: "spring"}}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="card text-center bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-200 hover:border-blue-400 transition-all"
        >
          <motion.div 
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🧠
          </motion.div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">Step-by-Step Learning!</h3>
          <p className="text-blue-700 mb-4">
            📝 Every problem broken down into <strong>easy steps</strong><br/>
            🎯 Perfect for Grade 7 level<br/>
            ✨ With fun explanations!
          </p>
          <Link to="/solutions" className="btn bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105">Explore Solutions 🚀</Link>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:50}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.5, type: "spring"}}
          whileHover={{ scale: 1.05, rotateY: -5 }}
          className="card text-center bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-200 hover:border-green-400 transition-all"
        >
          <motion.div 
            className="text-6xl mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            🎯
          </motion.div>
          <h3 className="text-xl font-bold text-green-800 mb-3">Practice Like a Pro!</h3>
          <p className="text-green-700 mb-4">
            📚 Real exam questions<br/>
            🏆 Build confidence<br/>
            🎊 Get ready for tests!
          </p>
          <Link to="/questions" className="btn bg-green-500 hover:bg-green-600 text-white transform hover:scale-105">Start Practice 💪</Link>
        </motion.div>

        <motion.div 
          initial={{opacity:0, x:50}} 
          animate={{opacity:1, x:0}} 
          transition={{delay:0.7, type: "spring"}}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="card text-center bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-200 hover:border-purple-400 transition-all"
        >
          <motion.div 
            className="text-6xl mb-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            🎮
          </motion.div>
          <h3 className="text-xl font-bold text-purple-800 mb-3">Interactive & Fun!</h3>
          <p className="text-purple-700 mb-4">
            🎨 Create your own charts<br/>
            ⚡ See live calculations<br/>
            🌟 Learn by doing!
          </p>
          <Link to="/interactive" className="btn bg-purple-500 hover:bg-purple-600 text-white transform hover:scale-105">Play & Learn 🎉</Link>
        </motion.div>
      </div>

      {/* What You'll Master - Grade 7 Topics */}
      <motion.div 
        initial={{opacity:0, y:30}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:0.9}}
        className="card bg-gradient-to-r from-yellow-50 to-orange-100"
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-orange-800 mb-6"
          animate={{ textShadow: ["0 0 0px #f97316", "0 0 10px #f97316", "0 0 0px #f97316"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎊 What You'll Master in Grade 7! 🎊
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div 
            className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-lg border-2 border-pink-200"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h4 className="font-bold text-pink-800 mb-3 text-lg">🥧 Pie Charts = Pizza Math!</h4>
            <ul className="text-pink-700 space-y-1">
              <li>🍕 Calculate slice angles</li>
              <li>📊 Turn data into percentages</li>
              <li>🔍 Compare different charts</li>
              <li>✨ Make your own pie charts!</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-200"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <h4 className="font-bold text-blue-800 mb-3 text-lg">📊 Bar Charts & Tables</h4>
            <ul className="text-blue-700 space-y-1">
              <li>📈 Create awesome bar charts</li>
              <li>🎯 Find the most common data</li>
              <li>🧮 Calculate averages easily</li>
              <li>📋 Organize data like a pro!</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-200"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h4 className="font-bold text-green-800 mb-3 text-lg">🌿 Data Detective Skills</h4>
            <ul className="text-green-700 space-y-1">
              <li>🔍 Find patterns in numbers</li>
              <li>📐 Understand mean, median, mode</li>
              <li>📊 Read graphs like a superhero</li>
              <li>🏆 Solve real-world problems!</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 rounded-lg border-2 border-purple-200"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <h4 className="font-bold text-purple-800 mb-3 text-lg">🎯 Problem Solving</h4>
            <ul className="text-purple-700 space-y-1">
              <li>🧩 Break down tricky questions</li>
              <li>✅ Check your answers</li>
              <li>💡 Learn smart shortcuts</li>
              <li>🌟 Build confidence!</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-200"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h4 className="font-bold text-yellow-800 mb-3 text-lg">🎮 Interactive Fun</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>🎨 Create charts with your data</li>
              <li>⚡ See calculations happen live</li>
              <li>🎲 Play math games</li>
              <li>🏅 Earn achievement points!</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-100 to-pink-100 p-4 rounded-lg border-2 border-red-200"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <h4 className="font-bold text-red-800 mb-3 text-lg">🏆 Test Preparation</h4>
            <ul className="text-red-700 space-y-1">
              <li>📝 Practice exam questions</li>
              <li>⏱️ Improve your speed</li>
              <li>🎯 Master exam techniques</li>
              <li>🌟 Get top grades!</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Super Easy Getting Started */}
      <motion.div 
        initial={{opacity:0, scale:0.9}} 
        animate={{opacity:1, scale:1}} 
        transition={{delay:1.1, type: "spring"}}
        className="card bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-4 border-emerald-200"
      >
        <motion.h2 
          className="text-3xl font-bold text-emerald-800 mb-6 text-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🚀 Ready to Become a Math Star? 🌟
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="text-6xl mb-3"
              animate={{ bounce: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            >
              1️⃣
            </motion.div>
            <h3 className="font-bold text-emerald-700 mb-2 text-xl">Look at Questions</h3>
            <p className="text-emerald-600">
              🔍 Check out the cool problems you'll solve!<br/>
              👀 See what's coming up in your tests
            </p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="text-6xl mb-3"
              animate={{ bounce: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            >
              2️⃣
            </motion.div>
            <h3 className="font-bold text-emerald-700 mb-2 text-xl">Follow the Steps</h3>
            <p className="text-emerald-600">
              📚 Every solution explained super clearly<br/>
              🧠 Understand the "why" behind each step
            </p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="text-6xl mb-3"
              animate={{ bounce: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            >
              3️⃣
            </motion.div>
            <h3 className="font-bold text-emerald-700 mb-2 text-xl">Practice & Play</h3>
            <p className="text-emerald-600">
              🎮 Use the fun interactive tools<br/>
              🎯 Build confidence with practice!
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-2xl font-bold text-emerald-800 mb-4">
            🎉 Let's make Grade 7 math your superpower! 🎉
          </p>
          <Link 
            to="/solutions" 
            className="btn bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 text-xl px-8 py-3 transform hover:scale-110 transition-all"
          >
            🚀 Start Your Math Adventure! 🚀
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
