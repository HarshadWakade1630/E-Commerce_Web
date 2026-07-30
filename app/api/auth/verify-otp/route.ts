import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";

import { pendingUsers, usersTable, } from "@/db/schema";

import { compareOtp, } from "@/lib/otp";

export async function POST(
  req: NextRequest
) {
  try {
    const { email, otp, } = await req.json();

    const pendingUser = await db.query.pendingUsers.findFirst({
      where: eq(
        pendingUsers.email,
        email
      ),
    });

    if (!pendingUser) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    if (pendingUser.otpExpiresAt < new Date()) {
      return NextResponse.json(
        {
          message: "OTP expired",
        },
        {
          status: 400,
        }
      );
    }

    if(!otp||!/^\d{6}$/.test(otp)){
      return NextResponse.json({
        message:"OTP must be 6 digits",
        status:400,
      })
    }

    const validOtp = await compareOtp(otp, pendingUser.otpHash);

    if (!validOtp) {
      return NextResponse.json(
        {
          message: "Invalid OTP",
        },
        {
          status: 400,
        }
      );
    }

    await db.insert(usersTable).values({
      id: crypto.randomUUID(),

      name: pendingUser.name,

      email: pendingUser.email,

      password: pendingUser.password,
    });

    await db.delete(pendingUsers).where(
      eq(
        pendingUsers.email,
        email
      )
    );

    return NextResponse.json({
      message: "Account verified",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Verification failed",
      },
      {
        status: 500,
      }
    );
  }
}




