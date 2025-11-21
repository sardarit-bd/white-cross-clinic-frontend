import ServicesGallery from '@/components/modules/services/ServicesGallery'
import ServicesGrid from '@/components/modules/services/ServicesGrid'
import TopServicesBanner from '@/components/modules/services/TopServiceBanner'
import React from 'react'

export default function page() {
  return (
   <div className='pt-20'>
    <TopServicesBanner />
    <ServicesGallery />
    <ServicesGrid />
   </div>
  )
}
