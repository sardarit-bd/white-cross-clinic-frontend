'use client'

import { DashboardSidebar } from "@/components/modules/dashboard/DashboardSidebar"

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <DashboardSidebar />
        <main className="flex w-full flex-1 flex-col overflow-hidden container mx-auto px-4 p-6 md:p-12">{children}</main>
      </div>
    </div>
  )
}