import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import ServicesGallery from '@/components/modules/services/ServicesGallery'
import ServicesGrid from '@/components/modules/services/ServicesGrid'
import TopServicesBanner from '@/components/modules/services/TopServiceBanner'

export default function page() {
  return (
    <div>
      <TopServicesBanner />
      <ServicesGrid />
      <ServicesGallery />
      <EmergencyCTA />
    </div>
  )
}
