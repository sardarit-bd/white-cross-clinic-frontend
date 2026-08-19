
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const eliteHealthScreening = [
        {
            id: 1,
            name: "Advanced Full Body MOT",
            price: "449",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 2,
            name: "Platinum Full Body MOT – Men",
            price: "549",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 3,
            name: "Platinum Full Body MOT – Women",
            price: "549",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 4,
            name: "Advanced Prostate Cancer Risk Assessment (Stockholm3)",
            price: "1500",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 5,
            name: "Advanced Cancer-Aware Health Screening – Men 60+",
            price: "549",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 6,
            name: "Advanced Cancer-Aware Health Screening – Women 60+",
            price: "549",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 7,
            name: "Advanced Cardiovascular Risk Screening",
            price: "499",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 8,
            name: "Comprehensive Allergy Screening",
            price: "499",
            plusPrice: "0",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 9,
            name: "Cancer, Comprehensive NGS Panel",
            price: "1970",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 10,
            name: "Cardiovascular, Comprehensive NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 11,
            name: "Epilepsy, Comprehensive NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 12,
            name: "Hereditary Comprehensive Cancer NGS Panel",
            price: "2050",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 13,
            name: "Hereditary Spastic Paraplegia Comprehensive NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 14,
            name: "Kidney/Urinary Tract Comprehensive Cancer NGS Panel",
            price: "1810",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 15,
            name: "Melanoma Comprehensive Cancer NGS Panel",
            price: "1810",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        },
        {
            id: 16,
            name: "Blood Platinum",
            price: "359",
            plusPrice: "50",
            description: "Premium Diagnostic MOT"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Comprehensive Elite Screening
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Premium comprehensive health screening with advanced biomarkers and complete organ system assessment. Our nurse-led South Kensington clinic provides platinum-level diagnostic MOT using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Comprehensive Elite Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Comprehensive elite health screening represents the pinnacle of preventive healthcare, providing exhaustive assessment of current health status, disease risk, and biological aging markers. Unlike basic health checks that measure fundamental parameters, elite screening incorporates advanced biomarkers, specialized testing, and detailed organ function analysis to detect subtle abnormalities years before clinical disease manifests. This proactive approach enables optimization of health span—the period of life spent in good health—rather than merely extending lifespan. For executives, high-performing professionals, and individuals committed to longevity, comprehensive elite screening provides the data necessary for evidence-based health optimization.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The philosophy underlying elite screening is that optimal health requires more than absence of overt disease. Many individuals function with suboptimal biomarkers—borderline cholesterol, low-grade inflammation, insulin resistance, nutritional deficiencies—that impair vitality, cognitive performance, and resilience despite falling within "normal" laboratory ranges. Comprehensive assessment identifies these subtle deviations from optimal, enabling targeted interventions through lifestyle modification, nutritional supplementation, or pharmacotherapy. By establishing detailed baseline values and tracking longitudinal trends, elite screening detects declining trajectories before irreversible organ damage occurs, embodying true preventive medicine.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Advanced Cardiovascular Risk Stratification
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Elite screening transcends standard lipid profiles to include advanced atherogenic markers that provide superior cardiovascular risk prediction. Apolipoprotein B (ApoB) quantifies total atherogenic particle number, offering more accurate risk assessment than LDL cholesterol alone, particularly in individuals with metabolic syndrome or diabetes. Lipoprotein(a) [Lp(a)], a genetic cardiovascular risk factor present in approximately 20% of the population, cannot be inferred from standard lipid testing and remains largely resistant to lifestyle modification, making its detection crucial for appropriate risk counseling and emerging therapeutic interventions.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        High-sensitivity C-reactive protein (hsCRP) measures systemic inflammation, a key driver of atherosclerosis and plaque instability. The combination of elevated LDL cholesterol and high hsCRP identifies particularly high-risk individuals who derive maximal benefit from statin therapy, as demonstrated in landmark trials like JUPITER. Homocysteine, elevated in B-vitamin deficiencies, damages vascular endothelium and promotes thrombosis. Fibrinogen, a clotting protein, predicts cardiovascular events independent of traditional risk factors. These advanced markers enable precision risk stratification beyond crude algorithms, facilitating personalized preventive strategies.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Comprehensive Metabolic Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Elite metabolic profiling extends beyond basic glucose testing to include HbA1c, fasting insulin, and calculation of insulin resistance via HOMA-IR. This comprehensive approach detects prediabetes and insulin resistance years before diabetes diagnosis, creating opportunities for intensive lifestyle intervention that can prevent or substantially delay disease progression. The Diabetes Prevention Program demonstrated that lifestyle modification reduced diabetes incidence by 58%—but only when implemented at the prediabetic stage. Standard screening often misses this critical window of opportunity.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Advanced lipid assessment includes non-HDL cholesterol, triglyceride-to-HDL ratio, and ApoB-to-ApoA1 ratio—markers that capture metabolic dysfunction and cardiovascular risk more comprehensively than total cholesterol alone. Uric acid measurement identifies hyperuricemia, a metabolic abnormality associated with gout, kidney disease, and cardiovascular risk. Gamma-glutamyl transferase (GGT), while a liver enzyme, also predicts metabolic syndrome and diabetes risk. This integrated metabolic assessment reveals the full spectrum of cardiometabolic health, guiding comprehensive risk factor modification.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Complete Endocrine Evaluation
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Comprehensive hormone testing assesses thyroid function (TSH, free T4, free T3, thyroid antibodies), sex hormones (testosterone, oestrogen, progesterone, SHBG, LH, FSH), adrenal function (cortisol, DHEA-S), and metabolic hormones (insulin, leptin). Thyroid dysfunction affects 2-3% of the population but often goes undiagnosed for years, causing fatigue, weight changes, mood disturbances, and cognitive impairment. Subclinical hypothyroidism—elevated TSH with normal free T4—remains controversial but may benefit from treatment in symptomatic individuals or those with thyroid antibodies.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Testosterone deficiency (hypogonadism) affects 2-6% of men, causing reduced libido, erectile dysfunction, fatigue, decreased muscle mass, and mood changes. Testosterone levels decline progressively with age, obesity, and chronic illness. Comprehensive assessment distinguishes primary testicular failure from secondary hypogonadism (pituitary dysfunction) through LH and FSH measurement. For women, hormone testing evaluates menstrual irregularities, fertility concerns, PCOS, and menopausal status. DHEA-S reflects adrenal androgen production and serves as a marker of biological aging. This endocrine assessment optimizes hormonal health across the lifespan.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Comprehensive Organ Function Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Elite screening includes detailed liver function testing beyond basic transaminases (ALT, AST) to include GGT, alkaline phosphatase, bilirubin, albumin, and total protein. Non-alcoholic fatty liver disease (NAFLD) affects 25% of adults globally, often asymptomatic until advanced. Elevated liver enzymes prompt further assessment with imaging and specialized fibrosis scoring. Kidney function evaluation includes creatinine, estimated glomerular filtration rate (eGFR), urea, and urinary albumin-to-creatinine ratio. Chronic kidney disease often progresses silently; early detection enables intervention to slow progression and reduce cardiovascular risk.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Complete blood count with differential assesses red cells (detecting anaemia), white cells (immune function, infection, inflammation), and platelets (clotting function). Anaemia investigation includes iron studies (ferritin, transferrin saturation, TIBC), vitamin B12, and folate. Bone health markers include calcium, phosphate, alkaline phosphatase, and vitamin D. Electrolyte panel (sodium, potassium, chloride, bicarbonate) evaluates fluid balance and acid-base status. This comprehensive organ assessment detects subclinical dysfunction requiring monitoring or intervention.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Nutritional and Micronutrient Analysis
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Optimal health requires adequate vitamins and minerals, yet deficiencies are remarkably common even in developed countries. Vitamin D deficiency affects approximately 40% of UK adults, causing impaired bone health, immune dysfunction, increased infection risk, and mood disturbances. Elite screening measures 25-hydroxyvitamin D, the best indicator of vitamin D status, enabling targeted supplementation to achieve optimal levels (75-125 nmol/L) associated with best health outcomes. Vitamin B12 deficiency causes megaloblastic anemia, peripheral neuropathy, cognitive impairment, and mood changes. Folate deficiency has similar hematologic consequences and increases cardiovascular risk through elevated homocysteine.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Magnesium, often overlooked, is essential for energy production, muscle and nerve function, blood pressure regulation, and bone health. Deficiency causes fatigue, muscle cramps, palpitations, and increased cardiovascular risk. Iron status assessment includes ferritin (iron stores), transferrin saturation, and full blood count. Even in the absence of anaemia, low ferritin causes fatigue, hair loss, restless legs, and impaired cognitive function. Zinc and selenium, essential trace elements, support immune function and antioxidant defence. Comprehensive nutritional assessment identifies and corrects deficiencies, optimising cellular function and resilience.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Inflammatory and Immune Markers
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Chronic low-grade inflammation, termed "inflammaging," drives numerous age-related diseases including cardiovascular disease, diabetes, cancer, and neurodegenerative conditions. High-sensitivity C-reactive protein (hsCRP) quantifies systemic inflammation, with levels below 1 mg/L indicating low cardiovascular risk, 1-3 mg/L moderate risk, and above 3 mg/L high risk. Erythrocyte sedimentation rate (ESR) is a non-specific inflammatory marker useful for detecting occult inflammation, infection, or malignancy. White blood cell differential identifies immune system activation, with elevated neutrophils suggesting bacterial infection and elevated lymphocytes indicating viral infection or chronic inflammation.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Specialized Biomarkers and Tumor Markers
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Advanced elite packages may include specialized biomarkers tailored to individual risk profiles. For men over 50, prostate-specific antigen (PSA) screens for prostate pathology, though interpretation requires nuance given limited specificity. Women at high ovarian cancer risk may include CA-125, though routine screening in asymptomatic women is not recommended due to poor predictive value. Carcinoembryonic antigen (CEA) can be elevated in colorectal cancer but lacks specificity for screening. These tumor markers are most useful for monitoring known disease or in high-risk individuals, interpreted alongside clinical assessment and appropriate imaging.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        NT-proBNP (N-terminal pro-B-type natriuretic peptide) detects heart failure and left ventricular dysfunction, often before symptoms develop. Troponin measurement, while primarily used in acute coronary syndrome diagnosis, can reveal subclinical myocardial injury in chronic conditions. Homocysteine, uric acid, and lipoprotein-associated phospholipase A2 (Lp-PLA2) provide additional cardiovascular risk stratification. The selection of specialized biomarkers should be tailored to individual risk factors, symptoms, and screening objectives in consultation with healthcare providers.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Longitudinal Health Optimization
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The true value of comprehensive elite screening emerges through longitudinal monitoring. Establishing comprehensive baseline values in health enables tracking of subtle changes over time—declining kidney function, rising inflammatory markers, deteriorating glucose control, falling testosterone. These gradual trajectories, invisible in cross-sectional assessment, reveal declining health trajectories requiring intervention. Serial testing after implementing lifestyle changes, supplementation, or medications provides objective feedback on intervention effectiveness, enabling evidence-based optimization rather than guesswork.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Interpreting Comprehensive Results
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Comprehensive elite screening generates extensive data requiring expert interpretation. Results should be reviewed with a physician experienced in preventive medicine who can integrate findings with clinical history, physical examination, family history, and lifestyle factors. Many abnormalities identified through comprehensive screening require confirmatory testing, imaging studies, or specialist referral before definitive diagnosis. The goal is not to generate anxiety through over-testing but to enable informed decision-making and proactive health optimization based on comprehensive biological data.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Investment in Longevity
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Comprehensive elite health screening represents an investment in longevity and quality of life. While more expensive than basic screening, elite packages provide exponentially greater information, detecting problems at their earliest, most treatable stages. The cost of preventing disease through early detection and lifestyle modification is negligible compared to treating advanced illness. For individuals prioritizing health optimization, cognitive performance, and extended healthspan, comprehensive elite screening provides the roadmap for evidence-based longevity strategies.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Elite Health Screening
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {eliteHealthScreening.map((item) => (
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