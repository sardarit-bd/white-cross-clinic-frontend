"use client";

import { User, Calendar, Phone, Mail, MapPin, Edit } from "lucide-react";
import { useState } from "react";

export default function PatientDemographics({ patient }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(patient);

  const handleSave = () => {
    // API call to save data
    console.log("Saving patient data:", formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Patient Demographics
        </h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 text-[var(--brandColor)] hover:text-[var(--brandColorDark)]"
        >
          <Edit size={18} />
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isEditing ? (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                rows="2"
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <User className="text-[var(--brandColor)]" />
              <div>
                <p className="font-semibold">{patient.fullName}</p>
                <p className="text-sm text-[var(--textLight)]">Full Name</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-[var(--brandColor)]" />
              <div>
                <p className="font-semibold">{patient.dateOfBirth} (Age: {patient.age})</p>
                <p className="text-sm text-[var(--textLight)]">Date of Birth</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[var(--brandColor)]" />
              <div>
                <p className="font-semibold">{patient.phone}</p>
                <p className="text-sm text-[var(--textLight)]">Phone</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[var(--brandColor)]" />
              <div>
                <p className="font-semibold">{patient.email}</p>
                <p className="text-sm text-[var(--textLight)]">Email</p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-start gap-3">
              <MapPin className="text-[var(--brandColor)] mt-1" />
              <div>
                <p className="font-semibold">{patient.address}</p>
                <p className="text-sm text-[var(--textLight)]">Address</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}