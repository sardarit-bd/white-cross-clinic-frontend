"use client";
import { useEffect, useState } from "react";

export default function AppointmentsChart({ data = [] }) {
  /**
   * data shape:
   * [
   *   { day: "Mon", value: 10 },
   *   { day: "Tue", value: 5 },
   *   { day: "Wed", value: 12 },
   *   { day: "Thu", value: 7 },
   *   { day: "Fri", value: 14 },
   *   { day: "Sat", value: 4 },
   *   { day: "Sun", value: 9 },
   * ]
   */

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="p-5 bg-white rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[var(--textDark)]">
          Weekly Appointments Overview
        </h2>
        <span className="text-sm text-[var(--textLight)]">
          (Daily appointment count)
        </span>
      </div>

      <div className="w-full h-96">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">

          {/* Grid Lines */}
          {[45, 35, 25, 15, 5].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="#eee" />
          ))}

          {/* Bars */}
          {data.map((d, i) => {
            const barWidth = 100 / data.length - 4;
            const x = i * (100 / data.length) + 2;
            const height = (d.value / maxValue) * 40;
            const y = 48 - height;

            return (
              <g key={i}>
                {/* Value above bar */}
                <text
                  x={x + barWidth / 2}
                  y={y - 1}
                  fontSize="3"
                  textAnchor="middle"
                  fill="var(--textLight)"
                >
                  {d.value}
                </text>

                {/* Animated bar */}
                <rect
                  x={x}
                  y={animate ? y : 48}
                  width={barWidth}
                  height={animate ? height : 0}
                  fill="var(--brandColor)"
                  rx="1"
                  style={{
                    transition: `all 0.7s ease ${i * 0.1}s`,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Day labels */}
        <div className="grid grid-cols-7 mt-1 text-center text-xs text-[var(--textLight)]">
          {data.map((d, i) => (
            <span key={i}>{d.day}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
