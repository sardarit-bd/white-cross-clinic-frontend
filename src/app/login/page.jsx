"use client";

import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await login({ email, password });
        if(res?.success) {
            toast.success("Login successful! Redirecting to dashboard...");
            router.push("/dashboard")
        } else {
            toast.error(res?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bgLight)] px-4">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white shadow-[var(--shadowCard)] rounded-2xl p-8"
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Link href="/">
                        <Image
                            src="/logos/navLogo.png" // change to your logo
                            width={100}
                            height={100}
                            alt="White Cross Clinic"
                            className="rounded-lg shadow-md"
                        />
                    </Link>
                </div>

                <h2 className="text-center text-2xl font-bold text-[var(--textDark)] mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-[var(--textLight)] mb-6">
                    Please login to continue
                </p>

                {/* Email */}
                <div className="mb-4">
                    <label className="font-medium text-[var(--textDark)] text-sm">Email</label>
                    <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2 bg-white">
                        <Mail size={18} className="text-[var(--textLight)]" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="ml-2 w-full focus:outline-none text-[var(--textDark)]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-2">
                    <label className="font-medium text-[var(--textDark)] text-sm">Password</label>
                    <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2 bg-white">
                        <Lock size={18} className="text-[var(--textLight)]" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="ml-2 w-full focus:outline-none text-[var(--textDark)]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-6">
                    <Link
                        href="/forgot-password"
                        className="text-[var(--brandColor)] text-sm hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>

                {/* LOGIN BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleLogin}
                    className="w-full py-3 rounded-lg text-white font-medium shadow-md"
                    style={{
                        background: "linear-gradient(90deg, var(--brandColor), var(--brandAccent))",
                    }}
                >
                    Login
                </motion.button>

                {/* Divider */}
                <div className="my-6 text-center text-[var(--textLight)] text-sm">
                    OR
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-[var(--textLight)]">
                    Don’t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-[var(--brandColor)] font-medium hover:underline"
                    >
                        Create Account
                    </Link>
                </p>

            </motion.div>
        </div>
    );
}
