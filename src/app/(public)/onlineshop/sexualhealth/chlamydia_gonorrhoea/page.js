
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const chlamydiaGonorrhoeaTests = [
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
            name: "Gonorrhoea Culture – Other site",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 15,
            name: "Gonorrhoea Culture – Rectal",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 16,
            name: "Gonorrhoea Culture – Throat",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 17,
            name: "Gonorrhoea Culture – Urethral",
            price: "93",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 18,
            name: "Gonorrhoea – PCR swab",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 19,
            name: "Gonorrhoea – Urine",
            price: "91",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 20,
            name: "N. gonorrhoea",
            price: "106",
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
                        Chlamydia & Gonorrhoea Testing
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Private PCR testing for Chlamydia and Gonorrhoea with confidential results. Our South Kensington clinic provides professional sexual health screening using UKAS-accredited laboratory technology.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Chlamydia and Gonorrhoea
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Chlamydia and Gonorrhoea are the two most common bacterial sexually transmitted infections in the United Kingdom. Both infections can have serious health consequences if left untreated, including pelvic inflammatory disease, infertility, and increased risk of HIV transmission. Early detection through regular screening is essential for maintaining sexual health.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Chlamydia trachomatis is a bacterial infection that affects both men and women. It is particularly prevalent in individuals under 25 years of age. The infection often presents with no symptoms, making routine screening vital for early detection. When symptoms do occur, they may include unusual discharge, burning during urination, or pelvic pain.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Gonorrhoea: The Facts
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Neisseria gonorrhoeae, commonly known as Gonorrhoea, is a bacterial infection that can affect the genitals, rectum, and throat. Like Chlamydia, it frequently presents without symptoms. Untreated Gonorrhoea can lead to serious complications including epididymitis in men and pelvic inflammatory disease in women, both of which can result in infertility.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Why PCR Testing is Superior
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        PCR (Polymerase Chain Reaction) testing represents the recommended method for bacterial STI detection. This molecular technique amplifies bacterial DNA, allowing detection even when bacterial counts are extremely low. PCR testing offers significantly higher sensitivity than traditional culture methods, reducing false negative results and ensuring accurate diagnosis. Our UKAS-accredited laboratory partners use the latest PCR technology to deliver reliable results.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Sample Collection Process
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Testing for Chlamydia and Gonorrhoea is straightforward and minimally invasive. Most commonly, a first-catch urine sample is collected, which means providing a small amount of urine when you first urinate. Alternatively, depending on potential exposure sites, swab samples may be taken. Our registered nurse will guide you through the process and ensure your comfort throughout the procedure.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Treatment and Follow-Up
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Both Chlamydia and Gonorrhoea are highly treatable with antibiotics. If your test returns positive, you must contact your GP or an NHS sexual health clinic for prescription treatment. It is crucial to complete the full course of antibiotics and abstain from sexual activity until treatment is completed to prevent reinfection and transmission to partners.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Tests
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Chlamydia & Gonorrhoea Testing Options
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {chlamydiaGonorrhoeaTests.map((item) => (
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