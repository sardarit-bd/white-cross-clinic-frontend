"use client";

import { LucideIcon } from "lucide-react";

export default function ServiceCard({ service, onSelect }) {
  const Icon = service.icon;

  return (
    <button
      onClick={() => onSelect(service)}
      className="w-full text-left bg-white border border-[var(--borderLight)] rounded-2xl shadow-card hover:shadow-[var(--shadowHover)] transition p-5 flex gap-4"
    >
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-full bg-[var(--brandColorLight)] text-[var(--brandColor)] flex items-center justify-center">
        <Icon size={22} />
      </div>

      {/* Text Info */}
      <div className="flex-1">
        <h3 className="text-[var(--textDark)] font-semibold text-lg mb-1">
          {service.title}
        </h3>

        <div className="flex justify-between text-sm text-[var(--textLight)]">
          <span>{service.duration} minutes</span>
          <span className="font-semibold text-[var(--brandColor)]">${service.price}</span>
        </div>
      </div>
    </button>
  );
}
