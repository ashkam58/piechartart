import React from 'react'
import PieBuilder from '../components/PieBuilder'
import StemLeaf from '../components/StemLeaf'
import FreqTableBuilder from '../components/FreqTableBuilder'
import PopulationPyramid from '../components/PopulationPyramid'

export default function Interactive(){
  return (
    <div className="space-y-6">
      <PieBuilder />
      <StemLeaf />
      <FreqTableBuilder />
      <PopulationPyramid />
    </div>
  )
}
