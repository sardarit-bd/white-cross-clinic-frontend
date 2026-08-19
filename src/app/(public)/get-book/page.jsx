"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import BasicDetailsForm from "./components/BasicDetailsForm";
import Calendar from "./components/Calendar";
import HorizontalStepper from "./components/HorizontalStepper";
import LocationTypeStep from "./components/LocationTypeStep";
import MobileBottomNav from "./components/MobileBottomNav";
import ServicesGrid from "./components/ServicesGrid";
import SuccessPage from "./components/SuccessPage";
import SummarySection from "./components/SummarySection";
import TimeSlotSelector from "./components/TimeSlotSelector";
import { services } from "./data/services";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(services[0]); // default selected service
  const [locationType, setLocationType] = useState({
    id: "clinic",
    title: "In-Clinic Visit",
    fee: "Included",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("clinic");

  const [details, setDetails] = useState({
    first: "",
    last: "",
    email: "",
    code: "+44",
    phone: "",
    gender: "male",
    dob: "",
    note: "",
  });

  const handleDetailChange = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const timeSlots = {
    morning: ["09:00 AM – 10:00 AM", "10:00 AM – 11:00 AM", "11:00 AM – 12:00 PM"],
    afternoon: ["01:00 PM – 02:00 PM", "02:00 PM – 03:00 PM", "03:00 PM – 04:00 PM"],
    evening: ["05:00 PM – 06:00 PM", "06:00 PM – 07:00 PM", "07:00 PM – 08:00 PM"],
  };

  const [bookingId, setBookingId] = useState(null);

  const handleBook = () => {
    const id = Math.floor(Math.random() * 900000) + 100000;
    setBookingId(id);
    setStep(6);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.2 },
  };

  const locationFee = locationType?.id === "mobile" ? 35 : 0;
  const totalPrice = (service?.price || 0) + locationFee;

  return (
    <div className="min-h-screen bg-slate-50 pt-6 pb-24">
      <div className="container mx-auto space-y-5 px-9">
        {/* Compact Banner Header */}
        <div className="bg-[#0A111E] text-white p-5 sm:p-6 border-b-2 border-[var(--brandColor)] space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[var(--brandColor)]/20 text-[var(--brandColor)] text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck size={13} />
            <span>Universal Medical Booking</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Book Medical Test & Consultation
          </h1>
          <p className="text-xs text-slate-300 max-w-xl">
            Select your service, choose in-clinic or home visit, pick your preferred date & time, and confirm your booking.
          </p>
        </div>

        {/* Top Horizontal Progress Stepper Bar */}
        {step < 6 && (
          <HorizontalStepper currentStep={step} setStep={setStep} />
        )}

        {/* Main 2-Column Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left Main Wizard Content Area */}
          <div className="flex-1 w-full space-y-5">
            <AnimatePresence mode="wait">
              {/* STEP 1: SERVICE SELECTION */}
              {step === 1 && (
                <motion.div key="step1" {...pageVariants} className="space-y-4">
                  <div className="bg-white p-4 sm:p-5 border border-gray-200 space-y-0.5">
                    <h2 className="text-base font-bold text-gray-900">Step 1: Select Service or Lab Test</h2>
                    <p className="text-xs text-gray-500">
                      Choose from our CQC-regulated healthcare services, blood tests, and screenings.
                    </p>
                  </div>

                  <ServicesGrid
                    services={services}
                    selectedService={service}
                    onSelect={(srv) => setService(srv)}
                  />
                </motion.div>
              )}

              {/* STEP 2: LOCATION / VISIT TYPE */}
              {step === 2 && (
                <motion.div key="step2" {...pageVariants} className="space-y-4">
                  <LocationTypeStep
                    locationType={locationType}
                    onSelect={(opt) => setLocationType(opt)}
                  />
                </motion.div>
              )}

              {/* STEP 3: DATE & TIME SLOT */}
              {step === 3 && (
                <motion.div key="step3" {...pageVariants} className="space-y-4">
                  <div className="bg-white p-4 sm:p-5 border border-gray-200 space-y-0.5">
                    <h2 className="text-base font-bold text-gray-900">Step 3: Select Date & Time Slot</h2>
                    <p className="text-xs text-gray-500">
                      Pick a date on the calendar and choose your preferred appointment time.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />

                    {selectedDate ? (
                      <TimeSlotSelector
                        slots={timeSlots}
                        selectedSlot={slot}
                        onSelect={setSlot}
                      />
                    ) : (
                      <div className="bg-white border border-gray-200 p-8 text-center text-gray-400 flex flex-col items-center justify-center space-y-1.5">
                        <p className="font-semibold text-xs text-gray-600">No Date Selected</p>
                        <p className="text-[11px] text-gray-400">Please click a date on the calendar first to view time slots.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: PATIENT DETAILS */}
              {step === 4 && (
                <motion.div key="step4" {...pageVariants} className="space-y-4">
                  <BasicDetailsForm details={details} onChange={handleDetailChange} />
                </motion.div>
              )}

              {/* STEP 5: REVIEW & SUMMARY */}
              {step === 5 && (
                <motion.div key="step5" {...pageVariants} className="space-y-4">
                  <SummarySection
                    service={service}
                    locationType={locationType}
                    date={selectedDate}
                    time={slot}
                    details={details}
                    paymentMethod={paymentMethod}
                    onPaymentChange={setPaymentMethod}
                  />
                </motion.div>
              )}

              {/* STEP 6: BOOKING SUCCESS */}
              {step === 6 && (
                <motion.div key="step6" {...pageVariants}>
                  <SuccessPage
                    bookingId={bookingId}
                    service={service}
                    locationType={locationType}
                    date={selectedDate}
                    time={slot}
                    details={details}
                    paymentMethod={paymentMethod}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Live Summary & Action Control Panel (Steps 1 to 5) */}
          {step < 6 && (
            <div className="w-full lg:w-80 xl:w-96 shrink-0 sticky top-28 space-y-4">
              <div className="bg-white border border-gray-200 p-5 space-y-4 shadow-xs">
                <div className="border-b border-gray-100 pb-2.5">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900">
                    Live Booking Summary
                  </h3>
                  <p className="text-[11px] text-gray-400">Real-time selection breakdown</p>
                </div>

                {service && (
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Service</span>
                    <p className="font-bold text-xs text-gray-900">{service.title}</p>
                    <p className="text-[11px] text-gray-500">{service.duration} mins • £{service.price}</p>
                  </div>
                )}

                {locationType && (
                  <div className="pt-2 border-t border-gray-100 space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Visit Type</span>
                    <p className="font-bold text-xs text-gray-900">{locationType.title}</p>
                    <p className="text-[11px] text-gray-500">{locationType.fee}</p>
                  </div>
                )}

                {selectedDate && (
                  <div className="pt-2 border-t border-gray-100 space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date & Time</span>
                    <p className="font-bold text-xs text-gray-900">
                      {selectedDate.toLocaleDateString("default", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                    <p className="text-[11px] text-[var(--brandColor)] font-semibold">{slot || "Select time slot"}</p>
                  </div>
                )}

                <div className="pt-3 border-t-2 border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-900">Total Price</span>
                  <span className="text-lg font-extrabold text-[var(--brandColor)]">£{totalPrice}</span>
                </div>

                {/* Wizard Action Controls */}
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  {step === 1 && (
                    <button
                      disabled={!service}
                      onClick={() => setStep(2)}
                      className={`w-full py-3 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition ${service
                        ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white shadow-xs"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                      <span>Continue to Location</span>
                      <ArrowRight size={15} />
                    </button>
                  )}

                  {step === 2 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3 text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        <span>Back</span>
                      </button>

                      <button
                        onClick={() => setStep(3)}
                        className="w-2/3 py-3 text-xs font-semibold bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Date & Time</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStep(2)}
                        className="w-1/3 py-3 text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        <span>Back</span>
                      </button>

                      <button
                        disabled={!selectedDate || !slot}
                        onClick={() => setStep(4)}
                        className={`w-2/3 py-3 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer transition ${selectedDate && slot
                          ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          }`}
                      >
                        <span>Patient Info</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStep(3)}
                        className="w-1/3 py-3 text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        <span>Back</span>
                      </button>

                      <button
                        disabled={!details.first || !details.email || !details.phone}
                        onClick={() => setStep(5)}
                        className={`w-2/3 py-3 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer transition ${details.first && details.email && details.phone
                          ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          }`}
                      >
                        <span>Review Order</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStep(4)}
                        className="w-1/3 py-3 text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        <span>Back</span>
                      </button>

                      <button
                        onClick={handleBook}
                        className="w-2/3 py-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      >
                        <span>Book Now</span>
                        <CheckCircle size={15} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav currentStep={step} setStep={setStep} />
    </div>
  );
}
