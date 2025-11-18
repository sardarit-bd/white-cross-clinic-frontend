"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Phone, MapPin } from "lucide-react";
import AppointmentStatusBadge from "@/components/modules/dashboard/doctor/AppointmentStatusBadge";

export default function DoctorAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Filters
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // ⚡ Replace this with real API call later
  useEffect(() => {
    const demo = [
      {
        id: 1,
        name: "John Doe",
        date: "2025-01-22",
        time: "10:00 AM",
        phone: "+1 202-555-0189",
        reason: "Chest Pain Checkup",
        status: "Pending",
        location: "Room 304",
      },
      {
        id: 2,
        name: "Sarah Ahmed",
        date: "2025-01-22",
        time: "12:30 PM",
        phone: "+1 202-555-0275",
        reason: "Follow-up Consultation",
        status: "Approved",
        location: "Room 102",
      },
      {
        id: 3,
        name: "Mark Wilson",
        date: "2025-01-23",
        time: "03:00 PM",
        phone: "+1 202-555-4224",
        reason: "ECG Review",
        status: "Completed",
        location: "Room 310",
      },
    ];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAppointments(demo);
    setFiltered(demo);
  }, []);

  // 🔍 Filtering Logic
  useEffect(() => {
    let updated = [...appointments];

    // search by name  
    if (search.trim() !== "") {
      updated = updated.filter((a) =>
        a.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // filter by date
    if (filterDate) {
      updated = updated.filter((a) => a.date === filterDate);
    }

    // filter by status
    if (filterStatus !== "All") {
      updated = updated.filter((a) => a.status === filterStatus);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFiltered(updated);
  }, [search, filterDate, filterStatus, appointments]);

  return (
    <div className="p-6 space-y-6">

      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-[var(--textDark)]">Appointments</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">

          {/* Date Filter */}
          <input
            type="date"
            className="border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />

          {/* Status Filter */}
          <select
            className="border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm text-[var(--textDark)]"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Search Filter */}
          <input
            type="text"
            placeholder="Search patient..."
            className="border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Appointment List */}
      {filtered.length === 0 ? (
        <p className="text-center text-[var(--textLight)] pt-10">
          No appointments found.
        </p>
      ) : (
        <div className="space-y-4">
          {filtered.map((appt) => (
            <div
              key={appt.id}
              className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)] hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start flex-wrap">

                {/* Left Section */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold text-[var(--textDark)]">
                    {appt.name}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
                    <Calendar size={16} />
                    {appt.date}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
                    <Clock size={16} />
                    {appt.time}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
                    <Phone size={16} />
                    {appt.phone}
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-2 items-end">

                  <AppointmentStatusBadge status={appt.status} />

                  <div className="text-sm text-[var(--textLight)] flex items-center gap-2">
                    <MapPin size={16} />
                    {appt.location}
                  </div>

                  {/* Dropdown for Updating Status */}
                  <select
                    className="mt-2 rounded-lg border border-[var(--borderLight)] px-3 py-1 text-sm text-[var(--textDark)]"
                    defaultValue={appt.status}
                    onChange={(e) => {
                      // ⚡ API update call goes here
                      console.log("Update", appt.id, e.target.value);
                    }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                  </select>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
