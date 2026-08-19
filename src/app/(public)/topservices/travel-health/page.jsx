import ContactSection from '@/components/modules/appointment/ContactSection';
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA';
import ServicesCTA from '@/components/modules/services/ServicesCTA';
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import ClinicAdvantages from '@/components/modules/singleService/Advantages';
import MobileClinicIntro from '@/components/modules/singleService/Banner';

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Travel Health",
    description: `Our Travel Health Services offer comprehensive medical care and guidance to individuals planning international travel, ensuring they stay healthy and safe throughout their journey.`,
    image: "/images/travelHealth.webp",
    imageAlt: "travelHealth",
};
const title = "Advantages Of Travel Health"
export const advantages = [
    {
        title: "Preventive Care",
        desc: "Our Travel Health Services focus on preventive care, providing essential vaccinations, medications, and health advice to protect travelers from diseases and health risks specific to their destination."
    },
    {
        title: "Expert Advice",
        desc: "Our healthcare professionals offer expert advice tailored to each traveler's itinerary, providing information on required and recommended vaccinations, potential health hazards, and safety precautions based on destination-specific risks."
    },
    {
        title: "Customized Recommendations",
        desc: "Travelers receive personalized recommendations based on their destination, duration of stay, activities planned, and individual health status, ensuring they are adequately prepared for their trip."
    },
    {
        title: "Vaccinations",
        desc: "Our Travel Health Services include administration of necessary vaccinations, such as yellow fever, typhoid, hepatitis A and B, and others, helping travelers meet entry requirements and protect against vaccine-preventable diseases."
    },
    {
        title: "Medication Prescriptions",
        desc: "We provide prescriptions for medications such as antimalarials, antibiotics, and traveler's diarrhea medications when indicated, equipping travelers with necessary supplies for managing health issues abroad."
    },
    {
        title: "Health Education",
        desc: "Travelers receive comprehensive health education on topics such as food and water safety, insect bite prevention, sun protection, altitude sickness, and traveler’s thrombosis, empowering them to make informed decisions about their health while traveling."
    }
];



export default function page() {
    return (
        <div className='mt-20'>
            <TopServicesItemBanner>
                Travel Health
            </TopServicesItemBanner>
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <ServicesCTA title={"Travel Health"} />
            <ContactSection />
        </div>
    )
}
