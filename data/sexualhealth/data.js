const sexualHealthPackages = [
    {
        id: "sh1",
        name: "STI Screening Basic",
        shortdes: "Sample: Blood + Urine, TAT: 1-2 days",
        description: "Basic STI screening covering the most common infections.",
        result: "Results in 1-2 days",
        price: "£149",
        tag: "Popular",
    },
    {
        id: "sh2",
        name: "STI Screening Comprehensive",
        shortdes: "Sample: Blood + Urine + Swab, TAT: 2-3 days",
        description: "Comprehensive STI panel covering all major infections.",
        result: "Results in 2-3 days",
        price: "£299",
        tag: "Most Popular",
    },
    {
        id: "sh3",
        name: "STI Screening Elite",
        shortdes: "Sample: Blood + Urine + Swab, TAT: 2-3 days",
        description: "Our most comprehensive sexual health panel.",
        result: "Results in 2-3 days",
        price: "£449",
        tag: "",
    },
];

const hivTestingData = [
    {
        id: "hiv1",
        name: "HIV 1&2 p24 Antigen/Antibody",
        shortdes: "4th Generation Test, Blood",
        description: "Gold-standard HIV screening test.",
        result: "Results in 1 day",
        price: "£89",
        tag: "High Demand",
    },
];

const chlamydiaGonorrhoeaData = [
    {
        id: "cg1",
        name: "Chlamydia & Gonorrhoea PCR",
        shortdes: "Sample: Urine + Swab, TAT: 1-2 days",
        description: "Dual PCR test for the two most common STIs.",
        result: "Results in 1-2 days",
        price: "£99",
        tag: "High Demand",
    },
];

const genitalHerpesData = [
    {
        id: "gh1",
        name: "Herpes Simplex Virus (HSV) 1 & 2 Antibodies",
        shortdes: "Sample: Blood, TAT: 2 days",
        description: "IgG antibody test for HSV-1 and HSV-2.",
        result: "Results in 2 days",
        price: "£119",
        tag: "High Demand",
    },
];

const hepatitisData = [
    {
        id: "hep1",
        name: "Hepatitis B Surface Antigen",
        shortdes: "Sample: Blood, TAT: 1 day",
        description: "Screens for active Hepatitis B infection.",
        result: "Results in 1 day",
        price: "£69",
        tag: "High Demand",
    },
    {
        id: "hep2",
        name: "Hepatitis C Antibody",
        shortdes: "Sample: Blood, TAT: 1 day",
        description: "Screens for Hepatitis C exposure.",
        result: "Results in 1 day",
        price: "£69",
        tag: "High Demand",
    },
];

const hpvData = [
    {
        id: "hpv1",
        name: "HPV Genotyping (High-Risk)",
        shortdes: "Sample: Swab, TAT: 3-5 days",
        description: "Identifies high-risk HPV strains.",
        result: "Results in 3-5 days",
        price: "£159",
        tag: "High Demand",
    },
];

const trichomoniasisData = [
    {
        id: "tri1",
        name: "Trichomoniasis PCR",
        shortdes: "Sample: Swab, TAT: 2 days",
        description: "PCR test for Trichomonas vaginalis.",
        result: "Results in 2 days",
        price: "£89",
        tag: "High Demand",
    },
];

const compareSTIData = [
    {
        id: "cstiBasic",
        name: "STI Basic Panel",
        shortdes: "Chlamydia, Gonorrhoea, HIV",
        description: "Covers the 3 most common STIs.",
        result: "Results in 1-2 days",
        price: "£149",
        tag: "",
    },
    {
        id: "cstiComp",
        name: "STI Comprehensive Panel",
        shortdes: "All Basic + Syphilis, Hepatitis B/C, Herpes",
        description: "Comprehensive screening for 7 key infections.",
        result: "Results in 2-3 days",
        price: "£299",
        tag: "Most Popular",
    },
    {
        id: "cstiElite",
        name: "STI Elite Panel",
        shortdes: "All Comprehensive + HPV, Trichomoniasis, Mycoplasma",
        description: "Our most thorough sexual health panel.",
        result: "Results in 3-5 days",
        price: "£449",
        tag: "",
    },
];


export {
    sexualHealthPackages,
    hivTestingData,
    chlamydiaGonorrhoeaData,
    genitalHerpesData,
    hepatitisData,
    hpvData,
    trichomoniasisData,
    compareSTIData,
};
