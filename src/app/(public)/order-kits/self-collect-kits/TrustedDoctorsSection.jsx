"use client";

import Image from "next/image";

export default function TrustedDoctorsSection() {
  return (
    <section className="py-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brandColor)] mb-6 leading-snug">
              Trusted Specialist Doctors
            </h2>

            <p className="text-[var(--textDark)] leading-relaxed mb-4">
              At White Cross Clinic, we understand that visiting the doctor can
              be a daunting experience, which is why we’re committed to
              providing excellent service that puts you at ease. Our friendly
              and approachable staff will make you feel welcome and comfortable
              from the moment you step through our doors.
            </p>

            <p className="text-[var(--textDark)] leading-relaxed mb-4">
              We take the time to listen to your concerns, answer your
              questions, and explain your treatment options in a clear and
              concise manner. Our team of experienced healthcare professionals
              are dedicated to delivering the highest standards of care,
              ensuring that you receive the best possible treatment.
            </p>

            <p className="text-[var(--textDark)] leading-relaxed">
              We pride ourselves on our attention to detail, compassion, and
              empathy, so you can trust that you’re in good hands.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-[var(--shadowCard)] overflow-hidden">
              <Image
                src="/images/doctor-consult.webp"
                alt="Trusted Specialist Doctors"
                width={900}
                height={600}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
