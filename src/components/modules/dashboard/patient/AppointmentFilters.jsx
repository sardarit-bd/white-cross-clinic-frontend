"use client";

import { Search } from "lucide-react";

export default function AppointmentFilters({
  searchTerm,
  onSearchChange,
  filterStatus,
  onStatusChange,
  filterDate,
  onDateChange,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search
            size={18}
            className="absolute left-3 top-3 text-[var(--textLight)]"
          />
          <input
            type="text"
            placeholder="Search doctor..."
            className="pl-10 border border-[var(--borderLight)] rounded-lg px-3 py-2 w-full text-sm"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <select
          className="border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm"
          value={filterStatus}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <input
          type="date"
          className="border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm"
          value={filterDate}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>
    </div>
  );
}