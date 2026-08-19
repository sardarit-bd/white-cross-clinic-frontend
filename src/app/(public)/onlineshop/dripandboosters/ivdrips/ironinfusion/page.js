import React from "react";
import { FiCalendar, FiChevronRight, FiMapPin } from "react-icons/fi";

const Page = () => {
    const locations = [
        "North East, Gateshead Clinic",
        "Be Superhuman",
        "E-Pulse Studios Peterborough",
        "Pinewood Studios",
        "North East, Whitley Bay",
        "Home Visit",
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-[1040px] px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Iron Infusion Treatment
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 text-[#2563b8] sm:text-[16px]">
                        Iron infusions available in clinic or at home.
                    </p>
                </div>

                {/* Price + Locations */}
                <div className="mx-auto mt-9 max-w-[720px] border border-[#d5d5d5] bg-white">

                    {/* Price */}
                    <div className="flex min-h-[56px] items-center justify-center border-b border-[#d5d5d5] px-5 text-center">
                        <p className="text-[16px] font-bold text-[#555555] sm:text-[18px]">
                            Dependent on Dosage
                        </p>
                    </div>

                    {/* Locations */}
                    <div className="px-5 py-4 sm:px-8 sm:py-5">
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
                            {locations.map((location, index) => (
                                <React.Fragment key={location}>
                                    <button
                                        type="button"
                                        className="group inline-flex items-center gap-1 text-[14px] text-[#555555] transition-colors duration-200 hover:text-[#8bc900] sm:text-[15px]"
                                    >
                                        <span>{location}</span>
                                    </button>

                                    {index !== locations.length - 1 && (
                                        <span className="hidden text-[#777777] sm:inline">
                                            |
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Book Now */}
                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex min-w-[132px] items-center justify-center gap-2 bg-[var(--brandColor)] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#79b900] hover:shadow-md active:scale-[0.98]"
                    >
                        <FiCalendar className="text-[17px]" />
                        <span>Request to Book</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="mt-8 border-t border-[#d8d8d8]" />

                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]">
                        Service Description
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        We understand that symptoms associated with low iron can vary from person to person. Assessment should not rely on symptoms alone, as tiredness, breathlessness, dizziness, palpitations and reduced exercise tolerance can have many causes. That is why we use a clinical review, blood results, medical history and ongoing monitoring to decide whether iron treatment is appropriate.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Iron deficiency is not always reflected by haemoglobin alone. Some patients may have iron deficiency with a normal haemoglobin level, often referred to as non-anaemic iron deficiency. In these cases, ferritin, which is a marker of the body’s iron stores, and other blood markers may help guide clinical decision-making alongside symptoms and medical history.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Our clinicians assess both haemoglobin and iron stores, including ferritin, where available. Treatment may aim to correct iron deficiency anaemia where present, or to replenish low iron stores where clinically appropriate. This can be particularly relevant for people with increased iron requirements or ongoing iron loss, such as heavy menstrual bleeding, but the underlying cause of iron deficiency should always be considered.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        To assess suitability for treatment, we require recent blood test results before booking. These can be obtained through your GP or another testing provider, or through our convenient home testing kits.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Once we receive your results and completed medical history form, our clinicians will review whether treatment is safe and appropriate for you. During your appointment, your clinician will review your results again, discuss your symptoms and history, and complete a consultation before any treatment is given.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The choice of medicine, dose and whether IV iron is appropriate will depend on your blood results, symptoms, medical history, previous response to oral iron, tolerance of oral iron, and any relevant clinical risks.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Appointments are available in selected clinics around the UK or through our mobile service in your home, subject to suitability and availability.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)] mt-10">
                        Cancellation Policy
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Contact us to reschedule
                    </p>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-[#d8d8d8]" />

                {/* Optional Location Cards */}
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 hidden">
                    {locations.map((location) => (
                        <button
                            key={`card-${location}`}
                            type="button"
                            className="group flex items-center justify-between border border-[#e2e2e2] px-4 py-3 text-left transition-all duration-200 hover:border-[#8bd000] hover:shadow-sm"
                        >
                            <span className="flex items-center gap-2 text-[14px] text-[#555555]">
                                <FiMapPin className="shrink-0 text-[var(--brandColor)]" />
                                {location}
                            </span>

                            <FiChevronRight className="text-[#999999] transition-transform group-hover:translate-x-1 group-hover:text-[#8bd000]" />
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Page;