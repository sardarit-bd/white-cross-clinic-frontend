"use client";
import Image from "next/image";

export default function ServicesGallery() {
    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0C2A5A] mb-10">
                    We Deliver The Best For Our Patients
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* BIG IMAGE (LEFT SIDE) */}
                    <div className="lg:col-span-1 flex justify-center">
                        <Image
                            src="/images/appointment-hero.png" // replace
                            alt="Main Service"
                            width={600}
                            height={500}
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* RIGHT SIDE GRID (6 IMAGES) */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <Image src="/images/serviceBanner.webp" width={300} height={200} alt="" className="rounded-xl object-cover" />
                        <Image src="/images/service1.webp" width={300} height={200} alt="" className="rounded-xl object-cover" />
                        <Image src="/images/service2.webp" width={300} height={200} alt="" className="rounded-xl object-cover" />
                        <Image src="/images/slider1.jpg" width={300} height={200} alt="" className="rounded-xl object-cover" />
                        <Image src="/images/slider2.jpg" width={300} height={200} alt="" className="rounded-xl object-cover" />
                        <Image src="/images/slider2.jpg" width={300} height={200} alt="" className="rounded-xl object-cover" />
                    </div>

                </div>
            </div>
        </section>
    );
}
