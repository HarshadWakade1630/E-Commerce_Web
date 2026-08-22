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
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.png"}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />

        {/* Category Badge Overlay */}
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-800 shadow-md backdrop-blur-md">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Food Name */}
        <h3 className="line-clamp-1 text-lg font-bold text-gray-900">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2 line-clamp-1 text-sm leading-5 text-gray-500">
            {description}
          </p>
        )}

        {/* Bottom Bar: Price & Action */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-lg font-bold text-[#ce1f2c]">
            ${price}
          </span>

          <button
            type="button"
            onClick={() => onSelect(currentItem)}
            className="cursor-pointer rounded-xl bg-[#ce1f2c] px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b91c28] hover:shadow-md active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}