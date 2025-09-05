import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Interactive from './pages/Interactive'
import Questions from './pages/Questions'
import Solutions from './pages/Solutions'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="app-container min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 pb-16 pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </main>
    </div>
  )
}
