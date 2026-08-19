"use client";

import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { setAuthCookie } from "./authActions";

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        try {
            setLoading(true)
            const res = await login({ email, password });
            // const res = await axios.post(
            //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
            //     { email, password },
            //     { withCredentials: true }
            // );
            const userData = res;
            if (userData?.success) {
                const accessToken = userData?.data?.accessToken
                await setAuthCookie(accessToken)
                toast.success("Login successful! Redirecting to dashboard...");
                router.push("/dashboard")
            } else {
                toast.error(userData?.message || "Login failed. Please try again.");
            }
            setLoading(false)
        } catch (err) {
            toast.error("Incorrect Password");
            setLoading(false)
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
                            className="rounded-lg"
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
                    disabled={loading}
                    className={`w-full py-3 rounded-lg text-white font-medium shadow-md ${loading ? "opacity-50" : ""}`}
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
