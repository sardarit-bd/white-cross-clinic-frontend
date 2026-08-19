
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {
    const tests = [
        {
            id: 1,
            name: "Chlamydia/Gonorrhoea/Trichomonas – PCR Swab",
            price: "137",
            description: "PCR Detection"
        },
        {
            id: 2,
            name: "Chlamydia/Gonorrhoea/Trichomonas – Urine",
            price: "137",
            description: "PCR Detection"
        },
        {
            id: 3,
            name: "Trichomonas vaginalis (PCR)",
            price: "106",
            description: "PCR Detection"
        },
        {
            id: 4,
            name: "Trichomonas vaginalis (TV) – Urine or Vaginal (Self-collect)",
            price: "106",
            description: "PCR Detection"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Trichomoniasis Testing
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Confidential Trichomoniasis screening using PCR technology. Our South Kensington clinic provides professional parasitic STI testing with UKAS-accredited laboratory analysis.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Trichomoniasis
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Trichomoniasis is a sexually transmitted infection caused by the parasitic protozoan Trichomonas vaginalis. Despite being one of the most prevalent non-viral STIs globally, affecting an estimated 156 million people annually, Trichomoniasis often receives less attention than bacterial or viral infections. This parasitic infection is highly treatable but can cause significant morbidity if left undiagnosed and untreated.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Trichomonas vaginalis is a flagellated parasite that primarily inhabits the urogenital tract. In women, the organism typically colonizes the vagina and urethra, while in men it affects the urethra and potentially the prostate. Transmission occurs through sexual contact, with the parasite passing between partners during unprotected intercourse. Unlike many STIs, Trichomoniasis cannot survive on surfaces, so transmission is exclusively through direct sexual contact.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-10">
                        Clinical Presentation and Symptoms
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Approximately 70% of infected individuals experience no symptoms, making Trichomoniasis a predominantly asymptomatic infection. This high rate of asymptomatic carriage facilitates ongoing transmission and highlights the importance of routine screening for sexually active individuals. When symptoms do manifest, they typically appear within 5-28 days of exposure, though this can vary considerably.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        In symptomatic women, Trichomoniasis commonly presents with increased vaginal discharge that is characteristically frothy, yellow-green in color, and malodorous. Vaginal irritation, vulvar itching, dysuria (painful urination), and dyspareunia (painful intercourse) are also frequent complaints. Men, when symptomatic, may experience urethral discharge, irritation within the penis, burning sensation after urination or ejaculation, though symptoms in males are generally milder and more transient.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-10">
                        Treatment and Management
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Trichomoniasis responds excellently to antiprotozoal medication, typically metronidazole or tinidazole administered as a single large dose or a week-long course. Cure rates exceed 95% with appropriate treatment. Crucially, all sexual partners must be tested and treated simultaneously, even if asymptomatic, to prevent the cycle of reinfection known as "ping-pong" infection. Abstinence from sexual activity is recommended until both partners complete treatment and symptoms resolve.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)] mt-10">
                        Complications of Untreated Infection
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Untreated Trichomoniasis carries several health risks beyond immediate discomfort. The infection increases susceptibility to HIV acquisition by causing genital inflammation and epithelial damage. In pregnant women, Trichomoniasis is associated with adverse pregnancy outcomes including preterm delivery, premature rupture of membranes, and low birth weight infants. The infection may also increase risk of cervical cancer and facilitate transmission of other sexually transmitted pathogens. These potential complications underscore the importance of screening, early detection, and prompt treatment.
                    </p>
                </div>







                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Tests
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Trichomoniasis Testing Options
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {tests.map((item) => (
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