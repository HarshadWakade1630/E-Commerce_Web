import { db } from "@/db";
import { refreshTokens } from "@/db/schema";
import { hashToken } from "@/lib/hash";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(): Promise<Response> {

  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const response = NextResponse.json({
    message: "Logout successful",
  });

  response.cookies.set({
    name: "accessToken",
    value: "",
    path: "/",
    maxAge: 0,
  });


  response.cookies.set({
    name: "refreshToken",
    value: "",
    path: "/",
    maxAge: 0,
  });

  if (refreshToken) {
    const refreshHash = hashToken(refreshToken);

    await db.delete(refreshTokens).where(
      eq(
        refreshTokens.tokenHash,
        refreshHash
      )
    );
  }

  return response;
}