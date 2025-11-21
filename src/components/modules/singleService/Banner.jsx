"use client";

import Image from "next/image";

export default function MobileClinicIntro() {
  return (
    <section className="bg-[var(--bgLight)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center container mx-auto px-4 py-16">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-xl">
            <Image
              src="/images/mobile-clinic.webp" 
              alt="Mobile Clinic"
              width={700}
              height={500}
              className="object-cover"
            />
            <div className="bg-[#0C2A5A] h-8 w-full"></div>
          </div>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div>
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C2A5A] mt-2 mb-4">
            Mobile Clinics Services
          </h2>

          <p className="text-gray-700 leading-relaxed text-[15px]">
            At White Cross Clinic, we understand that access to healthcare is essential,
            regardless of where you live or work. Thats why were proud to offer our Mobile
            Clinic services, bringing quality healthcare directly to communities across {`{your area}`}.
            Our state-of-the-art mobile medical unit is fully equipped to provide a wide range of
            healthcare services, making it easier and more convenient for you to prioritize your
            health and well-being.
          </p>
        </div>

      </div>
    </section>
  );
}
