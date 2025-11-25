import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'
import BrandTable from '../immunisation/BrandTable'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Minor Injuries",
    description: `White Cross Clinic offers expert care for Minor Injuries, providing prompt and efficient treatment for a variety of common injuries. From cuts and bruises to sprains and minor fractures, our experienced healthcare professionals are here to provide comprehensive care to help you recover quickly and get back to your daily activities.`,
    image: "/images/minoreInjuries.webp",
    imageAlt: "Minor Injuries",
};
const title = "Advantages Of Minor Injuries"
export const advantages = [
  {
    title: "Prompt Treatment",
    desc: "Receive timely treatment for minor injuries, reducing the risk of complications and promoting faster healing."
  },
  {
    title: "Expert Evaluation",
    desc: "Benefit from expert evaluation and assessment of your injury, ensuring accurate diagnosis and appropriate treatment."
  },
  {
    title: "Pain Relief",
    desc: "Alleviate pain and discomfort associated with minor injuries through effective pain management strategies and treatments."
  },
  {
    title: "Prevention Of Infection",
    desc: "Reduce the risk of infection by receiving proper wound care and treatment for cuts, scrapes, and abrasions."
  },
  {
    title: "Promotion Of Healing",
    desc: "Promote optimal healing of minor fractures, sprains, and strains with appropriate immobilization, rest, and rehabilitation."
  },
  {
    title: "Restoration Of Function",
    desc: "Restore function and mobility to injured areas through targeted therapies and exercises designed to improve strength and flexibility."
  }
];



const data = [
  { name: "Bites, human and animal", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Cuts and lacerations", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Foreign bodies in the eyes, nose and ears", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Vitamin d tests X-ray and fractures that require plaster only (ages 5+)", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Minor burns and scalds", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Minor head injuries (no loss of consciousness)", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Soft tissue injuries", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Wound infections", perDose: "£0", doses: "0 per dose", price: "£0" },
];

export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Minor Injuries</h2>
            </section>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
