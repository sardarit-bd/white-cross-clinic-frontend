"use client";

import { ClipboardList, MapPin, Calendar, User, ShieldCheck, Check } from "lucide-react";

export default function HorizontalStepper({ currentStep, setStep }) {
  const steps = [
    { id: 1, label: "Select Service", icon: ClipboardList },
    { id: 2, label: "Visit Location", icon: MapPin },
    { id: 3, label: "Date & Time", icon: Calendar },
    { id: 4, label: "Patient Details", icon: User },
    { id: 5, label: "Review & Pay", icon: ShieldCheck },
  ];

  return (
    <div className="bg-white border border-gray-200 p-4 shadow-xs mb-6">
      <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none py-1">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => isCompleted && setStep(step.id)}
                disabled={!isCompleted && !isActive}
                className={`flex items-center gap-2.5 px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0A111E] text-white shadow-xs"
                    : isCompleted
                    ? "bg-slate-100 text-gray-900 hover:bg-slate-200"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center text-[11px] font-extrabold shrink-0 ${
                    isActive
                      ? "bg-[var(--brandColor)] text-white"
                      : isCompleted
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isCompleted ? <Check size={14} /> : step.id}
                </div>

                <span className="whitespace-nowrap">
                  {step.label}
                </span>
              </button>

              {idx < steps.length - 1 && (
                <div
                  className={`h-0.5 w-6 sm:w-10 shrink-0 ${
                    currentStep > step.id ? "bg-emerald-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
