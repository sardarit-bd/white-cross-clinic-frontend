"use server";

import { cookies } from "next/headers";

export async function setAuthCookie(accessToken) {
    const cks = await cookies();
    cks.set("jwtToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });
}


export async function clearAuthCookie() {
    const cks = await cookies()
    cks.delete("jwtToken")
}