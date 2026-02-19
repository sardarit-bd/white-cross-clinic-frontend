"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export default function ForgotPasswordPage() {
    const { sendResetPassword } = useAuth();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false); // ⭐ success state

    const handleSubmit = async () => {
        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        setLoading(true);

        const res = await sendResetPassword({ email });

        setLoading(false);

        if (res?.success) {
            toast.success("Password reset link sent.");
            setSent(true); // ⭐ hide form & show message
        } else {
            toast.error(res?.message || "Request failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bgLight)] px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl bg-white rounded-2xl shadow-[var(--shadowCard)] p-10"
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Link href="/">
                        <Image
                            src="/logos/navLogo.png"
                            width={100}
                            height={100}
                            alt="White Cross Clinic"
                            className="rounded-lg shadow-md"
                        />
                    </Link>
                </div>

                {!sent ? (
                    <>
                        {/* ===== FORM ===== */}
                        <h2 className="text-center text-3xl font-bold text-[var(--textDark)] mb-2">
                            Forgot Password
                        </h2>

                        <p className="text-center text-[var(--textLight)] mb-8">
                            Enter your email to receive a password reset link
                        </p>

                        {/* EMAIL INPUT */}
                        <div>
                            <label className="text-sm font-medium text-[var(--textDark)]">
                                Email Address
                            </label>

                            <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                                <Mail size={18} className="text-[var(--textLight)]" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="ml-2 w-full focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full mt-10 py-3 rounded-lg text-white font-semibold shadow-md disabled:opacity-70"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brandColor), var(--brandAccent))",
                            }}
                        >
                            {loading ? "Sending..." : "Send Reset Link"}
                        </motion.button>

                        {/* BACK TO LOGIN */}
                        <p className="text-center mt-6 text-sm text-[var(--textLight)]">
                            Remember your password?{" "}
                            <Link
                                href="/login"
                                className="text-[var(--brandColor)] font-medium hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </>
                ) : (
                    <>
                        {/* ===== SUCCESS MESSAGE ===== */}
                        <h2 className="text-center text-3xl font-bold text-[var(--textDark)] mb-4">
                            Check Your Email
                        </h2>

                        <p className="text-center text-[var(--textLight)] mb-6">
                            We have sent a password reset link to:
                        </p>

                        <p className="text-center font-semibold text-[var(--brandColor)] mb-8">
                            {email}
                        </p>

                        <p className="text-center text-sm text-[var(--textLight)] mb-8">
                            Please check your inbox (and spam folder) and follow the
                            instructions to reset your password.
                        </p>

                        {/* LOGIN BUTTON */}
                        <Link href="/login">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full py-3 rounded-lg text-white font-semibold shadow-md"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--brandColor), var(--brandAccent))",
                                }}
                            >
                                Back to Login
                            </motion.button>
                        </Link>

                        {/* RESEND OPTION */}
                        <button
                            onClick={() => setSent(false)}
                            className="w-full mt-4 text-sm text-[var(--brandColor)] hover:underline"
                        >
                            Use a different email
                        </button>
                    </>
                )}
            </motion.div>
        </div>
    );
}
