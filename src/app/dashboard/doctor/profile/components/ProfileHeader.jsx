"use client";

import { motion } from "framer-motion";
import { User, Mail, MapPin, Phone, Award, FileText } from "lucide-react";
import Image from "next/image";

export default function ProfileHeader({ doctorData }) {
    const user = doctorData?.user || {};
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden"
        >
            {/* Cover Background */}
            <div className="h-32 bg-[var(--brandColor)]"></div>
            
            <div className="px-6 pb-6">
                {/* Avatar and Basic Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16">
                    <div className="relative">
                        <div className="w-28 h-28 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-white">
                            {user.avatar ? (
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    width={112}
                                    height={112}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                    <User size={40} className="text-gray-400" />
                                </div>
                            )}
                        </div>
                        {user.verified && (
                            <div className="absolute -bottom-2 -right-2">
                                <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                    Verified
                                </span>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex-1 pt-4 sm:pt-0">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {user.name || "Doctor Name"}
                        </h2>
                        <p className="text-gray-500 flex items-center gap-1 mt-1">
                            <Mail size={14} />
                            {user.email || "No email provided"}
                        </p>
                    </div>
                </div>
                
                {/* Contact Info */}
                {(doctorData?.phone || doctorData?.address) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                        {doctorData?.phone && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone size={16} className="text-blue-500" />
                                {doctorData.phone}
                            </div>
                        )}
                        {doctorData?.address && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin size={16} className="text-blue-500" />
                                {doctorData.address}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}