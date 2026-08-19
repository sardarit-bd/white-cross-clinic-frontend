import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import ServicesCTA from '@/components/modules/services/ServicesCTA'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Skin Care Services",
    description: `Discover radiant and healthy skin with the Skin Care Services at White Cross Clinic. Our comprehensive range of treatments and personalized skincare plans cater to all skin types and concerns. Whether you’re seeking acne management, anti-aging solutions, or general skincare maintenance, our expert team is here to help you achieve your skin goals.`,
    image: "/images/skinCare.webp",
    imageAlt: "skinCare",
};
const title = "Advantages Of Skin Care Services"
export const advantages = [
    {
        title: "Improved Skin Health",
        desc: "Experience improved skin health and vitality with targeted treatments designed to address specific concerns such as acne, hyperpigmentation, dryness, and aging."
    },
    {
        title: "Personalized Care",
        desc: "Experience improved skin health and vitality with targeted treatments designed to address specific concerns such as acne, hyperpigmentation, dryness, and aging."
    },
    {
        title: "Enhanced Appearance",
        desc: "Receive personalized skincare plans tailored to your unique skin type, concerns, and goals, ensuring optimal results and satisfaction."
    },
    {
        title: "Prevention And Maintenance",
        desc: "Prevent future skin issues and maintain your skin’s health and radiance with regular skincare treatments and expert guidance."
    },
    {
        title: "Relaxation And Self-Care",
        desc: "Indulge in a pampering and rejuvenating skincare experience that promotes relaxation, stress relief, and overall well-being."
    },
    {
        title: "Boosted Confidence",
        desc: "Enhance your confidence and self-esteem with healthier, glowing skin that reflects your inner beauty and vitality."
    }
];


const data = [
    { name: "Prescriptions for eczema flare-up", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Steroid and tropical creams", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Dermatology referrals", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Wound care", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Sun spot removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Aesthetics", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Permanent hair removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Vascular lesions", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Spider veins", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Acne treatment", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Eye brow, lip line", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Epidermal/Dermal lesion pigmentation", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Melasma", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Toe nail fungus", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Vascular thread vein removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Carbon facial skin rejuvenation", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Semi permanent makeup removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Skin rejuvenation", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Tattoo removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Freckle removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Age spot removal", perDose: "£0", doses: "0 per dose", price: "£0" },
];


export default function page() {
    return (
        <div className='mt-20'>
            <TopServicesItemBanner>
                Skin Care Services
            </TopServicesItemBanner>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <ServicesCTA title={"Skin Care Services"} />
            <ContactSection />
        </div>
    )
}
