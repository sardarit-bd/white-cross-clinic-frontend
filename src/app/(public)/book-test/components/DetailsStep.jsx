"use client";

import { useState } from "react";
import { GENDERS, MONTHS } from "../utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelClass =
    "mb-2 block text-[11px] font-bold uppercase tracking-wide text-[var(--textMuted)]";
const fieldClass =
    "w-full rounded-xl border border-[var(--borderSoft)] bg-white px-4 py-3 text-sm text-[var(--textDark)] focus:border-[var(--brandColor)] focus:outline-none";

export default function DetailsStep({ details, onChange, onContinue }) {
    const [error, setError] = useState("");

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 121 }, (_, i) => currentYear - i);

    const validate = () => {
        const { firstName, lastName, dobDay, dobMonth, dobYear, gender, email } =
            details;

        if (!firstName.trim() || !lastName.trim()) {
            return "Please enter the first name and last name.";
        }
        if (!dobDay || !dobMonth || !dobYear) {
            return "Please select the date of birth.";
        }

        const day = Number(dobDay);
        const month = Number(dobMonth);
        const year = Number(dobYear);
        const dob = new Date(year, month - 1, day);
        if (
            dob.getFullYear() !== year ||
            dob.getMonth() !== month - 1 ||
            dob.getDate() !== day ||
            dob > new Date()
        ) {
            return "Please enter a valid date of birth.";
        }

        if (!gender) return "Please select a gender.";
        if (!EMAIL_REGEX.test(email.trim())) {
            return "Please enter a valid email address.";
        }
        return "";
    };

    const handleContinue = () => {
        const message = validate();
        setError(message);
        if (!message) onContinue();
    };

    return (
        <div className="mx-auto max-w-xl rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)] md:p-8">
            <h1 className="text-3xl font-extrabold text-[var(--textDark)]">
                Your Details
            </h1>
            <p className="mt-2 text-sm text-[var(--textLight)]">
                Please provide the patient's information for this appointment.
            </p>

            <div className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className={labelClass}>First Name</label>
                        <input
                            className={fieldClass}
                            placeholder="Enter first name"
                            value={details.firstName}
                            onChange={(e) => onChange("firstName", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Last Name</label>
                        <input
                            className={fieldClass}
                            placeholder="Enter last name"
                            value={details.lastName}
                            onChange={(e) => onChange("lastName", e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className={labelClass}>Date of Birth</label>
                    <div className="grid grid-cols-3 gap-3">
                        <select
                            className={fieldClass}
                            value={details.dobDay}
                            onChange={(e) => onChange("dobDay", e.target.value)}
                        >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                                <option key={d} value={d}>
                                    {d}
                                </option>
                            ))}
                        </select>
                        <select
                            className={fieldClass}
                            value={details.dobMonth}
                            onChange={(e) => onChange("dobMonth", e.target.value)}
                        >
                            <option value="">Month</option>
                            {MONTHS.map((m, i) => (
                                <option key={m} value={i + 1}>
                                    {m}
                                </option>
                            ))}
                        </select>
                        <select
                            className={fieldClass}
                            value={details.dobYear}
                            onChange={(e) => onChange("dobYear", e.target.value)}
                        >
                            <option value="">Year</option>
                            {years.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className={labelClass}>Gender</label>
                        <select
                            className={fieldClass}
                            value={details.gender}
                            onChange={(e) => onChange("gender", e.target.value)}
                        >
                            <option value="">Select gender</option>
                            {GENDERS.map((g) => (
                                <option key={g} value={g}>
                                    {g}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className={labelClass}>Mobile (Optional)</label>
                        <input
                            className={fieldClass}
                            placeholder="07xxx xxxxxx"
                            value={details.phone}
                            onChange={(e) => onChange("phone", e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:w-1/2 sm:pr-2">
                    <label className={labelClass}>Email Address</label>
                    <input
                        type="email"
                        className={fieldClass}
                        placeholder="your@email.com"
                        value={details.email}
                        onChange={(e) => onChange("email", e.target.value)}
                    />
                </div>

                <div className="rounded-xl border border-[var(--borderSoft)] bg-[var(--bgLight)] p-4 text-xs text-[var(--textLight)]">
                    <span className="font-bold text-[var(--textDark)]">
                        Results Delivery:
                    </span>{" "}
                    Your laboratory results will be sent to the email address provided
                    above via our secure digital system.
                </div>

                {error && <p className="text-sm text-[var(--brandRed)]">{error}</p>}

                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleContinue}
                        className="rounded-xl bg-[var(--brandColor)] px-8 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brandColorDark)]"
                    >
                        Continue to Review
                    </button>
                </div>
            </div>
        </div>
    );
}