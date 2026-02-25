import AboutHero from '@/components/modules/about/AboutHero'
import MissionSection from '@/components/modules/about/MissionSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import React from 'react'
import CardsGrid from './CardsGrid'

export default function About() {
  return (
    <>
        <AboutHero />
        {/* <MissionSection /> */}
        <CardsGrid />
        <EmergencyCTA />
    </>
  )
}
