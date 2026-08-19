"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const { register } = useAuth()
    const router = useRouter()
    const [role, setRole] = useState("patient");

    // basic fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    const handleRegister = async () => {
        const payload = {
            role,
            name,
            email,
            phone,
            password
        };
        const res = await register(payload);
        if (res?.success) {
            toast.success("Registration successful! Please login.");
            router.push("/login");
        } else {
            toast.error(res?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <section className="bg-[#101827] py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-white">
                        Registered & Regulated
                    </h2>

                    <p className="mt-5 text-lg text-slate-400 max-w-3xl mx-auto leading-8">
                        Every member of our medical team is fully registered and our clinic is
                        regulated in the UK, so you can feel confident in the care you receive.
                    </p>
                </div>

                {/* Logos */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8">

                    <div className="bg-white rounded-2xl shadow-xl w-[140px] h-[95px] flex items-center justify-center">
                        {/* GMC Logo */}
                        <img className="bg-white h-[120px] w-[300px] object-contain px-3" src={'https://www.walkinclinic.london/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda1zmp1ib%2Fimage%2Fupload%2Fv1766706846%2Fgeneral-medical-council-logo-health-screening-clinic-london_e2uein.png&w=256&q=75&dpl=dpl_8ti64ZShRvj8XjQy5jniNCpuDmEg'} />
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl w-[140px] h-[95px] flex items-center justify-center">
                        {/* NMC Logo */}
                        <img className="bg-white h-[120px] w-[300px] object-contain px-3" src={'https://www.walkinclinic.london/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda1zmp1ib%2Fimage%2Fupload%2Fv1766443734%2FNursing_and_Midwifery_Council__logo_-Private-STI-CLinic_london_utssua.jpg&w=256&q=75&dpl=dpl_8ti64ZShRvj8XjQy5jniNCpuDmEg'} />
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl w-[250px] h-[95px] flex items-center justify-center">
                        {/* CQC Logo */}
                        <img className="bg-white h-[120px] w-[300px] object-contain px-3" src={'https://www.walkinclinic.london/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda1zmp1ib%2Fimage%2Fupload%2Fv1767456059%2Fcqc-new-logo_huchj8_gcxnud.webp&w=256&q=75&dpl=dpl_8ti64ZShRvj8XjQy5jniNCpuDmEg'} />
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 my-16"></div>

                {/* Title */}
                <h4 className="text-center text-white uppercase tracking-[3px] font-semibold mb-8">
                    Regulated by CQC
                </h4>

                {/* Outer Card */}
                <div className="rounded-3xl border border-slate-600 bg-[#182233] md:p-6">

                    {/* White Certificate */}
                    <div className="bg-white p-1 md:p-6">

                        <div className="rounded-lg lg:min-h-[260px] flex items-center justify-center">

                            {/* Replace with Certificate Image */}

                            <a target="_blank" className="w-full" href="https://www.cqc.org.uk/location/1-21602295059?referer=widget4">
                                <img className="w-full" src={"https://res.cloudinary.com/dg83pvgls/image/upload/v1786100515/Screenshot_2026-08-07_170103_xuibmb.png"} />
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
