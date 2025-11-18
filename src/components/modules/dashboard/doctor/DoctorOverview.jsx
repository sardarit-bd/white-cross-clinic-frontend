"use client";

import AppointmentsChart from "./AppointmentsChart";
import DoctorStatsCards from "./DoctorStatsCards";
import PostsOverview from "./PostsOverview";
import ProfileQuickInfo from "./ProfileQuickInfo";
import ScheduleCard from "./ScheduleCard";
import UpcomingAppointments from "./UpcomingAppointments";

 const weeklyData = [
    { day: "Mon", value: 10 },
    { day: "Tue", value: 6 },
    { day: "Wed", value: 12 },
    { day: "Thu", value: 7 },
    { day: "Fri", value: 14 },
    { day: "Sat", value: 4 },
    { day: "Sun", value: 9 },
  ];
export default function DoctorOverview() {
  return (
    <div className="p-6 space-y-6">

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <DoctorStatsCards />
        </div>
        <ProfileQuickInfo />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AppointmentsChart data={weeklyData} />
        </div>
        <ScheduleCard />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingAppointments />
        <PostsOverview />
      </div>

    </div>
  );
}
