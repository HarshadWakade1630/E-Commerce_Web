import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { usersTable,  passwordResets, } from "@/db/schema";

import {    generateOtp,   hashOtp,} from "@/lib/otp";

import { sendOtpEmail } from "@/lib/sendotp";

export async function POST(req: Request): Promise<Response> {

    try {

        const { email } = await req.json();

        const user = await db.query.usersTable.findFirst({
            where: eq(
                usersTable.email,
                email
            ),
        });

        if (!user) {
            return NextResponse.json(
                {
                    message: "Account not found",
                },
                {
                    status: 404,
                }
            );
        }

        const otp = generateOtp(); 
        const otpHash = await hashOtp(otp);

        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); 
        const existingReset = await db.query.passwordResets.findFirst({
            where: eq(
                passwordResets.email,
                email
            ),
        });

        if (existingReset) {

            await db.update(passwordResets).set({
                otpHash,
                otpExpiresAt: expiresAt,
            }).where(
                eq(
                    passwordResets.email,
                    email
                )
            );

        } else {

            await db.insert(passwordResets).values({
                id: crypto.randomUUID(),
                email,
                otpHash,
                otpExpiresAt: expiresAt,
            });

        }

        await sendOtpEmail(
            email,
            otp
        );

        return NextResponse.json({
            message: "OTP sent successfully",
        });

    } catch {

        return NextResponse.json(
            {
                message: "Server error",
            },
            {
                status: 500,
            }
        );

    }
}
