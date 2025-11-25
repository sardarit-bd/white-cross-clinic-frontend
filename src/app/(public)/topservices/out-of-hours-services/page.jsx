import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "Out Of Hours Services",
  description: `Our Out Of Hours Services ensure access to medical care beyond traditional clinic hours, providing peace of mind and prompt attention to urgent healthcare needs.`,
  image: "/images/GP-out-of-hours-2.webp",
  imageAlt: "Out Of Hours Services",
};

const title = "Advantages Of Out Of Hours Services"
const advantages = [
  {
    title: "Convenience",
    desc: "Individuals can seek medical attention without disrupting their daily schedules, as our services accommodate evening, weekend, and holiday hours."
  },
  {
    title: "Immediate Assistance",
    desc: "Access to medical care outside regular hours ensures prompt attention to urgent health concerns, offering reassurance and support during unexpected medical situations."
  },
  {
    title: "Reduced Emergency Room Visits",
    desc: "By offering timely medical attention for non-life-threatening issues, our Out Of Hours Services help reduce unnecessary visits to the emergency room, easing the burden on hospital resources."
  },
  {
    title: "Continuity Of Care",
    desc: "Patients receive care from familiar healthcare providers, ensuring continuity and consistency in their medical treatment and management of ongoing conditions."
  },
  {
    title: "Peace Of Mind",
    desc: "Knowing that medical assistance is available when needed provides peace of mind to patients and their families, especially during times of uncertainty or medical emergencies."
  },
  {
    title: "Accessibility",
    desc: "Our Out Of Hours Services cater to the diverse needs of our community, ensuring access to healthcare services for individuals with busy schedules or limited availability during standard clinic hours."
  }
];

const data = [
  { name: "Out of hours services", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Strains and sprains", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "X-rays and referrals", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Minor head injuries", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Bites and stings", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Mild burns", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Skin problems and rashes", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Abdominal pains", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Urine infections", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Eye infections", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Wound dressings", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Sutures and staples removals", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Emergency Contraception", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Ear, nose and throat infections", perDose: "£0", doses: "0 per dose", price: "£0" },
];

export default function page() {
  return (
    <div className='mt-20'>
      <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
        <h2 className='text-5xl text-center'>Out Of Hours Services</h2>
      </section>
      <VaccinePricingTable data={data} />
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <EmergencyCTA />
      <ContactSection />
    </div>
  )
}
