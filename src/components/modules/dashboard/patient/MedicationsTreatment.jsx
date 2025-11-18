"use client";

import { Pill, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function MedicationsTreatment({ medications, onUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    medication: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    prescribedBy: "",
    status: "Active"
  });

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updated = [...medications];
      updated[editingIndex] = formData;
      onUpdate(updated);
    } else {
      onUpdate([...medications, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingIndex(null);
    setFormData({ medication: "", dosage: "", frequency: "", startDate: "", endDate: "", prescribedBy: "", status: "Active" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Medications & Treatment Plan
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Plus size={18} />
          Add Medication
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-3">
            {editingIndex !== null ? "Edit Medication" : "Add New Medication"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Medication Name"
              value={formData.medication}
              onChange={(e) => setFormData({...formData, medication: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Dosage"
              value={formData.dosage}
              onChange={(e) => setFormData({...formData, dosage: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Frequency"
              value={formData.frequency}
              onChange={(e) => setFormData({...formData, frequency: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Discontinued">Discontinued</option>
            </select>
            <input
              type="date"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={(e) => setFormData({...formData, startDate: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="date"
              placeholder="End Date"
              value={formData.endDate}
              onChange={(e) => setFormData({...formData, endDate: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Prescribed By"
                value={formData.prescribedBy}
                onChange={(e) => setFormData({...formData, prescribedBy: e.target.value})}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSubmit}
              className="bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingIndex(null);
                setFormData({ medication: "", dosage: "", frequency: "", startDate: "", endDate: "", prescribedBy: "", status: "Active" });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {medications.map((med, index) => (
          <div key={med.id || index} className="flex items-center justify-between p-4 border border-[var(--borderLight)] rounded-lg">
            <div className="flex items-center gap-3">
              <Pill className="text-[var(--brandColor)]" />
              <div>
                <h3 className="font-semibold">{med.medication}</h3>
                <p className="text-sm text-[var(--textLight)]">
                  {med.dosage} • {med.frequency} • {med.status}
                </p>
                <p className="text-sm text-[var(--textLight)]">
                  {med.startDate} to {med.endDate || "Ongoing"} • Prescribed by: {med.prescribedBy}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setFormData(med);
                  setEditingIndex(index);
                  setShowForm(true);
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => onUpdate(medications.filter((_, i) => i !== index))}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}