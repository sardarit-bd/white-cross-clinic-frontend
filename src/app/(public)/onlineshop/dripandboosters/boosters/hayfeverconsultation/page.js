import React from "react";
import { FiCalendar } from "react-icons/fi";

const Page = () => {
    const locations = [
        "North East, Gateshead Clinic",
        "Be Superhuman",
        "E-Pulse Studios Peterborough",
        "Pinewood Studios",
        "Redcar- Willow Skin Clinic",
        "North East, Whitley Bay",
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-[1040px] px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">

                        Hayfever Treatment Consultation
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 text-[#2563b8] sm:text-[16px]">
                        Hay Fever stopping you in your tracks? Let us help you find treatments that work.
                    </p>
                </div>

                {/* Price + Locations */}
                <div className="mx-auto mt-9 max-w-[720px] border border-[#d5d5d5] bg-white">

                    {/* Price */}
                    <div className="flex min-h-[56px] items-center justify-center border-b border-[#d5d5d5] px-5 text-center">
                        <p className="text-[16px] font-bold text-[#555555] sm:text-[18px]">
                            £79.95
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
                        <span>Book Now</span>
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
                        Basic hydration & Acetylcysteine (4g)
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        This consultation with one of our clinicians includes a discussion of your medical history and advice and supply of treatment if deemed appropriate to help you manage your symptoms and feel better.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Treatments offered could include over the counter remedies, tablets or Injections.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)] mt-10">
                        Cancellation Policy
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Contact us to reschedule
                    </p>
                </div>

            </section>
        </main>
    );
};

export default Page;