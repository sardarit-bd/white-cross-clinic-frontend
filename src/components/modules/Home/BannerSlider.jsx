"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Patient Reception",
    subtitle: "White Cross Clinic is CQC registered",
    description: [
      "Monday - Friday: 9:00 AM - 5:00 PM (Office Open)",
      "Evening Support: 5:00 PM - 10:00 PM (Online / Telephone Only)",
      "Saturday: Telephone Support Only (Office Closed)",
      "Sunday: Closed",
    ],
    image: "/images/slider1.webp",
  },
  {
    id: 2,
    title: "White Cross Clinic is CQC registered",
    subtitle: "Accessible Healthcare Services – Anytime, Anywhere",
    description: ["Check out more about us!"],
    image: "/images/slider2.webp",
  },
  {
    id: 3,
    title: "Quality accredited services",
    subtitle: "White Cross Clinic is CQC registered",
    description: [],
    image: "/images/slider3.webp",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 18000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full h-[65vh] overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Content Card */}
                <div className="absolute inset-0 flex items-center justify-center px-3 md:px-16 bg-gradient-to-r from-black/75 to-transparent">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-left container mx-auto"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold text-white/90 mb-4 leading-tight">
                      {slide.title}
                    </h1>

                    <h3 className="text-lg md:text-xl font-semibold text-white/80 mb-4">
                      {slide.subtitle}
                    </h3>

                    <div className="space-y-2 text-white/70 text-base md:text-lg font-medium leading-relaxed">
                      {slide.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-8">
                      <Link
                        href="/about"
                        className="px-6 py-3 font-semibold text-white shadow-md hover:scale-105 transition bg-[var(--brandColor)]"
                      >
                        Read More
                      </Link>
                      <Link
                        href="/appointment"
                        className="px-6 py-3 font-semibold text-white shadow-md hover:scale-105 transition bg-green-600"
                      >
                        Book Now
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-18 top-12/13 -translate-y-1/2 text-white bg-[var(--brandColor)] p-1 transition cursor-pointer"
      >
        <ArrowLeft size={26} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-12/13 -translate-y-1/2 text-white bg-[var(--brandColor)] p-1 transition cursor-pointer"
      >
        <ArrowRight size={26} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current
              ? "bg-[var(--brandColor)] scale-125"
              : "bg-white/60 hover:bg-white"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
