
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { usersTable, refreshTokens, pendingUsers } from "@/db/schema";
import { loginSchema } from "@/lib/validations/auth";
import { createAccessToken, createRefreshToken } from "@/lib/auth";
import { hashToken } from "@/lib/hash";


export async function POST(req: Request): Promise<Response> {
  try {

    const body = await req.json();

    const validateData = loginSchema.safeParse(body);

    if (!validateData.success) {
      return NextResponse.json({
        message: "invalid inputs",
        errors: validateData.error.flatten(),
      },
        {
          status: 400,
        })
    }

    const { email, password, } = validateData.data;


    //USER EXISTS
    const user = await db.select().from(usersTable).where(
      eq(
        usersTable.email,
        email
      )
    );

    if (user.length === 0) {
      
    const pendingUser = await db.query.pendingUsers.findFirst({
      where: eq(
        pendingUsers.email,
        email
      )
    });

    if(pendingUser){
      return NextResponse.json(
        {
          message:"Please verify your account",
          pending:true,
          email,
        },
        {
          status:403,
        }
      )
    }

      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const existingUser = user[0];

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = await createAccessToken(existingUser.id);
    const refreshToken = await createRefreshToken(existingUser.id);

    const refreshTokenHash = hashToken(refreshToken);
    const refreshExpriresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await db.insert(refreshTokens).values({
      id: crypto.randomUUID(),
      userId: existingUser.id,
      tokenHash: refreshTokenHash,
      expiresAt: refreshExpriresAt,
    })

    const response = NextResponse.json({
      message: "Login success",
    });

    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15,
    });

    response.cookies.set({
      name: "refreshToken",
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
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