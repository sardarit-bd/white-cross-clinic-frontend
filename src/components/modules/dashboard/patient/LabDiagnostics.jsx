"use client";

import { FileText, Download, Eye, Plus, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function LabDiagnostics({ labResults, onUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [formData, setFormData] = useState({
    testName: "",
    testDate: "",
    category: "",
    result: "",
    normalRange: "",
    status: "Normal",
  });

  const handleAddResult = () => {
    const newResult = {
      ...formData,
      id: Date.now(),
      reportId: `LAB-${Date.now()}`,
      timestamp: new Date().toISOString()
    };
    onUpdate([...labResults, newResult]);
    setShowForm(false);
    setFormData({ 
      testName: "", 
      testDate: "", 
      category: "", 
      result: "", 
      normalRange: "", 
      status: "Normal",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Normal": return "bg-green-100 text-green-600";
      case "Abnormal": return "bg-yellow-100 text-yellow-600";
      case "Critical": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  // Generate PDF content for lab report
  const generateLabReportPDF = (test) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Lab Report - ${test.testName}</title>
        <style>
          body { 
            font-family: 'Arial', sans-serif; 
            margin: 40px; 
            line-height: 1.6; 
            color: #333;
          }
          .header { 
            border-bottom: 2px solid #2c5aa0; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
          }
          .clinic-info { 
            text-align: center; 
            margin-bottom: 20px;
          }
          .clinic-name { 
            font-size: 20px; 
            font-weight: bold; 
            color: #2c5aa0; 
            margin-bottom: 5px;
          }
          .patient-info { 
            background: #f8f9fa; 
            padding: 15px; 
            border-radius: 8px; 
            margin-bottom: 20px;
          }
          .report-title { 
            font-size: 18px; 
            font-weight: bold; 
            text-align: center; 
            margin: 20px 0; 
            color: #2c5aa0;
          }
          .test-details { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0;
          }
          .test-details th { 
            background: #2c5aa0; 
            color: white; 
            padding: 12px; 
            text-align: left;
          }
          .test-details td { 
            padding: 12px; 
            border-bottom: 1px solid #ddd;
          }
          .footer { 
            margin-top: 50px; 
            border-top: 1px solid #ccc; 
            padding-top: 20px; 
            font-size: 12px; 
            color: #666; 
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="clinic-info">
            <div class="clinic-name">Medical Laboratory</div>
          </div>
        </div>

        <div class="patient-info">
          <strong>Patient:</strong> John Doe • 
          <strong>Report ID:</strong> ${test.reportId}
        </div>

        <div class="report-title">LABORATORY TEST REPORT</div>

        <table class="test-details">
          <tr>
            <th>Test Information</th>
            <th>Details</th>
          </tr>
          <tr>
            <td><strong>Test Name</strong></td>
            <td>${test.testName}</td>
          </tr>
          <tr>
            <td><strong>Test Date</strong></td>
            <td>${test.testDate}</td>
          </tr>
          <tr>
            <td><strong>Category</strong></td>
            <td>${test.category}</td>
          </tr>
          <tr>
            <td><strong>Result</strong></td>
            <td>${test.result}</td>
          </tr>
          <tr>
            <td><strong>Normal Range</strong></td>
            <td>${test.normalRange}</td>
          </tr>
          <tr>
            <td><strong>Status</strong></td>
            <td>${test.status}</td>
          </tr>
        </table>

        <div class="footer">
          Generated on: ${new Date().toLocaleDateString()}
        </div>
      </body>
      </html>
    `;
  };

  // Download PDF function
  const downloadLabReport = (test) => {
    const content = generateLabReportPDF(test);
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${test.testName}_${test.testDate}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Show PDF in new tab
  const showPDF = (test) => {
    const content = generateLabReportPDF(test);
    const newWindow = window.open('', '_blank');
    newWindow.document.write(content);
    newWindow.document.close();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Lab Reports
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Plus size={18} />
          Add Report
        </button>
      </div>

      {/* Add Result Form */}
      {showForm && (
        <div className="mb-6 p-6 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-4">Add Lab Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          <div className="flex gap-3">
            <button
              onClick={handleAddResult}
              className="bg-[var(--brandColor)] text-white px-6 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
            >
              Save Report
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Lab Reports List - Minimalist Design */}
      <div className="space-y-3">
        {labResults.length === 0 ? (
          <div className="text-center py-12 text-[var(--textLight)]">
            <FileText className="mx-auto mb-3" size={48} />
            <p>No lab reports found</p>
          </div>
        ) : (
          labResults.map((test) => (
            <div 
              key={test.id} 
              className="border border-[var(--borderLight)] rounded-lg p-4 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <FileText className="text-[var(--brandColor)]" size={20} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--textDark)] truncate">
                      {test.testName}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--textLight)] mt-1">
                      <Calendar size={14} />
                      <span>{test.testDate}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(test.status)}`}>
                        {test.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => showPDF(test)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                    title="View PDF"
                  >
                    <Eye size={18} />
                  </button>
                  <button 
                    onClick={() => downloadLabReport(test)}
                    className="flex items-center gap-1 text-green-600 hover:text-green-800 p-2 hover:bg-green-50 rounded-lg transition-colors"
                    title="Download PDF"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}