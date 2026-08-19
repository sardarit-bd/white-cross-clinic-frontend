
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const herpesTests = [
        {
            id: 1,
            name: "Herpes Simplex (HSV) 1 & 2 (PCR) (Oral or Genital)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 2,
            name: "Herpes Simplex (HSV) 1 & 2 – Genital lesion (Self-collect)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 3,
            name: "Herpes Simplex (HSV) 1 & 2 – Oral lesion (Self-collect)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 4,
            name: "Herpes Simplex I/II Antibody Profile (IgG)",
            price: "91",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 5,
            name: "Herpes Simplex I/II IgM",
            price: "91",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 6,
            name: "Herpes Simplex I/II by PCR (Urine)",
            price: "106",
            plusPrice: "0",
            description: "Confidential Diagnostic"
        },
        {
            id: 7,
            name: "Human Herpes Virus – 6 by PCR",
            price: "208",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 8,
            name: "Human Herpes Virus – 8 (IgG)",
            price: "119",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 9,
            name: "Human Herpes Virus – 8 by PCR",
            price: "235",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        }
    ];



    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Genital Herpes Testing
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Confidential Herpes Simplex Virus screening with blood and swab testing options. Our South Kensington clinic provides professional HSV-1 and HSV-2 testing using UKAS-accredited laboratory services.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Genital Herpes
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Genital Herpes is a chronic viral infection caused by Herpes Simplex Virus (HSV), existing in two distinct types: HSV-1 and HSV-2. While historically HSV-1 was associated primarily with oral herpes (cold sores) and HSV-2 with genital herpes, this distinction has become less clear in recent decades. Oral-genital sexual contact has led to HSV-1 becoming an increasingly common cause of genital herpes, particularly in younger populations.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Herpes is remarkably prevalent globally. The World Health Organization estimates that approximately 3.7 billion people under age 50 have HSV-1 infection, while 491 million people aged 15-49 have HSV-2. Many infected individuals remain unaware of their status due to mild or absent symptoms. This high rate of asymptomatic infection facilitates ongoing transmission and underscores the importance of screening for sexually active individuals.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Transmission and Risk Factors
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        HSV transmission occurs through direct contact with infected skin or mucous membranes, typically during sexual activity. Crucially, transmission can occur even when no visible lesions are present, through a process called asymptomatic viral shedding. The virus periodically reactivates and is shed from the skin surface without causing noticeable symptoms, making prevention challenging. Condoms reduce but do not eliminate transmission risk, as Herpes can infect areas not covered by barrier protection.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Diagnostic Approaches
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Herpes diagnosis utilizes two complementary testing strategies. Serological testing (blood tests) detects HSV-specific antibodies, indicating previous exposure and infection. Type-specific serology can distinguish between HSV-1 and HSV-2 antibodies. However, antibody tests cannot determine the infection site (oral vs. genital) or current infectivity status. Direct viral detection through PCR swab testing of active lesions provides definitive diagnosis during outbreaks and confirms which virus type is causing symptoms.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Management and Treatment
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        While Herpes cannot be cured, effective management is available. Antiviral medications such as aciclovir, valaciclovir, and famciclovir can be used episodically to treat outbreaks or taken daily as suppressive therapy to reduce outbreak frequency and transmission risk. Suppressive therapy can reduce transmission to uninfected partners by approximately 50%. Your GP or sexual health specialist will advise on the most appropriate treatment strategy based on outbreak frequency and individual circumstances.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Psychological and Social Considerations
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        A Herpes diagnosis can carry significant psychological burden due to social stigma and concerns about transmission. It is important to understand that Herpes is an extremely common condition affecting a substantial proportion of the sexually active population. With appropriate management, disclosure practices, and precautions, individuals with Herpes can maintain healthy sexual relationships and normal quality of life. Professional counseling and support groups are available if needed.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Tests
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Herpes Testing Options
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {herpesTests.map((item) => (
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