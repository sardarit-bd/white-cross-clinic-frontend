"use client";

import { motion } from "framer-motion";
import { ClipboardList, Calendar, User, CheckCircle2 } from "lucide-react";

export default function MobileBottomNav({ currentStep, setStep }) {
  const steps = [
    { id: 1, label: "Service", icon: ClipboardList },
    { id: 2, label: "Date", icon: Calendar },
    { id: 3, label: "Details", icon: User },
    { id: 4, label: "Summary", icon: CheckCircle2 },
  ];

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        fixed bottom-0 left-0 right-0 
        bg-white border-t border-[var(--borderLight)] 
        shadow-lg z-50 
        flex justify-around items-center py-3 
        lg:hidden
      "
    >
      {steps.map((step) => {
        const Icon = step.icon;
        const active = currentStep === step.id;

        return (
          <button
            key={step.id}
            onClick={() => setStep(step.id)}
            className="flex flex-col items-center gap-1"
          >
            <motion.div
              animate={active ? { scale: 1.15 } : { scale: 1 }}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full
                transition
                ${
                  active
                    ? "bg-[var(--brandColor)] text-white"
                    : "bg-[var(--brandColorLight)] text-[var(--brandColorDark)]"
                }
              `}
            >
              <Icon size={20} />
            </motion.div>

            <span
              className={`
                text-xs font-medium transition
                ${
                  active
                    ? "text-[var(--brandColor)]"
                    : "text-[var(--textLight)]"
                }
              `}
            >
              {step.label}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
