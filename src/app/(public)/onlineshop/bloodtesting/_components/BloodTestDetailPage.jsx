'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaArrowRight,
    FaFlask,
    FaShieldAlt,
    FaClock,
    FaUserNurse,
    FaCheckCircle,
    FaChevronDown,
    FaCalendarCheck,
    FaVial,
    FaEnvelopeOpenText,
    FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const defaultFaqs = [
    ["How do I book this blood test?", "Simply select 'Book Now' on your chosen test, pick a date and time that suits you, and complete the booking online. Walk-in appointments are also available."],
    ["Do I need a GP referral?", "No. Our direct-access facility allows you to book without a GP referral for most tests."],
    ["How long do results take?", "Most results are available within 24–48 hours and are delivered securely via email."],
    ["Is fasting required?", "Some tests may require fasting. Specific instructions will be provided when you book your appointment."],
    ["Where are samples analysed?", "All samples are analysed at UKAS-accredited laboratories to the highest clinical standards."],
];

export default function BloodTestDetailPage({
    title = "Blood Test",
    subtitle = "Private Blood Testing London",
    description = "",
    descriptionSecondary = "",
    accentColor = "#0076BC",
    accentColorLight = "#E8F4FD",
    gradientFrom = "#0076BC",
    gradientTo = "#00A4E4",
    icon: HeroIcon = FaFlask,
    testData = [],
    faqs = defaultFaqs,
    sectionTitle = "Diagnostic Options",
    sectionBadge = "Clinical Profiles",
}) {
    const [openFaq, setOpenFaq] = useState(-1);

    const trustItems = [
        { icon: FaShieldAlt, label: "UKAS Accredited", desc: "Gold-standard laboratories" },
        { icon: FaUserNurse, label: "Nurse-Led Service", desc: "Professional phlebotomy" },
        { icon: FaClock, label: "Fast Results", desc: "From 24 hours turnaround" },
        { icon: FaCheckCircle, label: "No Referral", desc: "Direct access booking" },
    ];

    const processSteps = [
        { icon: FaCalendarCheck, title: "Book Online", desc: "Select your test and choose a convenient time slot" },
        { icon: FaVial, title: "Visit Clinic", desc: "Our nurse-led team collects your sample professionally" },
        { icon: FaEnvelopeOpenText, title: "Get Results", desc: "Receive secure results via email within 24–48 hours" },
    ];

    return (
        <div className="min-h-screen">

            {/* ============ HERO SECTION ============ */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
                {/* Gradient mesh background */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, ${gradientFrom}08 0%, ${gradientTo}12 50%, ${gradientFrom}06 100%)`,
                        }}
                    />
                    <div
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
                        style={{ background: gradientFrom }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
                        style={{ background: gradientTo }}
                    />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                    className="absolute top-24 right-[15%] w-16 h-16 rounded-2xl opacity-10 hidden lg:block"
                    style={{ background: accentColor }}
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-48 left-[10%] w-10 h-10 rounded-full opacity-8 hidden lg:block"
                    style={{ background: gradientTo }}
                    animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-16 right-[25%] w-12 h-12 rounded-xl opacity-10 hidden lg:block"
                    style={{ background: accentColor }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 text-sm text-gray-500 mb-8"
                    >
                        <Link href="/onlineshop" className="hover:text-gray-800 transition-colors">Online Shop</Link>
                        <FaChevronRight className="text-xs" />
                        <Link href="/onlineshop/bloodtesting" className="hover:text-gray-800 transition-colors">Blood Testing</Link>
                        <FaChevronRight className="text-xs" />
                        <span style={{ color: accentColor }} className="font-semibold">{title}</span>
                    </motion.nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                                style={{ background: accentColorLight, color: accentColor }}
                            >
                                <HeroIcon className="text-sm" />
                                {subtitle}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                                {title.split(' ').map((word, i) => (
                                    <span key={i}>
                                        {i === 0 ? (
                                            <span
                                                className="bg-clip-text text-transparent"
                                                style={{ backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                                            >
                                                {word}
                                            </span>
                                        ) : (
                                            <span> {word}</span>
                                        )}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-xl">
                                {description}
                            </p>
                            {descriptionSecondary && (
                                <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                                    {descriptionSecondary}
                                </p>
                            )}
                        </motion.div>

                        {/* Hero visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="hidden lg:flex justify-center"
                        >
                            <div className="relative">
                                <div
                                    className="w-72 h-72 rounded-full flex items-center justify-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${gradientFrom}15, ${gradientTo}25)`,
                                        boxShadow: `0 20px 60px ${accentColor}15`,
                                    }}
                                >
                                    <div
                                        className="w-48 h-48 rounded-full flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}35)`,
                                        }}
                                    >
                                        <HeroIcon
                                            className="text-6xl"
                                            style={{ color: accentColor }}
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute -top-2 right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="flex items-center gap-2">
                                        <FaShieldAlt style={{ color: accentColor }} />
                                        <span className="text-sm font-bold text-gray-800">UKAS Certified</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-2 left-0 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100"
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <FaClock style={{ color: accentColor }} />
                                        <span className="text-sm font-bold text-gray-800">Fast Results</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============ TRUST BAR ============ */}
            <section className="border-y border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {trustItems.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-center gap-4 group"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${gradientFrom}12, ${gradientTo}20)`,
                                        color: accentColor,
                                    }}
                                >
                                    <item.icon className="text-lg" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                                    <p className="text-gray-500 text-xs">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ============ TEST CARDS ============ */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
                            style={{ background: accentColorLight, color: accentColor }}
                        >
                            <FaFlask className="text-xs" />
                            {sectionBadge}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black">{sectionTitle}</h2>
                    </motion.div>

                    <motion.div
                        className={`grid gap-8 ${testData.length === 1
                                ? 'max-w-xl mx-auto'
                                : testData.length === 2
                                    ? 'lg:grid-cols-2 max-w-4xl mx-auto'
                                    : testData.length === 3
                                        ? 'lg:grid-cols-3'
                                        : 'lg:grid-cols-2 xl:grid-cols-3'
                            }`}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {testData.map((test, i) => (
                            <motion.div
                                key={test.id || i}
                                variants={itemVariants}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="group relative bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300"
                                style={{
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `0 12px 40px ${accentColor}18`;
                                    e.currentTarget.style.borderColor = `${accentColor}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                                    e.currentTarget.style.borderColor = '#f3f4f6';
                                }}
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
                                />

                                <div className="flex justify-between items-start mb-6">
                                    <span
                                        className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                                        style={{ background: accentColorLight, color: accentColor }}
                                    >
                                        {test.tag || "Available"}
                                    </span>
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${gradientFrom}10, ${gradientTo}20)`,
                                            color: accentColor,
                                        }}
                                    >
                                        <FaFlask />
                                    </div>
                                </div>

                                <h3 className="font-bold text-xl text-gray-900 mb-3 leading-snug">{test.name}</h3>
                                {test.shortdes && (
                                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{test.shortdes}</p>
                                )}

                                <div className="flex items-center gap-2 mb-6">
                                    <FaClock className="text-xs text-gray-400" />
                                    <span className="text-sm text-gray-500">{test.result || "Results confirmed on arrival"}</span>
                                </div>

                                <div className="border-t border-gray-100 pt-6 flex items-end justify-between">
                                    <div>
                                        <p className="text-sm text-gray-400">From</p>
                                        <p
                                            className="text-3xl font-black"
                                            style={{ color: accentColor }}
                                        >
                                            {test.price}
                                        </p>
                                    </div>
                                    <button
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                                            boxShadow: `0 4px 14px ${accentColor}30`,
                                        }}
                                    >
                                        Book Now
                                        <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ============ PROCESS STEPS ============ */}
            <section
                className="py-20 lg:py-28"
                style={{ background: `linear-gradient(180deg, ${accentColor}04, ${accentColor}08, ${accentColor}04)` }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p
                            className="uppercase tracking-[4px] font-bold text-sm mb-3"
                            style={{ color: accentColor }}
                        >
                            Simple Process
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black">How It Works</h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="text-center relative"
                            >
                                {i < processSteps.length - 1 && (
                                    <div
                                        className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] opacity-20"
                                        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                                    />
                                )}

                                <div className="relative inline-flex mb-6">
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl text-white"
                                        style={{
                                            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                                            boxShadow: `0 8px 24px ${accentColor}25`,
                                        }}
                                    >
                                        <step.icon />
                                    </div>
                                    <span
                                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-xs font-black flex items-center justify-center border-2"
                                        style={{ borderColor: accentColor, color: accentColor }}
                                    >
                                        {i + 1}
                                    </span>
                                </div>

                                <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm max-w-xs mx-auto">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ============ FAQ SECTION ============ */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p
                            className="uppercase tracking-[4px] font-bold text-sm mb-3"
                            style={{ color: accentColor }}
                        >
                            Information Centre
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black">Frequently Asked Questions</h2>
                    </motion.div>

                    <motion.div
                        className="max-w-3xl mx-auto space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
                                style={{
                                    boxShadow: openFaq === i ? `0 8px 30px ${accentColor}12` : '0 2px 8px rgba(0,0,0,0.03)',
                                    borderColor: openFaq === i ? `${accentColor}25` : '#f3f4f6',
                                }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    className="w-full px-7 py-6 flex justify-between items-center gap-4 text-left"
                                >
                                    <h3 className="font-bold text-lg text-gray-900">{faq[0]}</h3>
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                                        style={{
                                            background: openFaq === i
                                                ? `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                                                : accentColorLight,
                                            color: openFaq === i ? '#fff' : accentColor,
                                            transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                        }}
                                    >
                                        <FaChevronDown className="text-sm" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-7 pb-6 text-gray-600 leading-relaxed">{faq[1]}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ============ CTA BANNER ============ */}
            <section className="pb-20 lg:pb-28">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="rounded-3xl px-8 py-16 md:px-16 text-center text-white relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black mb-4">
                                Ready to Take Control of Your Health?
                            </h2>
                            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                                Book your {title.toLowerCase()} today. No referral needed — walk in or book online for fast, accredited results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{ color: accentColor }}
                                >
                                    Book Appointment
                                </button>
                                <button className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold rounded-xl border border-white/25 transition-all duration-300 hover:bg-white/25">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
