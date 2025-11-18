export default function ProfileQuickInfo() {
  return (
    <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-5 h-full">
      <h2 className="font-semibold text-[var(--textDark)] mb-4">Your Profile</h2>

      <div className="space-y-2">
        <p><strong>Name:</strong> Dr. Ahsan Rahman</p>
        <p><strong>Experience:</strong> 12 years</p>
        <p><strong>Speciality:</strong> Cardiology</p>
      </div>

      <button className="mt-4 w-full bg-[var(--brandColor)] text-white py-2 rounded-lg hover:bg-[var(--brandColorDark)] transition">
        Edit Profile
      </button>
    </div>
  );
}
