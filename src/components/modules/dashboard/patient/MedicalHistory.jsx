"use client";

import { Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function MedicalHistory({ medicalHistory, onUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    condition: "",
    diagnosisDate: "",
    status: "Active",
    notes: ""
  });

  const handleSubmit = () => {
    if (editingIndex !== null) {
      // Update existing
      const updated = [...medicalHistory];
      updated[editingIndex] = formData;
      onUpdate(updated);
    } else {
      // Add new
      onUpdate([...medicalHistory, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingIndex(null);
    setFormData({ condition: "", diagnosisDate: "", status: "Active", notes: "" });
  };

  const handleEdit = (index) => {
    setFormData(medicalHistory[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    onUpdate(medicalHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Medical History
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Plus size={18} />
          Add Condition
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-3">
            {editingIndex !== null ? "Edit Condition" : "Add New Condition"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Condition"
              value={formData.condition}
              onChange={(e) => setFormData({...formData, condition: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="date"
              value={formData.diagnosisDate}
              onChange={(e) => setFormData({...formData, diagnosisDate: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            >
              <option value="Active">Active</option>
              <option value="Resolved">Resolved</option>
              <option value="Chronic">Chronic</option>
            </select>
            <div className="md:col-span-2">
              <textarea
                placeholder="Notes"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows="2"
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
                setFormData({ condition: "", diagnosisDate: "", status: "Active", notes: "" });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {medicalHistory.map((condition, index) => (
          <div
            key={condition.id || index}
            className="p-4 border border-[var(--borderLight)] rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{condition.condition}</h3>
                <p className="text-sm text-[var(--textLight)]">
                  Diagnosed: {condition.diagnosisDate} • Status: 
                  <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                    condition.status === "Active" ? "bg-red-100 text-red-600" :
                    condition.status === "Resolved" ? "bg-green-100 text-green-600" :
                    "bg-yellow-100 text-yellow-600"
                  }`}>
                    {condition.status}
                  </span>
                </p>
                {condition.notes && (
                  <p className="text-sm mt-2">{condition.notes}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}