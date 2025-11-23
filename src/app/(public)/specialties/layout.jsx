import SpecialList from '@/components/modules/specialties/SpecialList'
import SpecialitiesFilter from '@/components/modules/specialties/SpecialtiesFilter'
import Image from 'next/image'
import React from 'react'

export default function SpecialLayout({ children }) {
    return (
        <>
            <div className="relative pt-24 w-full h-[400px] md:h-[520px] overflow-hidden">
                <Image
                    src="/images/specialties.webp" // replace with your banner
                    alt="Banner"
                    fill
                    className="object-cover opacity-80"
                />
                <div className="absolute w-full h-full bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl md:text-6xl font-bold drop-shadow-lg">
                        Specialties
                    </h2>
                </div>
            </div>
            <div className="min-h-screen bg-[var(--bgLight)] pt-10 pb-20">
                <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6">

                    {/* ---------------- LEFT SIDEBAR ---------------- */}

                    <SpecialitiesFilter />
                    {/* ---------------- RIGHT CONTENT ---------------- */}
                    {children}
                </div>
            </div>
        </>

    )
}
