import Link from "next/link";

const hasValue = (v) => v !== undefined && v !== null && v !== "";

export default function BookingSidebar({ slug, price, phlebotomyFee, currency = "£" }) {
    const hasPrice = hasValue(price);
    const hasFee = hasValue(phlebotomyFee);

    return (
        <aside
            className="rounded-2xl p-6 text-white shadow-(--shadowStrong) lg:sticky lg:top-32"
            style={{ background: "var(--textDark)" }}
        >
            <h2 className="mb-4 text-base font-bold">Book This Test</h2>

            {hasPrice && (
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                    <span className="text-white/70">Test Price</span>
                    <span className="text-xl font-extrabold">
                        {currency}
                        {price}
                    </span>
                </div>
            )}

            {hasFee && (
                <div className="flex items-center justify-between border-b border-white/10 py-3 text-sm">
                    <span className="text-white/70">+ Phlebotomy Fee</span>
                    <span className="text-lg font-bold">
                        {currency}
                        {phlebotomyFee}
                    </span>
                </div>
            )}

            <Link
                href={`/book-test?test=${slug}`}
                className="mt-5 block w-full rounded-lg bg-(--brandColor) py-3 text-center text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-(--brandColorDark)"
            >
                Book Appointment
            </Link>
        </aside>
    );
}