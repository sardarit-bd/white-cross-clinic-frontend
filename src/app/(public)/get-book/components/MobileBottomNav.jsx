"use client";

import { motion } from "framer-motion";
import { ClipboardList, Calendar, User, CheckCircle2, MapPin } from "lucide-react";

export default function MobileBottomNav({ currentStep, setStep }) {
  const steps = [
    { id: 1, label: "Service", icon: ClipboardList },
    { id: 2, label: "Visit", icon: MapPin },
    { id: 3, label: "Date", icon: Calendar },
    { id: 4, label: "Details", icon: User },
    { id: 5, label: "Pay", icon: CheckCircle2 },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 flex justify-around items-center py-2.5 lg:hidden">
      {steps.map((step) => {
        const Icon = step.icon;
        const active = currentStep === step.id;

        return (
          <button
            key={step.id}
            onClick={() => setStep(step.id)}
            className="flex flex-col items-center gap-1 cursor-pointer focus:outline-none"
          >
            <div
              className={`w-9 h-9 flex items-center justify-center transition-all ${
                active
                  ? "bg-[var(--brandColor)] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Icon size={18} />
            </div>

            <span
              className={`text-[10px] font-bold ${
                active ? "text-[var(--brandColor)]" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
