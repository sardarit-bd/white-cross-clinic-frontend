"use client";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bgLight)] text-[var(--textLight)] pt-16 pb-8 border-t border-[var(--borderLight)]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Clinic Info */}
        <div>
          <h2 className="text-[var(--textDark)] text-xl font-semibold mb-4">
            White Cross Clinic
          </h2>
          <p className="text-sm leading-relaxed">
            A108 Adam Street <br />
            New York, NY 535022
          </p>
          <p className="mt-3 text-sm">
            <strong>Phone:</strong> +1 5589 55488 55 <br />
            <strong>Email:</strong> info@example.com
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-5">
            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--borderLight)] hover:bg-[var(--brandColor)] hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Useful Links */}
        <div>
          <h3 className="text-[var(--textDark)] text-lg font-semibold mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Terms of service", "Privacy policy"].map(
              (item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:text-[var(--brandColor)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3 — Our Services */}
        <div>
          <h3 className="text-[var(--textDark)] text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Web Design",
              "Web Development",
              "Product Management",
              "Marketing",
              "Graphic Design",
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="hover:text-[var(--brandColor)] transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Extra Section */}
        <div>
          <h3 className="text-[var(--textDark)] text-lg font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Health Insights",
              "Community Support",
              "Patient Education",
              "News & Events",
              "Careers",
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="hover:text-[var(--brandColor)] transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--borderLight)] mt-10 pt-6 text-center text-sm text-[var(--textMuted)]">
        <p>
          © {currentYear}{" "}
          <span className="text-[var(--brandColor)] font-semibold">
            White Cross Clinic
          </span>
          . All Rights Reserved.
        </p>
        <p className="mt-1">
          Designed by{" "}
          <a
            href="#"
            className="text-[var(--brandAccent)] hover:underline transition-all"
          >
            WebDot
          </a>
        </p>
      </div>
    </footer>
  );
}
