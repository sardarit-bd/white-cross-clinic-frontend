"use client";

import { motion } from "framer-motion";
import {
  TestTube,
  Edit2,
  Trash2,
  Calendar,
  Tag,
} from "lucide-react";

export default function TestList({
  tests,
  onEdit,
  deleteTest,
  searchText,
  setSearchTest
}) {
  if (!tests?.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl text-center"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <TestTube size={20} className="text-[var(--brandColor)]" />
              Tests
            </h2>

            <span className="bg-[var(--brandColor)]/10 text-[var(--brandColor)] px-3 py-1 rounded-full text-sm font-medium">
              {tests?.length} {tests?.length === 1 ? "Test" : "Tests"}
            </span>
          </div>
        </div>
        <div className="m-5">
          <label className="block text-sm text-left font-medium text-gray-700 mb-2">
            Search by Test Title
          </label>
          <input
            value={searchText}
            onChange={(e) => setSearchTest(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
          />
        </div>
        <div className="p-12">
          <div className="w-24 h-24 bg-[var(--brandColor)] rounded-full flex items-center justify-center mx-auto mb-6">
          <TestTube size={40} className="text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          No Tests Found
        </h3>

        <p className="text-gray-500">
          Create your first test to get started
        </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <TestTube size={20} className="text-[var(--brandColor)]" />
            Tests
          </h2>

          <span className="bg-[var(--brandColor)]/10 text-[var(--brandColor)] px-3 py-1 rounded-full text-sm font-medium">
            {tests?.length} {tests?.length === 1 ? "Test" : "Tests"}
          </span>
        </div>
      </div>
      <div className="m-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search by Test Title
        </label>
        <input
          value={searchText}
          onChange={(e) => setSearchTest(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        />
      </div>
      {/* Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tests.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white border border-gray-200 rounded-xl relative overflow-hidden hover:border-[var(--brandColor)] hover:shadow-lg transition-all duration-300"
            >

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onEdit(item)}
                  className="p-2 bg-white rounded-lg hover:bg-[var(--brandColor)] hover:text-white transition-colors shadow-lg"
                  title="Edit Test"
                >
                  <Edit2 size={16} />
                </button>

                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this test?")) {
                      deleteTest.mutate(item._id); // call React Query mutation
                    }
                  }}
                  className="p-2 bg-white rounded-lg hover:bg-red-500 hover:text-white transition-colors shadow-lg"
                  title="Delete Test"
                >
                  <Trash2 size={16} />
                </button>
              </div>


              {/* Content */}
              <div className="p-4 space-y-2">
                {/* Title */}
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[var(--brandColor)] transition-colors">
                  {item.title}
                </h3>

                {/* Code */}
                {item.code && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Tag size={14} className="text-gray-400" />
                    <span>Code: {item.code}</span>
                  </div>
                )}

                {/* Sample Requirements */}
                {item.sampleReqs && (
                  <div className="text-xs text-gray-500">
                    <strong>Sample Requirements:</strong> {item.sampleReqs}
                  </div>
                )}

                {/* Turnaround */}
                {item.turnaround && (
                  <div className="text-xs text-gray-500">
                    <strong>Turnaround:</strong> {item.turnaround}
                  </div>
                )}

                {/* Special Instructions */}
                {item.specialInstructions && (
                  <div className="text-xs text-gray-500">
                    <strong>Instructions:</strong> {item.specialInstructions}
                  </div>
                )}

                {/* Self Collect Kit */}
                {item.selfCollectKit && (
                  <div className="text-xs text-gray-500">
                    <strong>Self Collect Kit:</strong> {item.selfCollectKit}
                  </div>
                )}

                {/* Note */}
                {item.note && (
                  <div className="text-xs text-gray-500">
                    <strong>Note:</strong> {item.note}
                  </div>
                )}

                {/* Sample Guide */}
                {item.sampleGuide?.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <strong>Sample Guide:</strong>
                    <ul className="list-disc ml-5">
                      {item.sampleGuide.map((sg, i) => (
                        <li key={i}>
                          {sg.code}: {sg.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Profile Details */}
                {item.profileDetails?.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <strong>Profile Details:</strong>
                    <ul className="list-disc ml-5">
                      {item.profileDetails.map((pd, i) => (
                        <li key={i}>{pd}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Created Date */}
                {item.createdAt && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                    <Calendar size={14} className="text-gray-400" />
                    <span>
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}