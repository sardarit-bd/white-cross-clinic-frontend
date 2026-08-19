"use client";

export default function HomeVisits() {
    return (
        <div className="w-full bg-[#f7f9fc] py-10">
            <div className="container mx-auto px-6">

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-[#05314A] mb-6">
                    Home visits
                </h1>

                {/* Intro Highlight */}
                <p className="font-semibold text-[#05314A] mb-6">
                    Sample taking for most tests can be undertaken on Home Visits.
                </p>

                {/* Section Text */}
                <div className="space-y-5 text-[#05314A] leading-relaxed">

                    <p>
                        The WCC Home Visit service is available for patients who, for
                        whatever reason, prefer samples to be taken at home or at locations
                        other than a doctor’s practice or Patient Reception at 76 Wimpole
                        Street. This is a service that is used regularly to save time for
                        both doctors and patients and ensures that results can be made
                        available before consultation is undertaken.
                    </p>

                    <p>
                        Visits can be arranged from 7.00am for patients at home or at their
                        office, hotel or doctor’s consulting rooms.
                    </p>

                    {/* Bullet List */}
                    <div>
                        <p className="font-semibold mb-2">
                            Services provided by WCC Home Visits:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Paediatric samples</li>
                            <li>Pre-admission and Post-operative screens</li>
                            <li>Therapeutic Drug levels</li>
                        </ul>
                    </div>

                    <p>
                        There is a visit fee to patients within the M25, and for children
                        when two nurses are needed.
                    </p>

                    <p>
                        Home visits outside the M25, for weekends, bank holidays and night
                        fees are by special arrangement.
                    </p>

                    <p>
                        To arrange a Home Visit please telephone Patient Reception on{" "}
                        <span className="font-semibold">07785235269</span> or email{" "}
                        <a
                            href="mailto:info@whitecrosspolyclinics.com"
                            className="text-blue-600 underline"
                        >
                            info@whitecrosspolyclinics.com
                        </a>.
                    </p>

                </div>
            </div>
        </div>
    );
}
