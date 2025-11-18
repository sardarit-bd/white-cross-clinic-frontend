export default function ScheduleCard() {
  // Dummy schedule — replace with API data later
  const schedule = [
    { day: "Monday", time: "10:00 AM - 4:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 2:00 PM" },
    { day: "Wednesday", time: "Off" },
    { day: "Thursday", time: "12:00 PM - 6:00 PM" },
    { day: "Friday", time: "10:00 AM - 4:00 PM" },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-[var(--shadowCard)] h-full">

      {/* Title */}
      <h2 className="font-semibold mb-4 text-[var(--textDark)]">
        Your Department & Weekly Schedule
      </h2>

      {/* Department Section */}
      <div className="p-4 border border-[var(--borderLight)] rounded-lg mb-5">
        <p className="font-medium text-[var(--brandColor)] text-lg">
          Cardiology
        </p>
        <p className="text-sm text-[var(--textLight)] mt-1">
          Sub-Department: Heart Failure & Research
        </p>
      </div>

      {/* Schedule Section */}
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 rounded-lg 
                       border border-[var(--borderLight)] 
                       hover:bg-[var(--brandColorLight)] 
                       transition cursor-pointer"
          >
            <p className="font-medium text-[var(--textDark)]">{item.day}</p>
            <span className="text-sm font-semibold text-[var(--brandColor)]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
