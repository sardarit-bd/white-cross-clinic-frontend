export default function SectionCard({ title, children, className = "" }) {
    return (
        <section
            className={`rounded-2xl border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowSoft)] ${className}`}
        >
            {title && (
                <h2 className="mb-4 text-lg font-bold text-[var(--textDark)]">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}