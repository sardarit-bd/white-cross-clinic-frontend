"use client";

import Image from "next/image";

export default function KitsSection() {
  return (
    <div className="w-full py-16 bg-[var(--bgLight)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CARD */}
          <div className="rounded-3xl text-center overflow-hidden shadow-lg w-full h-[550px] relative">
            <Image
              src="/images/kits-bg.webp"
              alt="Kits background"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-10">
              <h2 className="text-3xl font-bold text-white mb-3">KITS</h2>

              <ul className="text-white space-y-3 text-lg">
                <li>Stethoscope</li>
                <li>ECG</li>
                <li>X-Ray</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="flex flex-col gap-6">
            <div className="h-[300px] w-[300px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/stetho.webp"
                alt="stethoscope"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className=" h-[300px] w-[300px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/ecg.webp"
                alt="ECG machine"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className=" h-[300px] w-[300px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/xray.webp"
                alt="X-Ray machine"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
