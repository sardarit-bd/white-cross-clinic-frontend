import { hasValue } from "../utils";

export default function SelectedTestBar({ test }) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--borderSoft)] bg-white px-6 py-5 shadow-[var(--shadowSoft)]">
            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--textMuted)]">
                    Selected Test
                </p>
                <p className="mt-1 text-lg font-extrabold text-[var(--brandColor)]">
                    {test.title}
                </p>
            </div>

            {hasValue(test.price) && (
                <div className="text-right">
                    <p className="text-2xl font-extrabold text-[var(--textDark)]">
                        £{test.price}
                    </p>
                    {hasValue(test.phlebotomyFee) && (
                        <p className="text-[10px] font-semibold text-[var(--textMuted)]">
                            + £{test.phlebotomyFee} phlebotomy
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}