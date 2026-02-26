"use client"

import Link from "next/link";
import { CheckCircle, CreditCard, CalendarDays, Package } from "lucide-react";
import { format } from "date-fns";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Page() {
    const params = useSearchParams()
    const [data, setData] = useState(null)
    const session_id = params.get("session_id")


    useEffect(() => {
        async function verifyPayment() {
            if (session_id) {
                try {
                    const verifyRes = await axios.post(`${BASE}/api/payments/verify`, { sessionId: session_id }, {
                        withCredentials: true,
                    })
                    const payment = verifyRes?.data
                   setData({...data})
                } catch (err) {
                    console.log(err)
                }

            }
        }
       verifyPayment()
    }, [session_id])
    return (
        <div className="min-h-screen flex flex-col items-center justify-center brandBg px-6 py-16">
            {/* ✅ Card container */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
                {/* Success Icon */}
                <CheckCircle className="w-16 h-16 text-[var(--brandColor)] mx-auto mb-4" />

                {/* Title */}
                <h1 className="text-3xl font-semibold mb-2 brandColor">
                    Payment Successful 🎉
                </h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase! Your order has been confirmed and payment
                    was successful.
                </p>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <Link
                        href="/dashboard"
                        className="flex-1 bg-[var(--brandColor)] text-white font-medium py-3 rounded-full hover:opacity-90 transition"
                    >
                        View Order History
                    </Link>
                    <Link
                        href="/"
                        className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 rounded-full hover:bg-gray-100 transition"
                    >
                        Back to Home
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Package className="w-4 h-4" />
                    Thank you for your purchase!
                </div>
            </div>
        </div>
    );
}