"use client";

import Link from "next/link";
import { Clock } from "lucide-react";

export default function TestCard({
    title,
    slug,
    price,
    extraFee,
    turnaround,
    currency = "£",
}) {
    const hasPrice = price !== undefined && price !== null && price !== "";
    const hasExtraFee = extraFee !== undefined && extraFee !== null && extraFee !== "";
    const turnaroundText = typeof turnaround === "string" ? turnaround.trim() : turnaround;
    const hasTurnaround = Boolean(turnaroundText);

    return (
        <div className="flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)] transition-shadow duration-300 hover:shadow-[var(--shadowHover)]">
            <div>
                <h3 className="text-lg font-bold leading-snug text-[var(--textDark)] md:text-xl">
                    {title}
                </h3>

                {hasTurnaround && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-[var(--textMuted)]">
                        <Clock size={12} />
                        Results in {turnaroundText}
                    </p>
                )}

                {hasPrice && (
                    <p className="mt-4 flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-[var(--textDark)]">
                            {currency}
                            {price}
                        </span>
                        {hasExtraFee && (
                            <span className="text-sm font-medium text-[var(--textMuted)]">
                                + {currency}
                                {extraFee}
                            </span>
                        )}
                    </p>
                )}
            </div>

            <div className="mt-6 flex gap-3">
                <Link
                    href={`/book-test?test=${slug}`}
                    className="flex-1 rounded-lg bg-[var(--brandColor)] py-3 text-center text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brandColorDark)]"
                >
                    Book Now
                </Link>

                <Link
                    href={`/test/test-a-z/${slug}`}
                    className="flex-1 rounded-lg border border-[var(--borderLight)] bg-white py-3 text-center text-xs font-bold uppercase tracking-wide text-[var(--brandColor)] transition-colors hover:bg-[var(--brandColorLight)]"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}