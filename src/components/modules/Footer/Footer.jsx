"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaTiktok, FaPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ============ LEFT COLUMN ============ */}
        <div>
          <Image
            src="/logos/headLogo.png"
            width={80}
            height={80}
            alt="White Cross Clinic"
            className="mb-4"
          />

          <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
            At White Cross Clinic, we’re dedicated to providing exceptional
            healthcare services that prioritise your physical, emotional, and
            mental well-being.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            {[
              { icon: <Facebook size={18} /> },
              { icon: <Twitter size={18} /> },
              { icon: <Instagram size={18} /> },
              { icon: <FaTiktok size={18} /> },
              { icon: <Linkedin size={18} /> },
              { icon: <FaPaypal size={20} /> },
            ].map((item, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded bg-[#1e1e1e] flex items-center justify-center 
                hover:bg-[#2e2e2e] transition cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* ============ MIDDLE COLUMN ============ */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Self Collect Kits</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Specialties</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* ============ RIGHT COLUMN ============ */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <div className="text-gray-300 text-sm space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <p>
                Meanwhile Garden Medical Centre <br />
                Westbourne Park 5 Elkstone Rd, London W105NT <br />
                Trains and Buses Hammersmith & City line (buses 23, 28, 31, 7)
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-2">
              {[ "07784732485", "02081246643", "02031004441", "02045521337" ].map(
                (num, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Phone size={16} />
                    <p>{num}</p>
                  </div>
                )
              )}
            </div>

            {/* Emails */}
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <p>info@whitecrosspolyclinics.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <p>info@whitecrossclinics.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10 pt-6 border-t border-gray-800">
        © White Cross Poly Clinic (WCPC) {new Date().getFullYear()}
      </div>
    </footer>
  );
}
