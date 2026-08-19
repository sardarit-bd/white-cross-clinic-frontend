"use client";

import { Sun, SunMedium, Moon, Clock } from "lucide-react";

export default function TimeSlotSelector({ slots, selectedSlot, onSelect }) {
  const sections = [
    { title: "Morning Slots", icon: Sun, list: slots.morning },
    { title: "Afternoon Slots", icon: SunMedium, list: slots.afternoon },
    { title: "Evening Slots", icon: Moon, list: slots.evening },
  ];

  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-5 space-y-4 shadow-xs w-full">
      <div className="border-b border-gray-100 pb-2.5 flex items-center justify-between">
        <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Clock size={15} className="text-[var(--brandColor)]" />
          <span>Available Time Slots</span>
        </h3>
        <span className="text-[11px] text-gray-400">London Local (GMT)</span>
      </div>

      {sections.map((section, idx) => {
        const Icon = section.icon;

        if (!section.list || section.list.length === 0) return null;

        return (
          <div key={idx} className="space-y-2">
            <h4 className="text-[11px] font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
              <Icon size={14} className="text-amber-500" />
              <span>{section.title}</span>
            </h4>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {section.list.map((time) => {
                const isSelected = selectedSlot === time;

                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => onSelect(time)}
                    className={`px-3 py-2.5 text-xs font-semibold border transition-all cursor-pointer text-center ${
                      isSelected
                        ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)] shadow-xs"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
