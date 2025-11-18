"use client";

import { useState, useEffect } from "react";
import {
  Upload,
  Camera,
  FileText,
  X,
  Shield,
  User,
  BriefcaseMedical,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function DoctorProfilePage() {
  const [doctor, setDoctor] = useState(null);

  // FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const [department, setDepartment] = useState("");
  const [subDept, setSubDept] = useState("");

  const [experience, setExperience] = useState("");
  const [specializations, setSpecializations] = useState("");

  const [availability, setAvailability] = useState(true);

  const [certifications, setCertifications] = useState([]);
  const [profilePreview, setProfilePreview] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const [passwordMode, setPasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  // ================== DYNAMIC DEPARTMENT + SUBDEPT ==================
  const departmentList = [
    {
      name: "Cardiology",
      subs: ["General Cardiology", "Heart Failure", "Arrhythmia"],
    },
    {
      name: "Neurology",
      subs: ["Stroke", "Epilepsy", "Neuro Surgery"],
    },
    {
      name: "Diabetology",
      subs: ["Type 1", "Type 2", "Gestational Diabetes"],
    },
  ];

  // ========== LOAD PROFILE DATA (Replace with API later) ==========
  useEffect(() => {
    const data = {
      name: "Dr. Ahsan Rahman",
      email: "ahsan@example.com",
      phone: "+1 202-555-0173",
      bio: "Cardiologist with 10+ years of expertise in advanced cardiac procedures and preventive care.",
      department: "Cardiology",
      subDept: "Heart Failure",
      experience: "10 years",
      specializations: "Heart Failure, Arrhythmia, Surgery",
      availability: true,
      certifications: [
        { title: "Cardiology Certification", url: "/sample/cert1.pdf" },
      ],
      profilePhoto: "/images/doctor1.jpg",
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDoctor(data);
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    setBio(data.bio);
    setDepartment(data.department);
    setSubDept(data.subDept);
    setExperience(data.experience);
    setSpecializations(data.specializations);
    setAvailability(data.availability);
    setCertifications(data.certifications);
    setProfilePreview(data.profilePhoto);
  }, []);

  // ========== PROFILE UPLOAD ==========
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  // ========== CERTIFICATE UPLOAD ==========
  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCertifications((prev) => [
      ...prev,
      { title: file.name, url: URL.createObjectURL(file) },
    ]);
  };

  const removeCertificate = (i) => {
    const updated = certifications.filter((_, index) => index !== i);
    setCertifications(updated);
  };

  // ========== SAVE PROFILE ==========
  const saveProfile = () => {
    const payload = {
      name,
      email,
      phone,
      bio,
      department,
      subDept,
      experience,
      specializations,
      availability,
      profileImage,
      certifications,
    };

    console.log("PROFILE UPDATED:", payload);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 space-y-10">

      {/* <h1 className="text-2xl font-bold text-[var(--textDark)]">Doctor Profile</h1> */}

      {/* ========================================================= */}
      {/*               TOP BANNER WITH PROFILE IMAGE               */}
      {/* ========================================================= */}

      <div className="bg-white lg:flex rounded-2xl shadow-[var(--shadowCard)] overflow-hidden">

        {/* BIG PROFILE BANNER IMAGE */}
        <div className="relative w-full lg:w-1/3">
          <Image
            src={profilePreview || "/default-avatar.png"}
            className="w-full h-[260px] object-contain rounded-lg"
            width="400"
            height="260"
            alt="name"
          />

          {/* Upload Button Overlay */}
          <label className="absolute bottom-4 right-4 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[var(--brandColorDark)] shadow-md">
            <Camera size={18} />
            Change Photo
            <input type="file" className="hidden" onChange={handleProfileUpload} />
          </label>
        </div>

        {/* BASIC INFO UNDER IMAGE */}
        <div className="px-6 py-6">

          <h2 className="text-2xl font-bold text-[var(--textDark)]">{name}</h2>

          <div className="flex flex-col gap-1 text-sm text-[var(--textLight)] mt-2">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[var(--brandColor)]" />
              {email}
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[var(--brandColor)]" />
              {phone}
            </div>
          </div>

          {/* Bio */}
          <p className="text-[var(--textDark)] mt-4 text-sm leading-relaxed">
            {bio}
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/*                 RIGHT SIDE PROFILE FORM                    */}
      {/* ========================================================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* --------- PERSONAL INFO --------- */}
        <div className="bg-white p-6 rounded-2xl shadow-[var(--shadowCard)] space-y-5">
          <h2 className="text-lg font-semibold text-[var(--textDark)] flex items-center gap-2">
            <User size={20} /> Personal Information
          </h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
              ></textarea>
            </div>
          </div>
        </div>

        {/* --------- PROFESSIONAL INFO --------- */}
        <div className="bg-white p-6 rounded-2xl shadow-[var(--shadowCard)] space-y-5">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-[var(--textDark)]">
            <BriefcaseMedical size={20} /> Professional Details
          </h2>

          <div className="space-y-4">

            {/* Department */}
            <div>
              <label className="text-sm font-medium">Department</label>
              <select
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setSubDept("");
                }}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
              >
                <option value="">Select Department</option>
                {departmentList.map((d) => (
                  <option key={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            {/* Sub Department */}
            <div>
              <label className="text-sm font-medium">Sub Department</label>
              <select
                value={subDept}
                onChange={(e) => setSubDept(e.target.value)}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
                disabled={!department}
              >
                <option value="">Select Sub Department</option>
                {departmentList
                  .find((d) => d.name === department)
                  ?.subs.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Experience</label>
              <input
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Specializations</label>
              <input
                value={specializations}
                onChange={(e) => setSpecializations(e.target.value)}
                className="w-full mt-1 p-3 border border-[var(--borderLight)] rounded-lg"
                placeholder="Comma separated"
              />
            </div>

            {/* Availability Toggle */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium">Available Today</label>
              <input
                type="checkbox"
                checked={availability}
                onChange={() => setAvailability(!availability)}
                className="w-5 h-5 accent-[var(--brandColor)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="bg-white p-6 rounded-2xl shadow-[var(--shadowCard)] space-y-5">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-[var(--textDark)]">
          <Shield size={20} /> Certifications
        </h2>

        <label className="text-[var(--brandColor)] cursor-pointer flex items-center gap-2">
          <Upload size={20} />
          Upload Certificate
          <input type="file" className="hidden" onChange={handleCertificateUpload} />
        </label>

        <div className="space-y-3 mt-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[var(--bgLight)] border border-[var(--borderLight)] p-3 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <FileText className="text-[var(--brandColor)]" />
                {cert.title}
              </div>

              <button onClick={() => removeCertificate(index)}>
                <X className="text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={saveProfile}
        className="px-6 py-3 bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white rounded-xl font-semibold shadow-md"
      >
        Save Profile
      </button>
    </div>
  );
}
