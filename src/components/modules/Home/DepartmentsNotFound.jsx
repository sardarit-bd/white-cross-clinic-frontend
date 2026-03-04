"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHospitalAlt, FaArrowLeft } from "react-icons/fa";

export default function DepartmentsNotFoundMinimal() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
            Departments
          </h2>
          <div className="h-[4px] w-[120px] bg-[var(--brandGradient)] mx-auto rounded-full mb-4"></div>
        </div>

        {/* 404 Style Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto text-center py-12"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <FaHospitalAlt className="text-8xl text-gray-300" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                !
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-[var(--textDark)] mb-3">
            404 - Department Not Found
          </h3>
          
          <p className="text-lg text-[var(--textLight)] mb-6">
            We couldn't find the department you're looking for. 
            It might have been removed or the URL might be incorrect.
          </p>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-[var(--textLight)]">
              Need help? Contact our support team or try browsing our available departments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}