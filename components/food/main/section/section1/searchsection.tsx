"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  section: string;
  subsection: string;
}

interface SearchSectionProps {
  foods?: Food[];
}

export default function SearchSection({ foods = [] }: SearchSectionProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const results: Food[] = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search || !Array.isArray(foods) || foods.length === 0) return [];

    return foods
      .filter((food) => {
        // Build a dedicated search string containing ONLY the allowed fields
        const searchableText = [
          food.name,
          food.price,
          food.category,
          food.section,
          food.subsection,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        // Strictly check if the query exists ONLY in the allowed fields
        return searchableText.includes(search);
      })
      .slice(0, 8);
  }, [query, foods]);

  const handleSearch = () => {
    const search = query.trim();
    if (!search) return;

    setQuery("");
    setSelectedIndex(-1);
    router.push(`/food/search?q=${encodeURIComponent(search)}`);
  };

  const handleResultClick = (food: Food) => {
    setQuery("");
    setSelectedIndex(-1);
    const id = `${food.section}-${food.subsection}`
      .toLowerCase()
      .replace(/\s+/g, "-");

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    } else if (e.key === "Escape") {
      setQuery("");
      setSelectedIndex(-1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setQuery("");
        setSelectedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="food-main"
      className="mx-auto w-full max-w-[1920px] rounded-xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:rounded-2xl sm:p-7 md:p-[40px]"
    >
      <h1 className="mb-4 text-xl font-bold tracking-tight text-gray-900 sm:mb-5 sm:text-2xl md:text-[28px]">
        Discover the best food near you
      </h1>

      <div ref={searchContainerRef} className="relative w-full lg:w-[80%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search by name, category, section, price..."
            className="h-12 w-full min-w-0 flex-1 rounded-xl border border-[#ddd] px-4 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-[#ce1f2c] sm:h-14 sm:text-base"
          />

          <button
            type="submit"
            className="h-12 shrink-0 rounded-xl bg-[#ce1f2c] px-5 text-sm font-semibold text-white transition hover:bg-[#cc2f3c] sm:h-14 sm:px-8 sm:text-base cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Dropdown Results */}
        {query.trim() && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
            {results.length === 0 ? (
              <div className="px-5 py-6 text-center text-sm text-gray-500">
                No food found matching &quot;{query}&quot;
              </div>
            ) : (
              <div className="max-h-[420px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {results.map((food, index) => (
                  <button
                    key={food.id}
                    type="button"
                    onClick={() => handleResultClick(food)}
                    className={`flex w-full items-center gap-4 border-b border-gray-100 px-4 py-3 text-left transition cursor-pointer ${
                      index === selectedIndex
                        ? "bg-[#fef6f6]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={food.image || "/placeholder.png"}
                        alt={food.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {food.name}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-gray-500">
                        {food.category} · {food.subsection} · {food.section}
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-[#ce1f2c]">
                        ₹{food.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}