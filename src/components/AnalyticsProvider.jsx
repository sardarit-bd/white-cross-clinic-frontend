"use client"

import { pageview } from "@/lib/analytics"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function AnalyticsProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return null
}