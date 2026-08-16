import { NextResponse } from "next/server";
import { db } from "@/db";
import { foodcards } from "@/db/schema";
import { ilike, or, and, asc, desc } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const q = searchParams.get("q")?.trim() || "";
    const sort = searchParams.get("sort") || "";

    // No search query
    if (!q) {
      const data = await db
        .select()
        .from(foodcards)
        .orderBy(
          sort === "price-asc"
            ? asc(foodcards.price)
            : sort === "price-desc"
              ? desc(foodcards.price)
              : asc(foodcards.id)
        );

      return NextResponse.json(data);
    }

    // Split query into individual words
    // Example: "paneer sabzi"
    // ["paneer", "sabzi"]
    const words = q
      .split(/\s+/)
      .filter(Boolean);

    // Every word must match at least
    // one of these:
    // name
    // category
    // section
    // subsection
    const conditions = words.map((word) =>
      or(
        ilike(
          foodcards.name,
          `%${word}%`
        ),
        ilike(
          foodcards.category,
          `%${word}%`
        ),
        ilike(
          foodcards.section,
          `%${word}%`
        ),
        ilike(
          foodcards.subsection,
          `%${word}%`
        )
      )
    );

    const data = await db
      .select()
      .from(foodcards)
      .where(and(...conditions))
      .orderBy(
        sort === "price-asc"
          ? asc(foodcards.price)
          : sort === "price-desc"
            ? desc(foodcards.price)
            : asc(foodcards.id)
      );

    return NextResponse.json(data);
  } catch (error) {
    console.error(
      "Food search API error:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to search food",
      },
      {
        status: 500,
      }
    );
  }
}