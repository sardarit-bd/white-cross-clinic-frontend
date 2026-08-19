import ContactSection from '@/components/modules/appointment/ContactSection';
import ServicesCTA from '@/components/modules/services/ServicesCTA';
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner';
import ClinicAdvantages from '@/components/modules/singleService/Advantages';
import MobileClinicIntro from '@/components/modules/singleService/Banner';

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "Private Paediatric Services",
  description: `At White Cross Clinic, we offer Private Paediatric Services dedicated to the health and well-being of your child. Our team of experienced paediatricians provides comprehensive medical care for infants, children, and adolescents in a compassionate and child-friendly environment. From routine check-ups to specialized care, we are committed to ensuring the optimal health and development of your child.`,
  image: "/images/privatePaediatric.webp",
  imageAlt: "Private Paediatric Services",
};
const title = "Advantages Of Private Paediatric Services"
export const advantages = [
  {
    title: "Comprehensive Care",
    desc:
      "Access comprehensive medical care for your child, including well-child visits, vaccinations, acute illness management, chronic disease management, and developmental screenings.",
  },
  {
    title: "Expert Evaluation",
    desc:
      "Receive expert evaluation and assessment from board-certified paediatricians, who specialize in diagnosing and treating a wide range of paediatric conditions and concerns.",
  },
  {
    title: "Early Intervention",
    desc:
      "Receive early intervention for developmental delays, behavioural concerns, and other health issues, ensuring timely treatment and support to optimize your child's development and well-being.",
  },
  {
    title: "Parent Education",
    desc:
      "Gain valuable education and guidance from our paediatricians on nutrition, growth and development, safety, and parenting strategies to help you raise a healthy and happy child.",
  },
  {
    title: "Continuity Of Care",
    desc:
      "Experience continuity of care with ongoing monitoring, follow-up appointments, and coordination of care with other healthcare providers, ensuring that your child's medical needs are consistently met.",
  },
  {
    title: "Child-Friendly Environment",
    desc:
      "Enjoy a child-friendly environment designed to make your child feel comfortable during their visits, with colourful décor, toys, and engaging activities that entertain and support a positive experience.",
  },
];




export default function page() {
  return (
    <div className='mt-20'>
      <TopServicesItemBanner>
        Private Podiatric Services
      </TopServicesItemBanner>
      <MobileClinicIntro mobileClinicData={mobileClinicData} />

      <ClinicAdvantages advantages={advantages} title={title} />
      <ServicesCTA title={"Private Podiatric Services"} />
      <ContactSection />
    </div>
  )
}
