"use client";

import { Check } from "lucide-react";

const nextSteps = [
    "A confirmation email has been sent to your email address.",
    "Please arrive at the clinic 5 minutes before your appointment time.",
    "Your results will be delivered securely to your email.",
];

export default function ConfirmedStep({ booking, onBookAnother }) {
    return (
        <div className="mx-auto max-w-xl rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-8 text-center shadow-[var(--shadowCard)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check size={34} className="text-[var(--brandAccent)]" />
            </div>

            <h1 className="mt-5 text-3xl font-extrabold text-[var(--textDark)]">
                Booking Confirmed!
            </h1>

            <p className="mt-4 text-[var(--textMedium)]">
                Appointment for {booking.testTitle} confirmed for {booking.date} at{" "}
                {booking.time}. Information sent to {booking.email}.
            </p>

            <div className="mt-6 rounded-xl border border-[var(--borderSoft)] bg-[var(--bgLight)] p-5 text-left">
                <p className="text-sm font-bold text-[var(--textDark)]">
                    What happens next?
                </p>
                <ul className="mt-3 space-y-2">
                    {nextSteps.map((text) => (
                        <li
                            key={text}
                            className="flex items-start gap-2 text-xs text-[var(--textLight)]"
                        >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brandAccent)]">
                                <Check size={10} className="text-white" />
                            </span>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                type="button"
                onClick={onBookAnother}
                className="mt-8 rounded-xl bg-[var(--textDark)] px-8 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition-opacity hover:opacity-90"
            >
                Book Another Test
            </button>
        </div>
    );
}