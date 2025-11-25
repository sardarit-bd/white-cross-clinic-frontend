"use client";

export default function TimeSlotSelector({ slots, selectedSlot, onSelect }) {
  return (
    <div className="bg-white border border-[var(--borderLight)] rounded-2xl shadow-card p-6 w-full">

      {/* Morning */}
      {slots.morning && (
        <div className="mb-6">
          <h3 className="text-[var(--textDark)] font-semibold mb-3">Morning</h3>
          <div className="flex flex-wrap gap-3">
            {slots.morning.map((time) => (
              <button
                key={time}
                onClick={() => onSelect(time)}
                className={`
                  px-4 py-2 rounded-lg border transition
                  ${
                    selectedSlot === time
                      ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)]"
                      : "bg-white text-[var(--textDark)] border-[var(--borderLight)] hover:border-[var(--brandColor)]"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Afternoon */}
      {slots.afternoon && (
        <div className="mb-6">
          <h3 className="text-[var(--textDark)] font-semibold mb-3">Afternoon</h3>
          <div className="flex flex-wrap gap-3">
            {slots.afternoon.map((time) => (
              <button
                key={time}
                onClick={() => onSelect(time)}
                className={`
                  px-4 py-2 rounded-lg border transition
                  ${
                    selectedSlot === time
                      ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)]"
                      : "bg-white text-[var(--textDark)] border-[var(--borderLight)] hover:border-[var(--brandColor)]"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Evening */}
      {slots.evening && (
        <div>
          <h3 className="text-[var(--textDark)] font-semibold mb-3">Evening</h3>
          <div className="flex flex-wrap gap-3">
            {slots.evening.map((time) => (
              <button
                key={time}
                onClick={() => onSelect(time)}
                className={`
                  px-4 py-2 rounded-lg border transition
                  ${
                    selectedSlot === time
                      ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)]"
                      : "bg-white text-[var(--textDark)] border-[var(--borderLight)] hover:border-[var(--brandColor)]"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
