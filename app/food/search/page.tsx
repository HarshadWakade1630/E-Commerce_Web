import { db } from "@/db";
import { foodcards } from "@/db/schema";
import { ilike, or } from "drizzle-orm";
import Link from "next/link";
import SearchSection from "@/components/food/main/section/section1/searchsection";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q?.trim() || "";

  // Fetch all items for the live search suggestions bar
  const allFoods = await db.select().from(foodcards);

  // Search across name, description, category, section, and subsection using exact Drizzle schema columns
  const results = query
    ? await db
        .select()
        .from(foodcards)
        .where(
          or(
            ilike(foodcards.name, `%${query}%`),
            ilike(foodcards.description, `%${query}%`),
            ilike(foodcards.category, `%${query}%`),
            ilike(foodcards.section, `%${query}%`),
            ilike(foodcards.subsection, `%${query}%`)
          )
        )
    : [];

  return (
    <div className="min-h-screen w-full bg-[#fef6f6] px-[10px] md:px-[20px] py-6">
      <div className="mx-auto max-w-7xl">
        {/* Re-usable Search Bar at Top */}
        <div className="mb-8">
          <SearchSection foods={allFoods} />
        </div>

        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            {query ? (
              <>
                Search Results for <span className="text-[#ce1f2c]">`{query}`</span>
              </>
            ) : (
              "Please enter a search query"
            )}
          </h1>
          <span className="text-sm font-medium text-gray-500">
            {results.length} {results.length === 1 ? "item" : "items"} found
          </span>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {results.map((food) => (
              <div
                key={food.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={food.image || "/placeholder.png"}
                    alt={food.name || "Food item"}
                    className="h-full w-full object-cover"
                  />
                  {food.section && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#ce1f2c] px-3 py-1 text-xs font-semibold text-white">
                      {food.section}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h2 className="text-base font-bold text-gray-900 line-clamp-1">
                      {food.name}
                    </h2>
                    {food.description && (
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                        {food.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-base font-bold text-gray-900">
                      ₹{food.price}
                    </span>
                    <button className="rounded-xl bg-[#ce1f2c] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01a25] cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <p className="text-lg font-semibold text-gray-700">
              No food items found matching `{query}`
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Try checking your spelling or search for common items like `burger`, `pizza`, or `roti`.
            </p>
            <Link
              href="/food"
              className="mt-5 rounded-xl bg-[#ce1f2c] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b01a25]"
            >
              Back to Main Menu
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}