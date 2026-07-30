import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

import { db } from "@/db";

import { passwordResets, } from "@/db/schema";

export async function POST(req: Request): Promise<Response> {

    try {

        const { email, otp, } = await req.json();

        const reset = await db.query.passwordResets.findFirst({
            where: eq(
                passwordResets.email,
                email
            ),
        });

        if (!reset) {

            return NextResponse.json(
                {
                    message: "OTP not found",
                },
                {
                    status: 404,
                }
            );

        }

        if (new Date() > reset.otpExpiresAt) {

            return NextResponse.json(
                {
                    message: "OTP expired",
                },
                {
                    status: 400,
                }
            );

        }

        const validOtp = await bcrypt.compare(otp, reset.otpHash);

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

        await db.update(passwordResets).set({
            verified: true,
        }).where(eq(
            passwordResets.email,
            email,
        ));

        if(reset.verified){
            return NextResponse.json(
                {
                    message:"OTP already verified",
                },
                {
                    status:400,
                }
            )
        }

        return NextResponse.json({
            message: "OTP verified",
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
