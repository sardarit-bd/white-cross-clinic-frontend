import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Psychiatrist Services",
    description: `At White Cross Clinic, we offer compassionate care from Psychiatrists who specialize in the diagnosis, treatment, and management of mental health conditions. Our Psychiatrists provide comprehensive evaluations, evidence-based treatments, and ongoing support to help individuals achieve mental wellness and improve their quality of life.`,
    image: "/images/psychiatrist.webp",
    imageAlt: "Psychiatrist Services",
};
const title = "Advantages Of Psychiatrist Services"
export const advantages = [
  {
    title: "Comprehensive Mental Health Care",
    desc: "Access comprehensive mental health care services, including evaluation, diagnosis, medication management, psychotherapy, and holistic treatment approaches."
  },
  {
    title: "Evidence-Based Treatments",
    desc: "Benefit from evidence-based treatments and therapies tailored to your specific needs, including medication management, cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), and mindfulness-based interventions."
  },
  {
    title: "Holistic Approach",
    desc: "Experience a holistic approach to mental health care, addressing the physical, emotional, and social aspects of well-being to promote overall health and resilience."
  },
  {
    title: "Support For Recovery",
    desc: "Receive ongoing support and guidance from our Psychiatrists to facilitate your recovery journey, including coping skills development, relapse prevention strategies, and community resources referrals."
  },
  {
    title: "Collaborative Care",
    desc: "Engage in collaborative care with other healthcare providers, including therapists, social workers, and primary care physicians, to ensure coordinated and integrated treatment that addresses all aspects of your mental health needs."
  },
  {
    title: "Stigma Reduction",
    desc: "Access a supportive and non-judgmental environment where you can openly discuss your concerns and receive compassionate care, helping to reduce the stigma associated with mental illness and promote acceptance and understanding."
  }
];




export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Psychiatrist Services</h2>
            </section>
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
