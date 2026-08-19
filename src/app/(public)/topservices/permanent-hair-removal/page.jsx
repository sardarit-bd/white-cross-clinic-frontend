import ContactSection from '@/components/modules/appointment/ContactSection'
import TopServicesItemBanner from '@/components/modules/services/TopServicesItemBanner'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Permanent Hair Removal",
    description: `Achieve smooth, hair-free skin with our advanced permanent hair removal treatments at White Cross Clinic. Using state-of-the-art technology and personalized treatment plans, we offer a safe, effective solution to unwanted hair on various areas of the body.`,
    image: "/images/hairRemoval.webp",
    imageAlt: "hairRemoval",
};
const title = "Advantages Of Permanent Hair Removal"
export const advantages = [
    {
        title: "Long-Lasting Results",
        desc: "Enjoy the confidence of permanent hair reduction, freeing you from the hassle of frequent shaving or waxing."
    },
    {
        title: "Convenience",
        desc: "Save time and effort with smoother, hair-free skin that requires minimal maintenance."
    },
    {
        title: "Long-Lasting Smoothness",
        desc: "Achieve consistently smooth, hair-free skin with permanent hair removal treatments that offer lasting results."
    },
    {
        title: "Personalized Treatment",
        desc: "Receive tailored treatment plans designed to address your unique skin type, hair texture, and desired outcomes, ensuring optimal results and satisfaction."
    },
    {
        title: "Cost-Effective Solution",
        desc: "While initial investment may be required, permanent hair removal ultimately saves money by eliminating the need for continuous purchases of razors, shaving creams, or waxing appointments."
    },
    {
        title: "Time-Saving Convenience",
        desc: "Say goodbye to daily shaving or frequent waxing sessions, freeing up valuable time for other activities and commitments."
    }
];

const data = [
    { name: "Prescriptions for eczema flare-up", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Steroid and tropical creams", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Dermatology referrals", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Aesthetics", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Permanent hair removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Vascular lesions", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Spider veins", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Acne treatment", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Epidermal pigment removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Age spot removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Freckle removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Tattoo removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Semi permanent makeup removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Eye brow, lip line", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Sun spot removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Carbon facial skin rejuvenation", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Vascular thread vein removal", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Toe nail fungus", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Melasma", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Epidermal/Dermal lesion pigmentation", perDose: "£0", doses: "0 per dose", price: "£0" },
    { name: "Seborrheic keratosis", perDose: "£0", doses: "0 per dose", price: "£0" }
];



export default function page() {
    return (
        <div className='mt-20'>
            <TopServicesItemBanner>
                Permanent Hair Removal
            </TopServicesItemBanner>
            <VaccinePricingTable data={data} />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <ServicesCTA title={"permanent Hair Removal"} />
            <ContactSection />
        </div>
    )
}
