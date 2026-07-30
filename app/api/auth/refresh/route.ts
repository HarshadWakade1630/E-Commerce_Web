import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { createAccessToken, verifyToken, } from "@/lib/auth";
import { refreshTokens } from "@/db/schema";
import { createRefreshToken } from "@/lib/auth";
import { hashToken } from "@/lib/hash";

export async function POST(): Promise<Response> {
  try {
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        {
          message:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const payload = await verifyToken(refreshToken);

    const refreshHash = hashToken(refreshToken);

    const tokenRow = await db.query.refreshTokens.findFirst({
      where: eq(
        refreshTokens.tokenHash,
        refreshHash
      ),
    })

    if (!tokenRow) {
      return NextResponse.json({
        message: "Unauthorized",
      },
        {
          status: 401,
        }
      )
    }

    const newAccessToken = await createAccessToken(payload.id);

    const newRefreshToken = await createRefreshToken(payload.id);
    const newRefreshHash = hashToken(newRefreshToken);

    await db.delete(refreshTokens).where(eq(refreshTokens.id, tokenRow.id))
    await db.insert(refreshTokens).values({
      id: crypto.randomUUID(),
      userId: payload.id,
      tokenHash: newRefreshHash,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

    const response = NextResponse.json({
      message: "Token refreshed",
    });

    response.cookies.set({
      name: "accessToken",
      value: newAccessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15,
    });

    response.cookies.set({
      name: "refreshToken",
      value: newRefreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 *60* 24*7,
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
}