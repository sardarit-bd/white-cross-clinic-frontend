"use client"
import { useEffect, useState } from "react";
import ProfileList from "./ProfileList";

export default function PageA() {
    const [activeLetter, setActiveLetter] = useState("All")
    const tests = [
        "7 STI Profile by PCR (7 tests from 1 Sample)",
        "7 STI Profile by PCR (7 tests from 1 Sample) (Self-collect)",
        "Alcohol Profile",
        "ALEX² Allergy Test (Self-collect)",
        "ALEX² Allergy Test (Venous / Self-collect)",
        "Allergic Rhinitis/Asthma Profile",
        "Allergy Profile 1 (Food & Inhalants)",
        "Allergy Profile 2 (UK Aero Allergen)",
        "Allergy Profile 3 (Food)",
        "Allergy Profile 4 (Nuts & Seeds)",
        "Allergy Profile 5 (Children’s Panel)",
        "Allergy Profile 7 (Finfish)",
        "Allergy Profile 6 (Shellfish)",
        "Allergy Profile 8 (Cereal – singles)",
        "Allergy Profile 9 (Antibiotics)",
        "Allergy Profile 10 (Insects)",
        "Allergy Profile 11 (Combined Shellfish/Finfish)",
        "Allergy Profile 12 (Milk & Milk Proteins)",
        "Allergy Profile 13 (Stone fruit/Rosaceae family)",
        "Vaginitis/BV Profile (Culture & PCR / Self-collect)",
        "Vaginitis/BV Profile using Culture & PCR Swab (Self-collect)",
        "Viral Antibody Screen",
        "Viral Eye by PCR",
        "Viral Respiratory RNA Screen by PCR",
        "Viral Skin/Mucosa by PCR",
        "Enteric Organism Rapid Detection (RF / Self-collect)",
        "Erectile Dysfunction Profile",
        "Bone Screen",
        "Bone Screen (Bloods only)",
        "Diabetic Profile 1",
        "Diabetic Profile 2",
        "DL1 Biochemistry Profile",
        "DL1L Biochemistry Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "DL2 Biochemistry (24 Parameters) & Haematology Profile",
        "DL2L Biochemistry (24 Parameters) & Haematology Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "DL3 Haematology Profile",
        "DL4 Biochemistry (16 Parameters) & Haematology Profile",
        "Gastrointestinal Pathogen PCR (Self-collect)",
        "DL4L Biochemistry (16 Parameters) & Haematology Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "Genetic Reproductive Profile (Male)",
        "DL5 Biochemistry & Haematology Postal Profile",
        "DL5L Biochemistry & Haematology Postal Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "DL6 General Well Person Profile",
        "DL6L General Well Person Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "DL7 Well Man Profile",
        "DL7L Well Man Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "DL8 Well Person Profile",
        "DL8L Well Person Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
        "DL9F Senior Female Profile 60+",
        "DL9M Senior Male Profile 60+",
        "DL10 Cardiovascular Risk Profile 1",
        "DL11 Cardiovascular Risk Profile 2",
        "DL12 7 STI Profile by PCR (7 PCR Tests from 1 Sample)",
        "DL12 7 STI Profile by PCR (7 PCR tests from 1 Sample) (Self-collect)",
        "Gluten Sensitivity Profile CHANGE",
        "Gluten/Coeliac Genetic Profile 2 CHANGE",
        "Drugs of Abuse from Blood without Chain of Custody",
        "Drugs of Abuse Profile – Random Urine Sample/No Chain of Custody",
        "Drugs of Abuse Profile – Random Urine Sample/No Chain of Custody Plus Alcohol",
        "Drugs of Abuse Profile – With Chain of Custody*",
        "Drugs of Abuse Profile – Without Chain of Custody",
        "DVT/Pre-travel Screen",
        "Vitamin Profile 1",
        "Vitamin Profile 2",
        "Female Hormone Profile (LH, FSH, PROL, TOES) (Self-collect)",
        "Female Hormone Profile (Venous / Self-collect)",
        "HE4 + ROMA (Earlier Detection of Ovarian Tumour)",
        "Hepatitis (Acute) Screen",
        "Hepatitis A Profile",
        "Hepatitis A, B & C Profile",
        "Hepatitis B Profile",
        "Von Willebrand Profile",
        "Urea and Electrolytes",
        "Iron Overload Profile",
        "Iron Status Profile (Self-collect)",
        "Iron Status Profile (Venous / Self-collect)",
        "ISAC Panel (Self-collect)",
        "ISAC Panel (Venous / Self-collect)",
        "Male Hormone Profile",
        "Calprotectin/QFIT Profile (Combined)",
        "Menopausal Profile (FSH, LH, TOES, TSH, FT4) (Self-collect)",
        "Menopause Profile (Venous / Self-collect)",
        "Metabolic Syndrome Profile",
        "Mineral Screen",
        "Mineral Screen (Whole blood)",
        "Mineral Screen and Industrial Heavy Metal Screen (Trace Metals)",
        "Miscarriage/Thrombotic Risk Profile",
        "Lipid Profile (Self-collect)",
        "Lipid Profile (Venous / Self-collect)",
        "Liver Function Tests (Excluding AST/ALT) (Self-collect)",
        "Liver Function Tests (Venous / Self-collect)",
        "Myeloma Screen",
        "Osteoporosis Screen",
        "Natural Killer Profile 2",
        "Needle Stick Injury Profile",
        "Rapid Xpert HIV-1 RNS Viral Load – Rapid Testing for HIV-Positive Patient Prognosis and Response To Antiretroviral Therapy",
        "Recurrent Miscarriage Profile (female)",
        "Neurological Viral Screen",
        "Respiratory PCR Panel (COVID-19, Flu A/B and RSV) (PCR / Self-collect)",
        "Rheumatology Profile 1 (Screen)"
    ];

    const [filteredTests, setFilteredTests] = useState([...tests])
    useEffect(() => {
        if(activeLetter === 'All'){
            setFilteredTests([...tests])
        }
        if (activeLetter !== 'All') {
            const filteredTest = tests.filter((test => test.charAt(0).toLowerCase() === activeLetter?.toLowerCase()))
            setFilteredTests(filteredTest)
        }
    }, [activeLetter])
    return <main className="container mx-auto py-10 pt-48">
        <ProfileList allTests={filteredTests} activeLetter={activeLetter} setActiveLetter={setActiveLetter} />
    </main>;
}
