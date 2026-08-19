
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {
    const tests = [
        {
            id: 1,
            name: "STI Bronze- PCR Swab",
            price: "137",
            description: "Sample: PCR Swab, TAT: 2 days, Desc.: CT/GC/Trichomonas/Mgen"
        },
        {
            id: 2,
            name: "STI Bronze- Urine",
            price: "137",
            description: "Sample: FCRU, TAT: 2 days, Desc.: CT/GC/Trichomonas/Mgen"
        },
        {
            id: 3,
            name: "STI Silver- Blood & PCR Swab",
            price: "198",
            description: "Sample: (B) PCR Swab, TAT: 2 days, Desc.: SEROLOGY: HIV 1&2/p24 Antigen, Syphilis"
        },
        {
            id: 4,
            name: "STI Silver- Blood & Urine",
            price: "198",
            description: "Sample: (B) FCRU, TAT: 2 days, Desc.: SEROLOGY: HIV 1&2/p24 Antigen, Syphilis"
        },
        {
            id: 2,
            name: "STI Gold- Urine or PCR Swab",
            price: "339",
            description: "Sample: FCRU or PCR Swab, TAT: 2 days, Desc.: Chlamydia trachomatis, Neisseria"
        },
        {
            id: 3,
            name: "STI Platinum- Blood & PCR Swab",
            price: "455",
            description: "Sample: (B) PCR Swab (If culture swabs are needed please request separately)"
        },
        {
            id: 4,
            name: "STI Platinum- Blood & Urine",
            price: "455",
            description: "SSample: (B) FCRU (If culture swabs are needed please request separately)"
        }
    ];




    const individualtests = [
        {
            id: 1,
            name: "Chlamydia Species Specific (MIF) Ab Screen",
            price: "123",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 2,
            name: "Chlamydia – PCR swab",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 3,
            name: "Chlamydia – Urine",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 4,
            name: "Chlamydia/Gonorrhoea – PCR Swab",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 5,
            name: "Chlamydia/Gonorrhoea – Rectal (PCR)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 6,
            name: "Chlamydia/Gonorrhoea – Rectal (Self-collect)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 7,
            name: "Chlamydia/Gonorrhoea – Throat (PCR)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 8,
            name: "Chlamydia/Gonorrhoea – Throat (Self-collect)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 9,
            name: "Chlamydia/Gonorrhoea – Urine (FCRU)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 10,
            name: "Chlamydia/Gonorrhoea – Urine (Self-collect)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 11,
            name: "Chlamydia/Gonorrhoea – Vaginal (Self-collect)",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 12,
            name: "Chlamydia/Gonorrhoea/Trichomonas – PCR Swab",
            price: "137",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 13,
            name: "Chlamydia/Gonorrhoea/Trichomonas – Urine",
            price: "137",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 14,
            name: "Gardnerella vaginalis by PCR",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 15,
            name: "Gonorrhoea Culture – Other site",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 16,
            name: "Gonorrhoea Culture – Rectal",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 17,
            name: "Gonorrhoea Culture – Throat",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 18,
            name: "Gonorrhoea Culture – Urethral",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 19,
            name: "Gonorrhoea – PCR swab",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 20,
            name: "Gonorrhoea – Urine",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 21,
            name: "HIV 1 & 2/p24Ag (Venous)",
            price: "66",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 22,
            name: "HIV Confirmation of Positive Screens (3 methodologies)",
            price: "159",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 23,
            name: "HIV Rapid RNA HIV-1 QUALITATIVE",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 24,
            name: "HIV Rapid RNA HIV-1 QUANTITATIVE",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 25,
            name: "HIV Screening: HIV1 & 2 Abs/p24 Ag (4th Gen)",
            price: "66",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 26,
            name: "HIV-1 Genotypic Resistance (RT & Protease)",
            price: "779",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 27,
            name: "HIV-1 Proviral DNA",
            price: "496",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 28,
            name: "HIV-1 RNA Viral Load by PCR",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 29,
            name: "HIV-2 RNA by PCR",
            price: "408",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 30,
            name: "HIV/HBV/HCV (Early detection by PCR/NAAT) with Syphilis",
            price: "257",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 31,
            name: "HIV/HBV/HCV Screen by PCR/NAAT (10 days post exposure)",
            price: "230",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 32,
            name: "HPV swab (28 individually typed LR & HR DNA subtypes)",
            price: "133",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 33,
            name: "Haemophilus ducreyi by PCR",
            price: "198",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 34,
            name: "Hepatitis (Acute) Screen",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 35,
            name: "Hepatitis A Profile",
            price: "98",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 36,
            name: "Hepatitis A, B & C Profile",
            price: "346",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 37,
            name: "Hepatitis B (PCR) Genotype",
            price: "645",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 38,
            name: "Hepatitis B Core Antibody – IgM",
            price: "66",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 39,
            name: "Hepatitis B Core Antibody – Total",
            price: "66",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 40,
            name: "Hepatitis B DNA (Viral load)",
            price: "329",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 41,
            name: "Hepatitis B Immunity (IgG) (Venous)",
            price: "62",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 42,
            name: "Hepatitis B Profile",
            price: "158",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 43,
            name: "Hepatitis B Resistant Mutation",
            price: "414",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 44,
            name: "Hepatitis B Surface Antigen (Venous)",
            price: "60",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 45,
            name: "Hepatitis B ‘e’ Antigen and Antibody",
            price: "142",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 46,
            name: "Hepatitis C Antibodies (Venous)",
            price: "121",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 47,
            name: "Hepatitis C Antigen (Early detection) (Venous)",
            price: "75",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 48,
            name: "Herpes Simplex (HSV) 1 & 2 (PCR) (Oral or Genital)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 49,
            name: "Herpes Simplex (HSV) 1 & 2 – Genital lesion (Self-collect)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 50,
            name: "Herpes Simplex (HSV) 1 & 2 – Oral lesion (Self-collect)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 51,
            name: "Herpes Simplex I/II Antibody Profile (IgG)",
            price: "91",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 52,
            name: "Herpes Simplex I/II IgM",
            price: "91",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 53,
            name: "Herpes Simplex I/II by PCR (Urine)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 54,
            name: "Human Herpes Virus – 6 by PCR",
            price: "208",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 55,
            name: "Human Herpes Virus – 8 (IgG)",
            price: "119",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 56,
            name: "Human Herpes Virus – 8 by PCR",
            price: "235",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 57,
            name: "Lymphogranuloma Venerium (LGV) (PCR)",
            price: "136",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 58,
            name: "Lymphogranuloma Venerium (LGV) – Rectal (Self-collect)*",
            price: "136",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 59,
            name: "MPOX (Virus) – Lesion (Self-collect)",
            price: "152",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 60,
            name: "Macrolide Resistance Test (Mgen)",
            price: "230",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 61,
            name: "Mycoplasma genitalium Resistance – Urine or Vaginal (Self-collect)",
            price: "230",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 62,
            name: "Mycoplasma genitalium by PCR",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 63,
            name: "Mycoplasma genitalium by PCR – Urine and Vaginal (Self-collect)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 64,
            name: "Mycoplasma genitalium/Ureaplasma by PCR",
            price: "137",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 65,
            name: "N. gonorrhoea",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 66,
            name: "RPR (Syphilis)",
            price: "46",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 67,
            name: "Rapid Xpert HIV-1 RNA Qualitative – Early Detection from 10 days",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 68,
            name: "Rapid Xpert HIV-1 RNS Viral Load – Rapid Testing for HIV-Positive Patient Prognosis and Response To Antiretroviral Therapy",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 69,
            name: "STD5 Serology only",
            price: "174",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 70,
            name: "STD6 Serology only without HIV",
            price: "163",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 71,
            name: "STD8 Vaginitis/BV Profile using Culture & PCR Swab",
            price: "399",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 72,
            name: "STD9 Symptomatic lesion sample using PCR Swab from lesion",
            price: "150",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 73,
            name: "STI Profile: MSM1 (Venous)",
            price: "248",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 74,
            name: "STI Profile: MSM2 (Venous)",
            price: "511",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 75,
            name: "Syphilis IgG/IgM (Venous)",
            price: "75",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 76,
            name: "Syphilis by PCR (chancre)",
            price: "173",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 77,
            name: "TPHA",
            price: "46",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 78,
            name: "Trichomonas vaginalis (PCR)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 79,
            name: "Trichomonas vaginalis (TV) – Urine or Vaginal (Self-collect)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 80,
            name: "Triple Swab Female STI Profile (Vaginal/Throat/Rectal Swabs) (PCR)",
            price: "190",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 81,
            name: "Triple Swab Female STI Profile (Vaginal/Throat/Rectal Swabs) (Self-collect)",
            price: "190",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 82,
            name: "Ureaplasma urealyticum by PCR",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 83,
            name: "Vaginitis/BV Profile (Culture & PCR)",
            price: "399",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 84,
            name: "Vaginitis/BV Profile using Culture & PCR Swab (Self-collect)",
            price: "399",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 85,
            name: "STI Gold- Urine or PCR Swab",
            price: "339",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        }
    ];




    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Private Sexual Health Clinic
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Fast, confidential results for private sexual health tests. Discreet, nurse-led diagnostic screening in the heart of South Kensington.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Private Sexual Health Clinic in Central London
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Walk In Clinic is a private sexual health and GUM (genitourinary medicine) clinic located in South Kensington, offering confidential STI and STD testing services to patients across London. Our nurse-led service provides professional diagnostic screening in a discreet, non-judgemental clinical environment.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        We offer a comprehensive range of sexually transmitted infection tests including HIV, Chlamydia, Gonorrhoea, Syphilis, Herpes, Hepatitis B and C, HPV, and Trichomonas screening. All samples are processed by UKAS-accredited laboratories using PCR technology and 4th generation immunoassay methods for optimal diagnostic accuracy.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        As a diagnostic facility, we provide testing and laboratory reports only. If your results indicate a positive finding, you will need to contact your GP or attend an NHS sexual health service for appropriate treatment and clinical management. We do not prescribe medications or provide PEP/PrEP services.
                    </p>
                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Screening Bundles
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Our Sexual Health Packages
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Choose from our tiered STI screening packages designed to provide comprehensive testing at different levels. All packages include sample collection by qualified nursing staff.
                    </p>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {tests.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e4e4e4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brandColor)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] bg-blue-100/30"
                        >
                            {/* Top Accent */}
                            <div className="absolute left-0 top-0 h-1 w-full bg-[var(--brandColor)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon */}
                            <div className="mb-5 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brandColor)]/10 transition-all duration-300 group-hover:bg-[var(--brandColor)]">
                                    <FiActivity
                                        className="text-3xl text-[var(--brandColor)] transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>
                            </div>

                            {/* Service Name */}
                            <h2 className="text-center text-[19px] font-semibold leading-7 text-[#3f3f3f] transition-colors duration-300 group-hover:text-[var(--brandColor)]">
                                {item.name}
                            </h2>

                            {/* Description */}
                            <p className="mt-3 flex-1 text-center text-[14px] leading-6 text-[#666666] sm:text-[15px]">
                                {item.description}
                            </p>

                            {/* Divider */}
                            <div className="my-5 border-t border-[#eeeeee]" />

                            {/* Price */}
                            <div className="text-center">
                                <span className="text-xs font-medium uppercase tracking-wider text-[#999999]">
                                    Starting From
                                </span>

                                <p className="mt-1 text-[22px] font-semibold text-[var(--brandColor)]">
                                    £{item.price}
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                type="button"
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brandColor)] px-5 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:brightness-95 hover:shadow-md"
                            >
                                <span>Book Now</span>
                                <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>



                <div className="text-center py-12 bg-blue-100 mt-10 rounded-md">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        When Should You Get Tested for STIs?
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Regular sexual health screening is an important part of looking after your wellbeing. Public Health England and BASHH recommend testing if you have had unprotected sexual contact, are starting a new relationship, have multiple partners, or are experiencing any symptoms such as unusual discharge, discomfort, or skin changes.
                    </p>
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        It is important to be aware of the 'window period' — the time between potential exposure and when an infection becomes detectable. For bacterial infections like Chlamydia and Gonorrhoea, testing is typically accurate from 14 days post-exposure. For HIV, our 4th generation antigen/antibody tests provide reliable results from 28 days, with conclusive results at 90 days post-exposure.
                    </p>
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Many sexually transmitted infections are asymptomatic, meaning you may have an infection without experiencing any noticeable symptoms. This is why routine screening is the only way to be certain of your sexual health status.
                    </p>

                </div>







                {/* Header */}
                <div className="text-center py-12">


                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Diagnostic Catalog
                    </p>

                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Individual STI Tests
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        If you know which specific test you require, you can book individual STI tests below. Prices shown are for the laboratory analysis; a £50 phlebotomy fee applies to tests requiring a blood sample.
                    </p>

                </div>





                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {individualtests.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e4e4e4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brandColor)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] bg-blue-100/30"
                        >
                            {/* Top Accent */}
                            <div className="absolute left-0 top-0 h-1 w-full bg-[var(--brandColor)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon */}
                            <div className="mb-5 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brandColor)]/10 transition-all duration-300 group-hover:bg-[var(--brandColor)]">
                                    <FiActivity
                                        className="text-3xl text-[var(--brandColor)] transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>
                            </div>

                            {/* Service Name */}
                            <h2 className="text-center text-[19px] font-semibold leading-7 text-[#3f3f3f] transition-colors duration-300 group-hover:text-[var(--brandColor)]">
                                {item.name}
                            </h2>

                            {/* Description */}
                            <p className="mt-3 flex-1 text-center text-[14px] leading-6 text-[#666666] sm:text-[15px]">
                                {item.description}
                            </p>

                            {/* Price */}
                            <div className="text-center">
                                <p className="mt-1 text-[22px] font-semibold text-[var(--brandColor)]">
                                    £{item.price} <span className="text-sm text-black"> {item.plusPrice > "0" && `+  £${item.plusPrice}  `}</span>
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                type="button"
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brandColor)] px-5 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:brightness-95 hover:shadow-md"
                            >
                                <span>Book Now</span>
                                <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>






            </section>
        </main >
    );
};

export default Page;