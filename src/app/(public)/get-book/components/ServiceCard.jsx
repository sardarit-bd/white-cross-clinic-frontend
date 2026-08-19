"use client";

import { Clock, Check } from "lucide-react";

export default function ServiceCard({ service, isSelected, onSelect }) {
  const Icon = service.icon;

  return (
    <div
      onClick={() => onSelect(service)}
      className={`w-full text-left bg-white border p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer relative group ${
        isSelected
          ? "border-[var(--brandColor)] ring-2 ring-[var(--brandColor)]/20 shadow-sm bg-blue-50/20"
          : "border-gray-200 hover:border-gray-400 hover:shadow-sm"
      }`}
    >
      {/* Popular Tag */}
      {service.popular && (
        <span className="absolute top-0 right-0 bg-[var(--brandColor)] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
          Popular
        </span>
      )}

      <div>
        {/* Top Header: Icon & Category */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="w-10 h-10 bg-[var(--brandColorLight)] text-[var(--brandColor)] flex items-center justify-center shrink-0">
            <Icon size={20} />
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5">
            {service.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-gray-900 font-bold text-base leading-snug group-hover:text-[var(--brandColor)] transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
          {service.subtitle}
        </p>

        {/* Feature bullets */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-3 pt-2.5 border-t border-gray-100 space-y-1">
            {service.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer: Price & Duration */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
          <Clock size={13} className="text-gray-400" />
          <span>{service.duration} mins</span>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-[11px] text-gray-400">From</span>
          <span className="text-base sm:text-lg font-extrabold text-[var(--brandColor)]">£{service.price}</span>
        </div>
      </div>
    </div>
  );
}
