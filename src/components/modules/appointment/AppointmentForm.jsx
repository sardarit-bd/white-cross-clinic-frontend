"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dayjs from "dayjs";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCategory } from "@/hooks/useCategory";
import { useDoctorsByDept } from "@/hooks/useUser";
import { Calendar, Moon, Sun } from "lucide-react";
import { useDoctorAppointment } from "@/hooks/useDoctorAppointment";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AppointmentFormPro() {
  const router = useRouter()
  const { user } = useAuth()
  const params = useSearchParams()
  const paramsDepartment = params.get('department')
  const paramsDoctor = params.get('doctor')
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(paramsDepartment)
  const [selectedDoctor, setSelectedDoctor] = useState(paramsDoctor)
  const [selectedSchedule, setSelectedSchedule] = useState(null)
  const { createAppointment } = useDoctorAppointment()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });
  const { categories } = useCategory()
  const { data: doctors } = useDoctorsByDept(selectedCategory)

  const doctorInfo = doctors?.find(d => d?.user?._id === selectedDoctor)
  const available = doctorInfo?.available

  const filteredSchedules = selectedDate
    ? available?.filter(
      (s) =>
        s.day.toLowerCase() === dayjs(selectedDate).format("dddd").toLowerCase()
    )
    : available;



  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSchedule) {
      toast.error("Please Select Schedule.")
    }

    if (!selectedDate) {
      toast.error("Please Select Date")
    }
    const schedule = available.find(a => a?._id === selectedSchedule)
    const payload = {
      ...formData,
      doctor: selectedDoctor,
      category: selectedCategory,
      day: schedule?.day,
      shift: schedule?.shift,
      from: schedule?.from,
      to: schedule?.to,
      date: selectedDate
    }
    const res = await createAppointment.mutateAsync(payload)
    if (res?.data?.success) {
      const appointmentId = res?.data?.data?._id
      const paymentRes = await axios.post(`${BASE}/api/payments/create-checkout`, { appointmentId: appointmentId }, {
        withCredentials: true,
      })
      const paymentUrl = paymentRes?.data?.data?.url
      if(paymentUrl){
        router.push(paymentUrl)
      }
      toast.success("Appointment is Confirmed.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        note: "",
      })
    } else {
      toast.success("Something is Wrong. Contact with admin")
      console.log(res)
    }

  };

  return (
    <section className="py-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-10">

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
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
            >
              <option value="">Select Category</option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>

            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
              className="border border-[var(--borderLight)] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
            >
              <option value=''>Select Doctor</option>
              {doctors?.map((d) => (
                <option key={d?.user?._id} value={d?.user?._id}>
                  {d?.user?.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="mb-6">
            <input
              type="date"
              value={selectedDate || ""}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedSchedule(null); // reset selected schedule when date changes
              }}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
            />
          </div>

          {
            filteredSchedules && <div className="grid grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredSchedules?.map((s) => (
                  <motion.div
                    key={s._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={() => setSelectedSchedule(s?._id)}
                    className={`group relative bg-white border rounded-xl p-5 hover:shadow-lg transition-all duration-200 ${selectedSchedule === s?._id ? "border-[var(--brandColor)] border-4" : "border-gray-200"}`}
                  >
                    {/* Status Indicator */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-[#0076BC] rounded-l-xl opacity-0  group-hover:opacity-0 transition-opacity`} />

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
                            <span className="text-sm font-medium">Start: {s.from}</span>
                          </div>
                          <div className="w-4 h-[1px] bg-gray-300" />
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="text-sm font-medium">End: {s.from}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          }


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
              disabled={!user}
              className={`bg-[var(--brandColor)] ${!user ? "opacity-50" : ''} hover:bg-[var(--brandColorDark)] text-white px-10 py-3 rounded-full font-semibold shadow-md transition`}
            >
              {user ? "Confirm Appointment" : "Need to Login"}
            </button>
          </div>
        </form>
      </div >
    </section >
  );
}
