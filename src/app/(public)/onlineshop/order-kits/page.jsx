import Image from 'next/image'
import React from 'react'
import KitsSlider from './KitsSlider'
import KitsSection from './KitsSection'

export default function page() {
    return (
        <>
            <div className="relative w-full h-[300px] mt-24 md:h-[420px] overflow-hidden">
                <Image
                    src="/images/orderKistBanner.webp"
                    alt="Banner"
                    fill
                    className="object-cover opacity-80"
                />
                <div className="absolute w-full h-full bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
                        Order Kits
                    </h2>
                </div>
            </div>
            <KitsSection />
            <KitsSlider />
           
        </>
    )
}
