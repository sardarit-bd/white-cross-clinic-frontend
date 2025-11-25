"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar({ selectedDate, onSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate days of month
  const firstDay = new Date(year, currentMonth.getMonth(), 1);
  const lastDay = new Date(year, currentMonth.getMonth() + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay(); // 0 = Sun

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
    <div className="bg-white border border-[var(--borderLight)] rounded-2xl shadow-card p-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-[var(--brandColorLight)]"
        >
          <ChevronLeft className="text-[var(--brandColor)]" size={20} />
        </button>

        <h2 className="text-lg font-semibold text-[var(--textDark)]">
          {monthName} {year}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-[var(--brandColorLight)]"
        >
          <ChevronRight className="text-[var(--brandColor)]" size={20} />
        </button>
      </div>

      {/* Week Names */}
      <div className="grid grid-cols-7 text-center text-[var(--textLight)] text-sm font-medium mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">

        {/* Empty spaces before first day */}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={i}></div>
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, currentMonth.getMonth(), day);
          const disabled = date < today;

          return (
            <button
              key={day}
              onClick={() => !disabled && handleSelect(day)}
              className={`
                py-2 rounded-lg transition 
                ${
                  disabled
                    ? "text-[var(--textLight)] opacity-40 cursor-not-allowed"
                    : "hover:bg-[var(--brandColorLight)]"
                }
                ${
                  isSelected(day)
                    ? "bg-[var(--brandColor)] text-white"
                    : isToday(day)
                    ? "border border-[var(--brandColor)] text-[var(--brandColor)]"
                    : "text-[var(--textDark)]"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
