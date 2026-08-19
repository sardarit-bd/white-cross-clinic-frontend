import ContactSection from '@/components/modules/appointment/ContactSection'
import ServicesCTA from '@/components/modules/services/ServicesCTA'
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "Gynaecologists-Gastroenterologists",
  description: `At White Cross Clinic, we offer specialized care from Gynaecologists and Gastroenterologists to address a range of women’s health and digestive system concerns. Our expert physicians provide comprehensive evaluations, diagnostics, and treatments tailored to each patient’s unique needs, ensuring optimal health and well-being.`,
  image: "/images/gynaecologists.webp",
  imageAlt: "Gynaecologists-Gastroenterologists",
};
const title = "Advantages Of Gynaecologists-Gastroenterologists"
export const advantages = [
  {
    title: "Comprehensive Care",
    desc: "Access comprehensive care for both gynecological and gastrointestinal issues in one convenient location, streamlining your healthcare experience."
  },
  {
    title: "Expert Evaluation",
    desc: "Receive expert evaluation and assessment from board-certified Gynaecologists and Gastroenterologists, ensuring accurate diagnosis and personalized treatment plans."
  },
  {
    title: "Specialized Treatment",
    desc: "Benefit from specialized treatments and interventions tailored to address specific gynecological and gastrointestinal conditions, promoting optimal outcomes and recovery."
  },
  {
    title: "Integrated Approach",
    desc: "Experience an integrated approach to care, with collaboration between Gynaecologists and Gastroenterologists to address complex medical issues and coordinate treatment plans effectively."
  },
  {
    title: "Preventive Care",
    desc: "Receive preventive screenings, counseling, and interventions to maintain gynecological and gastrointestinal health, reducing the risk of future complications and promoting overall wellness."
  },
  {
    title: "Continuity Of Care",
    desc: "Enjoy continuity of care with ongoing monitoring, follow-up appointments, and support from our dedicated healthcare team, ensuring your health needs are consistently met."
  }
];





export default function page() {
  return (
    <div className='mt-20'>
      <TopServicesItemBanner>
        Gynecologists-Gastroenterologists
      </TopServicesItemBanner>
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <ServicesCTA title="Gynecologists-Gastroenterologists" />
      <ContactSection />
    </div>
  )
}
