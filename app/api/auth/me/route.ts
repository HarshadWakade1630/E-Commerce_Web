import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { verifyToken } from "@/lib/auth";
import { db } from "@/db";
import { usersTable } from "@/db/schema";

export async function GET(): Promise<Response> {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const payload = await verifyToken(token);

    const userFind = await db.query.usersTable.findFirst({
      where: eq(
        usersTable.id,
        payload.id,
      )
    });
    if (!userFind) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      )
    }

    const user = await db.select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      created_at: usersTable.createdAt,
    }).from(usersTable).where(
      eq(
        usersTable.id,
        payload.id
      )
    );

    return NextResponse.json(user[0]);

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