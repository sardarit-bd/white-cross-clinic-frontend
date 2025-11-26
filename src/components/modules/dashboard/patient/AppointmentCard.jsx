"use client";

import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

export default function AppointmentCard({ appointment, onClick }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-600";
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)] hover:shadow-lg transition cursor-pointer"
      onClick={() => onClick(appointment)}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="font-semibold text-[var(--textDark)]">
            {appointment.doctorName}
          </h3>
          <p className="text-sm text-[var(--textLight)]">
            {appointment.specialization}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
            <Calendar size={16} />
            {appointment.date}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
            <Clock size={16} />
            {appointment.time}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
            <MapPin size={16} />
            {appointment.location}
          </div>
        </div>

        <div className="text-right space-y-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
              appointment.status
            )}`}
          >
            {appointment.status}
          </span>
          <ChevronRight className="text-[var(--textLight)] ml-auto" />
        </div>
      </div>
    </div>
  );
}