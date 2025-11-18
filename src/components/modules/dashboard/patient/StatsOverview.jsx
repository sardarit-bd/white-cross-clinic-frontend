"use client";

export default function StatsOverview({ appointments }) {
  const upcomingCount = appointments.filter(a => a.status === "Upcoming").length;
  const completedCount = appointments.filter(a => a.status === "Completed").length;

  return (
    <div className="flex gap-4 flex-wrap">
      <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)] min-w-[120px]">
        <p className="text-sm text-[var(--textLight)]">Upcoming</p>
        <p className="text-xl font-bold text-[var(--brandColor)]">
          {upcomingCount}
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)] min-w-[120px]">
        <p className="text-sm text-[var(--textLight)]">Completed</p>
        <p className="text-xl font-bold text-green-600">
          {completedCount}
        </p>
      </div>
    </div>
  );
}