"use client";
import { useEffect, useState } from "react";

export default function DoctorStatsCards() {
  const stats = [
    { title: "Total Patients", value: 124, color: "var(--brandColor)" },
    { title: "Appointments This Week", value: 38, color: "var(--brandAccent)" },
    { title: "Articles Written", value: 12, color: "var(--brandColorDark)" },
    { title: "Appointments Today", value: 21, color: "var(--brandRed)" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </div>
  );
}

/* ---------------------------
   Individual Stat Card
---------------------------- */
function StatCard({ title, value, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let duration = 1200; // animation speed
    let incrementTime = 20;

    let step = Math.ceil((end - start) / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div
      className="rounded-2xl p-6 bg-white shadow-[var(--shadowCard)] 
                 hover:shadow-lg transition-all 
                 flex flex-col justify-center min-h-[120px]"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <h3 className="text-sm text-[var(--textLight)]">{title}</h3>

      {/* Animated Counter Number */}
      <p
        className="text-3xl md:text-4xl font-extrabold mt-2 text-[var(--textDark)] tracking-wide
                   transition-all"
      >
        {count}
      </p>
    </div>
  );
}
