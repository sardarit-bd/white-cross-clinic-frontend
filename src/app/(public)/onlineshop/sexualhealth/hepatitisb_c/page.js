
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {

    const hepatitisTests = [
        {
            id: 1,
            name: "Hepatitis (Acute) Screen",
            price: "211",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 2,
            name: "Hepatitis A Profile",
            price: "98",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 3,
            name: "Hepatitis A, B & C Profile",
            price: "346",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 4,
            name: "Hepatitis B (PCR) Genotype",
            price: "645",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 5,
            name: "Hepatitis B Core Antibody – IgM",
            price: "66",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 6,
            name: "Hepatitis B Core Antibody – Total",
            price: "66",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 7,
            name: "Hepatitis B DNA (Viral load)",
            price: "329",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 8,
            name: "Hepatitis B Immunity (IgG) (Venous)",
            price: "62",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 9,
            name: "Hepatitis B Profile",
            price: "158",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 10,
            name: "Hepatitis B Resistant Mutation",
            price: "414",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 11,
            name: "Hepatitis B Surface Antigen (Venous)",
            price: "60",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 12,
            name: "Hepatitis B ‘e’ Antigen and Antibody",
            price: "142",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 13,
            name: "Hepatitis C Antibodies (Venous)",
            price: "121",
            plusPrice: "50",
            description: "Confidential Diagnostic"
        },
        {
            id: 14,
            name: "Hepatitis C Antigen (Early detection) (Venous)",
            price: "75",
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
                        Hepatitis B & C Testing
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Confidential blood testing for Hepatitis B and C with rapid results. Our nurse-led South Kensington clinic provides comprehensive viral hepatitis screening using UKAS-accredited laboratory services.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Viral Hepatitis
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Viral hepatitis refers to liver inflammation caused by viral infection. Hepatitis B and C are the most clinically significant forms, capable of causing chronic infection that can lead to cirrhosis, liver failure, and hepatocellular carcinoma. Early detection through screening allows for timely intervention and significantly improves long-term outcomes.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hepatitis B virus (HBV) is transmitted through contact with infected blood, semen, or other bodily fluids. It can be acute or chronic. While many adults clear acute infection naturally, approximately 5-10% develop chronic Hepatitis B, which requires ongoing monitoring and potentially antiviral therapy. Vaccination is available and highly effective at preventing Hepatitis B infection.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Hepatitis C: A Silent Epidemic
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hepatitis C virus (HCV) is primarily transmitted through blood-to-blood contact, most commonly via needle sharing, though sexual transmission can occur. Unlike Hepatitis B, Hepatitis C frequently becomes chronic—approximately 75-85% of infected individuals develop chronic infection. However, modern direct-acting antiviral medications can cure over 95% of chronic Hepatitis C cases, making early detection crucial.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Importance of Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Both Hepatitis B and C can remain asymptomatic for decades while causing progressive liver damage. Routine screening is the only reliable method of detection before complications arise. Our blood tests detect viral antigens, antibodies, and in some cases viral load, providing comprehensive assessment of infection status. Individuals at elevated risk should consider regular screening as part of their health maintenance.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Testing Process and Timeline
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hepatitis screening requires a simple blood sample collected by our registered nurse via venepuncture. The sample is processed at our UKAS-accredited laboratory partner using advanced serological and molecular techniques. Results are typically available from 24-48 hours and delivered securely via encrypted email, ensuring complete confidentiality.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Treatment and Management
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        If you test positive for Hepatitis B or C, immediate specialist consultation is essential. Your GP or a hepatology specialist can arrange further testing, including viral load quantification and liver function assessment. Treatment options have advanced significantly in recent years. Hepatitis C is now curable with direct-acting antivirals, while Hepatitis B can be effectively managed with antiviral medications to prevent disease progression.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Tests
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Hepatitis Testing Options
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {hepatitisTests.map((item) => (
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