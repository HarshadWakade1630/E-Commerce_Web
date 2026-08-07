'use client';

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
  // Bundle props back into a FoodItem object for the modal
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
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-[15px] font-semibold">
          {name?.length > 14 ? name.slice(0, 14) + "..." : name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {description?.length > 17
            ? description.slice(0, 17) + "..."
            : description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold">
            ${price}
          </span>

          <button
            onClick={() => onSelect(currentItem)}
            className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}