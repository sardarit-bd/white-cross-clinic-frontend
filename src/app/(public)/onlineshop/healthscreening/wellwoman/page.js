
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const wellWomanTests = [
        {
            id: 1,
            name: "Female Health Profile",
            price: "249",
            plusPrice: "0",
            description: "Female Health Profile"
        },
        {
            id: 2,
            name: "17 Hydroxyprogesterone",
            price: "187",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 3,
            name: "Bilharzia (Schistosome) Antibody Screen",
            price: "183",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 4,
            name: "Bilharzia (Urine)",
            price: "84",
            plusPrice: "0",
            description: "Female Health Profile"
        },
        {
            id: 5,
            name: "FSH (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 6,
            name: "Facioscapulohumeral Muscular Dystrophy (FSHD) - D4Z4 repeat deletion",
            price: "2050",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 7,
            name: "Female Hormone Profile (Venous)",
            price: "222",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 8,
            name: "Leucocyte Antibody Detection Panel FEMALE",
            price: "468",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 9,
            name: "Luteinising Hormone (LH) (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 10,
            name: "Progesterone (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 11,
            name: "Recurrent Miscarriage Profile (female)",
            price: "2016",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 12,
            name: "Schistosome (Bilharzia) Antibodies",
            price: "183",
            plusPrice: "50",
            description: "Female Health Profile"
        },
        {
            id: 13,
            name: "Screening Profile 9F – Senior Female",
            price: "549",
            plusPrice: "50",
            description: "Female Health Profile"
        }
    ];


    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Well Woman Health Screening
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive female health screening with hormone, thyroid, and nutritional testing. Our nurse-led South Kensington clinic provides professional Well Woman assessments using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Well Woman Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Well Woman health screening represents a proactive approach to female healthcare, focusing on the unique physiological and hormonal needs of women throughout their lifespan. Unlike general health checks, Well Woman screens are specifically designed to assess markers most relevant to female health, including reproductive hormones, thyroid function, iron status, and bone health. Regular screening enables early detection of conditions such as polycystic ovary syndrome (PCOS), thyroid disorders, iron deficiency anaemia, and perimenopause, allowing timely intervention before symptoms become severe or complications develop.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Women face distinct health challenges across different life stages. Reproductive-age women may experience irregular menstruation, fertility concerns, or symptoms of PCOS. Women approaching or experiencing menopause often encounter hormonal fluctuations causing hot flashes, mood changes, sleep disturbances, and bone density loss. Additionally, women are at higher risk than men for certain conditions including thyroid dysfunction, osteoporosis, and iron deficiency anaemia. Comprehensive screening addresses these gender-specific health concerns through targeted biomarker analysis.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Key Components of Well Woman Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Female hormone testing forms the cornerstone of Well Woman screening. Oestrogen and progesterone levels indicate ovarian function and menstrual cycle regularity. Follicle-stimulating hormone (FSH) and luteinizing hormone (LH) provide insight into reproductive status and can diagnose conditions like PCOS or premature ovarian insufficiency. For perimenopausal women, elevated FSH levels help confirm menopausal transition. Testosterone testing may also be included, as elevated levels can indicate PCOS while low levels may contribute to decreased libido and energy.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Thyroid function assessment is crucial in Well Woman screening. Women are five to eight times more likely than men to develop thyroid disorders, including hypothyroidism and hyperthyroidism. Thyroid-stimulating hormone (TSH) serves as the primary screening marker, with free T4 and free T3 providing additional diagnostic information when abnormalities are detected. Thyroid dysfunction can cause irregular periods, weight changes, fatigue, mood disturbances, and fertility problems, making early detection essential.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Iron Status and Anaemia Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Iron deficiency anaemia is significantly more common in women than men, primarily due to menstrual blood loss and increased requirements during pregnancy. Well Woman screening includes full blood count (FBC) to assess haemoglobin levels, along with ferritin measurement to evaluate iron stores. Even in the absence of frank anaemia, low ferritin can cause fatigue, cognitive impairment, hair loss, and restless legs syndrome. Early detection allows iron supplementation before anaemia develops, preventing progressive symptoms and improving quality of life.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Vitamin D and Bone Health
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Vitamin D deficiency is prevalent in the UK, particularly among women, and has implications for bone health, immune function, and mood regulation. Women are at higher risk of osteoporosis, especially post-menopause when oestrogen decline accelerates bone loss. Vitamin D testing identifies deficiency, allowing supplementation to optimize bone health and reduce fracture risk. Calcium levels may also be assessed as part of comprehensive bone health evaluation.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Metabolic and Cardiovascular Risk Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Well Woman screening often includes metabolic markers such as fasting glucose and HbA1c to screen for diabetes and prediabetes, conditions that become more common with age. Lipid profiles (cholesterol, HDL, LDL, triglycerides) assess cardiovascular risk, which increases significantly in women after menopause due to the loss of oestrogen's protective cardiovascular effects. Early identification of metabolic abnormalities enables lifestyle interventions and medical management to reduce disease risk.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Interpreting Results and Follow-Up
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Well Woman screening provides comprehensive data about your current health status. Results should be reviewed with your GP or a specialist in women's health who can interpret findings in the context of your symptoms, medical history, and life stage. Abnormal results may require further investigation, repeat testing, or initiation of treatment. For example, thyroid dysfunction may necessitate medication, while hormone imbalances might benefit from lifestyle modifications or hormone therapy. Regular monitoring through repeat screening allows tracking of treatment response and disease progression.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Importance of Preventive Healthcare
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Preventive health screening empowers women to take control of their health proactively rather than reactively. Many conditions affecting women, from thyroid disease to vitamin deficiencies, develop gradually and may not cause obvious symptoms until significantly advanced. Regular Well Woman screening establishes baseline values, detects subtle changes over time, and identifies problems at their earliest, most treatable stages. This proactive approach optimizes long-term health outcomes and quality of life.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Well Woman Health Checks
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {wellWomanTests.map((item) => (
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