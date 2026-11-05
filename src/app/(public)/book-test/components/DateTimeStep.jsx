"use client";

import { Sun, Moon } from "lucide-react";
import { useBookableDates, useAvailableSlots } from "@/hooks/useTestBooking";
import { chipParts, formatDateShort } from "../utils";

function TimeGroup({ icon, label, times, selected, onSelect }) {
    if (!times?.length) return null;

    return (
        <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-(--textMuted)">
                {icon}
                {label}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {times.map((t) => (
                    <button
                        key={t}
                        type="button"
                        onClick={() => onSelect(t)}
                        className={`rounded-lg border py-3 text-xs font-bold transition-colors ${
                            selected === t
                                ? "border-(--brandColor) bg-(--brandColor) text-white"
                                : "border-[var(--borderSoft)] bg-[var(--bgLight)] text-[var(--textDark)] hover:border-[var(--brandColor)] hover:text-[var(--brandColor)]"
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function DateTimeStep({
    date,
    time,
    onSelectDate,
    onSelectTime,
    onContinue,
}) {
    const { data: dates = [], isLoading: datesLoading } = useBookableDates();
    const { data: slots, isLoading: slotsLoading } = useAvailableSlots(date);

    const hasSlots =
        slots && slots.morning.length + slots.afternoon.length > 0;

    return (
        <div className="rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)] md:p-8">
            <h1 className="text-3xl font-extrabold text-[var(--textDark)]">
                {date ? "Select Your Time" : "Choose Your Date"}
            </h1>
            <p className="mt-2 text-sm text-[var(--textLight)]">
                {date
                    ? `Choose an available time slot for ${formatDateShort(date)}`
                    : "Select a date to see available appointment times"}
            </p>

            <p className="mt-8 mb-3 text-[11px] font-bold uppercase tracking-widest text-[var(--textMuted)]">
                Available Dates
            </p>

            {datesLoading ? (
                <p className="text-sm text-[var(--textLight)]">Loading dates...</p>
            ) : (
                <div className="flex flex-wrap gap-3">
                    {dates.map((d) => {
                        const { weekday, day, month } = chipParts(d);
                        const active = d === date;

                        return (
                            <button
                                key={d}
                                type="button"
                                aria-pressed={active}
                                onClick={() => onSelectDate(d)}
                                className={`flex min-w-[76px] flex-col items-center rounded-2xl border px-3 py-3 transition-all ${
                                    active
                                        ? "border-[var(--brandColor)] bg-[var(--brandColor)] text-white shadow-md"
                                        : "border-[var(--borderSoft)] bg-[var(--bgLight)] text-[var(--textDark)] hover:border-[var(--brandColor)]"
                                }`}
                            >
                                <span
                                    className={`text-[10px] font-bold uppercase ${
                                        active ? "text-white/80" : "text-[var(--textMuted)]"
                                    }`}
                                >
                                    {weekday}
                                </span>
                                <span className="text-2xl font-extrabold">{day}</span>
                                <span
                                    className={`text-[10px] font-bold uppercase ${
                                        active ? "text-white/80" : "text-[var(--textMuted)]"
                                    }`}
                                >
                                    {month}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}

            {date && (
                <div className="mt-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--textMuted)]">
                        Available Times
                    </p>

                    {slotsLoading && (
                        <p className="mt-3 text-sm text-[var(--textLight)]">
                            Loading available times...
                        </p>
                    )}

                    {!slotsLoading && slots && !hasSlots && (
                        <p className="mt-3 text-sm text-[var(--textLight)]">
                            No times are available on this date. Please choose another
                            date.
                        </p>
                    )}

                    {!slotsLoading && slots && hasSlots && (
                        <>
                            <TimeGroup
                                icon={<Sun size={14} className="text-orange-400" />}
                                label="Morning"
                                times={slots.morning}
                                selected={time}
                                onSelect={onSelectTime}
                            />
                            <TimeGroup
                                icon={<Moon size={14} className="text-orange-400" />}
                                label="Afternoon"
                                times={slots.afternoon}
                                selected={time}
                                onSelect={onSelectTime}
                            />

                            <div className="mt-8 flex justify-end">
                                <button
                                    type="button"
                                    disabled={!time}
                                    onClick={onContinue}
                                    className="rounded-lg bg-[var(--brandColor)] px-8 py-3 text-sm font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Continue
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}