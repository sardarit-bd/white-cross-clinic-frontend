"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { 
    FileText, 
    Upload,
    Trash2,
    Download,
    Eye,
    File,
    Plus,
    X
} from "lucide-react";

export default function DocumentsManager({ doctorData, onUpdate }) {
    const [documents, setDocuments] = useState(doctorData?.documents || []);
    const [uploading, setUploading] = useState(false);
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [newDoc, setNewDoc] = useState({ name: "", file: null });

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            toast.error("File size should be less than 10MB");
            return;
        }

        setNewDoc({ ...newDoc, file });
    };

    const handleUpload = async () => {
        if (!newDoc.name.trim()) {
            toast.error("Please enter a document name");
            return;
        }
        if (!newDoc.file) {
            toast.error("Please select a file");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append("name", newDoc.name);
        formData.append("document", newDoc.file);

        try {
            const res = await fetch('/api/doctor/profile/documents', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                toast.success("Document uploaded successfully");
                setDocuments([...documents, data.data]);
                setNewDoc({ name: "", file: null });
                setShowUploadForm(false);
                onUpdate();
            } else {
                toast.error(data.message || "Upload failed");
            }
        } catch (error) {
            toast.error("Failed to upload document");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (docId) => {
        if (!window.confirm("Delete this document?")) return;

        try {
            const res = await fetch(`/api/doctor/profile/documents/${docId}`, {
                method: 'DELETE'
            });

            const data = await res.json();
            if (data.success) {
                toast.success("Document deleted");
                setDocuments(documents.filter(d => d._id !== docId));
                onUpdate();
            } else {
                toast.error(data.message || "Delete failed");
            }
        } catch (error) {
            toast.error("Failed to delete document");
        }
    };

    const getFileIcon = (fileName) => {
        const ext = fileName?.split('.').pop()?.toLowerCase();
        switch(ext) {
            case 'pdf': return '📄';
            case 'doc':
            case 'docx': return '📝';
            case 'jpg':
            case 'jpeg':
            case 'png': return '🖼️';
            default: return '📁';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <FileText size={20} />
                    Documents & Certificates
                </h2>
                
                <button
                    onClick={() => setShowUploadForm(!showUploadForm)}
                    className="flex items-center gap-1 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium"
                >
                    {showUploadForm ? <X size={16} /> : <Plus size={16} />}
                    {showUploadForm ? "Cancel" : "Add Document"}
                </button>
            </div>

            <div className="p-6">
                {/* Upload Form */}
                <AnimatePresence>
                    {showUploadForm && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mb-6 overflow-hidden"
                        >
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-medium text-gray-700 mb-3">Upload New Document</h3>
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Document name (e.g., Medical License)"
                                        value={newDoc.name}
                                        onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
                                    />
                                    
                                    <div className="flex items-center gap-3">
                                        <label className="flex-1 cursor-pointer">
                                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-500 transition-colors">
                                                <Upload size={20} className="mx-auto text-gray-400 mb-1" />
                                                <span className="text-sm text-gray-600">
                                                    {newDoc.file ? newDoc.file.name : "Click to select file"}
                                                </span>
                                            </div>
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                        </label>
                                        
                                        <button
                                            onClick={handleUpload}
                                            disabled={uploading}
                                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                                        >
                                            {uploading ? "Uploading..." : "Upload"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Documents List */}
                {documents.length === 0 ? (
                    <div className="text-center py-12">
                        <FileText size={48} className="mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500">No documents uploaded yet</p>
                        <p className="text-sm text-gray-400 mt-1">
                            Upload your certificates, licenses, and other documents
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {documents.map((doc) => (
                            <motion.div
                                key={doc._id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="group bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all border border-gray-200"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl">{getFileIcon(doc.name)}</div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-gray-800 truncate">{doc.name}</h4>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    
                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                                            title="View"
                                        >
                                            <Eye size={16} className="text-blue-600" />
                                        </a>
                                        <a
                                            href={doc.url}
                                            download
                                            className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                                            title="Download"
                                        >
                                            <Download size={16} className="text-green-600" />
                                        </a>
                                        <button
                                            onClick={() => handleDelete(doc._id)}
                                            className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={16} className="text-red-600" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}