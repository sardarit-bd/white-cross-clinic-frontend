import ContactSection from '@/components/modules/appointment/ContactSection'
import ServicesCTA from '@/components/modules/services/ServicesCTA'
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "General Surgeon Services",
  description: `At White Cross Clinic, we offer a comprehensive range of services to help you achieve your aesthetic goals and enhance your confidence. Our integrated approach combines advanced hair removal techniques with customized skin treatments to address a variety of concerns and provide you with smooth, radiant skin from head to toe.`,
  image: "/images/generalSurgeon.webp",
  imageAlt: "General Surgeon Services",
};
const title = "Advantages Of General Surgeon Services"
export const advantages = [
  {
    title: "Comprehensive Surgical Care",
    desc: "Access comprehensive surgical care for a variety of conditions and procedures, including abdominal surgeries, hernia repairs, appendectomies, and more."
  },
  {
    title: "Expert Evaluation",
    desc: "Receive expert evaluation and assessment from board-certified General Surgeons, who will thoroughly evaluate your condition and recommend the most appropriate treatment options."
  },
  {
    title: "Minimally Invasive Techniques",
    desc: "Benefit from minimally invasive surgical techniques, such as laparoscopy, which offer shorter recovery times, reduced pain, and smaller incisions compared to traditional open surgery."
  },
  {
    title: "Specialized Procedures",
    desc: "Receive specialized surgical procedures tailored to your specific needs, including cancer surgeries, gastrointestinal surgeries, thyroid surgeries, and more, ensuring personalized care and treatment."
  },
  {
    title: "Emergency Surgical Services",
    desc: "Access timely and efficient emergency surgical services for acute conditions such as appendicitis, trauma, and bowel obstructions, ensuring prompt intervention and optimal outcomes."
  },
  {
    title: "Preoperative And Postoperative Care",
    desc: "Receive comprehensive preoperative and postoperative care, including thorough evaluation, counseling, and support to ensure a smooth and successful surgical experience."
  }
];





export default function page() {
  return (
    <div className='mt-20'>
      <TopServicesItemBanner>
        General Surgeon Services
      </TopServicesItemBanner>
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <ServicesCTA title="General Surgeon Services" />
      <ContactSection />
    </div>
  )
}
