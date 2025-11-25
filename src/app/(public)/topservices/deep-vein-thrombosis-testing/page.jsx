import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Deep Veins Thrombosis Testing",
    description: `Progress Medical Clinic offers Deep Vein Thrombosis (DVT) Testing, a crucial service for diagnosing blood clotting issues that can lead to serious health complications. Our state-of-the-art diagnostic tests and experienced healthcare professionals ensure accurate detection and prompt treatment of DVT, safeguarding your vascular health.`,
    image: "/images/deepVeins.webp",
    imageAlt: "travelHealth",
};
const title = "Advantages Of Deep Veins Thrombosis Testing"
export const advantages = [
    {
        title: "Enhanced Vascular Health",
        desc: "Protect your vascular health and circulation by identifying and addressing underlying risk factors for DVT, such as immobility, obesity, and genetic predisposition."
    },
    {
        title: "Improved Prognosis",
        desc: "Improve your prognosis and long-term outcomes by addressing DVT promptly and effectively, minimizing the risk of recurrent clotting episodes."
    },
    {
        title: "Personalized Treatment",
        desc: "Receive personalized treatment plans tailored to your specific condition, medical history, and risk factors, ensuring optimal management and outcomes."
    },
    {
        title: "Accurate Diagnosis",
        desc: "Benefit from accurate and reliable diagnostic tests, including ultrasound imaging and D-dimer blood tests, to confirm the presence of DVT with precision."
    },
    {
        title: "Prevention Of Complications",
        desc: "Prompt diagnosis and treatment of DVT reduce the risk of complications such as chronic venous insufficiency and post-thrombotic syndrome."
    },
    {
        title: "Early Detection",
        desc: "Detect DVT early to prevent complications such as pulmonary embolism, which can be life-threatening if left untreated."
    }
];


const data = [
  { name: "DVT testing", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "No INR Dosing", perDose: "£0", doses: "0 per dose", price: "£0" },
];

export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Deep Veins Thrombosis Testing</h2>
            </section>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
