"use client"

import { useReportWebVitals } from "next/web-vitals"

export default function WebVitals() {
  useReportWebVitals((metric) => {
    if (metric.label === "web-vital") {
      window.gtag("event", metric.name, {
        value: Math.round(metric.value),
        event_category: "Web Vitals",
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  return null
}