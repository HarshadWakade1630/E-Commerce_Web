'use client';

import { useState } from 'react';
import FoodCard from './section/section3/foodscroll';
import SubsectionFilter from './section/section3/subsectionfoodfilter';
import FoodModal, { FoodItem } from './section/section3/foodmodal';

interface FoodClientContainerProps {
  sections: string[];
  foods: FoodItem[];
}

export default function FoodClientContainer({
  sections,
  foods,
}: FoodClientContainerProps) {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});
  const [loadingKeys, setLoadingKeys] = useState<Record<string, boolean>>({});

  const INITIAL_LIMIT = 3;
  const LOAD_MORE_STEP = 3;

  const handleLoadMore = (subsectionKey: string) => {
    setLoadingKeys((prev) => ({ ...prev, [subsectionKey]: true }));

    setTimeout(() => {
      setVisibleCounts((prev) => ({
        ...prev,
        [subsectionKey]: (prev[subsectionKey] || INITIAL_LIMIT) + LOAD_MORE_STEP,
      }));
      setLoadingKeys((prev) => ({ ...prev, [subsectionKey]: false }));
    }, 250);
  };

  return (
    <>
      {sections.map((section) => {
        const sectionFoods = foods.filter((food) => food.section === section);
        const subsections = [
          ...new Set(sectionFoods.map((food) => food.subsection)),
        ];

        return (
          <div
            key={section}
            className="mx-auto my-6 w-full max-w-screen-2xl"
          >
            {/* Header */}
            <div className="pt-3">
              <div
                id={section.toLowerCase().replace(/\s+/g, '-')}
                className="w-full pb-5"
              >
                <div className="mx-auto flex max-w-[1200px] flex-col gap-1.5">
                  <h2 className="text-[22px] font-semibold">{section}</h2>
                </div>
              </div>
            </div>

            {/* Filter */}
            <SubsectionFilter
              section={section}
              subsections={subsections}
            />

            {/* Food Grid */}
            <section className="rounded-b-xl bg-white px-3 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6 lg:px-10">
              {subsections.map((subsection) => {
                const subsectionKey = `${section}-${subsection}`;
                const filteredFoods = sectionFoods.filter(
                  (food) => food.subsection === subsection
                );

                const currentLimit =
                  visibleCounts[subsectionKey] || INITIAL_LIMIT;
                const displayedFoods = filteredFoods.slice(0, currentLimit);
                const hasMore = filteredFoods.length > currentLimit;
                const isLoading = loadingKeys[subsectionKey];

                return (
                  <div key={subsection} className="mb-10">
                    <div
                      id={subsectionKey
                        .toLowerCase()
                        .replace(/\s+/g, '-')}
                    >
                      <h3 className="mb-4 text-lg font-semibold">
                        {subsection}
                      </h3>

                      <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                        {displayedFoods.map((food) => (
                          <FoodCard
                            key={food.id}
                            {...food}
                            onSelect={(item) => setSelectedItem(item)}
                          />
                        ))}

                        {/* Small Static Circular Dot Button */}
                        {hasMore && (
                          <div className="flex items-center justify-center py-2">
                            <button
                              onClick={() => handleLoadMore(subsectionKey)}
                              disabled={isLoading}
                              title="Load more items"
                              aria-label="Load more items"
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 disabled:opacity-50"
                            >
                              <svg
                                className={`h-4 w-4 fill-current ${
                                  isLoading ? 'animate-pulse text-red-600' : ''
                                }`}
                                viewBox="0 0 24 24"
                              >
                                <circle cx="5" cy="12" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="19" cy="12" r="2" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        );
      })}

      {/* Floating Card Modal */}
      <FoodModal
        key={selectedItem?.id ?? 'modal-closed'}
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}