import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import MobileClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

export default function page() {
  return (
    <div className='mt-20'>
        <section className='bg-[#003798] h-[300px] flex flex-col items-center justify-center text-white'>
            <h2 className='text-5xl text-center'>Mobile Clinics</h2>
        </section>
        <MobileClinicIntro />
        <MobileClinicAdvantages />
        <EmergencyCTA />
        <ContactSection />
    </div>
  )
}
