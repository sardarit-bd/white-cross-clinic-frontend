"use client";

import Link from "next/link";
import { Lock, CreditCard, Check } from "lucide-react";
import {
    hasValue,
    formatMoney,
    formatDateLong,
    formatDobDisplay,
} from "../utils";

function Block({ title, action, children }) {
    return (
        <div className="rounded-xl border border-[var(--borderSoft)] bg-[var(--bgLight)] p-5">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-bold text-[var(--textDark)]">{title}</h2>
                {action}
            </div>
            {children}
        </div>
    );
}

function Field({ label, children }) {
    return (
        <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--textMuted)]">
                {label}
            </p>
            <div className="mt-1 text-sm font-bold text-[var(--textDark)]">
                {children}
            </div>
        </div>
    );
}

const linkClass =
    "text-[10px] font-bold text-[var(--brandColor)] hover:underline";

export default function ReviewStep({
    test,
    date,
    time,
    details,
    submitting,
    onChangeTime,
    onEditDetails,
    onConfirm,
}) {
    const descriptions = (test.profileDetails || []).filter(Boolean);
    const sampleTypes = (test.sampleGuide || [])
        .filter((s) => s.code)
        .map((s) => `(${s.code})`)
        .join(" ");
    const turnaround = (test.turnaround || "").trim();

    const hasPrice = hasValue(test.price);
    const hasFee = hasValue(test.phlebotomyFee);
    const total = hasPrice ? Number(test.price) + Number(test.phlebotomyFee || 0) : 0;

    return (
        <div className="space-y-5 rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)] md:p-8">
            <div>
                <h1 className="text-2xl font-extrabold text-[var(--textDark)]">
                    Review Your Booking
                </h1>
                <p className="mt-1 text-xs text-[var(--textLight)]">
                    Please review all details before confirming your appointment
                </p>
            </div>

            <Block
                title="Test Details"
                action={
                    <Link href="/test/test-a-z" className={linkClass}>
                        Change Test
                    </Link>
                }
            >
                <div className="space-y-3">
                    <Field label="Test Name">{test.title}</Field>

                    {descriptions.length > 0 && (
                        <Field label="Description">
                            <ul className="space-y-0.5 font-medium">
                                {descriptions.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </Field>
                    )}

                    {turnaround && <Field label="Turnaround Time">{turnaround}</Field>}
                    {sampleTypes && <Field label="Sample Type">{sampleTypes}</Field>}
                </div>
            </Block>

            <Block
                title="Appointment"
                action={
                    <button type="button" onClick={onChangeTime} className={linkClass}>
                        Change Time
                    </button>
                }
            >
                <div className="space-y-3">
                    <Field label="Date">{formatDateLong(date)}</Field>
                    <Field label="Time">{time}</Field>
                </div>
            </Block>

            <Block
                title="Your Details"
                action={
                    <button type="button" onClick={onEditDetails} className={linkClass}>
                        Edit Details
                    </button>
                }
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name">
                        {details.firstName} {details.lastName}
                    </Field>
                    <Field label="Date of Birth">{formatDobDisplay(details)}</Field>
                    <Field label="Email">{details.email}</Field>
                    {details.phone.trim() && (
                        <Field label="Phone">{details.phone}</Field>
                    )}
                    <Field label="Gender">{details.gender}</Field>
                </div>
            </Block>

            {hasPrice && (
                <Block title="Price Breakdown">
                    <div className="space-y-2 text-sm text-[var(--textDark)]">
                        <div className="flex justify-between">
                            <span>Test Price</span>
                            <span>{formatMoney(test.price)}</span>
                        </div>
                        {hasFee && (
                            <div className="flex justify-between">
                                <span>Phlebotomy Fee</span>
                                <span>{formatMoney(test.phlebotomyFee)}</span>
                            </div>
                        )}
                        <div className="flex items-center justify-between border-t border-[var(--borderLight)] pt-3 font-bold">
                            <span>Total</span>
                            <span className="text-lg font-extrabold">
                                {formatMoney(total)}
                            </span>
                        </div>
                    </div>
                </Block>
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-[11px] font-bold text-green-800">
                <span className="flex items-center gap-1.5">
                    <Lock size={13} /> Secure Booking
                </span>
                <span className="flex items-center gap-1.5">
                    <CreditCard size={13} /> No upfront payment — pay at clinic
                </span>
                <span className="flex items-center gap-1.5">
                    <Check size={13} /> Free cancellation
                </span>
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onConfirm}
                    disabled={submitting}
                    className={`rounded-xl bg-[var(--brandColor)] px-8 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brandColorDark)] ${
                        submitting ? "cursor-not-allowed opacity-50" : ""
                    }`}
                >
                    {submitting ? "Confirming..." : "Confirm Booking"}
                </button>
            </div>
        </div>
    );
}