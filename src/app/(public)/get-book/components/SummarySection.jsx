"use client";

import { Calendar, Clock, User, Mail, Phone, MapPin, CreditCard, Building } from "lucide-react";

export default function SummarySection({ service, locationType, date, time, details, paymentMethod, onPaymentChange }) {
  if (!service || !date || !time) return null;

  const formattedDate = date.toLocaleDateString("default", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const locationFee = locationType?.id === "mobile" ? 35 : 0;
  const totalPrice = service.price + locationFee;

  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs w-full">
      <div className="border-b border-gray-100 pb-2.5">
        <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
          Review & Confirm Booking
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Please verify your appointment details below before confirming.
        </p>
      </div>

      {/* Service & Price Summary Card */}
      <div className="bg-slate-50 border-l-4 border-[var(--brandColor)] p-4 space-y-2.5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-base font-bold text-gray-900">{service.title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{service.subtitle}</p>
          </div>
          <span className="text-lg font-extrabold text-[var(--brandColor)]">£{service.price}</span>
        </div>

        {locationType && (
          <div className="flex justify-between items-center text-xs text-gray-600 pt-2 border-t border-gray-200">
            <span>Location ({locationType.title})</span>
            <span className="font-semibold text-gray-900">
              {locationFee > 0 ? `+ £${locationFee}` : "Included"}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center text-xs sm:text-sm font-extrabold text-gray-900 pt-2 border-t border-gray-300">
          <span>Total Payable Amount</span>
          <span className="text-lg sm:text-xl text-[var(--brandColor)]">£{totalPrice}</span>
        </div>
      </div>

      {/* Date, Time & Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Date */}
        <div className="bg-white p-3 border border-gray-200 space-y-0.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--brandColor)]">
            <Calendar size={14} />
            <span>Date</span>
          </div>
          <p className="font-semibold text-xs text-gray-900">{formattedDate}</p>
        </div>

        {/* Time */}
        <div className="bg-white p-3 border border-gray-200 space-y-0.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--brandColor)]">
            <Clock size={14} />
            <span>Time Slot</span>
          </div>
          <p className="font-semibold text-xs text-gray-900">{time}</p>
        </div>

        {/* Location */}
        <div className="bg-white p-3 border border-gray-200 space-y-0.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--brandColor)]">
            <MapPin size={14} />
            <span>Visit Type</span>
          </div>
          <p className="font-semibold text-xs text-gray-900">{locationType?.title || "In-Clinic"}</p>
        </div>
      </div>

      {/* Patient Information Card */}
      <div className="bg-white p-4 border border-gray-200 space-y-2.5">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 border-b border-gray-100 pb-2">
          Patient Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <User size={14} className="text-[var(--brandColor)] shrink-0" />
            <span className="font-semibold">{details.first} {details.last}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[var(--brandColor)] shrink-0" />
            <span>{details.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[var(--brandColor)] shrink-0" />
            <span>{details.code} {details.phone}</span>
          </div>
        </div>

        {details.note && (
          <div className="text-xs text-gray-600 bg-gray-50 p-2.5 border border-gray-200 mt-2">
            <span className="font-bold text-gray-800">Special Notes: </span>
            <span>{details.note}</span>
          </div>
        )}
      </div>

      {/* Payment Selection */}
      <div className="space-y-2.5 pt-1">
        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">
          Select Payment Method
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            onClick={() => onPaymentChange("clinic")}
            className={`p-3 border cursor-pointer flex items-center gap-2.5 transition-all ${
              paymentMethod === "clinic"
                ? "border-[var(--brandColor)] bg-blue-50/30 ring-2 ring-[var(--brandColor)]/20"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Building size={18} className="text-[var(--brandColor)] shrink-0" />
            <div>
              <p className="font-bold text-xs text-gray-900">Pay at Clinic / Visit</p>
              <p className="text-[11px] text-gray-500">Pay cash or card on appointment day</p>
            </div>
          </div>

          <div
            onClick={() => onPaymentChange("card")}
            className={`p-3 border cursor-pointer flex items-center gap-2.5 transition-all ${
              paymentMethod === "card"
                ? "border-[var(--brandColor)] bg-blue-50/30 ring-2 ring-[var(--brandColor)]/20"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <CreditCard size={18} className="text-[var(--brandColor)] shrink-0" />
            <div>
              <p className="font-bold text-xs text-gray-900">Pay Online Now</p>
              <p className="text-[11px] text-gray-500">Instant secure card payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
