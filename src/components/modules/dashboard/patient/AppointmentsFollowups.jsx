"use client";

import { Calendar, Clock, MapPin, User, Plus, Edit, Trash2, Video } from "lucide-react";
import { useState } from "react";

export default function AppointmentsFollowups({ appointments, onUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    doctorName: "",
    specialization: "",
    date: "",
    time: "",
    location: "",
    reason: "",
    type: "Consultation",
    status: "Scheduled"
  });

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updated = [...appointments];
      updated[editingIndex] = formData;
      onUpdate(updated);
    } else {
      onUpdate([...appointments, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingIndex(null);
    setFormData({
      doctorName: "",
      specialization: "",
      date: "",
      time: "",
      location: "",
      reason: "",
      type: "Consultation",
      status: "Scheduled"
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming": return "bg-blue-100 text-blue-600";
      case "Scheduled": return "bg-purple-100 text-purple-600";
      case "Completed": return "bg-green-100 text-green-600";
      case "Cancelled": return "bg-red-100 text-red-600";
      case "No Show": return "bg-orange-100 text-orange-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Consultation": return "border-l-blue-500";
      case "Follow-up": return "border-l-green-500";
      case "Routine": return "border-l-purple-500";
      case "Emergency": return "border-l-red-500";
      default: return "border-l-gray-500";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Appointments & Follow-ups
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Plus size={18} />
          New Appointment
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-3">
            {editingIndex !== null ? "Edit Appointment" : "Schedule New Appointment"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Doctor Name"
              value={formData.doctorName}
              onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={(e) => setFormData({...formData, specialization: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            >
              <option value="Consultation">Consultation</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Routine">Routine Checkup</option>
              <option value="Emergency">Emergency</option>
            </select>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Reason for visit"
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
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
              Save Appointment
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingIndex(null);
                setFormData({
                  doctorName: "",
                  specialization: "",
                  date: "",
                  time: "",
                  location: "",
                  reason: "",
                  type: "Consultation",
                  status: "Scheduled"
                });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={appointment.id || index}
            className={`border-l-4 ${getTypeColor(appointment.type)} p-4 border border-[var(--borderLight)] rounded-lg bg-white`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <User className="text-[var(--brandColor)]" />
                <div>
                  <h3 className="font-semibold text-[var(--textDark)]">
                    {appointment.doctorName}
                  </h3>
                  <p className="text-sm text-[var(--textLight)]">
                    {appointment.specialization}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      setFormData(appointment);
                      setEditingIndex(index);
                      setShowForm(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onUpdate(appointments.filter((_, i) => i !== index))}
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-[var(--textLight)]">
                <Calendar size={16} />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--textLight)]">
                <Clock size={16} />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--textLight)] md:col-span-2">
                <MapPin size={16} />
                <span>{appointment.location}</span>
              </div>
            </div>

            <p className="text-sm mt-2 text-[var(--textDark)]">
              <strong>Reason:</strong> {appointment.reason}
            </p>

            {(appointment.status === "Upcoming" || appointment.status === "Scheduled") && (
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1 bg-[var(--brandColor)] text-white px-3 py-1 rounded text-sm">
                  <Video size={14} />
                  Join Telemedicine
                </button>
                <button className="flex items-center gap-1 border border-[var(--borderLight)] px-3 py-1 rounded text-sm">
                  Reschedule
                </button>
                <button className="flex items-center gap-1 border border-red-200 text-red-600 px-3 py-1 rounded text-sm">
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}