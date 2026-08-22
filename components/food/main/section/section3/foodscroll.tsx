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
          <span className="absolute left-3 top-3 rounded-full bg-red-50/95 px-3 py-1 text-xs font-bold text-[#ce1f2c] shadow-sm backdrop-blur-md ring-1 ring-red-200/60">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Food Name - Prominent Title */}
        <h3 className="line-clamp-1 text-lg font-bold text-gray-900 tracking-tight">
          {name}
        </h3>

        {/* Description - Strictly 1 Line & Small Text */}
        {description && (
          <p className="mt-1 line-clamp-1 text-xs font-normal text-gray-400">
            {description}
          </p>
        )}

        {/* Bottom Bar: Price & Action */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-lg font-bold text-[#ce1f2c]">
            ₹{price}
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