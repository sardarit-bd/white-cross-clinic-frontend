import BannerSlider from '@/components/modules/Home/BannerSlider'
import CoreServicesSection from '@/components/modules/Home/CoreServicesSection'
import DepartmentsSection from '@/components/modules/Home/DepartmentsSection'
import DoctorsSection from '@/components/modules/Home/DoctorSection'
import React from 'react'

export default function Home() {
  return (
    <>
      <BannerSlider />
      <CoreServicesSection />
      <DepartmentsSection />
      <DoctorsSection />
    </>
  )
}
