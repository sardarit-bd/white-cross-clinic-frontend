"use client";

import { FileText, Download, Eye, Plus } from "lucide-react";
import { useState } from "react";

export default function LabDiagnostics({ labResults, onUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    testName: "",
    testDate: "",
    category: "",
    result: "",
    normalRange: "",
    status: "Normal"
  });

  const handleAddResult = () => {
    onUpdate([...labResults, { ...formData, id: Date.now() }]);
    setShowForm(false);
    setFormData({ testName: "", testDate: "", category: "", result: "", normalRange: "", status: "Normal" });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Normal": return "bg-green-100 text-green-600";
      case "Abnormal": return "bg-red-100 text-red-600";
      case "Critical": return "bg-red-500 text-white";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Lab & Diagnostics
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Plus size={18} />
          Add Result
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-3">Add Lab Result</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Test Name"
              value={formData.testName}
              onChange={(e) => setFormData({...formData, testName: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="date"
              value={formData.testDate}
              onChange={(e) => setFormData({...formData, testDate: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            >
              <option value="Normal">Normal</option>
              <option value="Abnormal">Abnormal</option>
              <option value="Critical">Critical</option>
            </select>
            <input
              type="text"
              placeholder="Result"
              value={formData.result}
              onChange={(e) => setFormData({...formData, result: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Normal Range"
              value={formData.normalRange}
              onChange={(e) => setFormData({...formData, normalRange: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleAddResult}
              className="bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg"
            >
              Save Result
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {labResults.map((test, index) => (
          <div key={test.id || index} className="border border-[var(--borderLight)] rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <FileText className="text-[var(--brandColor)]" />
                <div>
                  <h3 className="font-semibold">{test.testName}</h3>
                  <p className="text-sm text-[var(--textLight)]">
                    {test.testDate} • {test.category}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(test.status)}`}>
                {test.status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div>
                <p className="text-sm text-[var(--textLight)]">Result</p>
                <p className="font-semibold">{test.result}</p>
              </div>
              <div>
                <p className="text-sm text-[var(--textLight)]">Normal Range</p>
                <p className="font-semibold">{test.normalRange}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 text-[var(--brandColor)]">
                  <Eye size={16} />
                  View
                </button>
                <button className="flex items-center gap-1 text-green-600">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}