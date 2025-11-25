"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar";
import MobileBottomNav from "./components/MobileBottomNav";
import ServicesGrid from "./components/ServicesGrid";
import Calendar from "./components/Calendar";
import TimeSlotSelector from "./components/TimeSlotSelector";
import BasicDetailsForm from "./components/BasicDetailsForm";
import SummarySection from "./components/SummarySection";
import SuccessPage from "./components/SuccessPage";

import { services } from "./data/services";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [slot, setSlot] = useState(null);

  const [details, setDetails] = useState({
    first: "",
    last: "",
    email: "",
    code: "+1",
    phone: "",
    note: "",
  });

  const handleDetailChange = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const timeSlots = {
    morning: ["09:00 am – 11:00 am", "11:00 am – 01:00 pm"],
    afternoon: ["01:00 pm – 03:00 pm", "03:00 pm – 05:00 pm"],
    evening: ["05:00 pm – 07:00 pm", "07:00 pm – 09:00 pm"],
  };

  const [bookingId, setBookingId] = useState(null);

  const handleBook = () => {
    const id = Math.floor(Math.random() * 900000) + 100000;
    setBookingId(id);
    setStep(5);
  };

  // Animation variants for page transition
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.25, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-[var(--bgLight)] pt-48 pb-24 px-3 sm:px-6">

      {/* Page Layout */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-6">

        {/* Desktop Sidebar */}
        <div className="w-full lg:w-64">
          <Sidebar currentStep={step} />
        </div>

        {/* Main Content */}
        <div className="flex-1">

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" {...pageVariants} className="space-y-6">
                <h1 className="text-2xl font-semibold text-[var(--textDark)]">Select Service</h1>

                <ServicesGrid
                  services={services}
                  onSelect={(srv) => {
                    setService(srv);
                    setStep(2);
                  }}
                />
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" {...pageVariants} className="space-y-6">
                <h1 className="text-2xl font-semibold text-[var(--textDark)]">Select Date & Time</h1>

                <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />

                {selectedDate && (
                  <TimeSlotSelector slots={timeSlots} selectedSlot={slot} onSelect={setSlot} />
                )}

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-lg border border-[var(--brandColor)] text-[var(--brandColor)] hover:bg-[var(--brandColorLight)] transition"
                  >
                    ← Back
                  </button>

                  <button
                    disabled={!selectedDate || !slot}
                    onClick={() => setStep(3)}
                    className={`px-6 py-3 rounded-lg text-white transition ${
                      selectedDate && slot
                        ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)]"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="step3" {...pageVariants} className="space-y-6">
                <h1 className="text-2xl font-semibold text-[var(--textDark)]">Basic Details</h1>

                <BasicDetailsForm details={details} onChange={handleDetailChange} />

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-lg border border-[var(--brandColor)] text-[var(--brandColor)] hover:bg-[var(--brandColorLight)] transition"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={() => setStep(4)}
                    className="px-6 py-3 rounded-lg bg-[var(--brandColor)] text-white hover:bg-[var(--brandColorDark)]"
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <motion.div key="step4" {...pageVariants} className="space-y-6">
                <h1 className="text-2xl font-semibold text-[var(--textDark)]">Summary</h1>

                <SummarySection
                  service={service}
                  date={selectedDate}
                  time={slot}
                  details={details}
                />

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-lg border border-[var(--brandColor)] text-[var(--brandColor)] hover:bg-[var(--brandColorLight)] transition"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={handleBook}
                    className="px-6 py-3 rounded-lg bg-[var(--brandColor)] text-white hover:bg-[var(--brandColorDark)]"
                  >
                    Confirm Appointment →
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <motion.div key="step5" {...pageVariants}>
                <SuccessPage
                  bookingId={bookingId}
                  service={service}
                  date={selectedDate}
                  time={slot}
                  details={details}
                />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav currentStep={step} setStep={setStep} />
    </div>
  );
}
