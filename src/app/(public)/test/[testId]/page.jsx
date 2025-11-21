"use client";

import Image from "next/image";

export default function CoronaryAngioplasty() {
    return (
        <div className="w-full bg-[#f5f7fa] pb-10">
            <div className="bg-[#003798] py-10 pt-48 text-white mb-10">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold  mb-8">
                        Coronary angioplasty and stents
                    </h1>
                </div>
            </div>

            <div className="container mx-auto bg-white shadow-sm p-6 md:p-10 rounded-md">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Overview */}
                        <section id="overview">
                            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                            <p className="text-gray-700 mb-3">
                                Coronary angioplasty (also called PCI) is a procedure to open
                                narrowed or blocked coronary arteries. A thin catheter with a balloon
                                is inserted through a vessel and expanded to compress plaque against
                                artery walls.
                            </p>
                            <p className="text-gray-700">
                                A stent is a tiny wire mesh tube placed to keep the artery open and reduce
                                the chance of re-narrowing.
                            </p>
                        </section>

                        {/* Why it's done */}
                        <section id="why">
                            <h2 className="text-2xl font-semibold mb-4">Why it’s done</h2>

                            <div className="w-full flex justify-center my-6">
                                <Image
                                    src="/images/test1.webp"
                                    width={450}
                                    height={450}
                                    alt="Angioplasty Diagram"
                                    className="border p-2 rounded"
                                />
                            </div>

                            <p className="text-gray-700 mb-3">Angioplasty may be recommended if you have:</p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>Chest pain (angina) not improving with medication</li>
                                <li>A heart attack that requires urgent blood flow restoration</li>
                                <li>Severely narrowed arteries limiting daily activities</li>
                            </ul>
                        </section>

                        {/* Risks */}
                        <section id="risks">
                            <h2 className="text-2xl font-semibold mb-4">Risks</h2>

                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>Re-narrowing of the artery</li>
                                <li>Blood clots forming inside the stent</li>
                                <li>Bleeding at insertion site</li>
                                <li>Heart attack or artery damage</li>
                                <li>Irregular heart rhythms</li>
                            </ul>
                        </section>

                        {/* Preparation */}
                        <section id="prepare">
                            <h2 className="text-2xl font-semibold mb-4">How you prepare</h2>

                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>Do not eat or drink for several hours before the procedure</li>
                                <li>Tell your doctor about all medications</li>
                                <li>Arrange someone to drive you home</li>
                            </ul>
                        </section>

                        {/* Expectations */}
                        <section id="expect">
                            <h2 className="text-2xl font-semibold mb-4">What you can expect</h2>

                            <div className="w-full flex justify-center my-6">
                                <Image
                                    src="/images/test2.webp"
                                    width={450}
                                    height={450}
                                    alt="Procedure Illustration"
                                    className="border p-2 rounded"
                                />
                            </div>

                            <p className="text-gray-700 mb-3">
                                Angioplasty typically takes 30 minutes to 2 hours. A local
                                anaesthetic numbs the insertion site. A catheter is inserted and
                                guided using contrast dye.
                            </p>
                            <p className="text-gray-700">
                                After the stent placement, the balloon is removed and blood flow is restored.
                            </p>
                        </section>

                        {/* After procedure */}
                        <section id="after">
                            <h2 className="text-2xl font-semibold mb-4">After the procedure</h2>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>You may stay overnight for monitoring</li>
                                <li>Drink plenty of fluids</li>
                                <li>Avoid heavy lifting for several days</li>
                                <li>Take blood thinner medications as prescribed</li>
                            </ul>
                        </section>
                    </div>

                    {/* RIGHT SIDEBAR (STICKY & LINKABLE) */}
                    <aside className="space-y-4 lg:sticky lg:top-24 h-fit">
                        <h2 className="text-xl font-semibold">Recent Posts</h2>

                        <ul className="text-gray-700 space-y-2 list-disc ml-5">
                            <li>
                                <a href="#overview" className="hover:text-blue-600 duration-200">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#why" className="hover:text-blue-600 duration-200">
                                    Why it’s done
                                </a>
                            </li>
                            <li>
                                <a href="#risks" className="hover:text-blue-600 duration-200">
                                    Risks
                                </a>
                            </li>
                            <li>
                                <a href="#prepare" className="hover:text-blue-600 duration-200">
                                    How you prepare
                                </a>
                            </li>
                            <li>
                                <a href="#expect" className="hover:text-blue-600 duration-200">
                                    What you can expect
                                </a>
                            </li>
                            <li>
                                <a href="#after" className="hover:text-blue-600 duration-200">
                                    After procedure
                                </a>
                            </li>
                        </ul>
                    </aside>

                </div>
            </div>
        </div>
    );
}
