"use client";

import { FileText, Download, Eye, Plus, Upload, Search, Folder } from "lucide-react";
import { useState } from "react";

export default function NotesDocuments({ documents, onUpdate }) {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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
        notes: newDocument.notes
      };
      onUpdate([...documents, newDoc]);
      setShowUploadForm(false);
      setNewDocument({ title: "", type: "PDF", category: "Medical Records", notes: "" });
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF": return <FileText className="text-red-500" />;
      case "Image": return <FileText className="text-green-500" />;
      case "DOC": return <FileText className="text-blue-500" />;
      default: return <FileText className="text-gray-500" />;
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
                rows="2"
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
            <div key={doc.id} className="flex justify-between items-center p-4 border border-[var(--borderLight)] rounded-lg hover:bg-[var(--bgLight)]">
              <div className="flex items-center gap-3">
                {getFileIcon(doc.type)}
                <div>
                  <h3 className="font-semibold text-[var(--textDark)]">{doc.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--textLight)]">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(doc.category)}`}>
                      {doc.category}
                    </span>
                  </div>
                  {doc.notes && (
                    <p className="text-sm text-[var(--textLight)] mt-1">{doc.notes}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800 p-2">
                  <Eye size={18} />
                </button>
                <button className="text-green-600 hover:text-green-800 p-2">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}