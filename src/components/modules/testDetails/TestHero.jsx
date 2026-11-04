import Link from "next/link";

const hasValue = (v) => v !== undefined && v !== null && v !== "";

function Chip({ label, value }) {
    if (!hasValue(value)) return null;
    return (
        <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-white/60">
                {label}
            </p>
            <p className="text-sm font-bold text-white">{value}</p>
        </div>
    );
}

export default function TestHero({
    title,
    slug,
    subtitle,
    category,
    price,
    phlebotomyFee,
    turnaround,
    testDuration,
    lab,
    currency = "£",
}) {
    const hasPrice = hasValue(price);
    const hasFee = hasValue(phlebotomyFee);
    const resultsText =
        typeof turnaround === "string" ? turnaround.trim() : turnaround;

    return (
        <div
            className="rounded-3xl p-8 text-white shadow-[var(--shadowStrong)] md:p-10"
            style={{
                background:
                    "linear-gradient(135deg, var(--textDark), var(--brandColorDark))",
            }}
        >
            {category && (
                <span className="inline-block rounded-full bg-[var(--brandColor)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {category}
                </span>
            )}

            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                {title}
            </h1>

            {subtitle && <p className="mt-3 text-sm text-white/80">{subtitle}</p>}

            <div className="mt-6 flex flex-wrap items-end gap-6">
                {hasPrice && (
                    <div>
                        <p className="flex items-baseline gap-2">
                            <span className="text-4xl font-extrabold">
                                {currency}
                                {price}
                            </span>
                            {hasFee && (
                                <span className="text-lg font-semibold text-white/80">
                                    + {currency}
                                    {phlebotomyFee}
                                </span>
                            )}
                        </p>
                        {hasFee && (
                            <p className="mt-1 text-[11px] text-white/60">
                                Test price + phlebotomy fee
                            </p>
                        )}
                    </div>
                )}

                <div className="flex flex-wrap gap-3">
                    <Chip label="Results" value={resultsText} />
                    <Chip label="Test" value={testDuration} />
                    <Chip label="Lab" value={lab} />
                </div>
            </div>

            <Link
                href={`/book-test?test=${slug}`}
                className="mt-6 inline-block rounded-lg bg-[var(--brandColor)] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white ring-1 ring-white/30 transition-colors hover:bg-[var(--brandColorDark)]"
            >
                Book Appointment
            </Link>
        </div>
    );
}