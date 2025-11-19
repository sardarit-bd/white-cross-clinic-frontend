import ArticlesPreviewSection from '@/components/modules/Home/ArticlesPreviewSection'
import BannerSlider from '@/components/modules/Home/BannerSlider'
import CoreServicesSection from '@/components/modules/Home/CoreServicesSection'
import DepartmentsSection from '@/components/modules/Home/DepartmentsSection'
import DoctorsSection from '@/components/modules/Home/DoctorSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import GallerySection from '@/components/modules/Home/GallerySection'
import HomeSearchSection from '@/components/modules/Home/HomeSearchSection'
import TestimonialsSection from '@/components/modules/Home/TestimonialsSection'
import React from 'react'

export default function Home() {
  return (
    <>
      <BannerSlider />
      <HomeSearchSection />
      <CoreServicesSection />
      <DepartmentsSection />
      <DoctorsSection />
      <EmergencyCTA />
      <ArticlesPreviewSection />
      <GallerySection />
      <TestimonialsSection />
      
    </>
  )
}
