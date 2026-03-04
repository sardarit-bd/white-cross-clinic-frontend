import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function proxy(req) {
  console.log("Middleware called")

  const cks = await cookies()
  const token = cks.get("accessToken")?.value
  console.log("Token:", token)

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    console.log(decoded)
    // if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
    //   return NextResponse.redirect(new URL("/unauthorized", req.url))
    // }

    return NextResponse.next()
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // protects all /dashboard/* routes
}