"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestTube } from "lucide-react";
import TestForm from "./TestForm";
import TestList from "./TestList";
import { useTest } from "@/hooks/useTest";

export default function TestManagerPage() {

  const [editingTest, setEditingTest] = useState(null);


  const {
    tests,
    createTest,
    updateTest,
    deleteTest
  } = useTest();

  const handleSubmit = async (payload) => {
    if(editingTest){
        payload.id = editingTest._id
        const res = await updateTest.mutateAsync(payload)
        console.log(res)
    }else{
       const res = await createTest.mutateAsync(payload)
       console.log(res)
    }
    setEditingTest(null)
  }
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[var(--textDark)] mb-2 flex items-center gap-3">
            <TestTube size={36} className="text-[var(--brandColor)]" />
            Test Management
          </h1>

          <p className="text-gray-600">
            Create and manage your Tests
          </p>
        </motion.div>

        {/* Test Form */}
        <TestForm
          onSubmit={handleSubmit}
          initialData={editingTest}
        />

        {/* Test List */}
        <TestList
          tests={tests}
          onEdit={setEditingTest}
          deleteTest={deleteTest}
        />

      </div>
    </div>
  );
}