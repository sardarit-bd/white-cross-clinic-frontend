"use client";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-20  overflow-hidden">


      <div className="container mx-auto md:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[var(--textDark)]"
          >
            Get In Touch With Us
          </motion.h2>
          <p className="text-[var(--textLight)] mt-4 max-w-2xl mx-auto">
            Need help with appointments, have a question, or want to share feedback?
            Reach out — we’re here to help.
          </p>
        </div>

        {/* Grid layout — left info / right form */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Contact Info */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-[var(--borderLight)] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
            >
              <PhoneCall size={36} className="text-[var(--brandAccent)] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[var(--textDark)]">
                  Emergency Hotline
                </h3>
                <p className="text-[var(--textLight)] text-sm mb-2">
                  24/7 Immediate Medical Support
                </p>
                <a
                  href="tel:+8801700000000"
                  className="text-[var(--brandColor)] font-semibold text-xl hover:underline"
                >
                  +880 1700 000 000
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-[var(--borderLight)] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
            >
              <Mail size={36} className="text-[var(--brandAccent)] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[var(--textDark)]">
                  Email Support
                </h3>
                <p className="text-[var(--textLight)] text-sm mb-2">
                  For inquiries & appointment assistance
                </p>
                <a
                  href="mailto:info@whitecrossclinic.com"
                  className="text-[var(--brandColor)] font-semibold hover:underline"
                >
                  info@whitecrossclinic.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-[var(--borderLight)] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
            >
              <MapPin size={36} className="text-[var(--brandAccent)] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[var(--textDark)]">
                  Visit Our Clinic
                </h3>
                <p className="text-[var(--textLight)] text-sm mb-2">
                  123 Health Avenue, Dhaka, Bangladesh
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[var(--textLight)] text-sm">
                  <Clock size={14} />
                  <span>Mon–Sat, 8:00 AM – 8:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-8 border border-[var(--borderLight)] space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("📩 Your message has been sent successfully!");
            }}
          >
            <h3 className="text-xl font-semibold text-[var(--textDark)] mb-4">
              Send Us a Message
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full border border-[var(--borderLight)] rounded-lg p-3 resize-none focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />

            <button
              type="submit"
              className="bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white px-8 py-3 rounded-full font-semibold transition shadow-md"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
