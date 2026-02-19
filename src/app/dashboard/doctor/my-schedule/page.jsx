"use client";

import { useEffect, useState } from "react";
import { Trash2, Pencil, Calendar, Clock, Sun, Moon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/hooks/useUser";

export default function DoctorSchedulePage() {
  const [allSchedules, setAllSchedules] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [shift, setShift] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [editingId, setEditingId] = useState(null);

  const { profile, updateProfile } = useProfile()

  useEffect(() => {
    if (profile?.doctorInfo?.available) {
      setAllSchedules(profile?.doctorInfo?.available)
    }
  }, [profile])

  // Format time to 24-hour display
  const formatTime = (time) => {
    if (!time) return "";
    return time; // Already in 24-hour format from input
  };

  const saveSchedule = async () => {
    if (!selectedDay || !shift || !from || !to) return;

    let updatedSchedules;
    if (editingId) {
      console.log(editingId)
      updatedSchedules = allSchedules.map((s) =>
        s._id === editingId ? { ...s, day: selectedDay, shift, from, to } : s
      );
      setEditingId(null);
    } else {
      const newSchedule = {
        day: selectedDay,
        shift,
        from,
        to,
      };
      updatedSchedules = [...allSchedules, newSchedule];
    }

    // Update state first
    setAllSchedules(updatedSchedules);

    // Now send the correct array to backend
    const res = await updateProfile.mutateAsync({ available: updatedSchedules });

    resetForm();
  };


  const resetForm = () => {
    setSelectedDay("");
    setShift("");
    setFrom("");
    setTo("");
  };

  const handleEdit = (id) => {
    const schedule = allSchedules.find((s) => s._id === id);
    if (!schedule) return;
    setSelectedDay(schedule.day);
    setShift(schedule.shift);
    setFrom(schedule.from);
    setTo(schedule.to);
    setEditingId(schedule._id);
  };

  const handleDelete = async (id) => {
    setAllSchedules((prev) => prev.filter((s) => s._id !== id));

    const updatedSchedules = allSchedules.filter((s) => s._id !== id)

    const res = await updateProfile.mutateAsync({ available: updatedSchedules });

    if (editingId === id) resetForm();
  };

  const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  return (
    <div className=" p-4 md:p-8">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Manage Your Schedule
            </h1>
            <p className="text-gray-500 mt-2">
              Set your weekly availability for patient appointments
            </p>
          </div>
          <div className="hidden md:block p-3 bg-[#0076BC]/10 rounded-full">
            <Calendar size={32} className="text-[#0076BC]" />
          </div>
        </motion.div>

        {/* Schedule Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#0076BC] to-[#0076BC]/90 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Clock size={20} />
              {editingId ? "Edit Schedule" : "Add New Schedule"}
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Day Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Calendar size={16} className="text-[#0076BC]" />
                  Day of Week <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0076BC] focus:border-transparent transition-all bg-white hover:border-[#0076BC]/30"
                >
                  <option value="">Select a day</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>

              {/* Shift Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {shift === "morning" ? <Sun size={16} className="text-yellow-500" /> : <Moon size={16} className="text-blue-500" />}
                  Shift <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setShift("morning")}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${shift === "morning"
                      ? "border-[#0076BC] bg-[#0076BC]/5 text-[#0076BC]"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                      }`}
                  >
                    <Sun size={18} />
                    <span>Morning</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShift("evening")}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${shift === "evening"
                      ? "border-[#0076BC] bg-[#0076BC]/5 text-[#0076BC]"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                      }`}
                  >
                    <Moon size={18} />
                    <span>Evening</span>
                  </button>
                </div>
              </div>

              {/* Start Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Clock size={16} className="text-green-600" />
                  Start Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0076BC] focus:border-transparent transition-all"
                />
                <p className="text-xs text-gray-400">24-hour format</p>
              </div>

              {/* End Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Clock size={16} className="text-red-600" />
                  End Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0076BC] focus:border-transparent transition-all"
                />
                <p className="text-xs text-gray-400">24-hour format</p>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={saveSchedule}
                disabled={!selectedDay || !shift || !from || !to}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0076BC] to-[#0076BC]/90 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {editingId ? "Update Schedule" : "Save Schedule"}
              </button>
              {editingId && (
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Saved Schedules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Calendar size={20} />
              Your Schedules ({allSchedules.length})
            </h2>
          </div>

          <div className="p-6">
            {allSchedules.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Calendar size={48} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">No schedules yet</h3>
                <p className="text-gray-500">Add your first schedule using the form above</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <AnimatePresence>
                  {allSchedules.map((s) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200"
                    >
                      {/* Status Indicator */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#0076BC] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex justify-between flex-col gap-4">
                        {/* Left Side - Schedule Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-[#0076BC]/10 rounded-lg">
                              <Calendar size={18} className="text-[#0076BC]" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">{s.day}</h4>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${s.shift === "morning"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                              }`}>
                              {s.shift === "morning" ? <Sun size={12} /> : <Moon size={12} />}
                              {s.shift.charAt(0).toUpperCase() + s.shift.slice(1)}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                              <span className="text-sm font-medium">Start: {formatTime(s.from)}</span>
                            </div>
                            <div className="w-4 h-[1px] bg-gray-300" />
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full" />
                              <span className="text-sm font-medium">End: {formatTime(s.to)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Actions */}
                        <div className="flex justify-between gap-1">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleEdit(s._id)}
                            className="p-2 px-5 text-[var(--brandColor)] bg-blue-50 rounded-lg transition-colors flex gap-2 items-center"
                            title="Edit schedule"
                          >
                            Edit <Pencil size={18} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDelete(s._id)}
                            className="p-2 px-5 text-red-500 bg-red-50 rounded-lg transition-colors flex gap-2 items-center"
                            title="Delete schedule"
                          >
                           Delete <Trash2 size={18} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}