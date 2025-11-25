"use client";

import { useState } from "react";
import PatientTabs from "@/components/modules/dashboard/patient/PatientTabs";
import PatientDemographics from "@/components/modules/dashboard/patient/PatientDemographics";
import MedicalHistory from "@/components/modules/dashboard/patient/MedicalHistory";
import LabDiagnostics from "@/components/modules/dashboard/patient/LabDiagnostics";
import BillingInsurance from "@/components/modules/dashboard/patient/BillingInsurance";
import NotesDocuments from "@/components/modules/dashboard/patient/NotesDocuments";
import Perception from "@/components/modules/dashboard/patient/Perception";

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('demographics');

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

  // Medical History
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

  // Billing & Insurance
  const [billingInfo, setBillingInfo] = useState({
    recentClaims: [
      {
        id: 1,
        date: "2024-01-15",
        service: "Consultation Fee",
        amount: "$150.00",
        status: "Paid",
        receiptPdf: "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMiAwIG9iago8PC9M...",
        transactionId: "TXN001234",
        paymentMethod: "Credit Card",
        provider: "City Medical Center",
        invoiceNumber: "INV-2024-001"
      },
      {
        id: 2,
        date: "2024-01-20",
        service: "Laboratory Tests",
        amount: "$85.50",
        status: "Paid",
        receiptPdf: "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMiAwIG9iago8PC9M...",
        transactionId: "TXN001235",
        paymentMethod: "Debit Card",
        provider: "LabCorp Diagnostics",
        invoiceNumber: "INV-2024-002"
      },
      {
        id: 3,
        date: "2024-02-01",
        service: "MRI Scan",
        amount: "$450.00",
        status: "Pending",
        receiptPdf: "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMiAwIG9iago8PC9M...",
        transactionId: "TXN001236",
        paymentMethod: "Insurance",
        provider: "Advanced Imaging Center",
        invoiceNumber: "INV-2024-003"
      },
      {
        id: 4,
        date: "2024-02-10",
        service: "Medication Prescription",
        amount: "$35.75",
        status: "Paid",
        receiptPdf: "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMiAwIG9iago8PC9M...",
        transactionId: "TXN001237",
        paymentMethod: "Cash",
        provider: "City Pharmacy",
        invoiceNumber: "INV-2024-004"
      },
      {
        id: 5,
        date: "2024-02-15",
        service: "Follow-up Visit",
        amount: "$120.00",
        status: "Paid",
        receiptPdf: "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMiAwIG9iago8PC9M...",
        transactionId: "TXN001238",
        paymentMethod: "Credit Card",
        provider: "City Medical Center",
        invoiceNumber: "INV-2024-005"
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

  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      prescribedBy: "Dr. Sarah Wilson",
      prescriptionDate: "2024-01-15",
      prescriptionPdf:
        "data:application/pdf;base64,JVBERi0xLjMKJFakeExamplePDFBase64...",
    },
    {
      id: 2,
      prescribedBy: "Dr. Michael Chen",
      prescriptionDate: "2024-01-20",
      prescriptionPdf:
        "data:application/pdf;base64,JVBERi0xLjMKFakePdfData...",
    },
  ]);


  // Quick Stats for Dashboard View
  const stats = {
    upcomingAppointments: 2,
    activeMedications: medications.filter(m => m.status === "Active").length,
    pendingResults: labResults.filter(l => l.status === "Abnormal").length,
    recentVisits: 5
  };

  // Render active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'demographics':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PatientDemographics
                  patient={patient}
                  onUpdate={setPatient}
                />
              </div>
              <div className="space-y-6">
                {/* Quick Stats Card */}
                <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
                  <h3 className="font-semibold mb-4">Quick Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--textLight)]">Age</span>
                      <span className="font-semibold">{patient.age} years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--textLight)]">Blood Type</span>
                      <span className="font-semibold">{patient.bloodType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--textLight)]">Allergies</span>
                      <span className="font-semibold text-red-600">{patient.allergies}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // case 'health':
      //   return (
      //     <CurrentHealthStatus 
      //       healthStatus={healthStatus} 
      //       onUpdate={setHealthStatus} 
      //     />
      //   );

      case 'medical-history':
        return (
          <MedicalHistory
            medicalHistory={medicalHistoryData}
            onUpdate={setMedicalHistoryData}
          />
        );

      case 'lab':
        return (
          <LabDiagnostics
            labResults={labResults}
            onUpdate={setLabResults}
          />
        );

      case "perception":
        return (
          <Perception
            medications={prescriptions}
            onUpdate={setPrescriptions}
          />
        );

      case 'billing':
        return (
          <BillingInsurance
            billingInfo={billingInfo}
            onUpdate={setBillingInfo}
          />
        );

      case 'documents':
        return (
          <NotesDocuments
            documents={documents}
            onUpdate={setDocuments}
          />
        );

      default:
        return (
          <PatientDemographics
            patient={patient}
            onUpdate={setPatient}
          />
        );
    }
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
            {activeTab === 'demographics' ? 'Personal information and demographics' :
              //  activeTab === 'health' ? 'Current health status and vitals' :
              activeTab === 'medical-history' ? 'Medical conditions and history' :
                activeTab === 'lab' ? 'Laboratory test results' :
                  activeTab === 'medications' ? 'Medications and treatment plans' :
                    activeTab === 'billing' ? 'Billing and insurance information' :
                      'Medical documents and records'}
          </p>
        </div>

        {/* Quick Stats - Show only on demographics tab */}
        {activeTab === 'demographics' && (
          <div className="flex gap-4 flex-wrap">
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
            <div className="bg-white p-4 rounded-xl shadow-[var(--shadowCard)] min-w-[120px] text-center">
              <p className="text-sm text-[var(--textLight)]">Recent Visits</p>
              <p className="text-xl font-bold text-green-600">
                {stats.recentVisits}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <PatientTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {renderTabContent()}
      </div>
    </div>
  );
}