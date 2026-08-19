import ContactSection from '@/components/modules/appointment/ContactSection'
import ServicesCTA from '@/components/modules/services/ServicesCTA'
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'


// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "Hair Removal And Skin Treatment",
  description: `At White Cross Clinic, we offer a comprehensive range of services to help you achieve your aesthetic goals and enhance your confidence. Our integrated approach combines advanced hair removal techniques with customized skin treatments to address a variety of concerns and provide you with smooth, radiant skin from head to toe.`,
  image: "/images/haireRemoval.webp",
  imageAlt: "Hair Removal And Skin Treatment",
};
const title = "Advantages Of Hair Removal And Skin Treatment"
export const advantages = [
  {
    title: "Smooth, Hair-Free Skin",
    desc:
      "Our advanced hair removal techniques, including laser hair removal and electrolysis, offer a long-lasting solution for unwanted hair, leaving your skin silky smooth and free from the hassle of daily shaving or waxing.",
  },
  {
    title: "Improved Skin Tone And Texture",
    desc:
      "Our skin treatment services, such as chemical peels, microdermabrasion, and laser skin resurfacing, help to address concerns such as acne, pigmentation, and uneven texture, promoting a more youthful and radiant complexion.",
  },
  {
    title: "Reduced Signs Of Aging",
    desc:
      "Combined hair removal and skin treatment services can target common signs of aging, such as fine lines, wrinkles, and sagging skin, helping to rejuvenate and revitalize your appearance for a more youthful look.",
  },
  {
    title: "Enhanced Confidence",
    desc:
      "Achieving smoother, clearer skin can boost your confidence and self-esteem, allowing you to feel more comfortable and empowered in your own skin.",
  },
  {
    title: "Personalized Care",
    desc:
      "Our experienced practitioners provide individualized assessments and treatment plans, ensuring that your hair removal and skin treatment services are tailored to your specific concerns and goals.",
  },
  {
    title: "Convenience And Comfort",
    desc:
      "With our comprehensive range of services offered under one roof, you can enjoy the convenience of addressing multiple aesthetic concerns during a single visit, while our compassionate team ensures your comfort and satisfaction throughout your treatment experience.",
  },
];


export default function page() {
  return (
    <div className='mt-20'>
      <TopServicesItemBanner>
        Hair Removal And Skin Treatment
      </TopServicesItemBanner>
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <ServicesCTA title="Hair Removal And Skin Treatment" />
      <ContactSection />
    </div>
  )
}
