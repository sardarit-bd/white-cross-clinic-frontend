"use client";

import { Pill, Heart, History, FileText, CreditCard, Folder, User } from "lucide-react";

const tabs = [
  { id: 'demographics', label: 'Demographics', icon: User },
  // { id: 'health', label: 'Health Status', icon: Heart },
  { id: 'medical-history', label: 'Medical History', icon: History },
  { id: 'lab', label: 'Lab Results', icon: FileText },
  { id: 'perception', label: 'Perception', icon: Pill },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'documents', label: 'Documents', icon: Folder },
];

export default function PatientTabs({ activeTab, onTabChange }) {
  return (
    <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-1 mb-6">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[var(--brandColor)] text-white shadow-sm'
                  : 'text-[var(--textLight)] hover:text-[var(--textDark)] hover:bg-gray-50'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}