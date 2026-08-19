"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const images = [
    "/images/kit1.webp",
    "/images/kit2.webp",
    "/images/kit3.webp",
    "/images/ki4.webp",
    "/images/kit1.webp",
    "/images/kit2.webp",
    "/images/kit3.webp",
    "/images/ki4.webp",
];

export default function KitsSlider() {

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="w-full mx-auto">


                {/* Swiper Gallery */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    // spaceBetween={20}
                    slidesPerView={1.5}
                    loop={true}
                    speed={5000}
                    navigation={{
                        nextEl: ".gallery-next",
                        prevEl: ".gallery-prev",
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    grabCursor={true}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="relative pb-10"
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                className="cursor-pointer rounded-lg overflow-hidden border-4 border-transparent transition-all duration-300"
    
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${i + 1}`}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-64 md:h-72"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
