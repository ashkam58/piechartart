import React from 'react'
import QuizPie from '../components/QuizPie'

export default function Games(){
  return (
    <div className="space-y-6">
      <QuizPie />
      <div className="card">
        <h3 className="font-semibold text-slate-800 mb-2">More game ideas (quick add-ons)</h3>
        <ul className="list-disc pl-5 text-slate-700">
          <li><strong>Bar Sprint:</strong> Show a random histogram; students guess the modal class and median band before the reveal.</li>
          <li><strong>Leaf Race:</strong> Feed numbers one by one; teams place leaves on the correct stem fastest.</li>
        </ul>
      </div>
    </div>
  )
}
