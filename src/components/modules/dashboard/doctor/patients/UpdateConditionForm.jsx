"use client";

import { useState } from "react";

export default function UpdateConditionForm({ patientId, initialCondition }) {
  const [condition, setCondition] = useState(initialCondition);
  const [notes, setNotes] = useState("");

  const updateCondition = async () => {
    console.log("API → Update condition:", { patientId, condition, notes });
  };

  return (
    <div className="bg-[var(--bgLight)] p-4 rounded-xl mb-6 border border-[var(--borderLight)]">
      <h3 className="text-lg font-semibold mb-3">Update Condition</h3>

      <label className="text-sm font-medium">Condition</label>
      <input
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2 mt-1 mb-3"
      />

      <label className="text-sm font-medium">Notes</label>
      <textarea
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2 mt-1"
      ></textarea>

      <button
        className="mt-4 w-full bg-[var(--brandColor)] text-white py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        onClick={updateCondition}
      >
        Save Condition
      </button>
    </div>
  );
}
