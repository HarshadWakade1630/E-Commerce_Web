import { NextResponse } from "next/server";
import { db } from "@/db";
import { popularFoodCard } from "@/db/schema";

export async function GET() {
  try {
    const data = await db
      .select()
      .from(popularFoodCard);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching popular food cards:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch popular food cards",
      },
      {
        status: 500,
      }
    );
  }
}