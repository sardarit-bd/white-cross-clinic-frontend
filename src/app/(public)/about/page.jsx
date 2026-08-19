import AboutHero from '@/components/modules/about/AboutHero'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import CoreServicesSection from "../../../components/modules/Home/CoreServicesSection"
import CardsGrid from './CardsGrid'

export default async function About() {

  return (
    <>
      <AboutHero />
      <CoreServicesSection />
      {/* <MissionSection /> */}
      <CardsGrid />
      <EmergencyCTA />
    </>
  )
}
