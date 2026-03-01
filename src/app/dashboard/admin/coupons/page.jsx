"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HandCoins } from "lucide-react";
import CouponForm from "./CouponForm";
import CouponList from "./CouponList";
import { useCoupon } from "@/hooks/useCoupon";

export default function TestManagerPage() {

  const [editingCoupon, setEditingCoupon] = useState(null);


  const {
    coupons,
    createCoupon,
    updateCoupon,
    deleteCoupon
  } = useCoupon();

  const handleSubmit = async (payload) => {
    if (editingCoupon) {
      payload.id = editingCoupon._id
      const res = await updateCoupon.mutateAsync(payload)
      console.log(res)
    } else {
      const res = await createCoupon.mutateAsync(payload)
      console.log(res)
    }
    setEditingCoupon(null)
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
            <HandCoins size={36} className="text-[var(--brandColor)]" />
            Coupon Management
          </h1>

          <p className="text-gray-600">
            Create and manage Coupon
          </p>
        </motion.div>

    
        <CouponForm
          onSubmit={handleSubmit}
          initialData={editingCoupon}
        />

        <CouponList
          coupons={coupons}
          onEdit={setEditingCoupon}
          deleteCoupon={deleteCoupon}
        />

      </div>
    </div>
  );
}