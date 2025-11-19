"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Search, Sparkles } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Your Health, Our Priority",
    tagline: "Trusted Care Since 1990",
    description:
      "At White Cross Clinic, we provide compassionate and advanced medical care — ensuring every patient receives personalized treatment from start to recovery.",
    image: "/images/slider1.jpg",
  },
  {
    id: 2,
    title: "Excellence in Medical Services",
    tagline: "Innovation Driven by Compassion",
    description:
      "From emergency care to preventive health programs, our specialists work tirelessly to deliver excellence with empathy and precision.",
    image: "/images/slider2.jpg",
  },
  {
    id: 3,
    title: "Trusted by Thousands of Families",
    tagline: "Because Every Life Matters",
    description:
      "We deliver healthcare with precision, empathy, and innovation — serving communities with world-class facilities and trusted professionals.",
    image: "/images/slider3.jpg",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
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
                  className="object-cover object-center brightness-90"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

                {/* Content */}
                <div className="absolute mt-40 inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">

                  {/* Tagline */}
                  <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-4"
                  >
                    <span className="text-[var(--brandAccent)] font-semibold tracking-wide text-sm md:text-base bg-white/70 px-4 py-1 rounded-full backdrop-blur-md">
                      {slide.tagline}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4"
                  >
                    {slide.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="max-w-3xl text-base md:text-lg text-white/90 mb-6"
                  >
                    {slide.description}
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mb-10"
                  >
                    <Link
                      href="/appointment"
                      className="px-6 py-3 font-medium text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--brandColor), var(--brandAccent))",
                      }}
                    >
                      Make an Appointment
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 text-[var(--brandColor)] p-2 rounded-full transition"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 text-[var(--brandColor)] p-2 rounded-full transition"
      >
        <ArrowRight size={24} />
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
                : "bg-white/60 hover:bg-white/90"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
