"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Plus, Trash2, Pencil, X } from "lucide-react";

// ===================== UTILITIES ===================== //

function formatTime(time) {
  const [h, m] = time.split(":");
  const hour = parseInt(h);
  const suffix = hour >= 12 ? "PM" : "AM";
  const formattedHour = ((hour + 11) % 12) + 1;
  return `${formattedHour}:${m} ${suffix}`;
}

function addMinutes(time, minsToAdd) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minsToAdd;
  const hours = String(Math.floor(total / 60)).padStart(2, "0");
  const minutes = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Generate dates for the next 30 days for one day
function getUpcomingDates(dayName, limit = 30) {
  const dayIndex = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ].indexOf(dayName);

  const today = new Date();
  let dates = [];

  for (let i = 0; i < limit; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    if (d.getDay() === dayIndex) {
      dates.push(d.toISOString().split("T")[0]);
    }
  }

  return dates;
}

// ===================================================== //

export default function DoctorSchedulePage() {

  // =================== STATES =================== //

  const [workingDays, setWorkingDays] = useState([]);
  const [allSchedules, setAllSchedules] = useState([]);

  const [selectedDay, setSelectedDay] = useState("");
  const [availableDates, setAvailableDates] = useState([]);

  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [slotDuration, setSlotDuration] = useState(15);

  const [generatedSlots, setGeneratedSlots] = useState([]);

  // Break State
  const [breaks, setBreaks] = useState([]);
  const [breakStart, setBreakStart] = useState("");
  const [breakEnd, setBreakEnd] = useState("");

  // Edit Mode
  const [editingIndex, setEditingIndex] = useState(null);

  // =================== DAY MANAGEMENT =================== //

  const addDay = () => {
    if (!selectedDay || workingDays.includes(selectedDay)) return;
    setWorkingDays([...workingDays, selectedDay]);
    setSelectedDay("");
  };

  const removeDay = (dayToRemove) => {
    setWorkingDays(workingDays.filter((d) => d !== dayToRemove));
    setAllSchedules(allSchedules.filter((sc) => sc.day !== dayToRemove));
  };

  // Generate dates for ALL selected days
  useEffect(() => {
    let totalDates = [];

    workingDays.forEach((day) => {
      const dts = getUpcomingDates(day);
      totalDates.push(...dts);
    });

    const uniqueSortedDates = [...new Set(totalDates)].sort();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAvailableDates(uniqueSortedDates);
  }, [workingDays]);


  // =================== SLOT GENERATION =================== //

  useEffect(() => {
    if (!start || !end) return;

    let temp = [];
    let current = start;

    while (current < end) {
      const next = addMinutes(current, slotDuration);
      if (next > end) break;
      temp.push({ from: current, to: next });
      current = next;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGeneratedSlots(temp);
  }, [start, end, slotDuration]);


  // =================== BREAK TIME MANAGEMENT =================== //

  const addBreak = () => {
    if (!breakStart || !breakEnd) return;

    setBreaks([...breaks, { from: breakStart, to: breakEnd }]);
    setBreakStart("");
    setBreakEnd("");
  };

  const removeBreak = (index) => {
    setBreaks(breaks.filter((_, i) => i !== index));
  };

  const filterSlotsForBreaks = (slots, breaks) => {
    return slots.filter((slot) => {
      return !breaks.some(
        (b) =>
          (slot.from >= b.from && slot.from < b.to) ||
          (slot.to > b.from && slot.to <= b.to)
      );
    });
  };


  // =================== SAVE SCHEDULE =================== //

  const saveSchedule = () => {
    if (!date || generatedSlots.length === 0) return;

    const finalSlots = filterSlotsForBreaks(generatedSlots, breaks);

    const newSchedule = {
      day: workingDays.find((d) => {
        const day = new Date(date).getDay();
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(d) === day;
      }) || "",
      date,
      slotDuration,
      slots: finalSlots,
      breaks,
    };

    if (editingIndex !== null) {
      const updated = [...allSchedules];
      updated[editingIndex] = newSchedule;
      setAllSchedules(updated);
      setEditingIndex(null);
    } else {
      setAllSchedules([...allSchedules, newSchedule]);
    }

    resetForm();
  };

  const resetForm = () => {
    setDate("");
    setStart("");
    setEnd("");
    setBreaks([]);
    setGeneratedSlots([]);
  };


  // =================== EDIT / DELETE =================== //

  const editSchedule = (index) => {
    const sc = allSchedules[index];

    if (!workingDays.includes(sc.day)) {
      setWorkingDays([...workingDays, sc.day]);
    }

    setDate(sc.date);
    setBreaks(sc.breaks);
    setGeneratedSlots(sc.slots);
    setSlotDuration(sc.slotDuration);

    setEditingIndex(index);
  };

  const deleteSchedule = (index) => {
    setAllSchedules(allSchedules.filter((_, i) => i !== index));
  };


  // =================== UI =================== //

  return (
    <div className="p-6 space-y-10">

      <h1 className="text-2xl font-bold text-[var(--textDark)]">Doctor Schedule Management</h1>

      {/* ============= Working Days ============= */}
      <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">

        <h2 className="text-lg font-semibold mb-4">Weekly Working Days</h2>

        <div className="flex gap-4 max-sm:flex-col mb-4">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="border border-[var(--borderLight)] rounded-lg px-3 py-2 w-full"
          >
            <option value="">Select Day</option>
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
              <option key={day}>{day}</option>
            ))}
          </select>

          <button
            onClick={addDay}
            className="px-4 py-2 bg-[var(--brandColor)] text-white rounded-lg flex items-center gap-2 hover:bg-[var(--brandColorDark)]"
          >
            <Plus size={18} /> Add Day
          </button>
        </div>

        {/* SHOW SELECTED DAYS */}
        <div className="flex gap-2 flex-wrap">
          {workingDays.map((d, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-1 bg-[var(--brandColorLight)] text-[var(--brandColor)] rounded-full text-sm"
            >
              {d}
              <button onClick={() => removeDay(d)} className="text-red-500 hover:text-red-700">
                <X size={14} />
              </button>
            </span>
          ))}
        </div>

      </div>


      {/* ============= Slot Generator ============= */}
      <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">

        <h2 className="text-lg font-semibold mb-4">Generate Time Slots</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">

          {/* DATE */}
          <div>
            <label className="text-sm font-medium">Date</label>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2 w-full mt-1"
            >
              <option value="">Select Date</option>
              {availableDates.map((dt) => (
                <option key={dt}>{dt}</option>
              ))}
            </select>
          </div>

          {/* START TIME */}
          <div>
            <label className="text-sm font-medium">Start Time</label>
            <input
              type="time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2 w-full mt-1"
            />
          </div>

          {/* END TIME */}
          <div>
            <label className="text-sm font-medium">End Time</label>
            <input
              type="time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2 w-full mt-1"
            />
          </div>

          {/* SLOT DURATION */}
          <div>
            <label className="text-sm font-medium">Slot Duration</label>
            <select
              value={slotDuration}
              onChange={(e) => setSlotDuration(Number(e.target.value))}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2 w-full mt-1"
            >
              {[5,10,15,20,30,60].map((m) => (
                <option key={m}>{m} minutes</option>
              ))}
            </select>
          </div>
        </div>

        {/* BREAKS */}
        <h3 className="font-semibold mt-4 mb-2">Break Times</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
          <input
            type="time"
            value={breakStart}
            onChange={(e) => setBreakStart(e.target.value)}
            className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
          />

          <input
            type="time"
            value={breakEnd}
            onChange={(e) => setBreakEnd(e.target.value)}
            className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
          />

          <button
            onClick={addBreak}
            className="px-4 py-2 bg-[var(--brandAccent)] text-white rounded-lg hover:bg-green-700"
          >
            Add Break
          </button>
        </div>

        {/* SHOW BREAKS */}
        <div className="flex gap-2 flex-wrap">
          {breaks.map((b, i) => (
            <span key={i} className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
              {formatTime(b.from)} - {formatTime(b.to)}
              <button onClick={() => removeBreak(i)}><X size={14} /></button>
            </span>
          ))}
        </div>

        {/* GENERATED SLOTS */}
        <h3 className="font-semibold mt-6 mb-2">Generated Slots</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {generatedSlots.map((slot, i) => (
            <div key={i} className="p-2 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)] text-center text-sm">
              {formatTime(slot.from)} - {formatTime(slot.to)}
            </div>
          ))}
        </div>

        {/* SAVE BUTTON */}
        {generatedSlots.length > 0 && (
          <button
            onClick={saveSchedule}
            className="mt-6 px-6 py-3 bg-[var(--brandColor)] text-white rounded-lg hover:bg-[var(--brandColorDark)]"
          >
            {editingIndex !== null ? "Update Schedule" : "Save Schedule"}
          </button>
        )}

      </div>


      {/* ============= SAVED SCHEDULES ============= */}
      <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">

        <h2 className="text-lg font-semibold mb-4">Your Schedules</h2>

        {allSchedules.length === 0 && (
          <p className="text-sm text-gray-500">No schedules created yet.</p>
        )}

        <div className="space-y-4">
          {allSchedules.map((sc, i) => (
            <div key={i} className="p-4 border border-[var(--borderLight)] rounded-xl bg-[var(--bgLight)] shadow-sm">

              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{sc.day} — {sc.date}</p>
                  <p className="text-sm text-gray-500">
                    Slot Duration: {sc.slotDuration} mins
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editSchedule(i)}
                    className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => deleteSchedule(i)}
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                {sc.slots.map((slot, j) => (
                  <span key={j} className="px-3 py-1 text-xs bg-[var(--brandColorLight)] text-[var(--brandColor)] rounded-lg">
                    {formatTime(slot.from)} - {formatTime(slot.to)}
                  </span>
                ))}
              </div>

              {sc.breaks.length > 0 && (
                <div className="mt-3">
                  <p className="font-semibold text-sm">Breaks:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {sc.breaks.map((b, j) => (
                      <span key={j} className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded-lg">
                        {formatTime(b.from)} - {formatTime(b.to)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
