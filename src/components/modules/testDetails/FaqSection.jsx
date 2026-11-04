import SectionCard from "./SectionCard";

export default function FaqSection({ faqs }) {
    const items = (faqs || []).filter((f) => f?.question?.trim());

    if (items.length === 0) return null;

    return (
        <SectionCard title="Frequently Asked Questions">
            <div className="space-y-3">
                {items.map((faq, i) => (
                    <div
                        key={faq._id || i}
                        className="rounded-xl bg-[var(--bgLight)] p-4"
                    >
                        <h3 className="text-sm font-bold text-[var(--textDark)]">
                            {faq.question}
                        </h3>
                        {faq.answer && (
                            <p className="mt-2 whitespace-pre-line text-sm text-[var(--textLight)]">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </SectionCard>
    );
}