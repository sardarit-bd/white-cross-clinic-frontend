"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Calendar,
  HeartPulse,
  FileText,
  ChevronRight,
  X,
} from "lucide-react";

import UpdateConditionForm from "@/components/modules/dashboard/doctor/patients/UpdateConditionForm";
import PrescriptionUpload from "@/components/modules/dashboard/doctor/patients/PrescriptionUpload";
import PDFViewerModal from "@/components/modules/dashboard/doctor/patients/PDFViewerModal";

export default function DoctorPatientManagementPage() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");

  // PDF Viewer
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [pdfList, setPdfList] = useState([]);
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);

  // Load demo data
  useEffect(() => {
    const demoPatients = [
      {
        id: 1,
        name: "John Doe",
        age: 42,
        condition: "Hypertension",
        lastVisit: "2025-01-15",
        status: "Stable",
        reports: [
          { title: "Blood Test Report", url: "/test.pdf" },
          { title: "ECG Scan", url: "/test.pdf" },
        ],
      },
      {
        id: 2,
        name: "Sarah Ahmed",
        age: 34,
        condition: "Diabetes Type II",
        lastVisit: "2025-01-19",
        status: "Under Observation",
        reports: [{ title: "Sugar Level Test", url: "/test.pdf" }],
      },
    ];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPatients(demoPatients);
    setFiltered(demoPatients);
  }, []);

  // Search filtering
  useEffect(() => {
    let result = patients;

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFiltered(result);
  }, [search, patients]);

  // Open PDF modal
  const openPDFViewer = (reports, index) => {
    setPdfList(reports);
    setCurrentPdfIndex(index);
    setPdfModalOpen(true);
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-[var(--textDark)]">
          Patient Management
        </h1>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-[var(--textLight)]"
          />
          <input
            type="text"
            placeholder="Search patient..."
            className="pl-10 border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* PATIENT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)] hover:shadow-lg transition cursor-pointer group"
            onClick={() => setSelected(p)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-[var(--textDark)]">
                  {p.name}
                </h2>
                <p className="text-sm text-[var(--textLight)]">Age: {p.age}</p>
              </div>
              <ChevronRight className="text-[var(--textLight)] group-hover:text-[var(--brandColor)] transition" />
            </div>

            <div className="mt-4 space-y-2">

              <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
                <Calendar size={16} />
                Last Visit: {p.lastVisit}
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
                <HeartPulse size={16} />
                Condition: {p.condition}
              </div>

              {/* Status */}
              {/* <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold
                ${
                  p.status === "Stable"
                    ? "bg-green-100 text-green-600"
                    : p.status === "Critical"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {p.status}
              </span> */}
            </div>
          </div>
        ))}
      </div>

      {/* ===================== PATIENT DETAIL MODAL ===================== */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-40 z-50 flex items-center justify-center p-4 animate-fadeIn scroll-smooth"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-6xl rounded-xl shadow-xl p-6 relative animate-slideUp overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-[var(--brandColor)]"
            >
              <X size={26} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
              {selected.name}
            </h2>

            {/* Patient Info */}
            <div className="bg-[var(--bgLight)] p-4 rounded-lg border border-[var(--borderLight)] mb-5">
              <p><strong>Age:</strong> {selected.age}</p>
              <p><strong>Condition:</strong> {selected.condition}</p>
              <p><strong>Last Visit:</strong> {selected.lastVisit}</p>
            </div>

            {/* Update Condition */}
            <UpdateConditionForm
              patientId={selected.id}
              initialCondition={selected.condition}
            />

            <hr className="my-6" />

            {/* Medical Reports */}
            <h3 className="text-lg font-semibold mb-4">Medical Reports</h3>

            {selected.reports.map((report, index) => (
              <div
                key={index}
                onClick={() => openPDFViewer(selected.reports, index)}
                className="p-4 mb-3 border border-[var(--borderLight)] rounded-xl bg-[var(--bgLight)] shadow-sm flex justify-between items-center cursor-pointer hover:border-[var(--brandColor)] transition"
              >
                <div className="flex items-center gap-3">
                  <FileText className="text-[var(--brandColor)]" />
                  <span>{report.title}</span>
                </div>
              </div>
            ))}

            <hr className="my-6" />

            {/* Upload Prescription */}
            <PrescriptionUpload patientId={selected.id} />
          </div>
        </div>
      )}

      {/* ===================== PDF VIEWER MODAL ===================== */}
      {pdfModalOpen && (
        <PDFViewerModal
          files={pdfList}
          index={currentPdfIndex}
          onClose={() => setPdfModalOpen(false)}
          onPrev={() =>
            setCurrentPdfIndex((i) =>
              i === 0 ? pdfList.length - 1 : i - 1
            )
          }
          onNext={() =>
            setCurrentPdfIndex((i) =>
              i === pdfList.length - 1 ? 0 : i + 1
            )
          }
        />
      )}
    </div>
  );
}
