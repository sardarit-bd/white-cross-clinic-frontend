"use client";

export default function BasicDetailsForm({ details, onChange }) {
  return (
    <div className="bg-white border border-[var(--borderLight)] rounded-2xl shadow-card p-6 w-full space-y-5">

      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-[var(--textDark)] mb-1">First Name</label>
          <input
            type="text"
            value={details.first}
            onChange={(e) => onChange("first", e.target.value)}
            className="w-full border border-[var(--borderLight)] p-3 rounded-lg focus:outline-none focus:border-[var(--brandColor)]"
            placeholder="Enter first name"
          />
        </div>

        <div>
          <label className="block text-sm text-[var(--textDark)] mb-1">Last Name</label>
          <input
            type="text"
            value={details.last}
            onChange={(e) => onChange("last", e.target.value)}
            className="w-full border border-[var(--borderLight)] p-3 rounded-lg focus:outline-none focus:border-[var(--brandColor)]"
            placeholder="Enter last name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-[var(--textDark)] mb-1">Email Address</label>
        <input
          type="email"
          value={details.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full border border-[var(--borderLight)] p-3 rounded-lg focus:outline-none focus:border-[var(--brandColor)]"
          placeholder="example@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-[var(--textDark)] mb-1">Phone Number</label>

        <div className="flex gap-3">
          {/* Country Code */}
          <select
            value={details.code}
            onChange={(e) => onChange("code", e.target.value)}
            className="w-24 border border-[var(--borderLight)] p-3 rounded-lg focus:outline-none focus:border-[var(--brandColor)]"
          >
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+880">+880</option>
            <option value="+61">+61</option>
          </select>

          {/* Phone Number */}
          <input
            type="text"
            value={details.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="flex-1 border border-[var(--borderLight)] p-3 rounded-lg focus:outline-none focus:border-[var(--brandColor)]"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      {/* Note */}
      <div>
        <label className="block text-sm text-[var(--textDark)] mb-1">Additional Notes</label>
        <textarea
          value={details.note}
          onChange={(e) => onChange("note", e.target.value)}
          className="w-full border border-[var(--borderLight)] p-3 rounded-lg h-28 resize-none focus:outline-none focus:border-[var(--brandColor)]"
          placeholder="Write anything you want the clinic to know..."
        ></textarea>
      </div>
    </div>
  );
}
