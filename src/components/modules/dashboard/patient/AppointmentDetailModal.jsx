"use client";

import { X, User, Calendar, Clock, MapPin } from "lucide-react";

export default function AppointmentDetailModal({
  appointment,
  onClose,
  onCancelAppointment,
}) {
  if (!appointment) return null;

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
      className="fixed inset-0 bg-black/30 bg-opacity-40 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[var(--textLight)] hover:text-[var(--textDark)]"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold text-[var(--textDark)] mb-4">
          Appointment Details
        </h2>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User className="text-[var(--brandColor)]" />
            <div>
              <p className="font-semibold">{appointment.doctorName}</p>
              <p className="text-sm text-[var(--textLight)]">
                {appointment.specialization}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-[var(--brandColor)]" />
            <span>{appointment.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-[var(--brandColor)]" />
            <span>{appointment.time}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-[var(--brandColor)]" />
            <span>{appointment.location}</span>
          </div>

          <div>
            <strong>Reason:</strong> {appointment.reason}
          </div>

          <div>
            <strong>Status:</strong>{" "}
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                appointment.status
              )}`}
            >
              {appointment.status}
            </span>
          </div>
        </div>

        {appointment.status === "Upcoming" && (
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => onCancelAppointment(appointment.id)}
              className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Cancel Appointment
            </button>
            <button className="flex-1 bg-[var(--brandColor)] text-white py-2 rounded-lg hover:bg-[var(--brandColorDark)] transition">
              Reschedule
            </button>
          </div>
        )}
      </div>
    </div>
  );
}