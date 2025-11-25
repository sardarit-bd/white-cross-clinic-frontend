"use client";

import { Plus, FileText, Download, Eye } from "lucide-react";
import { useState } from "react";

export default function Perception({ medications, onUpdate }) {
  console.log(medications, onUpdate)
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    prescribedBy: "",
    prescriptionPdf: "",
    prescriptionDate: ""
  });

  // Convert PDF to Base64
  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload only PDF files");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, prescriptionPdf: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!formData.prescribedBy || !formData.prescriptionDate) {
      alert("Doctor name and prescription date are required");
      return;
    }

    if (!formData.prescriptionPdf) {
      alert("Please upload prescription PDF");
      return;
    }

    const updated = [...medications, { ...formData, id: Date.now() }];
    onUpdate(updated);

    setShowForm(false);
    setFormData({
      prescribedBy: "",
      prescriptionPdf: "",
      prescriptionDate: ""
    });
  };

  // PDF Viewer Window
  const viewPdf = (pdfData) => {
    const win = window.open();
    win.document.write(`
      <html>
        <head><title>Prescription</title></head>
        <body style="margin:0;">
          <embed width="100%" height="100%" src="${pdfData}" type="application/pdf" />
        </body>
      </html>
    `);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">Prescriptions</h2>

        {/* <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Plus size={18} />
          Add Prescription
        </button> */}
      </div>

      {/* Add Prescription Form */}
      {showForm && (
        <div className="mb-6 p-4 border rounded-lg bg-[var(--bgLight)] border-[var(--borderLight)]">
          <h3 className="font-semibold mb-3">Add New Prescription</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.prescriptionDate}
              onChange={(e) => setFormData({ ...formData, prescriptionDate: e.target.value })}
              className="border rounded-lg px-3 py-2"
            />

            <input
              type="text"
              placeholder="Doctor Name"
              value={formData.prescribedBy}
              onChange={(e) => setFormData({ ...formData, prescribedBy: e.target.value })}
              className="border rounded-lg px-3 py-2"
            />

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Upload Prescription PDF</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                className="border rounded-lg w-full px-3 py-2"
              />

              {formData.prescriptionPdf && (
                <p className="text-green-600 text-sm mt-1">✔ PDF Uploaded Successfully</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleSubmit}
              className="bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>

            <button
              onClick={() => {
                setShowForm(false);
                setFormData({ prescribedBy: "", prescriptionPdf: "", prescriptionDate: "" });
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* List Prescriptions */}
      <div className="space-y-3">
        {medications.map((prescription, index) => (
          <div
            key={prescription.id || index}
            className="p-4 border rounded-lg bg-gray-50 border-[var(--borderLight)]"
          >
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[var(--brandColor)] mt-1" />

              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Doctor:</span> {prescription.prescribedBy}
                </p>

                <p className="text-sm text-gray-800 mb-2">
                  <span className="font-semibold">Date:</span> {prescription.prescriptionDate}
                </p>

                {prescription.prescriptionPdf && (
                  <div className="flex gap-4 mt-3">
                    {/* View PDF Button with Eye icon */}
                    <button
                      onClick={() => viewPdf(prescription.prescriptionPdf)}
                      className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                    >
                      <Eye size={16} />
                      View PDF
                    </button>

                    {/* Download PDF Button with Download icon */}
                    <a
                      href={prescription.prescriptionPdf}
                      download={`${prescription.prescribedBy}_prescription_${prescription.prescriptionDate}.pdf`}
                      className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm hover:bg-green-200 transition-colors"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}