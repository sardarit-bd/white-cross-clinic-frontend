"use client";

import { Heart, Activity, Thermometer, Weight, Edit } from "lucide-react";
import { useState } from "react";

export default function CurrentHealthStatus({ healthStatus, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(healthStatus);

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const vitalCards = [
    {
      icon: <Heart className="text-red-500" />,
      label: "Heart Rate",
      value: `${formData.heartRate} bpm`,
      field: "heartRate"
    },
    {
      icon: <Activity className="text-blue-500" />,
      label: "Blood Pressure",
      value: `${formData.bloodPressure}`,
      field: "bloodPressure"
    },
    {
      icon: <Thermometer className="text-orange-500" />,
      label: "Temperature",
      value: `${formData.temperature}°C`,
      field: "temperature"
    },
    {
      icon: <Weight className="text-green-500" />,
      label: "Weight",
      value: `${formData.weight} kg`,
      field: "weight"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Current Health Status
        </h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 text-[var(--brandColor)] hover:text-[var(--brandColorDark)]"
        >
          <Edit size={18} />
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {vitalCards.map((card, index) => (
          <div key={index} className="bg-[var(--bgLight)] p-4 rounded-lg text-center">
            <div className="flex justify-center mb-2">{card.icon}</div>
            <p className="text-sm text-[var(--textLight)] mb-1">{card.label}</p>
            {isEditing ? (
              <input
                type="text"
                value={formData[card.field]}
                onChange={(e) => setFormData({...formData, [card.field]: e.target.value})}
                className="w-full text-center border-b border-[var(--borderLight)] bg-transparent"
              />
            ) : (
              <p className="font-semibold text-[var(--textDark)]">{card.value}</p>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-3">Symptoms & Concerns</h3>
        {isEditing ? (
          <textarea
            value={formData.symptoms}
            onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
            rows="3"
            className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
            placeholder="Describe current symptoms and concerns..."
          />
        ) : (
          <p className="text-[var(--textDark)]">
            {formData.symptoms || "No current symptoms reported."}
          </p>
        )}
      </div>
    </div>
  );
}