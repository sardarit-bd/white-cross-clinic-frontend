"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

// Mock backend data
const mockData = {
  Cardiology: {
    doctors: ["Dr. Ahsan Rahman", "Dr. Maria Islam"],
  },
  Neurology: {
    doctors: ["Dr. Sarah Noor", "Dr. James Lee"],
  },
  Pediatrics: {
    doctors: ["Dr. Rafi Hassan", "Dr. Lina Miah"],
  },
};

const generateSlots = () => {
  // Create times between 9:00 and 6:00 every 30min
  const slots = [];
  let start = dayjs().hour(9).minute(0);
  const end = dayjs().hour(18).minute(0);
  while (start.isBefore(end)) {
    slots.push(start.format("HH:mm"));
    start = start.add(30, "minute");
  }
  return slots;
};

export default function AppointmentFormPro() {
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const slots = generateSlots();

  useEffect(() => {
    if (doctor) {
      // simulate fetching booked slots for this doctor
      const random = slots.filter(() => Math.random() < 0.3);
      setBookedSlots(random);
    }
  }, [doctor, selectedDate]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot) return alert("Please select a time slot!");
    alert(
      `✅ Appointment booked!\n\nPatient: ${formData.name}\nDepartment: ${department}\nDoctor: ${doctor}\nDate: ${selectedDate.format(
        "dddd, MMM D YYYY"
      )}\nTime: ${selectedSlot}`
    );
  };

  return (
    <section className="py-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-10">
        {/* <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-[var(--textDark)] mb-10"
        >
          Book Your Appointment
        </motion.h2> */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
        >
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="border border-[var(--borderLight)] rounded-lg p-3 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="border border-[var(--borderLight)] rounded-lg p-3 md:col-span-2 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            />
          </div>

          {/* Department and Doctor */}
          <div className="grid md:grid-cols-2 gap-6">
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctor("");
              }}
              required
              className="border border-[var(--borderLight)] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            >
              <option value="">Select Department</option>
              {Object.keys(mockData).map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
            </select>

            {department && (
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
                className="border border-[var(--borderLight)] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
              >
                <option value="">Select Doctor</option>
                {mockData[department].doctors.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Date Picker */}
          {doctor && (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="text-[var(--textDark)] font-semibold">
                Select Date:
              </label>
              <input
                type="date"
                min={dayjs().format("YYYY-MM-DD")}
                value={selectedDate.format("YYYY-MM-DD")}
                onChange={(e) => setSelectedDate(dayjs(e.target.value))}
                className="border border-[var(--borderLight)] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
              />
              <span className="text-[var(--textLight)]">
                {selectedDate.format("dddd, MMM D YYYY")}
              </span>
            </div>
          )}

          {/* Modern Slot Picker */}
          {doctor && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--textDark)] mb-3">
                Available Time Slots
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {slots.map((time) => {
                  const isBooked = bookedSlots.includes(time);
                  const isSelected = selectedSlot === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      disabled={isBooked}
                      onClick={() => setSelectedSlot(time)}
                      className={`rounded-lg p-2 text-sm font-medium border transition
                        ${
                          isBooked
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : isSelected
                            ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)]"
                            : "border-[var(--borderLight)] hover:border-[var(--brandColor)] text-[var(--textDark)]"
                        }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Notes */}
          <textarea
            name="note"
            placeholder="Additional Notes (Optional)"
            onChange={handleChange}
            className="border border-[var(--borderLight)] rounded-lg p-3 w-full h-28 resize-none focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
          />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white px-10 py-3 rounded-full font-semibold shadow-md transition"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
