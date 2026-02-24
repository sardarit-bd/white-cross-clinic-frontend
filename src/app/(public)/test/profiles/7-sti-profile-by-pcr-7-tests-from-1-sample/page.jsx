"use client";

import Link from "next/link";

export default function STIProfileDetail() {
    return (
        <div className="w-full py-10 pt-48">
            <div className="container mx-auto">
                <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">
                    {/* Title */}
                    <h1
                        className="text-3xl font-bold"
                        style={{ color: "var(--brandColor)" }}
                    >
                        7 STI Profile By PCR (7 Tests From 1 Sample)
                    </h1>

                    <hr className="border-[var(--borderLight)]" />

                    {/* Key Info Grid */}
                    <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
                        <div className="font-semibold">Code</div>
                        <div>PP12</div>

                        <div className="font-semibold">Sample Reqs</div>
                        <div>FCRU / PCR Swab / TPV or Aptima urine / multisite swab</div>

                        <div className="font-semibold">Turnaround</div>
                        <div>2 days</div>
                    </div>

                    {/* Special Instructions */}
                    <div className="space-y-2 text-[var(--textDark)]">
                        <h3 className="font-semibold">Special Instructions</h3>
                        <p>
                            Please post self-collected samples on the same day they are taken,
                            avoid posting over weekends and bank holidays.
                        </p>
                    </div>

                    <hr className="border-[var(--borderLight)]" />

                    {/* Sample Type Guide */}
                    <div className="space-y-4 text-[var(--textDark)]">
                        <h3 className="font-semibold">Sample Type Guide</h3>

                        <p>
                            <span className="font-semibold">FCRU</span> — First Catch Random
                            Urine (For DL12/Chlamydia, Etc.)
                        </p>

                        <p>
                            <span className="font-semibold">TPV</span> — Cytc Thin Prep Vial
                        </p>
                    </div>

                    {/* Profile Details */}
                    <div className="space-y-3 text-[var(--textDark)]">
                        <h3 className="font-semibold">Profile Details</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Chlamydia Trachomatis</li>
                            <li>Neisseria Gonorrhoea</li>
                            <li>Mycoplasma Genitalium</li>
                            <li>Ureaplasma Species</li>
                            <li>Trichomonas Vaginalis</li>
                            <li>Gardnerella Vaginalis</li>
                            <li>Herpes Simplex I/II</li>
                        </ul>
                    </div>

                    <p className="font-semibold text-[var(--textDark)]">
                        All Tests Can Be Requested Individually
                    </p>

                    <hr className="border-[var(--borderLight)]" />

                    {/* Related Specialities */}
                    <div className="space-y-2 text-[var(--textDark)]">
                        <h3 className="font-semibold">Related Specialities</h3>
                        <ul className="list-disc pl-6">
                            <li>
                                <Link
                                    href="/specialties/vitamin-tests"
                                    className="text-[var(--brandColor)] hover:underline"
                                >
                                    Vitamins
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2 text-[var(--textDark)]">
                        <h3 className="font-semibold">Additional Information</h3>
                        <ul className="list-disc pl-6">
                            <li>
                                <Link
                                    href="/test/request-forms"
                                    className="text-[var(--brandColor)] hover:underline"
                                >
                                    Request forms
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/test/specimens"
                                    className="text-[var(--brandColor)] hover:underline"
                                >
                                    Specimens: collection, packaging, transport, rejection criteria
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/test/discontinued-tests"
                                    className="text-[var(--brandColor)] hover:underline"
                                >
                                    Discontinued tests
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
