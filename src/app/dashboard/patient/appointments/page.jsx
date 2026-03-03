"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, User, Search, Filter, Plus, Video, Phone, MoreVertical, Edit, Trash2, Download } from "lucide-react";
import { useDoctorAppointment, useDoctorAppointmentByPatient } from "@/hooks/useDoctorAppointment";
import dayjs from "dayjs";
import toast from "react-hot-toast";

export default function MyAppointments() {
  // const { data: appointment } = useDoctorAppointmentByPatient()
  const { deleteAppointment, doctorAppointmentByPatient: appointment } = useDoctorAppointment()
  const [filterDate, setFilterDate] = useState("");

  const appointments = appointment?.map((app) => {
    return {
      id: app?._id,
      patientName: app?.name,
      specialty: app?.category?.name,
      day: app?.day,
      from: app?.from,
      to: app?.to,
      type: app?.type || "In Place",
      status: "Pending",
      location: "Meanwhile Garden Medical Centre Westbourne Park 5 Elkstone Rd, London",
      notes: app?.note,
      date: app?.date,
      confirmed: app?.confirmed
    }
  })

  // Filter appointments based on active tab and search
  const filteredAppointments = filterDate
    ? appointments?.filter(
      (app) => app.date && new Date(app.date).toISOString().split("T")[0] === filterDate
    )
    : appointments;

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };



  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video Call': return <Video size={16} className="text-blue-600" />;
      case 'Phone Call': return <Phone size={16} className="text-green-600" />;
      default: return <MapPin size={16} className="text-[var(--brandColor)]" />;
    }
  };


const cancelAppointment = async (id) => {
  const res = await deleteAppointment.mutateAsync(id)
  if(res?.data?.success){
    toast.success("Appintment is Deleted.")
  }else{
    toast.error("Something Wrong.Contact to Admin.")
    console.log(res)
  }
}
  return (
    <div className="p-6">

      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--textDark)] mb-2">
            My Appointments
          </h1>
          <p className="text-[var(--textLight)]">
            Manage and track your medical appointments
          </p>
        </div>

        {/* Date Filter */}
        <div className="mb-4">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
          />
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {filteredAppointments?.length === 0 ? (
            <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-12 text-center">
              <Calendar className="mx-auto text-[var(--textMuted)] mb-4" size={48} />
              <h3 className="text-lg font-semibold text-[var(--textDark)] mb-2">
                No appointments found
              </h3>
            </div>
          ) : (
            filteredAppointments?.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl shadow-[var(--shadowCard)] p-6 hover:shadow-[var(--shadowHover)] transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Section - Doctor Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-[var(--brandColorLight)] rounded-full flex items-center justify-center">
                      <User className="text-[var(--brandColor)]" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-[var(--textDark)]">
                          {appointment.patientName}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border`}>
                          {console.log(appointment.confirmed)}
                          {appointment.confirmed ? "Confirmed" : "Pending"}
                        </span>
                      </div>
                      <p className="text-[var(--textLight)] mb-2">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-[var(--textLight)]">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{appointment.day} - {appointment?.date ? dayjs(appointment?.date).format("YYYY-MM-DD") : dayjs(new Date.now()).format("YYYY-MM-DD")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{appointment.from} - ({appointment.to})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(appointment.type)}
                          <span>{appointment.type}</span>
                        </div>
                      </div>
                      {appointment.location && (
                        <div className="flex items-center gap-1 mt-2 text-sm text-[var(--textLight)]">
                          <MapPin size={14} />
                          <span>{appointment.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Section - Actions */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => cancelAppointment(appointment.id)}
                        className="p-2 text-[var(--textLight)] hover:text-red-600 transition-colors"
                        title="Cancel"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {appointment.confirmed && (
                      <button className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition-colors">
                        Confirmed
                      </button>
                    )}
                  </div>
                </div>

                {/* Reason */}
                <div className="mt-4 pt-4 border-t border-[var(--borderLight)]">
                  <p className="text-sm text-[var(--textLight)]">
                    <span className="font-medium text-[var(--textDark)]">Additional Notes:</span> {appointment.notes}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}