
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { usersTable, pendingUsers, } from "@/db/schema";
import { generateOtp, hashOtp, } from "@/lib/otp";
import { sendOtpEmail } from "@/lib/sendotp";
import { registerSchema } from "@/lib/validations/auth";
import { success } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validated = registerSchema.parse(body);

    const existingUser = await db.query.usersTable.findFirst({
      where: eq(
        usersTable.email,
        validated.email
      ),
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message:
            "Account already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(validated.password, 10);

    const otp = generateOtp(); 
    const otpHash = await hashOtp(otp);

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const existingPending = await db.query.pendingUsers.findFirst({
      where: eq(
        pendingUsers.email,
        validated.email
      ),
    });

    if (existingPending) {

      const passwordMatches = await bcrypt.compare(validated.password, existingPending.password);
      if (!passwordMatches) {
        return NextResponse.json(
          {
            message: "Incorrect Password",
          },
          {
            status: 401,
          }
        )
      }

      await db.update(pendingUsers).set({
        name: validated.name,
        otpHash,
        otpExpiresAt: expiresAt,
      })
        .where(
          eq(
            pendingUsers.email,
            validated.email
          )
        );
    } else {
      await db.insert(pendingUsers).values({
        id: crypto.randomUUID(),
        name: validated.name,
        email: validated.email,
        password: hashedPassword,
        otpHash,
        otpExpiresAt: expiresAt,
      });
    }

    await sendOtpEmail(validated.email, otp);

    return NextResponse.json({
      success: true,
      message: existingPending ? "Verification pending. New OTP sent" : "OTP sent successfully",
    });
  }
  catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}