"use client";

import { CheckCircle2, CalendarPlus, Printer, Home, Download } from "lucide-react";
import Link from "next/link";

export default function SuccessPage({ bookingId, service, locationType, date, time, details, paymentMethod }) {
  const formattedDate = date?.toLocaleDateString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const locationFee = locationType?.id === "mobile" ? 35 : 0;
  const totalPrice = (service?.price || 0) + locationFee;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white border border-gray-200 p-8 md:p-12 text-center space-y-6 shadow-sm">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 border-2 border-emerald-500 flex items-center justify-center">
          <CheckCircle2 size={44} />
        </div>
      </div>

      {/* Heading */}
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1">
          Appointment Confirmed
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 pt-2">
          Thank You, {details?.first}!
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto pt-1">
          Your medical appointment has been successfully scheduled. A confirmation email and SMS have been sent to your inbox.
        </p>
      </div>

      {/* Booking Reference Box */}
      <div className="inline-block bg-[#0A111E] text-white px-6 py-3 border border-slate-800">
        <p className="text-xs text-slate-400 uppercase tracking-wider">Booking Reference</p>
        <p className="text-xl font-extrabold text-[var(--brandColor)] tracking-widest mt-0.5">
          #WCC-{bookingId}
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-slate-50 p-6 border border-gray-200 max-w-xl mx-auto space-y-4 text-left">
        <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
          Appointment Summary
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-gray-500 font-medium">Service:</span>
            <p className="font-bold text-gray-900">{service?.title}</p>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Visit Type:</span>
            <p className="font-bold text-gray-900">{locationType?.title || "In-Clinic Visit"}</p>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Date & Time:</span>
            <p className="font-bold text-gray-900">{formattedDate}</p>
            <p className="text-gray-600 font-semibold">{time}</p>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Total Amount:</span>
            <p className="font-extrabold text-sm text-[var(--brandColor)]">£{totalPrice}</p>
            <p className="text-[11px] text-gray-500">
              Payment: {paymentMethod === "card" ? "Paid Online" : "Pay on Visit Day"}
            </p>
          </div>
        </div>

        {/* Patient Details */}
        <div className="pt-3 border-t border-gray-200 text-xs space-y-1">
          <p className="font-bold text-gray-900">Patient Details:</p>
          <p className="text-gray-700">{details?.first} {details?.last} • {details?.email} • {details?.code} {details?.phone}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4 pt-4 flex-wrap">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold text-xs px-5 py-3 transition cursor-pointer"
        >
          <Printer size={16} />
          <span>Print Receipt</span>
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white font-semibold text-xs px-6 py-3 transition cursor-pointer"
        >
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
