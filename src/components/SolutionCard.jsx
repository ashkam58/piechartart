import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SolutionCard({ title, prompt, StepsComponent, sandboxTitle = 'Try it yourself' }) {
  const [step, setStep] = useState(0)
  return (
    <div className="card">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      <p className="mt-1 text-slate-700">{prompt}</p>

      {/* Navigation Controls - Fixed Position */}
      <div className="sticky top-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-3 mb-4 z-10 shadow-lg">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300"
                  onClick={() => setStep(s => Math.max(0, s - 1))}
                  disabled={step === 0}>
            ← Back
          </button>
          <button className="btn"
                  onClick={() => setStep(s => s + 1)}>
            Next →
          </button>
          <button className="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 ml-auto"
                  onClick={() => setStep(0)}>
            Reset
          </button>
          <span className="text-sm text-gray-500 ml-2">Step {step + 1}</span>
        </div>
      </div>

      {/* Stepper Content */}
      <div className="mt-4">
        <StepsComponent step={step} />
      </div>

      {/* Sandbox (auto-shown after final step if component exposes one) */}
      {StepsComponent.Sandbox && (
        <div className="mt-6">
          <h3 className="font-semibold text-slate-800 mb-2">{sandboxTitle}</h3>
          <StepsComponent.Sandbox />
        </div>
      )}
    </div>
  )
}
