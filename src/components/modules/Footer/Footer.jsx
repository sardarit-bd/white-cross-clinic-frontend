"use client";

import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaPaypal, FaTiktok } from "react-icons/fa";
import logo from "../../../../public/logos/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={17} />, link: "https://www.facebook.com/people/White-Cross-Clinic/61568186106139", label: "Facebook" },
    { icon: <Twitter size={17} />, link: "https://x.com/cross_whit12088", label: "Twitter" },
    { icon: <Instagram size={17} />, link: "https://www.instagram.com/whitecross_clinics", label: "Instagram" },
    { icon: <FaTiktok size={17} />, link: "https://www.tiktok.com/@white.cross.clini", label: "TikTok" },
    { icon: <Linkedin size={17} />, link: "#", label: "LinkedIn" },
    { icon: <FaPaypal size={18} />, link: "#", label: "PayPal" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Specialties", href: "/specialties" },
    { label: "Online Shop", href: "/onlineshop" },
    { label: "Self Collect Kits", href: "/order-kits/self-collect-kits" },
    { label: "Top Services", href: "/topservices" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const popularServices = [
    { label: "Private Blood Tests", href: "/onlineshop/bloodtesting" },
    { label: "Full Body Health Screening", href: "/onlineshop/healthscreening/fullbody" },
    { label: "Sexual Health Screening", href: "/online-shop/test-kits" },
    { label: "IV Drips & Boosters", href: "/online-shop/test-kits" },
    { label: "Well Woman Screen", href: "/onlineshop/healthscreening/wellwoman" },
    { label: "Well Man Screen", href: "/onlineshop/healthscreening/wellman" },
  ];

  const phoneNumbers = [
    { num: "07784 732485", raw: "07784732485" },
    { num: "02081 246643", raw: "02081246643" },
    { num: "02031 004441", raw: "02031004441" },
    { num: "02045 521337", raw: "02045521337" },
  ];

  const emails = [
    "info@whitecrosspolyclinics.com",
    "info@whitecrossclinics.com",
  ];

  return (
    <footer className="bg-[#060B14] text-slate-300 relative border-t border-slate-800">
      {/* Top Gradient Line Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--brandColor)] via-emerald-400 to-[var(--brandColor)]" />

      {/* Main Footer Container */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 shadow-md border border-slate-700">
              <Image
                src={logo}
                width={220}
                height={90}
                alt="White Cross Clinic Logo"
                className="h-18 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pt-2">
              At White Cross Clinic, we are dedicated to providing exceptional, CQC-regulated healthcare services prioritising your health, convenience, and complete peace of mind.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Follow Us</p>
              <div className="flex items-center flex-wrap gap-2.5">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 bg-slate-800/80 text-slate-300 hover:bg-[var(--brandColor)] hover:text-white hover:scale-110 flex items-center justify-center transition-all duration-200 border border-slate-700/60 shadow-xs"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="block h-0.5 w-8 bg-[var(--brandColor)] mt-1" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="text-[var(--brandColor)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: POPULAR SERVICES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Popular Services
              <span className="block h-0.5 w-8 bg-[var(--brandColor)] mt-1" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {popularServices.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="text-[var(--brandColor)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & LOCATION */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
              Contact & Location
              <span className="block h-0.5 w-8 bg-[var(--brandColor)] mt-1" />
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[var(--brandColor)]/15 text-[var(--brandColor)] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <p className="text-slate-300 leading-snug">
                  <span className="font-semibold text-white">Meanwhile Garden Medical Centre</span><br />
                  Westbourne Park 5 Elkstone Rd, London W105NT<br />
                  <span className="text-xs text-slate-400">Hammersmith & City line (buses 23, 28, 31, 7)</span>
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[var(--brandColor)]/15 text-[var(--brandColor)] flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall size={16} />
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {phoneNumbers.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.raw}`}
                      className="hover:text-[var(--brandColor)] transition-colors text-xs font-medium text-slate-300"
                    >
                      {phone.num}
                    </a>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[var(--brandColor)]/15 text-[var(--brandColor)] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  {emails.map((email, i) => (
                    <a
                      key={i}
                      href={`mailto:${email}`}
                      className="hover:text-[var(--brandColor)] transition-colors text-slate-300"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Trust Bar */}
      <div className="border-t border-slate-800/80 bg-[#040810] py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <p>© {currentYear} White Cross Poly Clinic (WCPC). All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">CQC Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
