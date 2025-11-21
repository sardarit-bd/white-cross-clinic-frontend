"use client";
import Image from "next/image";

export default function TopServicesBanner() {
    return (
        <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
            <Image
                src="/images/serviceBanner.webp" // replace with your banner
                alt="Banner"
                fill
                className="object-cover opacity-80"
            />
            <div className="absolute w-full h-full bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
                    Our Top Services
                </h2>
            </div>
        </div>
    );
}
