"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/hepatology.jpg",
  "/images/neurology.jpg",
  "/images/doctor1.jpg",
  "/images/doctor2.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-[var(--bgLight)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
            Gallery
          </h2>
          <div className="w-16 h-[3px] mx-auto mt-3 bg-[var(--brandAccent)] rounded-full" />
          <p className="text-[var(--textLight)] mt-4 max-w-2xl mx-auto">
            Explore moments from our clinic — excellence, care, and innovation in every corner.
          </p>
        </motion.div>

        {/* Swiper Gallery */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
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
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.2 },
          }}
          className="relative pb-10"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="cursor-pointer rounded-lg overflow-hidden border-4 border-transparent hover:border-[var(--brandAccent)] transition-all duration-300"
                onClick={() => setSelectedImage(src)}
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

        {/* Navigation Buttons */}
        {/* <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none">
          <button
            className="gallery-prev pointer-events-auto bg-white/90 hover:bg-[var(--brandColorLight)] p-2 rounded-full shadow-md transition-all"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="var(--brandColor)"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            className="gallery-next pointer-events-auto bg-white/90 hover:bg-[var(--brandColorLight)] p-2 rounded-full shadow-md transition-all"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="var(--brandColor)"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={selectedImage}
                alt="Full preview"
                width={800}
                height={600}
                className="rounded-lg shadow-xl max-h-[80vh] overflow-hidden object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-[var(--brandColorLight)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="var(--brandColor)"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
