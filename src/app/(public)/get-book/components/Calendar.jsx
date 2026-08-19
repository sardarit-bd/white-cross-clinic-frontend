"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar({ selectedDate, onSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(year, currentMonth.getMonth(), 1);
  const lastDay = new Date(year, currentMonth.getMonth() + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() + 1, 1));
  };

  const handleSelect = (day) => {
    const date = new Date(year, currentMonth.getMonth(), day);
    if (date >= today) onSelect(date);
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === year
    );
  };

  const isToday = (day) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === year
    );
  };

  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-5 w-full shadow-xs">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <button
          onClick={prevMonth}
          className="p-1.5 border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Previous Month"
        >
          <ChevronLeft className="text-gray-700" size={16} />
        </button>

        <h2 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
          {monthName} {year}
        </h2>

        <button
          onClick={nextMonth}
          className="p-1.5 border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Next Month"
        >
          <ChevronRight className="text-gray-700" size={16} />
        </button>
      </div>

      {/* Week Day Names */}
      <div className="grid grid-cols-7 text-center text-gray-400 text-[11px] font-bold uppercase mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={i} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, currentMonth.getMonth(), day);
          const disabled = date < today;

          return (
            <button
              key={day}
              onClick={() => !disabled && handleSelect(day)}
              className={`py-2 text-xs font-semibold border transition-all cursor-pointer ${
                disabled
                  ? "text-gray-300 border-transparent bg-gray-50/50 cursor-not-allowed"
                  : isSelected(day)
                  ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)] shadow-xs"
                  : isToday(day)
                  ? "border-[var(--brandColor)] text-[var(--brandColor)] bg-blue-50/30"
                  : "border-gray-100 text-gray-800 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
