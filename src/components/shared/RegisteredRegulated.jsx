"use client";

import { ShieldCheck } from "lucide-react";

export default function RegisteredRegulated() {
  const accreditations = [
    {
      name: "General Medical Council",
      abbr: "GMC Registered",
      logo: "https://www.walkinclinic.london/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda1zmp1ib%2Fimage%2Fupload%2Fv1766706846%2Fgeneral-medical-council-logo-health-screening-clinic-london_e2uein.png&w=256&q=75&dpl=dpl_8ti64ZShRvj8XjQy5jniNCpuDmEg",
    },
    {
      name: "Nursing & Midwifery Council",
      abbr: "NMC Registered",
      logo: "https://www.walkinclinic.london/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda1zmp1ib%2Fimage%2Fupload%2Fv1766443734%2FNursing_and_Midwifery_Council__logo_-Private-STI-CLinic_london_utssua.jpg&w=256&q=75&dpl=dpl_8ti64ZShRvj8XjQy5jniNCpuDmEg",
    },
    {
      name: "Care Quality Commission",
      abbr: "CQC Regulated",
      logo: "https://www.walkinclinic.london/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda1zmp1ib%2Fimage%2Fupload%2Fv1767456059%2Fcqc-new-logo_huchj8_gcxnud.webp&w=256&q=75&dpl=dpl_8ti64ZShRvj8XjQy5jniNCpuDmEg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0A111E] via-[#0F172A] to-[#0A111E] py-20 px-4 relative overflow-hidden border-t border-slate-800/80">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--brandColor)]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Tag & Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--brandColor)]/15 border border-[var(--brandColor)]/30 text-[var(--brandColor)] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={16} />
            <span>UK Medical Standards & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Registered & <span className="text-[var(--brandColor)]">Regulated</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every member of our medical team is fully registered and our clinic is strictly
            regulated in the UK, ensuring the highest standard of patient safety and care.
          </p>
        </div>

        {/* Accreditation Logo Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-4xl mx-auto">
          {accreditations.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-white p-6 shadow-lg border border-slate-700/50 hover:border-[var(--brandColor)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center group h-36"
            >
              <div className="h-16 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
