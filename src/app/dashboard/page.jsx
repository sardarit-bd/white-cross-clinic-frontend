// app/dashboard/page.tsx
"use client"
import AdminDashboard from "@/components/modules/dashboard/admin/AdminDashboard";
import DoctorDashboard from "@/components/modules/dashboard/doctor/DoctorOverview";
import { useAuth } from "@/hooks/useAuth";
import PatientDashboard from "./patient/page";


export default function DashboardHome() {
  const user = useAuth();

  if (!user) {
    return <p>Access denied</p>;
  }

  return user.role === "admin" ? <AdminDashboard /> : user.role === "doctor" ? <DoctorDashboard /> : user.role ==="patient" ? <PatientDashboard /> : <p>Access denied</p>;
}