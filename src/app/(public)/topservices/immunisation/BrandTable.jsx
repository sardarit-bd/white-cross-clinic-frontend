"use client";

export default function BrandTable({ title, columns, data }) {
  return (
    <section className="my-16">
      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--textDark)] mb-6">
        {title}
      </h2>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto border border-[var(--borderLight)] rounded-lg shadow-sm max-w-6xl mx-auto">
        <table className="w-full border-collapse">
          
          {/* HEADER */}
          <thead>
            <tr className="bg-[var(--brandColor)] text-[var(--textWhite)]">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="py-4 px-6 font-semibold text-left"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-[var(--bgWhite)] text-[var(--textDark)]"
                    : "bg-[var(--bgLight)] text-[var(--textDark)]"
                }
              >
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="py-4 px-6 border-t border-[var(--borderLight)]">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}
