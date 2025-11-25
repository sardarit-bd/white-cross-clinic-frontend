import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Wound Care",
    description: `At Progress Medical Clinic, our Wound Care service offers comprehensive treatment and management for a wide range of wounds, ensuring optimal healing and preventing complications. Our team of experienced healthcare professionals utilizes advanced techniques and therapies to address acute and chronic wounds, promoting faster recovery and improved quality of life.`,
    image: "/images/woundCare.webp",
    imageAlt: "travelHealth",
};
const title = "Advantages Of Wound Care"
export const advantages = [
    {
        title: "Expert Evaluation",
        desc: "Receive expert evaluation and assessment of your wound, including its severity, underlying causes, and potential complications."
    },
    {
        title: "Customized Treatment Plans",
        desc: "Benefit from personalized treatment plans tailored to your specific wound type, medical history, and individual needs."
    },
    {
        title: "Prevention Of Infection",
        desc: "Reduce the risk of infection and complications through meticulous wound cleaning, infection control measures, and antibiotic therapy when necessary."
    },
    {
        title: "Pain Management",
        desc: "Receive comprehensive pain management strategies to alleviate discomfort associated with your wound and improve your overall comfort and well-being."
    },
    {
        title: "Promotion Of Healing",
        desc: "Promote optimal wound healing with evidence-based interventions aimed at accelerating tissue repair, reducing inflammation, and minimizing scarring."
    },
    {
        title: "Advanced Techniques",
        desc: "Access advanced wound care techniques and therapies, including debridement, dressings, negative pressure wound therapy (NPWT), and bioengineered skin substitutes."
    }
];


const data = [
  { name: "Dressing change", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "No leg ulcers", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "No compression bandages", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Wound infection treatment (antibiotics)", perDose: "£0", doses: "0 per dose", price: "£0" },
];


export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Wound Care</h2>
            </section>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
