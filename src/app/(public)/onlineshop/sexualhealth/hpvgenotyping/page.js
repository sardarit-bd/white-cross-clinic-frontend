
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {

    const hepatitisTests = [
        {
            id: 1,
            name: "HPV swab (28 individually typed LR & HR DNA subtypes)",
            price: "133",
            plusPrice: "0",
            description: "PCR Genotyping"
        }
    ];


    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        HPV Testing
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Confidential Human Papillomavirus screening with high-risk strain detection. Our South Kensington clinic provides professional HPV genotyping using UKAS-accredited laboratory PCR technology.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Human Papillomavirus (HPV)
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Human Papillomavirus (HPV) encompasses over 100 related viral strains, with approximately 40 types affecting the genital area. HPV is extraordinarily common—most sexually active individuals will contract at least one strain during their lifetime. While the majority of HPV infections are transient and asymptomatic, persistent infection with high-risk oncogenic strains can lead to significant health consequences including cervical, anal, oropharyngeal, and other cancers.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        HPV transmission occurs through skin-to-skin contact during sexual activity. Importantly, condoms reduce but do not eliminate transmission risk, as HPV can infect areas not covered by barrier protection. This widespread transmission potential, combined with the frequently asymptomatic nature of infection, makes screening an essential component of sexual health maintenance.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        High-Risk vs. Low-Risk HPV Strains
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        HPV strains are categorized as high-risk or low-risk based on their oncogenic potential. High-risk strains, particularly HPV 16 and 18, are responsible for approximately 70% of cervical cancers worldwide. Other high-risk strains include types 31, 33, 45, 52, and 58. Low-risk strains, such as HPV 6 and 11, typically cause benign genital warts but are not associated with cancer development. Genotyping allows precise identification of which strains are present, enabling appropriate clinical follow-up.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Role of HPV in Cancer Development
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Persistent high-risk HPV infection can cause cellular changes that, over time, may progress to precancerous lesions and ultimately invasive cancer. This process typically takes years to decades, providing a crucial window for detection and intervention. Regular HPV screening, particularly in combination with cervical cytology, allows identification of high-risk infections before malignant transformation occurs. Early detection of precancerous changes enables simple outpatient procedures that prevent cancer development.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Testing Process and Timeline
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Hepatitis screening requires a simple blood sample collected by our registered nurse via venepuncture. The sample is processed at our UKAS-accredited laboratory partner using advanced serological and molecular techniques. Results are typically available from 24-48 hours and delivered securely via encrypted email, ensuring complete confidentiality.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        HPV Testing Methodology
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Our HPV testing utilizes PCR (Polymerase Chain Reaction) technology to detect viral DNA with exceptional sensitivity. Samples are collected via swab from the cervix or anal canal, depending on risk factors and exposure sites. The laboratory analysis identifies the presence of HPV and, through genotyping, determines the specific strains present. This comprehensive approach provides detailed information about infection status and cancer risk stratification.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Clinical Management and Follow-Up
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        If HPV testing reveals high-risk strain infection, appropriate follow-up is essential. Your GP or a gynaecology specialist will recommend surveillance protocols, which may include repeat testing or colposcopy to examine cervical tissue directly. Most HPV infections, even with high-risk strains, clear spontaneously through immune response. Persistent infections require closer monitoring to detect any cellular abnormalities early, when treatment is most effective and least invasive.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Tests
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        HPV Testing Options
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