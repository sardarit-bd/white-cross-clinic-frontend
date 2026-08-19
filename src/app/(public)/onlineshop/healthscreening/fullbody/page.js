
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {
    const tests = [
        {
            id: 1,
            name: "Basic Full Body MOT",
            tag: "",
            price: "349",
            description: "",
            option: [
                "Full Blood Count",
                "Kidney Function",
                "Liver Function",
                "Bone Markers",
                "Metabolic",
                "Lipid Profile",
                "Iron Studies",
                "Thyroid Function",
            ]
        },
        {
            id: 2,
            name: "Advanced Full Body MOT",
            tag: "Most Popular",
            price: "449",
            description: "",
            option: [
                "Full Blood Count",
                "Kidney Function",
                "Liver Function",
                "Bone Markers",
                "Metabolic",
                "Lipid Profile",
                "Iron Studies",
                "Thyroid Function",
                "Vitamins",
            ]
        },
        {
            id: 3,
            name: "Platinum Full Body MOT – Men",
            tag: "",
            price: "549",
            description: "",
            option: [
                "Full Blood Count",
                "Kidney Function",
                "Liver Function",
                "Bone Markers",
                "Metabolic",
                "Lipid Profile",
                "Iron Studies",
                "Thyroid Function",
                "Vitamins",
                "Male Cancer & Cardiac Markers"
            ]
        },
        {
            id: 4,
            name: "Platinum Full Body MOT – Women",
            tag: "",
            price: "549",
            description: "",
            option: [
                "Full Blood Count",
                "Kidney Function",
                "Liver Function",
                "Bone Markers",
                "Metabolic",
                "Lipid Profile",
                "Iron Studies",
                "Thyroid Function",
                "Vitamins",
                "Female Cancer & Cardiac Markers"

            ]
        }
    ];




    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Private Full Body Health Screening
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive Full Body MOTs and Wellness Assessments. From biomarker analysis to clinical nursing reviews in South Kensington.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        The Value of Health Screening
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Preventative health screening is the cornerstone of modern proactive wellness. In the United Kingdom, many chronic conditions like cardiovascular disease, diabetes, and metabolic disorders remain asymptomatic until they reach an advanced stage. Our nurse-led health screening facility in South Kensington provides a comprehensive clinical alternative to long GP waiting lists, offering detailed biomarker analysis that maps your current health status with precision.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        We utilize UKAS-accredited laboratory partners to process all diagnostic samples. This ensures that every MOT—from our Essential Wellness check to our Elite Performance screen—meets the highest clinical standards of accuracy and reliability.
                    </p>



                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        What is Included in an MOT?
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        A typical Health MOT includes a series of specific biomarker panels. Biochemical profiles evaluate kidney and liver function, while Lipid panels map your cardiovascular risk. For more comprehensive screens, we include hormonal analysis (Testosterone, Thyroid, Oestradiol), vitamin levels (D, B12, Folate), and inflammatory markers like CRP. Every result is delivered via a secure digital report, providing you with the data needed to make informed lifestyle or clinical decisions.
                    </p>



                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Preventative Medicine
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Full Body MOT Packages
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {tests.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e4e4e4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brandColor)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] bg-blue-100/30 ${item.tag && "border-[var(--brandColor)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] bg-blue-100/30 -translate-y-1 border-[var(--brandColor)] "}`}
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

                                {
                                    item.tag && <span className="bg-[var(--brandColor)] px-2 py-1 text-white rounded">{item.tag}</span>
                                }
                            </p>

                            {/* Divider */}
                            <div className="my-5 border-t border-[#eeeeee]" />


                            {
                                item?.option?.length > 0 && (
                                    <div className="text-center">
                                        <ul className="mt-1 text-[14px] font-bold text-[#666666]">
                                            {item.option.map((option) => (
                                                <li className="mb-2" key={option}>{option}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            }



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