"use client";

import { X, ArrowLeft, ArrowRight } from "lucide-react";

export default function PDFViewerModal({ files, index, onClose, onPrev, onNext }) {
  const file = files[index];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[90vh] shadow-xl relative flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">{file.title}</h2>
          <button onClick={onClose} className="text-[var(--brandColor)]">
            <X size={24} />
          </button>
        </div>

        {/* PDF Viewer */}
        <iframe
          src={file.url}
          className="flex-1 w-full"
        />

        {/* Navigation */}
        <div className="flex justify-between p-3 border-t">
          <button
            onClick={onPrev}
            className="px-4 py-2 bg-[var(--brandColor)] text-white rounded-lg hover:bg-[var(--brandColorDark)] flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Prev
          </button>

          <button
            onClick={onNext}
            className="px-4 py-2 bg-[var(--brandColor)] text-white rounded-lg hover:bg-[var(--brandColorDark)] flex items-center gap-2"
          >
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
