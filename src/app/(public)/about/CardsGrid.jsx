'use client'

import { motion } from "framer-motion";


const cards = [
  {
    title: "Acute Internal Medicine",
    text: " Management of urgent medical conditions requiring rapid assessment.",
    tag: "Physician Specialties"
  },
  {
    title: "Allergy",
    text: "Diagnosis and treatment of allergic diseases.",
    tag: "Physician Specialties"
  },
  {
    title: "Audiovestibular Medicine",
    text: "Hearing and balance disorders.",
    tag: "Physician Specialties"
  },
  {
    title: "Cardiology",
    text: "Heart disease, arrhythmias, chest pain, heart failure.",
    tag: "Physician Specialties"
  },
  {
    title: "Clinical Genetics",
    text: "Genetic disorders and inherited conditions.",
    tag: "Physician Specialties"
  },
  {
    title: "Clinical Neurophysiology",
    text: "EEG, nerve conduction studies, neurological diagnostics.",
    tag: "Physician Specialties"
  },
  {
    title: "Clinical Pharmacology",
    text: "Medication safety, complex drug management.",
    tag: "Physician Specialties"
  },
  {
    title: "Dermatology",
    text: "Skin diseases, rashes, eczema, psoriasis.",
    tag: "Physician Specialties"
  },
  {
    title: "Endocrinology & Diabetes",
    text: "Hormonal disorders, thyroid disease, diabetes.",
    tag: "Physician Specialties"
  },
  {
    title: "Gastroenterology",
    text: "Digestive system disorders, abdominal pain, liver disease.",
    tag: "Physician Specialties"
  },
  {
    title: "General Internal Medicine",
    text: "Broad medical care for complex multi‑system conditions.",
    tag: "Physician Specialties"
  },
  {
    title: "Genitourinary Medicine",
    text: "Sexual health, STIs, genital infections.",
    tag: "Physician Specialties"
  },
  {
    title: "Geriatric Medicine",
    text: "Elderly care, frailty, dementia, falls.",
    tag: "Physician Specialties"
  },
  {
    title: "Haematology",
    text: "Blood disorders, anaemia, clotting problems",
    tag: "Physician Specialties"
  },
  {
    title: "Immunology",
    text: "Immune system disorders, autoimmune diseases",
    tag: "Physician Specialties"
  },
  {
    title: "Infectious Diseases",
    text: "Complex infections requiring specialist input.",
    tag: "Physician Specialties"
  },
  {
    title: "Medical Oncology",
    text: "Cancer diagnosis and treatment.",
    tag: "Physician Specialties"
  },
  {
    title: "Neurology",
    text: "Brain and nerve disorders, headaches, seizures.",
    tag: "Physician Specialties"
  },
  {
    title: "Nuclear Medicine",
    text: "Advanced imaging and diagnostic scans.",
    tag: "Physician Specialties"
  },
  {
    title: "Palliative Medicine",
    text: "Symptom control for serious illness.",
    tag: "Physician Specialties"
  },
  {
    title: "Renal Medicine",
    text: "Kidney disease, hypertension",
    tag: "Physician Specialties"
  },
  {
    title: "Respiratory Medicine",
    text: "Lung diseases, asthma, COPD",
    tag: "Physician Specialties"
  },
  {
    title: "Rheumatology",
    text: "Joint diseases, arthritis, autoimmune conditions.",
    tag: "Physician Specialties"
  },
  {
    title: "Sport & Exercise Medicine",
    text: "Sports injuries, performance medicine.",
    tag: "Physician Specialties"
  },




  {
    title: "General Surgery",
    text: "Abdominal surgery, hernias, gallbladder",
    tag: "Surgical Specialties"
  },
  {
    title: "Urology",
    text: "Kidney, bladder, prostate disorders",
    tag: "Surgical Specialties"
  },
  {
    title: "Vascular Surgery",
    text: "Arteries, veins, circulation problems",
    tag: "Surgical Specialties"
  },
  {
    title: "Trauma & Orthopaedics",
    text: "Bones, joints, fractures, musculoskeletal disorders",
    tag: "Surgical Specialties"
  },
  {
    title: "ENT (Otolaryngology",
    text: "Ear, nose, throat conditions.",
    tag: "Surgical Specialties"
  },
  {
    title: "Ophthalmology",
    text: "Eye diseases, vision problems.",
    tag: "Surgical Specialties"
  },
  {
    title: "Oral & Maxillofacial Surgery",
    text: "Facial, jaw, dental surgical issues..",
    tag: "Surgical Specialties"
  },
  {
    title: "Plastic Surgery",
    text: "Reconstructive and cosmetic surgery.",
    tag: "Surgical Specialties"
  },
  {
    title: "Neurosurgery",
    text: "Brain and spine surgery.",
    tag: "Surgical Specialties"
  },
  {
    title: "Cardiothoracic Surgery",
    text: "Heart and lung surgery.",
    tag: "Surgical Specialties"
  },
  {
    title: "Paediatric Surgery",
    text: "Surgical care for children.",
    tag: "Surgical Specialties"
  },



  {
    title: "Anaesthetics",
    text: "Pain control, sedation, perioperative care.",
    tag: "Other Key Specialties"
  },
  {
    title: "Intensive Care Medicine",
    text: "Critical illness management.",
    tag: "Other Key Specialties"
  },
  {
    title: "Obstetrics & Gynaecology",
    text: "Pregnancy, childbirth, women’s health.",
    tag: "Other Key Specialties"
  },
  {
    title: "Paediatrics",
    text: "Children’s health and development",
    tag: "Other Key Specialties"
  },
  {
    title: "Psychiatry",
    text: "Mental health, depression, anxiety, psychosis.",
    tag: "Other Key Specialties"
  },
  {
    title: "Public Health Medicine",
    text: "Population health and disease prevention.",
    tag: "Other Key Specialties"
  },
  {
    title: "Occupational Medicine",
    text: "Work‑related health issues.",
    tag: "Other Key Specialties"
  },




];

export default function CardsGrid() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center pt-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
          List of UK Medical Specialties
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[4px] mx-auto rounded-full relative overflow-hidden"
        >
          <div
            className="absolute inset-0 animate-gradient-move bg-[length:200%_200%]"
            style={{
              background:
                "linear-gradient(90deg, var(--brandColor), var(--brandAccent), var(--brandColor))",
            }}
          />
        </motion.div>

        <p className="text-[var(--textLight)] max-w-3xl mx-auto mt-6">
          White Cross Clinic collaborates with all recognised UK specialties.
        </p>
      </motion.div>


      <div className="container my-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 p-6  flex flex-col"
          >
            <div className="flex flex-col items-start gap-4">
              <span className={`px-2 rounded-lg text-black font-medium cursor-pointer ${card?.tag == "Other Key Specialties" ? "bg-red-400/20 border border-gray-400 " : card?.tag == "Physician Specialties" ? "bg-purple-600/20 border border-purple-400" : card?.tag == "Surgical Specialties" ? "bg-green-400/20 border border-gray-400" : ""}`}>
                {card.tag}
              </span>
              <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
                {card.title}
              </h3>
            </div>

            <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
              {card.text}
            </p>

            <span
              className="mt-4 inline-block font-semibold text-[var(--brandColor)] cursor-pointer"
            >
              Read More →
            </span>
          </div>
        ))
        }
      </div >

    </section>
  );
}