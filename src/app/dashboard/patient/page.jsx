"use client";

import AppointmentsFollowups from "@/components/modules/dashboard/patient/AppointmentsFollowups";
import BillingInsurance from "@/components/modules/dashboard/patient/BillingInsurance";
import CurrentHealthStatus from "@/components/modules/dashboard/patient/CurrentHealthStatus";
import LabDiagnostics from "@/components/modules/dashboard/patient/LabDiagnostics";
import MedicalHistory from "@/components/modules/dashboard/patient/MedicalHistory";
import MedicationsTreatment from "@/components/modules/dashboard/patient/MedicationsTreatment";
import NotesDocuments from "@/components/modules/dashboard/patient/NotesDocuments";
import PatientDemographics from "@/components/modules/dashboard/patient/PatientDemographics";
import { useEffect, useState } from "react";

export default function PatientDashboardPage() {
  // Patient Demographics
  const [patient, setPatient] = useState({
    fullName: "John Doe",
    dateOfBirth: "1980-05-15",
    age: 43,
    gender: "Male",
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    address: "123 Main Street, City, State 12345",
    emergencyContact: "Jane Doe (Spouse) - +1 (555) 987-6543",
    bloodType: "O+",
    allergies: "Penicillin, Peanuts"
  });

  // Medical History - variable name lowercase করে দিন
  const [medicalHistoryData, setMedicalHistoryData] = useState([
    {
      id: 1,
      condition: "Hypertension",
      diagnosisDate: "2018-03-10",
      status: "Chronic",
      notes: "Controlled with medication"
    },
    {
      id: 2,
      condition: "Type 2 Diabetes",
      diagnosisDate: "2020-07-22",
      status: "Active",
      notes: "Diet controlled"
    },
    {
      id: 3,
      condition: "Asthma",
      diagnosisDate: "2015-11-05",
      status: "Resolved",
      notes: "Childhood asthma, no recent episodes"
    }
  ]);

  // Current Health Status
  const [healthStatus, setHealthStatus] = useState({
    heartRate: "72",
    bloodPressure: "120/80",
    temperature: "36.8",
    weight: "75",
    height: "175",
    bmi: "24.5",
    symptoms: "Occasional headaches, no other concerns.",
    lastUpdated: "2024-01-20"
  });

  // Lab & Diagnostics
  const [labResults, setLabResults] = useState([
    {
      id: 1,
      testName: "Complete Blood Count",
      testDate: "2024-01-15",
      category: "Hematology",
      result: "Normal",
      normalRange: "Normal",
      status: "Normal"
    },
    {
      id: 2,
      testName: "Lipid Panel",
      testDate: "2024-01-15",
      category: "Chemistry",
      result: "Elevated LDL: 135 mg/dL",
      normalRange: "< 100 mg/dL",
      status: "Abnormal"
    },
    {
      id: 3,
      testName: "HbA1c",
      testDate: "2024-01-15",
      category: "Diabetes",
      result: "6.2%",
      normalRange: "< 5.7%",
      status: "Abnormal"
    }
  ]);

  // Medications & Treatment
  const [medications, setMedications] = useState([
    {
      id: 1,
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2023-01-15",
      endDate: "",
      prescribedBy: "Dr. Sarah Wilson",
      status: "Active",
      purpose: "Blood pressure control"
    },
    {
      id: 2,
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2023-03-20",
      endDate: "",
      prescribedBy: "Dr. Michael Chen",
      status: "Active",
      purpose: "Blood sugar management"
    }
  ]);

  // Appointments & Follow-ups
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Sarah Wilson",
      specialization: "Cardiologist",
      date: "2025-01-25",
      time: "10:00 AM",
      status: "Upcoming",
      location: "City Medical Center, Room 304",
      reason: "Heart Checkup",
      type: "Follow-up"
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      specialization: "Neurologist",
      date: "2025-01-20",
      time: "02:30 PM",
      status: "Completed",
      location: "General Hospital, Room 102",
      reason: "Headache Consultation",
      type: "Consultation"
    },
    {
      id: 3,
      doctorName: "Dr. Emily Davis",
      specialization: "Dermatologist",
      date: "2025-02-05",
      time: "11:15 AM",
      status: "Scheduled",
      location: "Skin Care Clinic, Room 205",
      reason: "Annual Skin Check",
      type: "Routine"
    }
  ]);

  // Billing & Insurance
  const [billingInfo, setBillingInfo] = useState({
    insuranceProvider: "Blue Cross Blue Shield",
    policyNumber: "BCBS123456789",
    groupNumber: "GRP987654",
    deductible: {
      individual: "$500",
      family: "$1500",
      met: "$350"
    },
    copay: "$25",
    outstandingBalance: "$120.50",
    recentClaims: [
      {
        id: 1,
        date: "2024-01-15",
        service: "Consultation",
        amount: "$150.00",
        status: "Paid"
      },
      {
        id: 2,
        date: "2024-01-20",
        service: "Lab Tests",
        amount: "$85.50",
        status: "Pending"
      }
    ]
  });

  // Notes & Documents
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "Medical History Summary",
      type: "PDF",
      date: "2024-01-15",
      category: "Medical Records",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Insurance Card Copy",
      type: "Image",
      date: "2024-01-10",
      category: "Insurance",
      size: "1.2 MB"
    },
    {
      id: 3,
      title: "Lab Results - January 2024",
      type: "PDF",
      date: "2024-01-16",
      category: "Lab Reports",
      size: "3.1 MB"
    }
  ]);

  // Quick Stats
  const stats = {
    upcomingAppointments: appointments.filter(a => a.status === "Upcoming" || a.status === 'Scheduled').length,
    activeMedications: medications.filter(m => m.status === "Active").length,
    pendingResults: labResults.filter(l => l.status === "Abnormal").length,
    recentVisits: appointments.filter(a => a.status === "Completed").length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--textDark)]">
            Patient Medical Profile
          </h1>
          <p className="text-[var(--textLight)]">
            Comprehensive health information and medical records
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)] min-w-[120px] text-center">
            <p className="text-sm text-[var(--textLight)]">Upcoming</p>
            <p className="text-xl font-bold text-[var(--brandColor)]">
              {stats.upcomingAppointments}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)] min-w-[120px] text-center">
            <p className="text-sm text-[var(--textLight)]">Medications</p>
            <p className="text-xl font-bold text-blue-600">
              {stats.activeMedications}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)] min-w-[120px] text-center">
            <p className="text-sm text-[var(--textLight)]">Pending Results</p>
            <p className="text-xl font-bold text-orange-600">
              {stats.pendingResults}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Primary Medical Information */}
        <div className="xl:col-span-2 space-y-6">
          <PatientDemographics 
            patient={patient} 
            onUpdate={setPatient}
          />
          
          <CurrentHealthStatus 
            healthStatus={healthStatus} 
            onUpdate={setHealthStatus} 
          />
          
          <MedicalHistory 
            medicalHistory={medicalHistoryData} 
            onUpdate={setMedicalHistoryData} 
          />
          
          <LabDiagnostics 
            labResults={labResults} 
            onUpdate={setLabResults} 
          />
        </div>

        {/* Right Column - Treatment & Administrative */}
        <div className="space-y-6">
          <MedicationsTreatment 
            medications={medications} 
            onUpdate={setMedications} 
          />
          
          {/* <AppointmentsFollowups 
            appointments={appointments} 
            onUpdate={setAppointments} 
          /> */}
          
          <BillingInsurance 
            billingInfo={billingInfo} 
            onUpdate={setBillingInfo} 
          />
          
          <NotesDocuments 
            documents={documents} 
            onUpdate={setDocuments} 
          />
        </div>
      </div>
    </div>
  );
}