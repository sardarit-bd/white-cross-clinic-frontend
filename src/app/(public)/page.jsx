import AboutHero from '@/components/modules/about/AboutHero'
import ArticlesPreviewSection from '@/components/modules/Home/ArticlesPreviewSection'
import BannerSlider from '@/components/modules/Home/BannerSlider'
import CoreServicesSection from '@/components/modules/Home/CoreServicesSection'
import DoctorsSection from '@/components/modules/Home/DoctorSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import GallerySection from '@/components/modules/Home/GallerySection'
import HomeSearchSection from '@/components/modules/Home/HomeSearchSection'
import TestimonialsSection from '@/components/modules/Home/TestimonialsSection'

export default function Home() {
  return (
    <>
      <BannerSlider />
      <AboutHero />
      <HomeSearchSection />
      <CoreServicesSection />
      {/* <DepartmentsSection /> */}
      <DoctorsSection />
      <EmergencyCTA />
      <ArticlesPreviewSection />
      <GallerySection />
      <TestimonialsSection />

    </>
  )
}
