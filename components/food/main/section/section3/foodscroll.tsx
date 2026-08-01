'use client'
import Image from "next/image";

interface FoodCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function FoodCard({
  name,
  description,
  price,
  image,
}: FoodCardProps) {
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
        <h3 className="text-[15px] font-semibold">{name}</h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold">
            ${price}
          </span>

          <button className="rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-red-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
