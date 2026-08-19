"use client";

import { Building2, Home, MapPin, Check } from "lucide-react";

export default function LocationTypeStep({ locationType, onSelect }) {
  const options = [
    {
      id: "clinic",
      title: "In-Clinic Visit",
      subtitle: "Visit White Cross Clinic at Meanwhile Garden Medical Centre",
      address: "Westbourne Park 5 Elkstone Rd, London W105NT",
      icon: Building2,
      fee: "Included",
      badge: "Standard",
      features: [
        "Professional sterile clinic environment",
        "Free parking & public transport access",
        "Immediate processing",
      ],
    },
    {
      id: "mobile",
      title: "Mobile Clinic / Home Visit",
      subtitle: "A certified medical professional travels to your home or office",
      address: "Greater London & Surrounding Areas",
      icon: Home,
      fee: "+ £35 Visit Fee",
      badge: "Convenient",
      features: [
        "Zero travel required for patient",
        "Complete privacy & safety",
        "Flexible scheduling window",
      ],
    },
  ];

  return (
    <div className="space-y-4 w-full">
      <div className="bg-white border border-gray-200 p-4 sm:p-5 space-y-1">
        <h2 className="text-lg font-bold text-gray-900">Choose Appointment Location</h2>
        <p className="text-xs text-gray-500">
          Select whether you prefer to visit our London medical clinic or receive a home visit from our mobile team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = locationType?.id === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => onSelect(opt)}
              className={`bg-white border p-5 flex flex-col justify-between transition-all cursor-pointer relative ${
                isSelected
                  ? "border-[var(--brandColor)] ring-2 ring-[var(--brandColor)]/20 shadow-sm bg-blue-50/20"
                  : "border-gray-200 hover:border-gray-400 hover:shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 bg-[var(--brandColorLight)] text-[var(--brandColor)] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2.5 py-0.5">
                    {opt.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-gray-900">{opt.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{opt.subtitle}</p>

                <div className="flex items-start gap-1.5 mt-3 pt-2.5 border-t border-gray-100 text-xs text-gray-600">
                  <MapPin size={13} className="text-[var(--brandColor)] shrink-0 mt-0.5" />
                  <span>{opt.address}</span>
                </div>

                <ul className="mt-3 space-y-1 pt-2.5 border-t border-gray-100">
                  {opt.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Check size={13} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Location Fee</span>
                <span className="text-base font-extrabold text-[var(--brandColor)]">{opt.fee}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
