"use client";

import { CheckCircle2, CalendarPlus } from "lucide-react";

export default function SuccessPage({ bookingId, service, date, time, details }) {
  const formattedDate = date?.toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full bg-white border border-[var(--borderLight)] rounded-2xl shadow-card p-10 text-center space-y-6">

      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-[var(--brandColorLight)] flex items-center justify-center">
          <CheckCircle2 size={50} className="text-[var(--brandColor)]" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-[var(--textDark)]">
        Thank you!
      </h1>

      <p className="text-[var(--textLight)] text-lg">
        Your appointment has been booked successfully.
      </p>

      {/* Booking ID */}
      <p className="font-semibold text-[var(--brandColor)] text-lg">
        Booking ID: #{bookingId}
      </p>

      {/* Summary Box */}
      <div className="bg-[var(--bgLight)] p-6 rounded-xl border border-[var(--borderLight)] max-w-lg mx-auto space-y-3 text-left">

        <h3 className="font-semibold text-[var(--textDark)] text-lg mb-2">
          Booking Details
        </h3>

        <p><strong>Service:</strong> {service?.title}</p>
        <p><strong>Date:</strong> {formattedDate}</p>
        <p><strong>Time:</strong> {time}</p>

        <p className="mt-3">
          <strong>Name:</strong> {details?.first} {details?.last}
        </p>
        <p><strong>Email:</strong> {details?.email}</p>
        <p><strong>Phone:</strong> {details?.code} {details?.phone}</p>

        {details?.note && (
          <p className="mt-2">
            <strong>Note:</strong> {details.note}
          </p>
        )}

      </div>

      {/* Calendar Buttons */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">

        
        {/* <button className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-5 py-3 rounded-lg hover:bg-[var(--brandColorDark)] transition">
          <CalendarPlus size={20} />
          Add to Google Calendar
        </button>

        <button className="flex items-center gap-2 bg-white border border-[var(--brandColor)] text-[var(--brandColor)] px-5 py-3 rounded-lg hover:bg-[var(--brandColorLight)] transition">
          <CalendarPlus size={20} />
          Add to Apple Calendar
        </button> */}

      </div>
    </div>
  );
}
