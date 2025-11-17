"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Saul Goodman",
    role: "CEO & Founder",
    image: "/images/doctor1.jpg",
    quote:
      "Proin iaculis purus consequat sem cure dignissim donec porttitor entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecenas aliquam risus at semper.",
  },
  {
    id: 2,
    name: "Sara Wilsson",
    role: "Designer",
    image: "/images/doctor2.jpg",
    quote:
      "Export tempor illum tamen malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    id: 3,
    name: "Jena Karlis",
    role: "Store Owner",
    image: "/images/doctor3.jpg",
    quote:
      "Enim nisi quem export duis labore cillum magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    id: 4,
    name: "William Brown",
    role: "Patient",
    image: "/images/doctor4.jpg",
    quote:
      "The doctors were professional and empathetic. My treatment journey felt smooth and personal — I’m truly grateful for White Cross Clinic’s care.",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Therapist",
    image: "/images/doctor3.jpg",
    quote:
      "A wonderful environment with top-tier medical expertise. I would recommend White Cross Clinic to anyone seeking trusted healthcare services.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[var(--bgLight)] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
            Testimonials
          </h2>
          <div className="w-16 h-[3px] mx-auto mt-3 bg-[var(--brandAccent)] rounded-full" />
          <p className="text-[var(--textLight)] mt-4 max-w-2xl mx-auto">
            Hear from our patients and partners who have experienced compassionate care from White Cross Clinic.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={6800} // controls smoothness of slide
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left flex flex-col justify-between h-full mb-10"
              >
                <p className="text-[var(--textDark)] text-sm md:text-base italic mb-6 leading-relaxed relative pl-8">
                  <span className="absolute left-0 top-0 text-[var(--brandColor)] text-3xl font-serif">“</span>
                  {item.quote}
                  <span className="text-[var(--brandColor)] text-xl font-serif ml-1">”</span>
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-[var(--brandColorLight)] shadow-sm object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[var(--textDark)]">{item.name}</h4>
                    <p className="text-[var(--textLight)] text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows */}
        {/* <div className="absolute inset-x-0 flex justify-between px-4 md:px-8 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <button
            className="testimonial-prev pointer-events-auto bg-white shadow-md hover:bg-[var(--brandColorLight)] rounded-full p-2 transition-all"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="var(--brandColor)"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            className="testimonial-next pointer-events-auto bg-white shadow-md hover:bg-[var(--brandColorLight)] rounded-full p-2 transition-all"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="var(--brandColor)"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}
