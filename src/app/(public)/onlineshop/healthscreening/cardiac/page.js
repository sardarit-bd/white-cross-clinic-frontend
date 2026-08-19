
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const cardiacHealthTests = [
        {
            id: 1,
            name: "Advanced Cardiovascular Risk Screening",
            price: "499",
            plusPrice: "0",
            description: "Cardiovascular Assessment"
        },
        {
            id: 2,
            name: "Apolipoprotein A1 (Venous)",
            price: "137",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 3,
            name: "Apolipoprotein B (Venous)",
            price: "137",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 4,
            name: "Apolipoprotein C",
            price: "154",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 5,
            name: "Apolipoprotein E (12 hours fasting)",
            price: "156",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 6,
            name: "Apolipoprotein E genotype – E2/E3/E4",
            price: "509",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 7,
            name: "Cardiovascular Risk Profile 1",
            price: "466",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 8,
            name: "Cardiovascular, Comprehensive NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 9,
            name: "DL1L Biochemistry Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
            price: "113",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 10,
            name: "DL7L Well Man Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
            price: "239",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 11,
            name: "DL8L Well Person Profile plus HDL Cholesterol, LDL Cholesterol and Non-HDL Cholesterol",
            price: "239",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 12,
            name: "Familial Hypercholesterolaemia NGS panel",
            price: "1201",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 13,
            name: "HDL Cholesterol",
            price: "101",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 14,
            name: "LDL7 Subfractions",
            price: "347",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 15,
            name: "Lipid Profile (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 16,
            name: "Lipid Transfer Proteins",
            price: "324",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 17,
            name: "Lipoprotein (a) (Venous)",
            price: "120",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 18,
            name: "Lipoprotein Electrophoresis",
            price: "148",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 19,
            name: "NK Assay Panel + Intralipids",
            price: "1049",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 20,
            name: "Screening Profile 10 – Cardiovascular Risk 1",
            price: "466",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 21,
            name: "Triglycerides",
            price: "88",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        },
        {
            id: 22,
            name: "VLDL Cholesterol",
            price: "148",
            plusPrice: "50",
            description: "Cardiovascular Assessment"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Cardiac Screening
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive heart health screening with advanced lipid profiling and cardiovascular risk assessment. Our nurse-led South Kensington clinic provides professional cardiac testing using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Cardiac Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Cardiovascular disease remains the leading cause of death globally, responsible for approximately one-third of all mortality. In the UK, coronary heart disease causes over 64,000 deaths annually, with many occurring in individuals who were previously asymptomatic. Cardiac screening enables early detection of cardiovascular risk factors and subclinical disease, allowing preventive interventions before heart attacks, strokes, or heart failure develop. Through comprehensive blood testing, we can assess lipid metabolism, inflammatory status, metabolic health, and cardiac-specific biomarkers that predict future cardiovascular events.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Traditional cardiovascular risk assessment focuses primarily on cholesterol levels, but modern cardiac screening incorporates advanced biomarkers that provide more nuanced risk stratification. Apolipoprotein B, lipoprotein(a), high-sensitivity C-reactive protein, and homocysteine offer additional predictive value beyond standard lipid panels. For individuals with established cardiovascular disease or symptoms suggestive of heart dysfunction, cardiac-specific markers like NT-proBNP and troponin can detect early ventricular dysfunction or myocardial injury. This comprehensive approach enables personalized risk assessment and targeted intervention strategies.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Lipid Profile and Cholesterol Testing
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The lipid profile forms the foundation of cardiac screening, measuring total cholesterol, low-density lipoprotein (LDL) cholesterol, high-density lipoprotein (HDL) cholesterol, triglycerides, and calculating various ratios. LDL cholesterol is the primary atherogenic lipoprotein, transporting cholesterol into arterial walls where it accumulates as atherosclerotic plaque. Elevated LDL directly increases cardiovascular risk, with each 1 mmol/L reduction in LDL reducing major cardiovascular events by approximately 20%. Current guidelines recommend LDL below 3.0 mmol/L for general population, below 2.6 mmol/L for moderate risk, and below 1.8 mmol/L for high-risk individuals.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        HDL cholesterol performs reverse cholesterol transport, removing cholesterol from peripheral tissues and arterial walls for hepatic elimination. Higher HDL levels are protective against cardiovascular disease. HDL below 1.0 mmol/L in men or 1.2 mmol/L in women increases cardiovascular risk, while levels above 1.5 mmol/L confer protection. The total cholesterol to HDL ratio provides integrated risk assessment; ratios above 5:1 indicate elevated risk. Triglycerides, while less directly atherogenic than LDL, contribute to cardiovascular risk particularly when elevated alongside low HDL—a pattern characteristic of metabolic syndrome and insulin resistance.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Advanced Lipid Markers
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Apolipoprotein B (ApoB) quantifies all atherogenic lipoproteins (LDL, VLDL, IDL, and lipoprotein(a)), providing more accurate cardiovascular risk assessment than LDL cholesterol alone. Since each atherogenic particle contains one ApoB molecule, ApoB directly measures the number of atherogenic particles, regardless of their cholesterol content. Some individuals have LDL cholesterol in the normal range but elevated ApoB, indicating increased numbers of small, dense LDL particles—a highly atherogenic pattern. ApoB is particularly useful in individuals with diabetes, metabolic syndrome, or high triglycerides where LDL calculation may be inaccurate.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Lipoprotein(a) [Lp(a)] is a genetic cardiovascular risk factor largely independent of lifestyle. Lp(a) consists of an LDL particle bound to apolipoprotein(a), possessing both atherogenic and prothrombotic properties. Approximately 20% of the population has elevated Lp(a) above 50 mg/dL, conferring significantly increased cardiovascular risk comparable to familial hypercholesterolemia. Unlike other lipid parameters, Lp(a) does not respond substantially to diet, exercise, or statins, though PCSK9 inhibitors and emerging therapies show promise. Testing Lp(a) is particularly important in individuals with premature cardiovascular disease or strong family history.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Inflammatory and Metabolic Markers
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        High-sensitivity C-reactive protein (hsCRP) measures systemic inflammation, a key driver of atherosclerosis and plaque instability. CRP levels below 1 mg/L indicate low cardiovascular risk, 1-3 mg/L moderate risk, and above 3 mg/L high risk. Chronic low-grade inflammation promotes endothelial dysfunction, oxidative stress, and plaque formation. Elevated hsCRP predicts future cardiovascular events independent of cholesterol levels. The combination of high LDL cholesterol and elevated hsCRP identifies particularly high-risk individuals who benefit most from aggressive lipid-lowering therapy. Lifestyle interventions including weight loss, exercise, and anti-inflammatory diets effectively reduce hsCRP.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Homocysteine is an amino acid elevated in vitamin B12, folate, or vitamin B6 deficiency. Elevated homocysteine damages vascular endothelium and promotes thrombosis, increasing cardiovascular risk. Homocysteine above 15 μmol/L warrants vitamin supplementation, though clinical trials have yielded mixed results regarding cardiovascular event reduction. Glucose and HbA1c assessment screens for diabetes and prediabetes—major cardiovascular risk factors. Diabetes doubles to quadruples cardiovascular risk, necessitating aggressive risk factor management. Prediabetes (HbA1c 42-47 mmol/mol or fasting glucose 5.6-6.9 mmol/L) provides opportunity for lifestyle intervention to prevent diabetes progression.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Cardiac-Specific Biomarkers
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        N-terminal pro-B-type natriuretic peptide (NT-proBNP) is released by the heart in response to ventricular stretch and pressure overload. Elevated NT-proBNP indicates heart failure, with levels correlating with disease severity and prognosis. NT-proBNP screening identifies individuals with asymptomatic left ventricular dysfunction who may benefit from early treatment. Levels below 125 pg/mL effectively exclude heart failure, while levels above 400 pg/mL (or 900 pg/mL in those over 75) suggest significant cardiac dysfunction requiring further investigation with echocardiography and specialist assessment.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        High-sensitivity troponin detects minute quantities of cardiac muscle damage. While elevated troponin traditionally indicates acute myocardial infarction, chronic low-level elevation can occur in heart failure, chronic kidney disease, or subclinical coronary disease. Serial troponin measurements help distinguish acute from chronic elevation. In symptomatic individuals with chest pain, troponin forms part of the diagnostic algorithm for acute coronary syndrome. However, troponin should be interpreted by emergency department or cardiology specialists in appropriate clinical context.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Risk Stratification and Treatment Decisions
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Cardiac screening results integrate with clinical factors (age, sex, blood pressure, smoking status, diabetes, family history) to calculate 10-year cardiovascular risk using validated algorithms like QRISK3 or Framingham Risk Score. Risk above 10% over 10 years generally warrants statin therapy alongside lifestyle modification. Individuals with LDL above 5 mmol/L, total cholesterol above 7.5 mmol/L, or familial hypercholesterolemia require specialist assessment. Lifestyle interventions—Mediterranean diet, regular aerobic exercise, weight management, smoking cessation—form the foundation of cardiovascular prevention and often substantially improve lipid profiles and inflammatory markers.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        When to Seek Cardiac Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Adults over 40 should have baseline cardiac screening, with repeat testing every 3-5 years if results are normal. Earlier screening is appropriate for those with cardiovascular risk factors: smoking, obesity, hypertension, diabetes, strong family history of premature cardiovascular disease, or chronic kidney disease. Symptomatic individuals experiencing chest pain, breathlessness, palpitations, syncope, or reduced exercise tolerance require urgent medical assessment, as these symptoms may indicate acute coronary syndrome, heart failure, or arrhythmias necessitating immediate investigation and treatment.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Role of Preventive Cardiology
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Cardiac screening exemplifies preventive medicine at its most effective. The majority of cardiovascular events are preventable through early identification and management of risk factors. Statins reduce cardiovascular events by 25-35% in high-risk individuals. Blood pressure control, diabetes management, smoking cessation, and lifestyle optimization further reduce risk. By detecting abnormalities before symptoms develop, cardiac screening enables intervention at a stage where disease can be prevented rather than merely managed. This proactive approach saves lives and preserves quality of life.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Cardiac Health Tests
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {cardiacHealthTests.map((item) => (
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