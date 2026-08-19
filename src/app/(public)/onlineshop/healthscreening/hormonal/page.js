
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {



    const hormonalAnalysisTests = [
        {
            id: 1,
            name: "Male Hormonal Health Screening",
            price: "299",
            plusPrice: "0",
            description: "Hormone Profile"
        },
        {
            id: 2,
            name: "Female Hormonal Health Screening",
            price: "249",
            plusPrice: "0",
            description: "Hormone Profile"
        },
        {
            id: 3,
            name: "17 Hydroxyprogesterone",
            price: "187",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 4,
            name: "Antimullerian Hormone (AMH) (Venous)",
            price: "200",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 5,
            name: "Bilharzia (Schistosome) Antibody Screen",
            price: "183",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 6,
            name: "Bilharzia (Urine)",
            price: "84",
            plusPrice: "0",
            description: "Hormone Profile"
        },
        {
            id: 7,
            name: "Dihydrotestosterone",
            price: "205",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 8,
            name: "FSH (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 9,
            name: "Facioscapulohumeral Muscular Dystrophy (FSHD) - D4Z4 repeat deletion",
            price: "2050",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 10,
            name: "Familial Medullary Thyroid Carcinoma - hotspot sequencing RET gene",
            price: "1170",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 11,
            name: "Female Hormone Profile (Venous)",
            price: "222",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 12,
            name: "Growth Hormone (Fasting)",
            price: "121",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 13,
            name: "Hyperparathyroidism - CASR sequencing",
            price: "1250",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 14,
            name: "Luteinising Hormone (LH) (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 15,
            name: "Macroprolactin",
            price: "348",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 16,
            name: "Male Hormone Profile",
            price: "261",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 17,
            name: "Menopause Profile (Venous)",
            price: "222",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 18,
            name: "Parathyroid Antibodies",
            price: "163",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 19,
            name: "Parathyroid Hormone (Whole)",
            price: "194",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 20,
            name: "Progesterone (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 21,
            name: "Prolactin (Macro)",
            price: "348",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 22,
            name: "Prolactin (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 23,
            name: "Schistosome (Bilharzia) Antibodies",
            price: "183",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 24,
            name: "Sex Hormone Binding Globulin (Venous)",
            price: "125",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 25,
            name: "TSH (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 26,
            name: "TSH-Receptor Antibodies",
            price: "240",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 27,
            name: "Testosterone (Free) (Venous)",
            price: "179",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 28,
            name: "Testosterone (Total), LC MS Mass Spec",
            price: "179",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 29,
            name: "Testosterone (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 30,
            name: "Thyroid Abs (Thyroglobulin + Thyroid Peroxidase Abs) (Venous)",
            price: "155",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 31,
            name: "Thyroid Cancer NGS Panel",
            price: "1810",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 32,
            name: "Thyroid Peroxidase Antibodies/Anti TPO",
            price: "114",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 33,
            name: "Thyroid Profile 1 (FT4/TSH) (Venous)",
            price: "138",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 34,
            name: "Thyroid Profile 2 (Venous)",
            price: "259",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 35,
            name: "Thyroid Profile 3 (FT3/FT4/TSH) (Venous)",
            price: "175",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 36,
            name: "Total Testosterone, LC MS Mass Spec",
            price: "179",
            plusPrice: "50",
            description: "Hormone Profile"
        },
        {
            id: 37,
            name: "Urine Steroid Screen (Steroid Hormones)",
            price: "967",
            plusPrice: "0",
            description: "Hormone Profile"
        }
    ];




    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Hormonal Analysis
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive hormone testing for PCOS, testosterone deficiency, menopause, and thyroid disorders. Our nurse-led South Kensington clinic provides professional hormonal assessments using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Hormonal Health
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hormones are chemical messengers that regulate virtually every physiological process—metabolism, growth, reproduction, mood, sleep, immune function, and stress response. The endocrine system consists of multiple glands (pituitary, thyroid, adrenals, ovaries, testes, pancreas) that secrete hormones into the bloodstream, traveling to target tissues where they bind receptors and trigger biological responses. Hormonal balance is essential for optimal health, while hormonal imbalances can cause diverse symptoms affecting physical, emotional, and reproductive wellbeing.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hormonal disorders are remarkably common. Thyroid dysfunction affects approximately 2-3% of the UK population, polycystic ovary syndrome (PCOS) affects 8-13% of reproductive-age women, and testosterone deficiency occurs in 2-6% of men. Menopause represents a natural hormonal transition affecting all women, often causing significant symptoms requiring management. Hormonal analysis through blood testing enables accurate diagnosis of these conditions, distinguishing between primary glandular failure, secondary pituitary dysfunction, and physiological variations. Early diagnosis and appropriate treatment substantially improve quality of life and prevent long-term complications.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Female Reproductive Hormones
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The menstrual cycle is orchestrated by dynamic interactions between the hypothalamus, pituitary gland, and ovaries. Gonadotropin-releasing hormone (GnRH) from the hypothalamus stimulates pituitary secretion of follicle-stimulating hormone (FSH) and luteinizing hormone (LH). FSH promotes follicular development and oestrogen production, while LH triggers ovulation and stimulates progesterone secretion from the corpus luteum. Oestrogen and progesterone exert feedback regulation on the hypothalamic-pituitary axis, creating the cyclical hormonal patterns that characterize normal menstrual function.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Disruption of this intricate hormonal orchestra causes menstrual irregularities, anovulation, and infertility. Hormonal analysis measures FSH, LH, oestradiol (E2), progesterone, and prolactin at specific cycle phases to diagnose conditions like PCOS, primary ovarian insufficiency, hyperprolactinemia, and luteal phase defects. Elevated prolactin inhibits GnRH secretion, causing amenorrhea and galactorrhea. Premature ovarian insufficiency (early menopause) presents with elevated FSH and low oestradiol before age 40. These diagnoses have important implications for fertility preservation and long-term health management.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Polycystic Ovary Syndrome (PCOS)
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        PCOS is the most common endocrine disorder in reproductive-age women, characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology. The underlying pathophysiology involves insulin resistance and compensatory hyperinsulinemia, which stimulates ovarian and adrenal androgen production. Elevated androgens (testosterone, androstenedione, DHEA-S) disrupt normal follicular development, causing anovulation, irregular periods, and multiple small ovarian cysts. Clinical manifestations include oligomenorrhea or amenorrhea, hirsutism, acne, male-pattern baldness, obesity, and infertility.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        PCOS diagnosis requires two of three Rotterdam criteria: oligo-ovulation or anovulation (irregular cycles), clinical or biochemical hyperandrogenism (hirsutism, acne, or elevated testosterone), and polycystic ovaries on ultrasound. Hormonal testing measures total testosterone, free testosterone (calculated from testosterone and SHBG), DHEA-S, LH, FSH, and often insulin and glucose to assess metabolic dysfunction. The LH:FSH ratio is often elevated in PCOS (above 2:1), though this is neither sensitive nor specific. PCOS has significant long-term health implications, increasing risk of type 2 diabetes, cardiovascular disease, endometrial cancer, and non-alcoholic fatty liver disease, necessitating lifelong management.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Male Hormones and Testosterone Deficiency
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Testosterone is the principal male sex hormone, essential for spermatogenesis, libido, erectile function, muscle mass, bone density, fat distribution, red blood cell production, and cognitive function. Testosterone production declines progressively with age, typically by 1-2% annually after age 30, though substantial individual variation exists. Hypogonadism (testosterone deficiency) causes fatigue, reduced libido, erectile dysfunction, decreased muscle mass, increased body fat, mood disturbances, cognitive impairment, osteoporosis, and reduced quality of life.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Testosterone testing measures total testosterone and sex hormone-binding globulin (SHBG), from which free testosterone—the biologically active fraction—can be calculated. Samples should be collected in the morning (before 10 AM) when testosterone levels peak. Total testosterone below 12 nmol/L with symptoms suggests hypogonadism, while levels below 8 nmol/L definitively diagnose deficiency. LH and FSH distinguish primary testicular failure (elevated gonadotropins) from secondary hypogonadism due to pituitary or hypothalamic dysfunction (low or normal gonadotropins). Prolactin should also be measured as hyperprolactinemia causes hypogonadism. Testosterone replacement therapy, administered as injections, gels, or patches, effectively treats symptomatic hypogonadism under specialist supervision.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Menopause and Perimenopause
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Menopause, defined as permanent cessation of menstruation for 12 consecutive months, occurs at a median age of 51. The menopausal transition (perimenopause) typically begins in the mid-40s, characterized by fluctuating oestrogen and progesterone levels causing irregular cycles, vasomotor symptoms (hot flashes, night sweats), mood changes, sleep disturbances, vaginal dryness, and cognitive changes. As ovarian follicular reserve depletes, FSH levels rise progressively while oestradiol declines. Menopause is diagnosed clinically in women over 45 with typical symptoms; hormonal testing is generally unnecessary unless premature ovarian insufficiency is suspected.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        For symptomatic women under 45 or those with diagnostic uncertainty, hormonal assessment measures FSH, LH, and oestradiol. Persistently elevated FSH (above 30 IU/L on two occasions at least 4 weeks apart) with low oestradiol confirms menopausal status. However, during perimenopause, hormone levels fluctuate substantially, making interpretation challenging. Anti-Müllerian hormone (AMH), produced by ovarian follicles, reflects ovarian reserve and can help predict time to menopause, though it is not routinely recommended for menopausal diagnosis. Hormone replacement therapy (HRT) effectively alleviates menopausal symptoms and prevents bone loss, with benefits typically outweighing risks for most women under 60 or within 10 years of menopause.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Thyroid Function Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Thyroid hormones regulate metabolism, energy production, heart rate, body temperature, and growth. The hypothalamic-pituitary-thyroid axis maintains thyroid hormone homeostasis: thyrotropin-releasing hormone (TRH) stimulates TSH secretion, which stimulates thyroid production of thyroxine (T4) and triiodothyronine (T3). T4 is a prohormone converted peripherally to T3, the metabolically active form. Thyroid dysfunction is significantly more common in women than men, with hypothyroidism causing fatigue, weight gain, cold intolerance, constipation, depression, and cognitive slowing, while hyperthyroidism causes weight loss, heat intolerance, palpitations, anxiety, and tremor.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Thyroid-stimulating hormone (TSH) is the primary screening test, with normal range typically 0.4-4.0 mIU/L. Elevated TSH with low free T4 indicates primary hypothyroidism (thyroid gland failure), most commonly due to autoimmune thyroiditis (Hashimoto's disease). Suppressed TSH with elevated free T4 and/or free T3 indicates hyperthyroidism, often caused by Graves' disease or toxic nodular goiter. Subclinical thyroid dysfunction (abnormal TSH with normal free T4) is common and controversial; treatment decisions depend on symptom severity, TSH degree of elevation, and presence of thyroid antibodies (anti-TPO, anti-thyroglobulin). Thyroid dysfunction profoundly affects quality of life but responds excellently to treatment—levothyroxine for hypothyroidism, anti-thyroid drugs or radioiodine for hyperthyroidism.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Adrenal Hormones and Cortisol
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The adrenal glands produce cortisol (the primary glucocorticoid), DHEA and DHEA-S (weak androgens), and aldosterone (mineralocorticoid). Cortisol regulates glucose metabolism, immune function, blood pressure, and stress response, following a diurnal rhythm with peak levels in the early morning and nadir at midnight. Chronic stress, Cushing's syndrome, or adrenal insufficiency (Addison's disease) disrupt cortisol homeostasis. While "adrenal fatigue" is not a recognized medical diagnosis, cortisol dysregulation can occur in various conditions. Morning cortisol measurement screens for adrenal insufficiency, while 24-hour urinary free cortisol or late-night salivary cortisol screens for Cushing's syndrome. DHEA-S reflects adrenal androgen production and declines with age.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        When to Seek Hormonal Assessment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hormonal testing is warranted for menstrual irregularities, fertility concerns, symptoms of androgen excess (hirsutism, acne), menopausal symptoms, fatigue, unexplained weight changes, mood disturbances, reduced libido, erectile dysfunction, or clinical signs of thyroid dysfunction. For women trying to conceive, hormonal assessment provides essential information about ovarian reserve and ovulatory function. For individuals with metabolic syndrome or PCOS, hormonal testing guides treatment and monitors response. Results should be interpreted by healthcare professionals experienced in endocrinology or reproductive medicine, as hormone levels must be contextualized with clinical presentation and timing of measurement.
                    </p>


                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Hormonal Analysis Tests
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {hormonalAnalysisTests.map((item) => (
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