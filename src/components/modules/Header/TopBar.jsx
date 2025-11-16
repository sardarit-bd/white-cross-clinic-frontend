"use client";

import { Clock, Phone } from "lucide-react";

export default function TopBar() {
    return (
        <div
            className=""
            style={{ backgroundColor: "var(--brandColor)" }}
        >
            <div className="container mx-auto hidden md:flex justify-between items-center px-6 lg:px-12 py-2 text-white text-sm">
                <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Monday - Saturday, 8AM to 10PM</span>
                </div>

                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>Call us now +1 5589 55488 55</span>
                </div>
            </div>
        </div>
    );
}
