export default function AppointmentStatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-600 border-yellow-300",
    Approved: "bg-[var(--brandColorLight)] text-[var(--brandColor)] border-[var(--brandColor)]",
    Completed: "bg-green-100 text-green-600 border-green-300",
    Cancelled: "bg-red-100 text-red-600 border-red-300",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full border ${styles[status]}`}
    >
      {status}
    </span>
  );
}
