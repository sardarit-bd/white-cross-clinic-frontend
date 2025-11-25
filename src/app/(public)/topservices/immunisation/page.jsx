import ContactSection from '@/components/modules/appointment/ContactSection'
import EmergencyCTA from '@/components/modules/Home/EmergencyCTA'
import VaccinePricingTable from '@/components/modules/services/VacineTable'
import ClinicAdvantages from '@/components/modules/singleService/Advantages'
import MobileClinicIntro from '@/components/modules/singleService/Banner'
import React from 'react'
import BrandTable from './BrandTable'

// DYNAMIC DATA OBJECT
const mobileClinicData = {
    tag: "Services",
    title: "Immunisation",
    description: `Our Out Of Hours Immunization Services provide convenient access to vaccinations beyond regular clinic hours, ensuring individuals can stay up-to-date with their immunization schedules for optimal health protection.`,
    image: "/images/immunisation.webp",
    imageAlt: "Immunisation",
};
const title = "Advantages Of Immunisation"
export const advantages = [
    {
        title: "Flexibility",
        desc: "Offering immunization services outside regular clinic hours provides flexibility for individuals with busy schedules, allowing them to prioritize their health without additional time constraints."
    },
    {
        title: "Timely Protection",
        desc: "Our Out Of Hours Immunization Services ensure timely administration of vaccines, helping individuals and families maintain protection against vaccine-preventable diseases according to recommended schedules."
    },
    {
        title: "Convenience",
        desc: "Access to immunizations during evenings, weekends, and holidays eliminates the need for individuals to take time off work or school for vaccination appointments, making it more convenient to stay up-to-date with their immunization status."
    },
    {
        title: "Preventive Health",
        desc: "Vaccinations are a cornerstone of preventive health care, and our services support individuals in maintaining their health by reducing the risk of vaccine-preventable diseases within the community."
    },
    {
        title: "Family-Friendly",
        desc: "Our Out Of Hours Immunization Services cater to families’ needs by offering convenient appointment times that accommodate multiple family members, simplifying the process of scheduling vaccinations for children and adults."
    },
    {
        title: "Reduced Wait Times",
        desc: "By offering immunizations outside regular clinic hours, we help reduce wait times and appointment backlogs, ensuring individuals can receive their vaccinations promptly without long delays."
    }
];

export const travelMedication = [
    {
        medication: "Malaria tablets",
        course: "Depends on duration of travel",
        pack: "Differs between brands",
        price: "£0.65–£3.00 per dose"
    },
    {
        medication: "Malarone tablet",
        course: "Depends on duration of travel",
        pack: "Differs between brands",
        price: "£3.00 per tablet"
    },
    {
        medication: "Travellers’ Diarrhoea tablet",
        course: "3 Days",
        pack: "3 x 500mg tablets",
        price: "£30"
    },
    {
        medication: "Doxycycline tablets",
        course: "Depends on duration of travel",
        pack: "Differs between brands",
        price: "£0.65 per capsule"
    },
];

export const paediatricVaccine = [
    {
        vaccine: "Hepatitis A (Paediatric)",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0"
    },
    {
        vaccine: "Hepatitis A & B (Paediatric)",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0"
    },
    {
        vaccine: "Hepatitis B (Paediatric)",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0"
    },
    {
        vaccine: "Tick-borne Encephalitis (Paediatric)",
        perDose: "£0",
        dosePerCourse: "0 per dose",
        price: "£0"
    },
];

export const paediatricMedication = [
    {
        medication: "Malarone (Paediatric)",
        course: "Depends on duration of travel",
        pack: "Differs between brands",
        price: "£1.25 per tablet"
    },
];
const data = [
  { name: "Cholera vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Hepatitis A and B vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Hepatitis A vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Hepatitis B vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Japanese Encephalitis Vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Measles, Mumps, and Rubella vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Meningitis ACWY Vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Rabies vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Polio, diphtheria & tetanus vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Tick-borne Encephalitis vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Typhoid vaccination", perDose: "£0", doses: "0 per dose", price: "£0" },
];


export default function page() {
    return (
        <div className='mt-20'>
            <section className='bg-[var(--brandColor)] h-[300px] flex flex-col items-center justify-center text-white'>
                <h2 className='text-5xl text-center'>Mobile Clinics</h2>
            </section>
            <VaccinePricingTable data={data} />
            {/* Travel Medication */}
            <BrandTable
                title="Travel Medication"
                columns={["Medication", "Course", "Pack Size", "Price"]}
                data={travelMedication}
            />

            {/* Paediatric Vaccine */}
            <BrandTable
                title="Paediatric Vaccine"
                columns={["Vaccine", "Per Dose", "Dose per Course", "Price per Course"]}
                data={paediatricVaccine}
            />

            {/* Paediatric Medication */}
            <BrandTable
                title="Paediatric Medication"
                columns={["Medication", "Course", "Pack Size", "Price"]}
                data={paediatricMedication}
            />
            <MobileClinicIntro mobileClinicData={mobileClinicData} />
            <ClinicAdvantages advantages={advantages} title={title} />
            <EmergencyCTA />
            <ContactSection />
        </div>
    )
}
