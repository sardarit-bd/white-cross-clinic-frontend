"use client";

import { Calendar, Clock, User, Mail, Phone } from "lucide-react";

export default function SummarySection({ service, date, time, details }) {
  if (!service || !date || !time) return null;

  const formattedDate = date.toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white border border-[var(--borderLight)] rounded-2xl shadow-card p-6 w-full space-y-6">

      {/* Service Summary */}
      <div className="border-l-4 border-[var(--brandColor)] pl-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)] mb-1">
          {service.title}
        </h2>
        <p className="text-[var(--textLight)] text-sm">
          {service.duration} minutes
        </p>
        <p className="text-[var(--brandColor)] font-bold text-lg mt-1">
          ${service.price}
        </p>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Date */}
        <div className="flex items-center gap-3 bg-[var(--bgLight)] p-4 rounded-xl border border-[var(--borderLight)]">
          <Calendar className="text-[var(--brandColor)]" size={22} />
          <div>
            <p className="text-sm text-[var(--textLight)]">Date</p>
            <p className="font-semibold text-[var(--textDark)]">{formattedDate}</p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3 bg-[var(--bgLight)] p-4 rounded-xl border border-[var(--borderLight)]">
          <Clock className="text-[var(--brandColor)]" size={22} />
          <div>
            <p className="text-sm text-[var(--textLight)]">Time</p>
            <p className="font-semibold text-[var(--textDark)]">{time}</p>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="bg-[var(--bgLight)] p-4 rounded-xl border border-[var(--borderLight)] space-y-3">
        <h3 className="font-semibold text-[var(--textDark)] text-lg">Your Details</h3>

        {/* Name */}
        <div className="flex items-center gap-3">
          <User className="text-[var(--brandColor)]" size={20} />
          <p className="text-[var(--textDark)] font-medium">
            {details.first} {details.last}
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="text-[var(--brandColor)]" size={20} />
          <p className="text-[var(--textDark)] font-medium">{details.email}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="text-[var(--brandColor)]" size={20} />
          <p className="text-[var(--textDark)] font-medium">
            {details.code} {details.phone}
          </p>
        </div>

        {/* Notes */}
        {details.note && (
          <div className="mt-2 text-[var(--textDark)]">
            <p className="font-medium">Notes:</p>
            <p className="text-[var(--textLight)]">{details.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
