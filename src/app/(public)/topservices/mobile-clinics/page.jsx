import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "Mobile Clinics Services",
  description: `At White Cross Clinic, we understand that access to healthcare is essential,
  regardless of where you live or work. That’s why we're proud to offer our Mobile
  Clinic services, bringing quality healthcare directly to communities across your area.
  Our state-of-the-art mobile medical unit is fully equipped to provide a wide range of
  healthcare services, making it easier and more convenient for you to prioritize your
  health and well-being.`,
  image: "/images/mobile-clinic.webp",
  imageAlt: "Mobile Clinic",
};
const title = "Advantages Of Mobile Clinics Services"
const advantages = [
  {
    title: "Convenience",
    desc: "For individuals living in rural or underserved areas, accessing healthcare services can be challenging. Our Mobile Clinic helps bridge this gap by bringing quality healthcare directly to communities that may not have easy access to traditional medical facilities."
  },
  {
    title: "Accessibility",
    desc: "For individuals living in rural or underserved areas, accessing healthcare services can be challenging. Our Mobile Clinic helps bridge this gap by bringing quality healthcare directly to communities that may not have easy access to traditional medical facilities."
  },
  {
    title: "Cost-Effective",
    desc: "Visiting a traditional clinic can often involve expenses such as transportation costs and time off work. Our Mobile Clinic eliminates these additional costs, making healthcare more affordable and accessible for everyone."
  },
  {
    title: "Comprehensive Care",
    desc: "Our Mobile Clinic offers personalized attention and care from experienced healthcare professionals who are dedicated to meeting your individual needs. You'll receive the same high-quality care and attention that you would expect from a traditional clinic setting."
  },
  {
    title: "Personalized Attention",
    desc: "By bringing healthcare directly to communities, our Mobile Clinic fosters community engagement and empowerment. We work closely with local organizations and leaders to understand the unique healthcare needs of each community and tailor our services accordingly."
  },
  {
    title: "Community Engagement",
    desc: "Visiting a traditional clinic can often involve expenses such as transportation costs and time off work. Our Mobile Clinic eliminates these additional costs, making healthcare more affordable and accessible for everyone."
  }
];

const data = [
  { name: "Asthma reviews", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Mobile services", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Management", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Wound care", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Coil removal", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Emergency Contraception / Emergency Contraception", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "All types of blood tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Colds + coughs", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Chest infections", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Flu symptoms", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Muscle aches", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Musculoskeletal pains", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Back pain", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Urine infections", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Ear syringe", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Travel immunisation", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Baby immunisation", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "All specialist referrals", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "X-rays, Scans, CT scans", perDose: "£0", doses: "0 per dose", price: "£0" }
];

export default function page() {
  return (
    <div className='mt-20'>
      <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
        <h2 className='text-5xl text-center'>Mobile Clinics</h2>
      </section>
      <VaccinePricingTable data={data} />
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <EmergencyCTA />
      <ContactSection />
    </div>
  )
}
