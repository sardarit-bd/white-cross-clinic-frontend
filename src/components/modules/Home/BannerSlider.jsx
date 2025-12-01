"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
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
                  className="object-cover object-center brightness-[0.55]"
                  priority
                />

                {/* Content Card */}
                <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/85 backdrop-blur-lg shadow-xl rounded-xl p-8 md:p-12 max-w-2xl text-left"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold text-[var(--textDark)] mb-4 leading-tight">
                      {slide.title}
                    </h1>

                    <h3 className="text-lg md:text-xl font-semibold text-[var(--brandColor)] mb-4">
                      {slide.subtitle}
                    </h3>

                    <div className="space-y-2 text-[var(--textDark)] text-base md:text-lg font-medium leading-relaxed">
                      {slide.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-8">
                      <Link
                        href="/about"
                        className="px-6 py-3 rounded-full font-semibold text-white shadow-md hover:scale-105 transition"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--brandColor), var(--brandAccent))",
                        }}
                      >
                        Read More
                      </Link>
                      <Link
                        href="/appointment"
                        className="px-6 py-3 rounded-full font-semibold text-white shadow-md hover:scale-105 transition"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--brandAccent), var(--brandColor))",
                        }}
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-[var(--brandColor)] p-3 rounded-full transition shadow-md"
      >
        <ArrowLeft size={26} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-[var(--brandColor)] p-3 rounded-full transition shadow-md"
      >
        <ArrowRight size={26} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-[var(--brandAccent)] scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
