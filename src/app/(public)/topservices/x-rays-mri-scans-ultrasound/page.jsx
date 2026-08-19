import ContactSection from '@/components/modules/appointment/ContactSection'
import ServicesCTA from '@/components/modules/services/ServicesCTA'
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
  tag: "Services",
  title: "X Rays, MRI Scans, Ultrasound",
  description: `At Progress Medical Clinic, we’re dedicated to providing comprehensive diagnostic imaging services to support your healthcare needs. Our advanced imaging technologies, including X-rays, MRI scans, and ultrasound, allow us to deliver accurate and timely diagnoses to help guide your treatment journey.`,
  image: "/images/x-ray.webp",
  imageAlt: "X Rays, MRI Scans, Ultrasoundh",
};
const title = "Advantages Of X Rays, MRI Scans, Ultrasound"
export const advantages = [
  {
    title: "Accurate Diagnosis",
    desc: "Our advanced imaging technologies provide detailed and precise images, enabling healthcare professionals to accurately diagnose a wide range of medical conditions, from fractures and soft tissue injuries to tumors and internal organ abnormalities."
  },
  {
    title: "Timely Treatment",
    desc: "With efficient imaging protocols and prompt result delivery, patients can receive timely diagnoses, allowing for faster initiation of treatment plans and improved outcomes."
  },
  {
    title: "Minimized Discomfort",
    desc: "Unlike invasive diagnostic procedures, such as exploratory surgery, diagnostic imaging techniques like X-rays, MRI scans, and ultrasound are non-invasive, minimizing discomfort and reducing recovery time."
  },
  {
    title: "Safe Imaging Practices",
    desc: "We prioritize patient safety by utilizing imaging techniques that minimize radiation exposure, such as low-dose X-rays and MRI scans without ionizing radiation, ensuring the well-being of our patients throughout the diagnostic process."
  },
  {
    title: "Comprehensive Evaluation",
    desc: "Our range of imaging modalities, including X-rays for bone and joint assessment, MRI scans for detailed soft tissue imaging, and ultrasound for real-time visualization, allows for a comprehensive evaluation of various medical concerns, ensuring thorough diagnostics and treatment planning."
  },
  {
    title: "Reduced Wait Time & Personalized Care",
    desc: "We understand that each patient is unique. Our imaging center provides personalized protocols tailored to individual needs while working efficiently to reduce wait times, ensuring a patient-centered and compassionate healthcare experience."
  }
];


const data = [
  { name: "Angiography", perDose: "£0", doses: "0", price: "£0" },
  { name: "CT scan", perDose: "£0", doses: "0", price: "£0" },
  { name: "Echocardiogram", perDose: "£0", doses: "0", price: "£0" },
  { name: "Electrocardiogram (ecg)", perDose: "£0", doses: "0", price: "£0" },
  { name: "PET scan", perDose: "£0", doses: "0", price: "£0" },
  { name: "Ultrasound scan", perDose: "£0", doses: "0", price: "£0" },
  { name: "X-ray", perDose: "£0", doses: "0", price: "£0" },
];


export default function page() {
  return (
    <div className='mt-20'>
      <TopServicesItemBanner>
        X Rays, MRI Scans, Ultrasound
      </TopServicesItemBanner>
      <VaccinePricingTable data={data} />
      <MobileClinicIntro mobileClinicData={mobileClinicData} />
      <ClinicAdvantages advantages={advantages} title={title} />
      <ServicesCTA title={"X Rays, MRI Scans, Ultrasound"} />
      <ContactSection />
    </div>
  )
}
