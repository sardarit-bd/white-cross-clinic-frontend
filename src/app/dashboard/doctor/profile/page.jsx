"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { 
    User, 
    FileText, 
    Award,
    GraduationCap,
    Stethoscope,
    MapPin,
    Phone,
    Mail,
    BookOpen,
    Briefcase
} from "lucide-react";

// Components
import ProfileHeader from "./components/ProfileHeader";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";
import DocumentsManager from "./components/DocumentsManager";
import { useProfile } from "@/hooks/useUser";


export default function DoctorProfilePage() {
    const [doctorData, setDoctorData] = useState(null);
    const [activeTab, setActiveTab] = useState("personal");

    const {loading, profile, updateProfile} = useProfile()
    console.log(profile)

    const tabs = [
        { id: "personal", label: "Personal Info", icon: User },
        { id: "professional", label: "Professional Info", icon: Briefcase },
        // { id: "documents", label: "Documents", icon: FileText },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[var(--brandColor)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="py-8 px-4 sm:px-6">
            <div className="container mx-auto">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                        <Stethoscope className="text-[var(--brandColor)]" size={36} />
                        Doctor Profile
                    </h1>
                    <p className="text-gray-600">
                        Manage your personal and professional information
                    </p>
                </motion.div>

                {/* Profile Header Card */}
                <ProfileHeader doctorData={doctorData} />

                {/* Tabs Navigation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 mb-6 inline-flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm
                                transition-all duration-200
                                ${activeTab === tab.id 
                                    ? "bg-[var(--brandColor)] text-white shadow-md" 
                                    : "text-gray-600 hover:bg-gray-100"
                                }
                            `}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === "personal" && (
                        <PersonalInfo 
                            doctorData={doctorData} 
                            onUpdate={updateProfile}
                        />
                    )}
                    
                    {activeTab === "professional" && (
                        <ProfessionalInfo 
                            doctorData={doctorData}
                            onUpdate={updateProfile}
                        />
                    )}
                    
                    {activeTab === "documents" && (
                        <DocumentsManager 
                            doctorData={doctorData}
                            onUpdate={fetchDoctorProfile}
                        />
                    )}
                </motion.div>
            </div>
        </div>
    );
}