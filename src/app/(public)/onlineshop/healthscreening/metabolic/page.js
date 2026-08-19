
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const metabolicHealthTests = [
        {
            id: 1,
            name: "Diabetes & Kidney Health Screening",
            price: "199",
            plusPrice: "0",
            description: "Metabolic Assessment"
        },
        {
            id: 2,
            name: "Diabetes - Obesity NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 3,
            name: "Fasting Insulin Resistance Index - HOMA IR",
            price: "148",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 4,
            name: "Glucose",
            price: "83",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 5,
            name: "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency - full G6PD gene sequencing",
            price: "1170",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 6,
            name: "HbA1c (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 7,
            name: "Hyperinsulinism NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 8,
            name: "Insulin",
            price: "118",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 9,
            name: "Insulin Antibodies",
            price: "166",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 10,
            name: "Maturity-Onset Diabetes of the Young (MODY) Diabetes NGS Panel",
            price: "2066",
            plusPrice: "50",
            description: "Metabolic Assessment"
        },
        {
            id: 11,
            name: "Metabolic Syndrome Profile",
            price: "394",
            plusPrice: "50",
            description: "Metabolic Assessment"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Metabolic Profile
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive metabolic health screening with diabetes, insulin resistance, and weight management testing. Our nurse-led South Kensington clinic provides professional metabolic assessments using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Metabolic Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Metabolic health encompasses the body's ability to efficiently process and utilize nutrients, maintain stable blood glucose levels, respond appropriately to insulin, and regulate fat storage and energy expenditure. Metabolic dysfunction manifests as insulin resistance, prediabetes, type 2 diabetes, obesity, dyslipidemia, and hypertension—collectively termed metabolic syndrome. In the UK, approximately 4.9 million people have diagnosed diabetes, with an estimated 1 million unaware of their condition. Additionally, millions more have prediabetes or insulin resistance, representing a continuum of metabolic dysfunction that precedes overt disease.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Metabolic profile testing provides comprehensive assessment of glucose metabolism, insulin sensitivity, lipid metabolism, and associated risk factors. Unlike isolated glucose testing, modern metabolic screening incorporates HbA1c for long-term glucose control, insulin and HOMA-IR for insulin resistance quantification, lipid profiles for cardiovascular risk stratification, and liver function tests to detect non-alcoholic fatty liver disease. This integrated approach enables early detection of metabolic abnormalities years before diabetes diagnosis, creating opportunities for preventive intervention through lifestyle modification or pharmacotherapy.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Glucose Metabolism and Diabetes Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Blood glucose regulation is fundamental to metabolic health. After eating, carbohydrates are digested into glucose, which enters the bloodstream, triggering pancreatic insulin release. Insulin facilitates glucose uptake into cells for energy production or storage as glycogen. Between meals, blood glucose is maintained by hepatic glucose production and breakdown of glycogen stores. In healthy individuals, sophisticated feedback mechanisms maintain blood glucose within a narrow range (4.0-5.9 mmol/L fasting). Metabolic dysfunction disrupts this regulation, causing hyperglycemia.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Fasting plasma glucose measures blood sugar after an overnight fast, with normal values below 5.6 mmol/L. Fasting glucose between 5.6-6.9 mmol/L indicates impaired fasting glucose (prediabetes), while levels of 7.0 mmol/L or higher on two occasions diagnose diabetes. However, fasting glucose has limitations—it reflects glucose control at a single moment and can be affected by stress, illness, medications, or recent dietary intake. Some individuals with normal fasting glucose still have impaired glucose tolerance, only detectable through oral glucose tolerance testing or HbA1c measurement.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        HbA1c: Long-Term Glucose Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Glycated haemoglobin (HbA1c) measures the percentage of haemoglobin molecules with glucose attached, reflecting average blood glucose over the previous 2-3 months (the lifespan of red blood cells). HbA1c does not require fasting, is not affected by acute stress or illness, and provides superior assessment of long-term glucose control compared to fasting glucose. Normal HbA1c is below 42 mmol/mol (6.0%). HbA1c of 42-47 mmol/mol indicates prediabetes, while 48 mmol/mol or higher diagnoses diabetes. For people with diabetes, treatment targets typically aim for HbA1c below 53 mmol/mol, though individual targets vary based on age, complications, and hypoglycaemia risk.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        HbA1c has become the preferred screening and diagnostic test for diabetes due to convenience and reliability. However, HbA1c can be falsely low in conditions affecting red blood cell turnover (haemolytic anaemia, recent blood transfusion, chronic kidney disease) or falsely elevated in iron deficiency anaemia. In these situations, fasting glucose or oral glucose tolerance testing provides more accurate assessment. HbA1c is also less sensitive for detecting prediabetes than oral glucose tolerance testing, potentially missing individuals with isolated postprandial hyperglycaemia.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Insulin Resistance and HOMA-IR
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Insulin resistance is the core metabolic defect underlying type 2 diabetes, occurring years before hyperglycemia becomes apparent. When cells become resistant to insulin's effects, the pancreas compensates by producing more insulin to maintain normal blood glucose. This hyperinsulinemia succeeds initially, but eventually pancreatic β-cells cannot sustain the increased demand, leading to progressive insulin deficiency and overt diabetes. Insulin resistance is strongly associated with obesity (particularly visceral adiposity), physical inactivity, genetics, inflammation, and aging.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The Homeostatic Model Assessment of Insulin Resistance (HOMA-IR) quantifies insulin resistance using fasting glucose and fasting insulin measurements. The formula [(fasting glucose × fasting insulin) / 22.5] estimates insulin sensitivity, with higher values indicating greater insulin resistance. HOMA-IR above 2.5 suggests significant insulin resistance, while values above 5.0 indicate severe resistance. Detecting insulin resistance at the prediabetic stage enables targeted intervention—weight loss, exercise, and medications like metformin can substantially improve insulin sensitivity and prevent or delay diabetes progression.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Metabolic Syndrome: The Clustering of Risk Factors
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Metabolic syndrome describes the clustering of abdominal obesity, insulin resistance, hypertension, and dyslipidemia—a pattern conferring significantly increased cardiovascular disease and diabetes risk. Diagnostic criteria include three or more of: waist circumference above 94 cm (men) or 80 cm (women), triglycerides above 1.7 mmol/L, HDL cholesterol below 1.0 mmol/L (men) or 1.2 mmol/L (women), blood pressure above 130/85 mmHg, and fasting glucose above 5.6 mmol/L. Approximately 30% of adults in developed countries have metabolic syndrome, representing a major public health challenge.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The pathophysiology of metabolic syndrome centers on insulin resistance and visceral adiposity. Excess abdominal fat is metabolically active, secreting inflammatory cytokines (IL-6, TNF-α) and adipokines (leptin, resistin) that promote insulin resistance, endothelial dysfunction, and atherogenesis. Insulin resistance leads to hyperinsulinemia, which promotes sodium retention (hypertension), increases hepatic VLDL production (elevated triglycerides), and enhances lipoprotein lipase activity (low HDL). This interconnected web of metabolic disturbances substantially elevates cardiovascular risk, necessitating aggressive lifestyle intervention and often pharmacotherapy.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Lipid Metabolism and Cardiovascular Risk
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Metabolic dysfunction profoundly affects lipid metabolism. Insulin resistance alters hepatic lipoprotein production and peripheral lipoprotein clearance, causing elevated triglycerides, low HDL cholesterol, and increased small dense LDL particles—a highly atherogenic lipid pattern. This "diabetic dyslipidemia" dramatically increases cardiovascular disease risk even when total cholesterol appears normal. Metabolic profile testing therefore includes comprehensive lipid assessment—total cholesterol, LDL, HDL, triglycerides, and cholesterol ratios—enabling cardiovascular risk stratification and treatment decisions.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Non-Alcoholic Fatty Liver Disease
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Non-alcoholic fatty liver disease (NAFLD) represents hepatic manifestation of metabolic syndrome, characterized by fat accumulation in liver cells without excessive alcohol consumption. NAFLD affects approximately 25% of adults globally, with higher prevalence in obesity and diabetes. While simple steatosis is relatively benign, non-alcoholic steatohepatitis (NASH) involves inflammation and fibrosis, potentially progressing to cirrhosis and liver failure. Liver function tests (ALT, AST, GGT) screen for NAFLD, with elevated transaminases warranting further investigation via ultrasound or specialized fibrosis scoring. Weight loss and metabolic optimization are the primary treatments.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Kidney Function and Metabolic Health
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Chronic kidney disease commonly accompanies metabolic dysfunction, as diabetes and hypertension are leading causes of renal impairment. Metabolic profile testing includes creatinine, estimated glomerular filtration rate (eGFR), and urinary albumin-to-creatinine ratio to detect early kidney dysfunction. Declining kidney function affects diabetes management (requiring medication dose adjustments) and accelerates cardiovascular risk. Early detection and tight glycemic and blood pressure control can slow progression of diabetic nephropathy.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Prevention and Treatment Strategies
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Metabolic dysfunction is largely preventable and often reversible through lifestyle modification. Weight loss of just 5-7% significantly improves insulin sensitivity, reduces blood glucose and triglycerides, and increases HDL cholesterol. Regular physical activity—both aerobic exercise and resistance training—enhances insulin sensitivity independent of weight loss. Mediterranean dietary patterns, emphasizing vegetables, fruits, whole grains, legumes, nuts, and olive oil while limiting processed foods and refined carbohydrates, have demonstrated robust metabolic benefits. When lifestyle intervention is insufficient, medications like metformin, GLP-1 agonists, or SGLT2 inhibitors effectively improve metabolic parameters and reduce complications.
                    </p>


                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Metabolic Health Tests
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {metabolicHealthTests.map((item) => (
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