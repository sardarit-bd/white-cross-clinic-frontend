export default function UpcomingAppointments() {
  const upcoming = [
    { name: "John Doe", time: "10:00 AM", date: "Jan 18" },
    { name: "Sarah Ahmed", time: "12:30 PM", date: "Jan 18" },
    { name: "Mark Wilson", time: "3:00 PM", date: "Jan 18" },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)]">
      <h2 className="font-semibold mb-4 text-[var(--textDark)]">
        Upcoming Appointments
      </h2>

      <div className="space-y-3">
        {upcoming.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg border border-[var(--borderLight)] hover:bg-[var(--brandColorLight)] transition"
          >
            <div>
              <p className="font-medium text-[var(--textDark)]">{item.name}</p>
              <p className="text-sm text-[var(--textLight)]">{item.time}</p>
            </div>
            <span className="text-sm font-semibold text-[var(--brandColor)]">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
