"use client";

import { motion } from "framer-motion";
import { Calendar, User, ClipboardList, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";

export default function Sidebar({ currentStep }) {
  const steps = [
    { id: 1, label: "Select Service", icon: ClipboardList, desc: "Choose clinic or lab test" },
    { id: 2, label: "Visit Location", icon: MapPin, desc: "Clinic or Mobile Visit" },
    { id: 3, label: "Date & Time", icon: Calendar, desc: "Select preferred slot" },
    { id: 4, label: "Patient Details", icon: User, desc: "Personal info & notes" },
    { id: 5, label: "Review & Pay", icon: ShieldCheck, desc: "Confirm booking" },
  ];

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:block w-72 sticky top-28 bg-white border border-gray-200 shadow-sm p-5 space-y-6"
    >
      {/* Header */}
      <div className="border-b border-gray-100 pb-4">
        <h3 className="font-extrabold text-sm uppercase tracking-wider text-gray-900">
          Booking Progress
        </h3>
        <p className="text-xs text-gray-500 mt-1">Complete steps to confirm appointment</p>
      </div>

      {/* Step Items */}
      <nav className="space-y-2">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className={`flex items-center gap-3.5 p-3 transition-all ${
                isActive
                  ? "bg-[#0A111E] text-white border-l-4 border-[var(--brandColor)]"
                  : isCompleted
                  ? "bg-slate-50 text-gray-900 border-l-4 border-emerald-500"
                  : "bg-white text-gray-400 border-l-4 border-gray-100"
              }`}
            >
              <div
                className={`w-9 h-9 flex items-center justify-center font-bold text-xs shrink-0 ${
                  isActive
                    ? "bg-[var(--brandColor)] text-white"
                    : isCompleted
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {isCompleted ? <CheckCircle2 size={18} /> : <Icon size={18} />}
              </div>

              <div className="flex flex-col">
                <span className={`text-xs font-bold ${isActive ? "text-white" : "text-gray-800"}`}>
                  Step {step.id}: {step.label}
                </span>
                <span className={`text-[11px] ${isActive ? "text-slate-300" : "text-gray-400"}`}>
                  {step.desc}
                </span>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Trust Badge Note */}
      <div className="bg-[#F5F7FA] p-3.5 border border-gray-200 text-xs text-gray-600 space-y-1">
        <p className="font-bold text-gray-900 flex items-center gap-1.5">
          <ShieldCheck size={16} className="text-[var(--brandColor)]" />
          <span>CQC Regulated Clinic</span>
        </p>
        <p className="text-[11px] leading-tight text-gray-500">
          All bookings are 100% confidential & backed by UK registered GPs.
        </p>
      </div>
    </motion.aside>
  );
}
