import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Blood Test",
    description: `At White Cross Clinic, we offer comprehensive Blood Test Services to assess and monitor your health. Our state-of-the-art laboratory facilities and experienced healthcare professionals ensure accurate and timely results for a wide range of blood tests. From routine screenings to specialized diagnostics, we are committed to helping you understand and manage your health effectively.`,
    image: "/images/bloodTest.webp",
    imageAlt: "Blood Test",
};
const title = "Advantages Of Blood Test"
export const advantages = [
    {
        title: "Diagnostic Insight",
        desc:
            "Gain valuable insight into your health status through a wide range of blood tests, including lipid profiles, blood glucose tests, complete blood counts (CBC), liver function tests (LFTs), and more.",
    },
    {
        title: "Early Detection",
        desc:
            "Detect potential health issues at an early stage through routine blood tests, allowing for prompt intervention and treatment to prevent complications and promote better health outcomes.",
    },
    {
        title: "Disease Monitoring",
        desc:
            "Monitor chronic conditions such as diabetes, hypertension, and thyroid disorders through regular blood tests, enabling healthcare providers to adjust treatment plans and optimize disease management.",
    },
    {
        title: "Treatment Efficacy",
        desc:
            "Assess the effectiveness of medications, therapies, and lifestyle changes by monitoring changes in blood test results over time, ensuring that your treatment plan is working optimally.",
    },
    {
        title: "Health Screening",
        desc:
            "Use blood tests as part of routine health screenings for early detection of common health conditions and to assess overall health and wellness.",
    },
    {
        title: "Preventive Medicine",
        desc:
            "Use blood tests as part of preventive medicine to identify risk factors for diseases such as heart disease, cancer, and nutritional deficiencies, empowering you to take proactive steps to protect your health.",
    },
];

const data = [
  { name: "Home tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Womens tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Mens tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Vitamin d tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Iron blood tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Sports performance tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Cholesterol tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Ovulation progesterone blood tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Cortisol blood tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Vitamin b12 tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "PSA blood tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Hepatitis B immunity blood tests", perDose: "£0", doses: "0 per dose", price: "£0" },
  {
    name: "Over 300+ blood tests, can be done at home or taken at surgery",
    perDose: "£0",
    doses: "0 per dose",
    price: "£0",
  },
];




export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Blood Test</h2>
            </section>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
