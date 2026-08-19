
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const wellManTests = [
        {
            id: 1,
            name: "Male Health Profile",
            price: "249",
            plusPrice: "0",
            description: "Male Health Profile"
        },
        {
            id: 2,
            name: "Advanced Prostate Cancer Risk Assessment (Stockholm3)",
            price: "1500",
            plusPrice: "0",
            description: "Male Health Profile"
        },
        {
            id: 3,
            name: "Male Hormonal Health Screening",
            price: "299",
            plusPrice: "0",
            description: "Male Health Profile"
        },
        {
            id: 4,
            name: "Female Hormonal Health Screening",
            price: "249",
            plusPrice: "0",
            description: "Male Health Profile"
        },
        {
            id: 5,
            name: "Angelman/Rett Syndromes NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 6,
            name: "Beckwith-Wiedemann Syndrome - methylation studies on 11p15 imprinting domains KvDMR + H19",
            price: "1010",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 7,
            name: "Complex PSA (Prostate Specific Ag)",
            price: "141",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 8,
            name: "DL7 Well Man Profile",
            price: "233",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 9,
            name: "DL7L Well Man Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
            price: "239",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 10,
            name: "Dihydrotestosterone",
            price: "205",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 11,
            name: "Eosin-5 Maleimide Dye binding test for Hereditary spherocytosis (EMA)*",
            price: "240",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 12,
            name: "Female Hormone Profile (Venous)",
            price: "222",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 13,
            name: "Galactomanan (Aspergillus Antigen)",
            price: "240",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 14,
            name: "Genetic Reproductive Profile (Male)",
            price: "1708",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 15,
            name: "HTLV 1 & 2 Abs. (Human T Lymphotropic Virus Type I-II)",
            price: "126",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 16,
            name: "Human Parvovirus B19 – DNA",
            price: "294",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 17,
            name: "Kallmann Syndrome NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 18,
            name: "Leishmania Antibodies",
            price: "126",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 19,
            name: "Leucocyte Antibody Detection Panel FEMALE",
            price: "468",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 20,
            name: "Male Genetic Reproductive Profile",
            price: "1708",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 21,
            name: "Male Hormone Profile",
            price: "261",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 22,
            name: "Manganese (Serum)",
            price: "141",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 23,
            name: "Prostate Cancer NGS Panel",
            price: "1410",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 24,
            name: "Prostate Profile (Total & Free PSA)",
            price: "161",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 25,
            name: "Prostate Specific Antigen (Total) (Venous)*",
            price: "132",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 26,
            name: "Recurrent Miscarriage Profile (female)",
            price: "2016",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 27,
            name: "Rett/Angelman Syndromes NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 28,
            name: "Screening Profile 9F – Senior Female",
            price: "549",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 29,
            name: "Screening Profile 9M – Senior Male",
            price: "549",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 30,
            name: "Sports/Performance Profile",
            price: "685",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 31,
            name: "Testosterone (Free) (Venous)",
            price: "179",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 32,
            name: "Testosterone (Total), LC MS Mass Spec",
            price: "179",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 33,
            name: "Testosterone (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Male Health Profile"
        },
        {
            id: 34,
            name: "Total Testosterone, LC MS Mass Spec",
            price: "179",
            plusPrice: "50",
            description: "Male Health Profile"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Well Man Health Screening
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive male health screening with testosterone, PSA, cardiovascular, and metabolic testing. Our nurse-led South Kensington clinic provides professional Well Man assessments using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Well Man Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Well Man health screening provides targeted assessment of male-specific health markers and conditions that disproportionately affect men. Unlike general health checks, Well Man screens are designed to detect testosterone deficiency, prostate abnormalities, cardiovascular disease risk, and metabolic dysfunction—conditions that are either unique to men or occur at higher rates in the male population. Regular screening enables early detection of treatable conditions before they progress to cause significant morbidity or mortality.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Men face distinct health challenges and are statistically less likely than women to seek medical attention for symptoms or engage in preventive healthcare. Cardiovascular disease is the leading cause of death in men, with heart attacks occurring on average 10 years earlier than in women. Prostate cancer is the most common cancer in UK men, with risk increasing significantly after age 50. Testosterone deficiency affects an estimated 2-6% of men but often goes undiagnosed. Comprehensive screening addresses these male-specific health concerns through targeted biomarker analysis.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Testosterone and Male Hormone Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Testosterone is the primary male sex hormone, essential for maintaining muscle mass, bone density, red blood cell production, sperm production, libido, mood stability, and cognitive function. Testosterone levels peak in early adulthood and decline progressively with age, typically by 1-2% per year after age 30. Low testosterone (hypogonadism) can result from testicular dysfunction, pituitary disorders, obesity, chronic illness, or certain medications. Symptoms include fatigue, reduced libido, erectile dysfunction, decreased muscle mass, increased body fat, mood changes, and cognitive impairment.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Well Man screening measures total testosterone alongside sex hormone-binding globulin (SHBG), which binds testosterone and affects its bioavailability. Free testosterone, the biologically active form, can be calculated from these values. Luteinizing hormone (LH) and follicle-stimulating hormone (FSH) may also be assessed to distinguish between primary testicular failure and secondary hypogonadism caused by pituitary dysfunction. Accurate diagnosis requires interpretation by a specialist, as testosterone levels fluctuate diurnally and are affected by various factors.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Prostate Health and PSA Testing
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Prostate-specific antigen (PSA) is a protein produced by prostate tissue. While PSA testing is controversial as a population screening tool due to limited specificity, it provides valuable information for men concerned about prostate health or experiencing lower urinary tract symptoms. Elevated PSA may indicate benign prostatic hyperplasia (BPH), prostatitis (prostate inflammation), or prostate cancer. However, PSA can also be temporarily elevated following vigorous exercise, ejaculation, or cycling, necessitating careful interpretation.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        PSA levels typically increase with age and prostate size. While there is no absolute "normal" value, PSA above 4.0 ng/mL traditionally warrants further investigation, though many urologists now use age-specific reference ranges. Rising PSA over time (PSA velocity) can be more significant than a single elevated value. If PSA is elevated, further assessment by a urologist may include digital rectal examination, multiparametric MRI scanning, or prostate biopsy. Early detection of prostate cancer significantly improves treatment outcomes.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Cardiovascular Risk Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Cardiovascular disease remains the leading cause of death in men. Well Man screening includes comprehensive lipid profiling—total cholesterol, HDL (high-density lipoprotein), LDL (low-density lipoprotein), triglycerides, and cholesterol ratios. These markers assess atherosclerosis risk and guide decisions about statin therapy. High LDL cholesterol promotes arterial plaque formation, while high HDL cholesterol is protective. Elevated triglycerides, particularly when combined with low HDL, significantly increase cardiovascular risk.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Additional cardiovascular markers may include apolipoprotein B (ApoB), lipoprotein(a), and high-sensitivity C-reactive protein (hsCRP), an inflammatory marker associated with cardiovascular events. Blood glucose and HbA1c screening detects diabetes and prediabetes, major cardiovascular risk factors. Kidney function tests (creatinine, eGFR) and liver function tests complete the metabolic assessment. Identifying cardiovascular risk factors enables lifestyle interventions and medical management to prevent heart attacks and strokes.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Complete Blood Count and Nutritional Status
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Full blood count (FBC) assesses red blood cells, white blood cells, and platelets. Anaemia in men can indicate gastrointestinal bleeding, vitamin B12 or folate deficiency, or chronic disease. Elevated white cell counts may suggest infection or inflammation. Platelet abnormalities can affect clotting function. Well Man screening also includes vitamin D and vitamin B12 assessment, as deficiencies are common and cause fatigue, cognitive impairment, and neuropathy. Vitamin D is also essential for bone health, immune function, and cardiovascular health.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Liver and Kidney Function
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Liver function tests (ALT, AST, GGT, alkaline phosphatase, bilirubin, albumin) detect liver damage from alcohol consumption, non-alcoholic fatty liver disease, viral hepatitis, or medication toxicity. Non-alcoholic fatty liver disease is increasingly common, particularly in men with obesity, diabetes, or metabolic syndrome. Early detection allows intervention to prevent progression to cirrhosis. Kidney function assessment (creatinine, eGFR, urea) detects chronic kidney disease, which often progresses asymptomatically until advanced stages. Maintaining kidney health is essential for long-term wellbeing.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Thyroid Function Testing
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        While thyroid disorders are less common in men than women, hypothyroidism can cause fatigue, weight gain, depression, and cognitive slowing—symptoms often attributed to aging or stress. Thyroid-stimulating hormone (TSH) screening identifies thyroid dysfunction, with free T4 and free T3 providing additional diagnostic information when abnormalities are detected. Thyroid dysfunction can also affect testosterone levels and cardiovascular health, making screening particularly valuable in comprehensive male health assessment.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Interpreting Results and Next Steps
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Well Man screening provides a comprehensive snapshot of your current health status and disease risk. Results should be reviewed with your GP or a specialist who can interpret findings in context of your age, symptoms, family history, and lifestyle. Abnormal results may require further investigation, lifestyle modification, or medical treatment. For example, elevated cholesterol may necessitate dietary changes and statin therapy, while low testosterone might warrant specialist endocrinology consultation. Regular screening allows monitoring of treatment response and early detection of new problems.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Value of Preventive Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Preventive health screening is particularly important for men, who are less likely to seek medical attention until symptoms become severe. Many serious conditions, from cardiovascular disease to prostate cancer to testosterone deficiency, develop gradually and may be asymptomatic initially. Regular Well Man screening establishes baseline values, tracks changes over time, and identifies problems at their earliest, most treatable stages. This proactive approach to healthcare optimizes long-term health outcomes and quality of life.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Well Man Health Checks
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {wellManTests.map((item) => (
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
                                    <span className="text-sm text-black"> {item.plusPrice > "0" && `+  £${item.plusPrice}  `}</span>
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