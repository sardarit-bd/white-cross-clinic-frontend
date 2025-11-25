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
    title: "Physiotherapy Services",
    description: `At White Cross Clinic, we understand the importance of making informed decisions about family planning. Our dedicated team of healthcare professionals is here to provide compassionate and comprehensive family planning services tailored to your individual needs. Whether you’re considering starting a family, preventing pregnancy, or exploring contraceptive options, we’re here to support you every step of the way.`,
    image: "/images/physiotherapy.webp",
    imageAlt: "Physiotherapy Services",
};
const title = "Advantages Of Physiotherapy Services"
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

export const bloodTests = [
    {
        vaccine: "Home tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Womens tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Mens tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Vitamin D tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Iron blood tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Sports performance tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Cholesterol tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Ovulation progesterone blood tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Cortisol blood tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Vitamin B12 tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "PSA blood tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Hepatitis B immunity blood tests",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
    {
        vaccine: "Over 300+ blood tests, can be done at home or taken at surgery",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0",
    },
];

const data = [
  { name: "Advice group and individual sessions", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Pain management advice and programmes", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Patient information in a variety of formats", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Home exercise programmes", perDose: "£0", doses: "0 per dose", price: "£0" },
  {
    name: "Pelvic exercises for patients with continence problems",
    perDose: "£0",
    doses: "0 per dose",
    price: "£0",
  },
  { name: "Gym based exercise classes", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "One-to-one gym sessions", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Manual therapy", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Injection therapy", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Splinting", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Gym based exercise classes", perDose: "£0", doses: "0 per dose", price: "£0" },
];


export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Physiotherapy Services</h2>
            </section>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <BrandTable data={bloodTests} title="Vaccines" columns={[
                "Vaccine",
                "Per Dose",
                "Doses Per Course",
                "Price Per Course"
            ]} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
