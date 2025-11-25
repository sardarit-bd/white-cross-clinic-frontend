"use client";

import { FileText, Download, Eye, Plus, Upload, Search, Folder, X, Printer } from "lucide-react";
import { useState } from "react";

export default function NotesDocuments({ documents, onUpdate }) {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [newDocument, setNewDocument] = useState({
    title: "",
    type: "PDF",
    category: "Medical Records",
    notes: ""
  });

  const categories = ["All", "Medical Records", "Lab Reports", "Insurance", "Prescriptions", "Other"];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        id: Date.now(),
        title: newDocument.title || file.name,
        type: file.type.split('/')[1]?.toUpperCase() || 'PDF',
        date: new Date().toISOString().split('T')[0],
        category: newDocument.category,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        notes: newDocument.notes,
        content: newDocument.notes || "This is a sample document content."
      };
      onUpdate([...documents, newDoc]);
      setShowUploadForm(false);
      setNewDocument({ title: "", type: "PDF", category: "Medical Records", notes: "" });
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF": return <FileText className="text-red-500" size={24} />;
      case "Image": return <FileText className="text-green-500" size={24} />;
      case "DOC": return <FileText className="text-blue-500" size={24} />;
      default: return <FileText className="text-gray-500" size={24} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Medical Records": return "bg-blue-100 text-blue-600";
      case "Lab Reports": return "bg-green-100 text-green-600";
      case "Insurance": return "bg-purple-100 text-purple-600";
      case "Prescriptions": return "bg-orange-100 text-orange-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  // Generate PDF content
  const generatePDFContent = (doc) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${doc.title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          .header { border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
          .title { font-size: 24px; font-weight: bold; color: #333; }
          .meta { color: #666; font-size: 14px; margin-top: 10px; }
          .content { margin-top: 30px; }
          .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">${doc.title}</div>
          <div class="meta">
            <strong>Category:</strong> ${doc.category} | 
            <strong>Date:</strong> ${doc.date} | 
            <strong>Type:</strong> ${doc.type}
          </div>
        </div>
        <div class="content">
          <h3>Document Details</h3>
          <p><strong>File Size:</strong> ${doc.size}</p>
          ${doc.notes ? `<p><strong>Notes:</strong> ${doc.notes}</p>` : ''}
          <h3>Content</h3>
          <p>${doc.content || "This document contains important medical information."}</p>
        </div>
        <div class="footer">
          Generated from Patient Medical Portal • ${new Date().toLocaleDateString()}
        </div>
      </body>
      </html>
    `;
  };

  // Download PDF function
  const downloadPDF = (doc) => {
    const content = generatePDFContent(doc);
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Print document
  const printDocument = (doc) => {
    const content = generatePDFContent(doc);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Notes & Documents
        </h2>
        <button
          onClick={() => setShowUploadForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <Upload size={18} />
          Upload File
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-[var(--textLight)]" size={18} />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Upload Form */}
      {showUploadForm && (
        <div className="mb-6 p-4 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-3">Upload New Document</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Document Title"
              value={newDocument.title}
              onChange={(e) => setNewDocument({...newDocument, title: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            />
            <select
              value={newDocument.category}
              onChange={(e) => setNewDocument({...newDocument, category: e.target.value})}
              className="border border-[var(--borderLight)] rounded-lg px-3 py-2"
            >
              <option value="Medical Records">Medical Records</option>
              <option value="Lab Reports">Lab Reports</option>
              <option value="Insurance">Insurance</option>
              <option value="Prescriptions">Prescriptions</option>
              <option value="Other">Other</option>
            </select>
            <div className="md:col-span-2">
              <textarea
                placeholder="Notes (optional)"
                value={newDocument.notes}
                onChange={(e) => setNewDocument({...newDocument, notes: e.target.value})}
                rows="3"
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
              <Plus size={18} />
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            <button
              onClick={() => {
                setShowUploadForm(false);
                setNewDocument({ title: "", type: "PDF", category: "Medical Records", notes: "" });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Documents List */}
      <div className="space-y-3">
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-8 text-[var(--textLight)]">
            <Folder className="mx-auto mb-2" size={48} />
            <p>No documents found</p>
          </div>
        ) : (
          filteredDocuments.map((doc) => (
            <div 
              key={doc.id} 
              className="flex justify-between items-center p-4 border border-[var(--borderLight)] rounded-lg hover:bg-[var(--bgLight)] cursor-pointer transition-all hover:shadow-md"
              onClick={() => setSelectedDocument(doc)}
            >
              <div className="flex items-center gap-4 flex-1">
                {getFileIcon(doc.type)}
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--textDark)]">{doc.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--textLight)] mt-1">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(doc.category)}`}>
                      {doc.category}
                    </span>
                  </div>
                  {doc.notes && (
                    <p className="text-sm text-[var(--textLight)] mt-2 line-clamp-2">{doc.notes}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => setSelectedDocument(doc)}
                  className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                  title="View Details"
                >
                  <Eye size={18} />
                </button>
                <button 
                  onClick={() => downloadPDF(doc)}
                  className="text-green-600 hover:text-green-800 p-2 hover:bg-green-50 rounded-lg transition-colors"
                  title="Download"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Document Details Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-[var(--borderLight)]">
              <div className="flex items-center gap-3">
                {getFileIcon(selectedDocument.type)}
                <div>
                  <h2 className="text-xl font-bold text-[var(--textDark)]">
                    {selectedDocument.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-[var(--textLight)] mt-1">
                    <span>{selectedDocument.date}</span>
                    <span>•</span>
                    <span>{selectedDocument.size}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(selectedDocument.category)}`}>
                      {selectedDocument.category}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedDocument(null)}
                className="text-[var(--textLight)] hover:text-[var(--textDark)] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="space-y-6">
                {/* Document Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">
                      Document Type
                    </label>
                    <p className="font-semibold">{selectedDocument.type}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">
                      Upload Date
                    </label>
                    <p className="font-semibold">{selectedDocument.date}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">
                      File Size
                    </label>
                    <p className="font-semibold">{selectedDocument.size}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">
                      Category
                    </label>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(selectedDocument.category)}`}>
                      {selectedDocument.category}
                    </span>
                  </div>
                </div>

                {/* Notes */}
                {selectedDocument.notes && (
                  <div>
                    <h3 className="font-semibold mb-3 text-[var(--textDark)]">Notes</h3>
                    <p className="text-[var(--textDark)] bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      {selectedDocument.notes}
                    </p>
                  </div>
                )}

                {/* Document Preview */}
                <div>
                  <h3 className="font-semibold mb-3 text-[var(--textDark)]">Document Preview</h3>
                  <div className="border border-[var(--borderLight)] rounded-lg p-6 bg-white">
                    <div className="prose max-w-none">
                      <h4 className="text-lg font-bold border-b pb-2 mb-4">{selectedDocument.title}</h4>
                      <div className="space-y-3">
                        <p><strong>Category:</strong> {selectedDocument.category}</p>
                        <p><strong>Date:</strong> {selectedDocument.date}</p>
                        <p><strong>File Type:</strong> {selectedDocument.type}</p>
                        <p><strong>File Size:</strong> {selectedDocument.size}</p>
                        {selectedDocument.notes && (
                          <>
                            <p><strong>Notes:</strong></p>
                            <p className="text-gray-700">{selectedDocument.notes}</p>
                          </>
                        )}
                        <div className="mt-6 pt-4 border-t">
                          <p className="text-sm text-gray-500">
                            This is a preview of the document content. The actual file may contain more detailed information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center p-6 border-t border-[var(--borderLight)] bg-gray-50">
              <div className="text-sm text-[var(--textLight)]">
                Last updated: {selectedDocument.date}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => printDocument(selectedDocument)}
                  className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Printer size={18} />
                  Print
                </button>
                <button
                  onClick={() => downloadPDF(selectedDocument)}
                  className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)] transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}