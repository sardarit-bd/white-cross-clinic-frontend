"use client";

import { motion } from "framer-motion";
import { Calendar, User, ClipboardList, CheckCircle2, Cog } from "lucide-react";

export default function Sidebar({ currentStep }) {
  const steps = [
    { id: 1, label: "Service", icon: ClipboardList },
    { id: 2, label: "Date & Time", icon: Calendar },
    { id: 3, label: "Basic Details", icon: User },
    { id: 4, label: "Summary", icon: Cog },
  ];

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="hidden lg:block w-64 h-[85vh] sticky top-28 bg-white shadow-card border border-[var(--borderLight)] rounded-xl p-6"
    >
      <nav className="space-y-4">

        {steps.map((step) => {
          const Icon = step.icon;
          const active = currentStep === step.id;

          return (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition 
                ${
                  active
                    ? "bg-[var(--brandColor)] text-white shadow-md"
                    : "bg-[var(--bgLight)] text-[var(--textDark)] hover:bg-[var(--brandColorLight)]"
                }
              `}
            >
              {/* Icon Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full
                ${
                  active
                    ? "bg-white text-[var(--brandColor)]"
                    : "bg-[var(--brandColorLight)] text-[var(--brandColorDark)]"
                }
              `}
              >
                <Icon size={20} />
              </div>

              {/* Text */}
              <span className="font-semibold">{step.label}</span>
            </motion.div>
          );
        })}

        {/* Success Step */}
        <div
          className={`flex items-center gap-3 p-3 mt-6 rounded-xl 
          ${
            currentStep === 5
              ? "text-[var(--brandColor)]"
              : "text-[var(--textLight)]"
          }
        `}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--brandColorLight)]">
            <CheckCircle2 size={20} />
          </div>
          <span className="font-semibold">Success</span>
        </div>

      </nav>
    </motion.aside>
  );
}
