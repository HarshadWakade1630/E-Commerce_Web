import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { pendingUsers } from "@/db/schema";

import { generateOtp, hashOtp } from "@/lib/otp";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const { email } =await request.json();

    if (!email) {
      return NextResponse.json(
        {
          message: "Email is required",
        },
        {
          status: 400,
        }
      );
    }

    const pendingUser = await db.query.pendingUsers.findFirst(
        {
          where: eq(
            pendingUsers.email,
            email
          ),
        }
      );

    if (!pendingUser) {
      return NextResponse.json(
        {
          message: "Pending account not found",
        },
        {
          status: 404,
        }
      );
    }

    const otp =generateOtp();

    const otpHash =await hashOtp(otp);

    const otpExpiresAt =new Date(
        Date.now() +
          10 * 60 * 1000
      );

    await db.update(pendingUsers).set({
        otpHash,
        otpExpiresAt,
      })
      .where(
        eq(
          pendingUsers.email,
          email
        )
      );

    await resend.emails.send({
      from:process.env.EMAIL_FROM!,
      to: email,
      subject:"Your OTP Code",
      html: `
        <h2>Verification Code</h2>

        <p>Your OTP is:</p>

        <h1>${otp}</h1>

        <p>
          This code expires in
          10 minutes.
        </p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:"OTP resent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("RESEND OTP ERROR:",error);

    return NextResponse.json(
      {
        message:"Failed to resend OTP",
      },
      {
        status: 500,
      }
    );
  }
}
