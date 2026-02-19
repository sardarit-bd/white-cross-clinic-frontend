"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ResetPasswordPage() {
    const { resetPassword } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");


    useEffect(() => {
        const t = searchParams.get("token");
        if (t) {
            setToken(t);
        } else {
            toast.error("Invalid or missing reset token.");
        }
    }, [searchParams]);

    const handleSubmit = async () => {
        if (!password) {
            toast.error("Please enter a new password");
            return;
        }

        if (!token) {
            toast.error("Invalid reset token");
            return;
        }

        setLoading(true);

        const res = await resetPassword({
            token,
            password,
        });

        setLoading(false);

        if (res?.success) {
            toast.success("Password reset successful. Please login.");
            router.push("/login");
        } else {
            toast.error(res?.message || "Reset failed. Try again.");
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

                <h2 className="text-center text-3xl font-bold text-[var(--textDark)] mb-2">
                    Reset Password
                </h2>

                <p className="text-center text-[var(--textLight)] mb-8">
                    Enter your new password below
                </p>

                {/* PASSWORD INPUT */}
                <div>
                    <label className="text-sm font-medium text-[var(--textDark)]">
                        New Password
                    </label>

                    <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                        <Lock size={18} className="text-[var(--textLight)]" />
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="ml-2 w-full focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    {loading ? "Resetting..." : "Reset Password"}
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
            </motion.div>
        </div>
    );
}
