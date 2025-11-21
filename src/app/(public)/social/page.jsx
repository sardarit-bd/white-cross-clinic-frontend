"use client";

import { Facebook, Instagram, Twitter, Music2, Share2 } from "lucide-react";
import { FaTiktok, FaPinterest } from "react-icons/fa";

export default function ConnectSection() {
    return (
        <div className="pt-20">
            <section
                className="relative w-full h-[620px] bg-cover  bg-top flex items-center justify-center"
                style={{ backgroundImage: "url('/images/socialBanner.webp')" }}
            >
                {/* White Card */}

            <div className="absolute w-full h-[620px] bg-black/30"></div>
            </section>

            <div className="bg-white shadow-xl rounded-2xl max-w-5xl mx-auto mt-[-200px] relative z-10 mb-10 w-[95%] p-10 md:p-12 text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--brandColor)]">
                    Connect with Me!
                </h2>

                {/* Subtitle */}
                <p className="text-gray-600 mt-3 mb-8 text-sm md:text-base leading-relaxed">
                    Stay connected! Follow me on social media for updates, insights, and collaboration
                    opportunities. Let’s create, inspire, and grow together.
                </p>

                {/* Button Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Facebook */}
                    <button className="flex items-center justify-center gap-3 bg-[#0f1b37] hover:bg-[#15254d] text-white py-3 rounded-lg font-medium transition">
                        <Facebook size={18} />
                        Facebook
                    </button>

                    {/* Instagram */}
                    <button className="flex items-center justify-center gap-3 bg-[#0f1b37] hover:bg-[#15254d] text-white py-3 rounded-lg font-medium transition">
                        <Instagram size={18} />
                        Instagram
                    </button>

                    {/* TikTok */}
                    <button className="flex items-center justify-center gap-3 bg-[#0f1b37] hover:bg-[#15254d] text-white py-3 rounded-lg font-medium transition">
                        <FaTiktok size={18} />
                        Tiktok
                    </button>

                    {/* Twitter */}
                    <button className="flex items-center justify-center gap-3 bg-[#0f1b37] hover:bg-[#15254d] text-white py-3 rounded-lg font-medium transition">
                        <Twitter size={18} />
                        Twitter
                    </button>

                    {/* Pinterest */}
                    <button className="flex items-center justify-center gap-3 bg-[#0f1b37] hover:bg-[#15254d] text-white py-3 rounded-lg font-medium transition md:col-span-2">
                        <FaPinterest size={18} />
                        Pinterest
                    </button>

                </div>
            </div>
        </div>
    );
}
