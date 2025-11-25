import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "Facial Services",
  description: `Indulge in rejuvenating and refreshing Facial Services at White Cross Clinic. Our customized facial treatments are designed to revitalize your skin, leaving you with a radiant and youthful complexion. Whether you’re seeking deep cleansing, hydration, or anti-aging benefits, our expert aestheticians will tailor each facial to meet your unique skincare needs.`,
  image: "/images/facial.webp",
  imageAlt: "Facial Services",
};
const title = "Advantages Of Facial Services"
export const advantages = [
  {
    title: "Deep Cleansing",
    desc: "Experience thorough cleansing of the skin to remove dirt, oil, and impurities, promoting a clear and radiant complexion."
  },
  {
    title: "Hydration And Nourishment",
    desc: "Replenish moisture and nutrients to the skin, restoring hydration and vitality for a healthy and glowing appearance."
  },
  {
    title: "Exfoliation And Renewal",
    desc: "Remove dead skin cells and promote cell turnover for smoother texture, refined pores, and a more youthful-looking complexion."
  },
  {
    title: "Stress Relief",
    desc: "Enjoy a relaxing and pampering experience that helps reduce stress, tension, and fatigue, leaving you feeling refreshed and rejuvenated."
  },
  {
    title: "Targeted Treatment",
    desc: "Address specific skincare concerns such as acne, hyperpigmentation, fine lines, and dullness with targeted ingredients and techniques tailored to your needs."
  },
  {
    title: "Enhanced Circulation",
    desc: "Stimulate blood flow and circulation to the skin, promoting a natural, healthy glow and improving overall skin tone and texture."
  }
];




export default function page() {
  return (
    <div className='mt-20'>
      <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
        <h2 className='text-5xl text-center'>Facial Services</h2>
      </section>
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <EmergencyCTA />
      <ContactSection />
    </div>
  )
}
