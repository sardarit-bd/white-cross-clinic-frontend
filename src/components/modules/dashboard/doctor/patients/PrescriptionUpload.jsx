"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function PrescriptionUpload({ patientId }) {
  const [file, setFile] = useState(null);

  const uploadPrescription = async () => {
    console.log("API → Upload prescription:", file);
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-[var(--borderLight)]">
      <h3 className="text-lg font-semibold mb-3">Upload Prescription</h3>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3 border border-[var(--brandColor)] p-2 rounded-lg w-full"
      />

      <button
        disabled={!file}
        onClick={uploadPrescription}
        className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-white transition ${
          file
            ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)]"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        <UploadCloud size={18} /> Upload Prescription
      </button>
    </div>
  );
}
