'use client';

import { useState } from 'react';
import FoodCard from './section/section3/foodscroll';
import SubsectionFilter from './section/section3/subsectionfoodfilter';
import FoodModal, { FoodItem } from './section/section3/foodmodal'; // adjust import path as needed

interface FoodClientContainerProps {
    sections: string[];
    foods: FoodItem[];
}

export default function FoodClientContainer({
    sections,
    foods,
}: FoodClientContainerProps) {
    const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

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
                            {subsections.map((subsection) => (
                                <div key={subsection} className="mb-10">
                                    <div
                                        id={`${section}-${subsection}`
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}
                                    >
                                        <h3 className="mb-4 text-lg font-semibold">
                                            {subsection}
                                        </h3>

                                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                                            {sectionFoods
                                                .filter((food) => food.subsection === subsection)
                                                .map((food) => (
                                                    <FoodCard
                                                        key={food.id}
                                                        {...food}
                                                        onSelect={(item) => setSelectedItem(item)}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
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