"use client";

export default function TestDetailSection({ title, sections }) {
  return (
    <div className="w-full bg-white p-6 md:p-10 rounded-lg shadow-sm mb-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[var(--brandColor)] mb-6">
        {title}
      </h1>

      {/* Loop Through Sections */}
      {sections.map((sec, i) => (
        <div key={i} className="mb-10">
          
          {/* Section Heading */}
          {sec.heading && (
            <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
              {sec.heading}
            </h2>
          )}

          {/* Paragraphs */}
          {sec.description &&
            sec.description.map((p, idx) => (
              <p
                key={idx}
                className="text-[var(--textLight)] mb-4 leading-relaxed"
              >
                {p}
              </p>
            ))}

          {/* Table Section */}
          {sec.table && (
            <div className="w-full border rounded-lg p-5 bg-[var(--bgLight)] mt-4">
              {sec.table.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-4 border-b py-3 last:border-none"
                >
                  <p className="font-semibold text-[var(--textDark)]">{row.label}</p>
                  <p className="md:col-span-3 text-[var(--textLight)]">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
