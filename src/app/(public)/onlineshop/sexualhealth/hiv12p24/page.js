
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {

    const hivTests = [
        {
            id: 1,
            name: "HIV 1 & 2/p24Ag (Venous)",
            price: "66",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 2,
            name: "HIV Confirmation of Positive Screens (3 methodologies)",
            price: "159",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 3,
            name: "HIV Rapid RNA HIV-1 QUALITATIVE",
            price: "211",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 4,
            name: "HIV Rapid RNA HIV-1 QUANTITATIVE",
            price: "211",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 5,
            name: "HIV Screening: HIV1 & 2 Abs/p24 Ag (4th Gen)",
            price: "66",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 6,
            name: "HIV-1 Genotypic Resistance (RT & Protease)",
            price: "779",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 7,
            name: "HIV-1 Proviral DNA",
            price: "496",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 8,
            name: "HIV-1 RNA Viral Load by PCR",
            price: "211",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 9,
            name: "HIV-2 RNA by PCR",
            price: "408",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 10,
            name: "HIV/HBV/HCV (Early detection by PCR/NAAT) with Syphilis",
            price: "257",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 11,
            name: "HIV/HBV/HCV Screen by PCR/NAAT (10 days post exposure)",
            price: "230",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 12,
            name: "Rapid Xpert HIV-1 RNA Qualitative – Early Detection from 10 days",
            price: "211",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 13,
            name: "Rapid Xpert HIV-1 RNS Viral Load – Rapid Testing for HIV-Positive Patient Prognosis and Response To Antiretroviral Therapy",
            price: "211",
            plusPrice: "50",
            description: "Confidential Testing"
        },
        {
            id: 14,
            name: "STD6 Serology only without HIV",
            price: "163",
            plusPrice: "50",
            description: "Confidential Testing"
        }
    ];


    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Private HIV Testing
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Confidential HIV 1&2 p24 antigen/antibody testing with results from 24-48 hours. Our nurse-led clinic in South Kensington provides discreet, professional HIV screening using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding HIV Testing
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Human Immunodeficiency Virus (HIV) is a serious infection that attacks the immune system. Early detection is crucial for effective treatment and preventing transmission. Our private HIV testing service in London provides rapid, accurate results using the latest 4th generation diagnostic technology.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Fourth generation HIV tests represent a significant advancement in sexual health screening. Unlike older antibody-only tests, 4th generation assays detect both HIV antibodies produced by your immune system and the p24 antigen—a protein that appears in the blood during early HIV infection. This dual detection significantly reduces the window period, allowing earlier diagnosis.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Window Period Explained
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The window period is the time between potential HIV exposure and when a test can reliably detect the infection. With 4th generation tests, this window is approximately 18-28 days, though we recommend testing at 28 days for optimal accuracy. A conclusive negative result requires testing at 90 days post-exposure. This is significantly shorter than the 3-month window period required by older antibody-only tests.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        What to Expect During Your Visit
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        HIV testing requires a simple blood sample collected via venepuncture by our registered nurse. The procedure takes less than 5 minutes and samples are immediately sent to our UKAS-accredited partner laboratory. Results are typically available from 24-48 hours and delivered securely via encrypted email. All testing is conducted with complete confidentiality—your results remain strictly private unless you choose to share them.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Why Choose Professional HIV Testing?
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        While home testing kits are available, professional laboratory-based HIV testing offers superior accuracy and reliability. Our venous blood samples provide optimal specimen quality, and UKAS-accredited laboratory processing ensures results meet the highest clinical standards. Additionally, our nurse-led service provides a supportive environment where you can ask questions and receive professional guidance.
                    </p>


                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Tests
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        HIV Testing Options
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {hivTests.map((item) => (
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