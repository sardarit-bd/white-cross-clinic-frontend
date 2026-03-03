"use client";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    msg: ""
  })

  const { sendContactEmail } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await sendContactEmail(form)
      if (res.success) {
        toast.success("Message is Send Successfully.")
        setForm({
          name: "",
          email: "",
          phone: "",
          msg: ""
        })
      }
    } catch (error) {
      toast.error("Something Wrong.")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="relative py-20  overflow-hidden">


      <div className="container mx-auto relative z-10">
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
          <p className="text-[var(--textLight)] mt-4 max-w-5xl mx-auto text-justify lg:text-center">
            At White Cross Clinic, we’re dedicated to providing exceptional healthcare services that prioritize your physical, emotional, and mental well-being. With a team of experienced and compassionate healthcare professionals, state-of-the-art facilities, and a commitment to personalized care, we’re here to support you every step of the way. Whether you’re seeking general practice services or specialist care, or simply need advice and guidance, we’re here to help. Contact us today to book an appointment and experience the White Cross Clinic difference.
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
                  07784732485
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
                  info@whitecrossclinics.com
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
                <address className="text-[var(--textLight)] text-sm mb-2">
                  Meanwhile Garden Medical Centre <br /> Westbourne Park 5 Elkstone Rd, London W105NT <br /> Trains and Buses Hammersmith & City line (buses 23, 28,31,7)
                </address>
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
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold text-[var(--textDark)] mb-4">
              Send Us a Message
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                required
                className="w-full border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              required
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />

            <textarea
              placeholder="Your Message"
              value={form.msg}
              onChange={(e) => setForm((prev) => ({ ...prev, msg: e.target.value }))}
              rows={4}
              required
              className="w-full border border-[var(--borderLight)] rounded-lg p-3 resize-none focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--brandColor)] text-white px-8 py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
