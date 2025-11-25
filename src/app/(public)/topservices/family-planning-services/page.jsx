import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Family Planning Services",
    description: `At White Cross Clinic, we understand the importance of making informed decisions about family planning. Our dedicated team of healthcare professionals is here to provide compassionate and comprehensive family planning services tailored to your individual needs. Whether you’re considering starting a family, preventing pregnancy, or exploring contraceptive options, we’re here to support you every step of the way.`,
    image: "/images/familyPlannig.webp",
    imageAlt: "familyPlannig",
};
const title = "Advantages Of Family Planning Services"
export const advantages = [
    {
        title: "Empowerment",
        desc: "Take control of your reproductive health and future, empowering you to make informed decisions about family planning."
    },
    {
        title: "Improved Health Outcomes",
        desc: "Enhance maternal and child health by spacing pregnancies and accessing timely prenatal care, reducing the risk of complications and mortality."
    },
    {
        title: "Economic Stability",
        desc: "Achieve economic stability through smaller family sizes, allowing for greater investment in education, healthcare, and personal development."
    },
    {
        title: "Education And Gender Equality",
        desc: "Promote education and gender equality by empowering women to pursue educational and career opportunities."
    },
    {
        title: "Environmental Sustainability",
        desc: "Contribute to environmental sustainability by supporting efforts to curb population growth and reduce resource consumption."
    },
    {
        title: "Prevention Of STIs",
        desc: "Prevent sexually transmitted infections through education, access to barrier methods, and STI screening services."
    }
];


const data = [
  { name: "Family Planning Services", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Coil removal", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "STI checks", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "STI referrals", perDose: "£0", doses: "0 per dose", price: "£0" },
];

export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Family Planning Services</h2>
            </section>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
