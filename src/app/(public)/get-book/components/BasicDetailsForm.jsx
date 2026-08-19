"use client";

export default function BasicDetailsForm({ details, onChange }) {
  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-6 space-y-4 shadow-xs w-full">
      <div className="border-b border-gray-100 pb-2.5">
        <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
          Patient Personal Details
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Please provide accurate patient information for medical registration & confidential lab reports.
        </p>
      </div>

      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
            First Name *
          </label>
          <input
            type="text"
            value={details.first}
            onChange={(e) => onChange("first", e.target.value)}
            className="w-full border border-gray-300 p-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--brandColor)] font-medium"
            placeholder="John"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
            Last Name *
          </label>
          <input
            type="text"
            value={details.last}
            onChange={(e) => onChange("last", e.target.value)}
            className="w-full border border-gray-300 p-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--brandColor)] font-medium"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
            Email Address *
          </label>
          <input
            type="email"
            value={details.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full border border-gray-300 p-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--brandColor)] font-medium"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
            Phone Number *
          </label>
          <div className="flex gap-2">
            <select
              value={details.code}
              onChange={(e) => onChange("code", e.target.value)}
              className="w-24 border border-gray-300 p-2.5 text-xs font-semibold bg-white text-gray-800 focus:outline-none focus:border-[var(--brandColor)]"
            >
              <option value="+44">+44 (UK)</option>
              <option value="+1">+1 (US)</option>
              <option value="+880">+880 (BD)</option>
              <option value="+61">+61 (AU)</option>
            </select>
            <input
              type="tel"
              value={details.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className="flex-1 border border-gray-300 p-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--brandColor)] font-medium"
              placeholder="7700 900077"
              required
            />
          </div>
        </div>
      </div>

      {/* Gender & DOB */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
            Gender
          </label>
          <select
            value={details.gender || "male"}
            onChange={(e) => onChange("gender", e.target.value)}
            className="w-full border border-gray-300 p-2.5 text-xs sm:text-sm font-medium bg-white text-gray-900 focus:outline-none focus:border-[var(--brandColor)]"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other / Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            value={details.dob || ""}
            onChange={(e) => onChange("dob", e.target.value)}
            className="w-full border border-gray-300 p-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--brandColor)] font-medium"
          />
        </div>
      </div>

      {/* Medical Notes */}
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
          Special Symptoms or Medical Notes (Optional)
        </label>
        <textarea
          value={details.note}
          onChange={(e) => onChange("note", e.target.value)}
          rows={3}
          className="w-full border border-gray-300 p-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--brandColor)] font-medium resize-none"
          placeholder="Include any allergies, symptoms, or specific requests for the doctor..."
        />
      </div>
    </div>
  );
}
