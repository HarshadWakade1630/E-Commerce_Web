import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "@/db";

import { usersTable, passwordResets, } from "@/db/schema";

export async function POST(req: Request): Promise<Response> {

    try {

        const { email, password, } = await req.json();

        
            if (!password || password.length < 8) {
                return NextResponse.json(
                    {
                        message:"Password must be atleast 8 characters",
                    },
                    {
                        status:400,
                    }
                )
            }


        const reset = await db.query.passwordResets.findFirst({
            where: eq(passwordResets.email,
                email
            ),
        });

        if (!reset || !reset.verified) {
            return NextResponse.json(
                {
                    message: "OTP verification required",
                },
                {
                    status: 401,
                }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.update(usersTable).set({ password: hashedPassword, }).where(
            eq(
                usersTable.email,
                email
            )
        );

        await db.delete(passwordResets).where(
            eq(
                passwordResets.email,
                email
            )
        );

        return NextResponse.json({
            message: "Password updated",
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
