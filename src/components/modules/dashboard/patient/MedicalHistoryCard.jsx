"use client";

export default function MedicalHistoryCard({ record }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-[var(--textDark)]">
          {record.doctor}
        </h3>
        <span className="text-sm text-[var(--textLight)]">
          {record.date}
        </span>
      </div>
      
      <div className="space-y-2 text-sm">
        <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
        <p><strong>Prescription:</strong> {record.prescription}</p>
        <p><strong>Notes:</strong> {record.notes}</p>
      </div>
    </div>
  );
}