"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Lock,
    Phone,
    Stethoscope,
    HeartPulse,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
    const [role, setRole] = useState("patient"); // patient / doctor

    // basic fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // doctor fields
    const [department, setDepartment] = useState("");
    const [subDepartment, setSubDepartment] = useState("");

    const departments = {
        Cardiology: ["Heart Failure", "Arrhythmia", "Research"],
        Neurology: ["Stroke", "Epilepsy", "Parkinson's"],
        Diabetology: ["Type I", "Type II", "Gestational Diabetes"],
    };

    const handleRegister = () => {
        const payload = {
            role,
            name,
            email,
            phone,
            password,
            department: role === "doctor" ? department : null,
            subDepartment: role === "doctor" ? subDepartment : null,
        };

        console.log("Register Payload:", payload);
        // TODO: POST /auth/register
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bgLight)] px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl bg-white rounded-2xl shadow-[var(--shadowCard)] p-10"
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Link href="/">
                        <Image
                            src="/logos/headLogo.png" // change to your logo
                            width={100}
                            height={100}
                            alt="White Cross Clinic"
                            className="rounded-lg shadow-md"
                        />
                    </Link>
                </div>

                <h2 className="text-center text-3xl font-bold text-[var(--textDark)] mb-2">
                    Create Your Account
                </h2>

                <p className="text-center text-[var(--textLight)] mb-8">
                    Register as a Patient or Doctor to continue
                </p>

                {/* ROLE SELECTOR */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                    {["patient", "doctor"].map((r) => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`py-3 rounded-lg font-medium transition-all border 
              ${role === r
                                    ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)]"
                                    : "bg-white text-[var(--textDark)] border-[var(--borderLight)] hover:bg-[var(--brandColorLight)]"
                                }`}
                        >
                            {r === "patient" ? "Patient" : "Doctor"}
                        </button>
                    ))}
                </div>

                {/* FORM (2 columns layout for desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* NAME */}
                    <div>
                        <label className="text-sm font-medium text-[var(--textDark)]">Full Name</label>
                        <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                            <User size={18} className="text-[var(--textLight)]" />
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="ml-2 w-full focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-sm font-medium text-[var(--textDark)]">Email</label>
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

                    {/* PHONE */}
                    <div>
                        <label className="text-sm font-medium text-[var(--textDark)]">Phone</label>
                        <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                            <Phone size={18} className="text-[var(--textLight)]" />
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="ml-2 w-full focus:outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-sm font-medium text-[var(--textDark)]">Password</label>
                        <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                            <Lock size={18} className="text-[var(--textLight)]" />
                            <input
                                type="password"
                                placeholder="Create a password"
                                className="ml-2 w-full focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* DOCTOR-SPECIFIC FIELDS */}
                    {role === "doctor" && (
                        <>
                            {/* DEPARTMENT */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <label className="text-sm font-medium text-[var(--textDark)]">
                                    Department
                                </label>
                                <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                                    <Stethoscope size={18} className="text-[var(--textLight)]" />
                                    <select
                                        className="ml-2 w-full bg-transparent focus:outline-none"
                                        value={department}
                                        onChange={(e) => {
                                            setDepartment(e.target.value);
                                            setSubDepartment("");
                                        }}
                                    >
                                        <option value="">Select Department</option>
                                        {Object.keys(departments).map((d) => (
                                            <option key={d}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                            </motion.div>

                            {/* SUB DEPARTMENT */}
                            {department && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <label className="text-sm font-medium text-[var(--textDark)]">
                                        Sub Department
                                    </label>
                                    <div className="mt-1 flex items-center border border-[var(--borderLight)] rounded-lg px-3 py-2">
                                        <HeartPulse size={18} className="text-[var(--textLight)]" />
                                        <select
                                            className="ml-2 w-full bg-transparent focus:outline-none"
                                            value={subDepartment}
                                            onChange={(e) => setSubDepartment(e.target.value)}
                                        >
                                            <option value="">Select Sub Department</option>
                                            {departments[department]?.map((s) => (
                                                <option key={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>

                {/* REGISTER BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleRegister}
                    className="w-full mt-10 py-3 rounded-lg text-white font-semibold shadow-md"
                    style={{
                        background: "linear-gradient(90deg, var(--brandColor), var(--brandAccent))",
                    }}
                >
                    Create Account
                </motion.button>

                {/* LOGIN LINK */}
                <p className="text-center mt-6 text-sm text-[var(--textLight)]">
                    Already registered?{" "}
                    <Link href="/login" className="text-[var(--brandColor)] font-medium hover:underline">
                        Login
                    </Link>
                </p>

            </motion.div>
        </div>
    );
}
