"use client";

import Image from "next/image";
import { FoodItem } from "./foodmodal";

interface FoodCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  section?: string;
  subsection?: string;
  onSelect: (item: FoodItem) => void;
}

export default function FoodCard({
  id,
  name,
  description,
  price,
  image,
  category = "",
  section = "",
  subsection = "",
  onSelect,
}: FoodCardProps) {
  const currentItem: FoodItem = {
    id,
    name,
    description,
    price,
    image,
    category,
    section,
    subsection,
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Expanded Image Container Height */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.png"}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="p-3.5">
        {/* Food Name - Prominent Title */}
        <h3 className="line-clamp-1 text-base font-bold tracking-tight text-gray-900">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-0.5 line-clamp-1 text-xs font-normal text-gray-400">
            {description}
          </p>
        )}

        {/* Compact Bottom Bar */}
        <div className="mt-2.5 flex items-center justify-between border-t border-gray-100 pt-2">
          <span className="text-base font-bold text-[#ce1f2c]">
            ₹{price}
          </span>

          <button
            type="button"
            onClick={() => onSelect(currentItem)}
            className="cursor-pointer rounded-lg bg-[#ce1f2c] px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#b91c28] hover:shadow-md active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}