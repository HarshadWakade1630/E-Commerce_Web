"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import ChaoticOrbit from "@/components/common/loading";

interface Food {
    id: number | string;
    name: string;
    description?: string;
    price: number | string;
    image?: string;
    category?: string;
    section?: string;
    subsection?: string;
}

function SearchResultsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const urlQuery = searchParams.get("q") || "";
    const urlSort = searchParams.get("sort") || "";

    const [query, setQuery] = useState(urlQuery);
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState(urlSort);
    const [sortOpen, setSortOpen] = useState(false);

    // -----------------------------------------
    // Sync search input with URL
    // -----------------------------------------

    useEffect(() => {
        setQuery(urlQuery);
    }, [urlQuery]);

    // -----------------------------------------
    // Sync sort with URL
    // -----------------------------------------

    useEffect(() => {
        setSort(urlSort);
    }, [urlSort]);

    // -----------------------------------------
    // Fetch search results
    // -----------------------------------------

    useEffect(() => {
        let cancelled = false;

        async function fetchSearchResults() {
            try {
                setLoading(true);

                const params = new URLSearchParams();

                if (urlQuery.trim()) {
                    params.set("q", urlQuery.trim());
                }

                if (urlSort) {
                    params.set("sort", urlSort);
                }

                const queryString = params.toString();

                const endpoint = queryString
                    ? `/api/food/search?${queryString}`
                    : "/api/food/search";

                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch search results"
                    );
                }

                const data = await response.json();

                if (!cancelled) {
                    setFoods(data);
                }
            } catch (error) {
                console.error(
                    "Search API fetch error:",
                    error
                );

                if (!cancelled) {
                    setFoods([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchSearchResults();

        return () => {
            cancelled = true;
        };
    }, [urlQuery, urlSort]);

    // -----------------------------------------
    // Search submit
    // -----------------------------------------

    const handleSearchSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const trimmed = query.trim();

        if (!trimmed) {
            router.push("/food/search");
            return;
        }

        const params = new URLSearchParams();

        params.set("q", trimmed);

        if (sort) {
            params.set("sort", sort);
        }

        router.push(
            `/food/search?${params.toString()}`
        );
    };

    // -----------------------------------------
    // Clear search
    // -----------------------------------------

    const handleClear = () => {
        setQuery("");
        setSort("");

        router.push("/food/search");
    };

    // -----------------------------------------
    // Sort
    // -----------------------------------------

    const handleSortChange = (
        value: string
    ) => {
        setSort(value);

        const params = new URLSearchParams();

        if (urlQuery.trim()) {
            params.set("q", urlQuery.trim());
        }

        if (value) {
            params.set("sort", value);
        }

        const queryString = params.toString();

        router.push(
            queryString
                ? `/food/search?${queryString}`
                : "/food/search"
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-12">

            {/* ================================= */}
            {/* HEADER */}
            {/* ================================= */}

            <header className="sticky top-0 z-40 border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="mx-auto flex max-w-[1200px] items-center gap-3">

                    {/* Back Button */}

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                    >
                        <span>←</span>
                        Back
                    </button>

                    {/* Search Form */}

                    <form
                        onSubmit={handleSearchSubmit}
                        className="flex flex-1 items-center gap-2"
                    >
                        <div className="relative flex-1">

                            <input
                                type="text"
                                value={query}
                                onChange={(e) =>
                                    setQuery(e.target.value)
                                }
                                placeholder="Search food..."
                                className="h-10 w-full rounded-xl border border-gray-300 pl-4 pr-9 text-sm text-gray-800 outline-none transition focus:border-[#ce1f2c]"
                            />

                            {query && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 text-xs text-gray-400 hover:bg-gray-100"
                                >
                                    ✕
                                </button>
                            )}

                        </div>

                        <button
                            type="submit"
                            className="h-10 cursor-pointer rounded-xl bg-[#ce1f2c] px-4 text-sm font-semibold text-white transition hover:bg-[#cc2f3c]"
                        >
                            Search
                        </button>
                    </form>

                </div>
            </header>

            {/* ================================= */}
            {/* MAIN */}
            {/* ================================= */}

            <main className="mx-auto max-w-[1200px] px-4 pt-6">

                {/* Heading + Sort */}

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {urlQuery
                                ? `Results for "${urlQuery}"`
                                : "All Menu Items"}
                        </h1>

                        {!loading && (
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                {foods.length} item
                                {foods.length !== 1
                                    ? "s"
                                    : ""}{" "}
                                found
                            </p>
                        )}

                    </div>

                    {/* Price Sort */}

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setSortOpen((prev) => !prev)}
                            className="flex h-10 min-w-[180px] cursor-pointer items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-[#ce1f2c] hover:shadow-md"
                        >
                            <span>
                                {sort === "price-asc"
                                    ? "Price: Low to High"
                                    : sort === "price-desc"
                                        ? "Price: High to Low"
                                        : "Sort by Price"}
                            </span>

                            <span
                                className={`text-xs text-gray-500 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        {sortOpen && (
                            <div className="absolute right-0 top-12 z-50 w-[180px] overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg">
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleSortChange("");
                                        setSortOpen(false);
                                    }}
                                    className={`w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium transition hover:bg-red-50 hover:text-[#ce1f2c] ${sort === ""
                                        ? "bg-red-50 text-[#ce1f2c]"
                                        : "text-gray-700"
                                        }`}
                                >
                                    Sort by Price
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        handleSortChange("price-asc");
                                        setSortOpen(false);
                                    }}
                                    className={`w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium transition hover:bg-red-50 hover:text-[#ce1f2c] ${sort === "price-asc"
                                        ? "bg-red-50 text-[#ce1f2c]"
                                        : "text-gray-700"
                                        }`}
                                >
                                    Price: Low to High
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        handleSortChange("price-desc");
                                        setSortOpen(false);
                                    }}
                                    className={`w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium transition hover:bg-red-50 hover:text-[#ce1f2c] ${sort === "price-desc"
                                        ? "bg-red-50 text-[#ce1f2c]"
                                        : "text-gray-700"
                                        }`}
                                >
                                    Price: High to Low
                                </button>
                            </div>
                        )}
                    </div>

                </div>

                {/* ================================= */}
                {/* LOADING */}
                {/* ================================= */}

                {loading ? (

                    <div className="py-12 text-center">
                        <p className="text-sm font-medium text-gray-500">
                            <ChaoticOrbit />
                        </p>
                    </div>

                ) : foods.length === 0 ? (

                    /* ================================= */
                    /* NO RESULTS */
                    /* ================================= */

                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">

                        <p className="text-base font-semibold text-gray-700">
                            No food items found
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            {urlQuery
                                ? `No items matched "${urlQuery}". Try searching for broader terms.`
                                : "No menu items are currently available."}
                        </p>

                        {urlQuery && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#ce1f2c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#cc2f3c]"
                            >
                                Show all items
                            </button>
                        )}

                    </div>

                ) : (

                    /* ================================= */
                    /* FOOD GRID */
                    /* ================================= */

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {foods.map((food) => (
                            <div
                                key={food.id}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image */}
                                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={food.image || "/placeholder.png"}
                                        alt={food.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Category */}
                                    {food.category && (
                                        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#ce1f2c] shadow-sm backdrop-blur-sm">
                                            {food.category}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4">

                                    {/* Food Name */}
                                    <h3 className="line-clamp-1 text-lg font-bold text-gray-900">
                                        {food.name}
                                    </h3>

                                    {/* Section / Subsection */}
                                    {(food.section || food.subsection) && (
                                        <p className="mt-1 line-clamp-1 text-xs font-medium text-gray-500">
                                            {[food.section, food.subsection]
                                                .filter(Boolean)
                                                .join(" · ")}
                                        </p>
                                    )}

                                    {/* Description */}
                                    {food.description && (
                                        <p className="mt-2 line-clamp-1 text-sm leading-5 text-gray-500">
                                            {food.description}
                                        </p>
                                    )}

                                    {/* Bottom */}
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

                                        {/* Price */}
                                        <span className="text-lg font-bold text-[#ce1f2c]">
                                            ₹{food.price}
                                        </span>

                                        {/* Add Button */}
                                        <button
                                            type="button"
                                            className="cursor-pointer rounded-xl bg-[#ce1f2c] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b91c28] hover:shadow-md active:scale-95"
                                        >
                                            Add
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                )}

            </main>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense
            fallback={
                <div className="p-6 text-center text-sm text-gray-500">
                    Loading search page...
                </div>
            }
        >
            <SearchResultsContent />
        </Suspense>
    );
}