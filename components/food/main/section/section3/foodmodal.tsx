'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  section: string;
  subsection: string;
}

interface FoodModalProps {
  item: FoodItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FoodModal({ item, isOpen, onClose }: FoodModalProps) {
  const [quantity, setQuantity] = useState(1);

  // Lock background scrolling on mobile & desktop when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleQtyChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div className="fixed inset-0 z-1000 flex items-end justify-center p-0 sm:items-center sm:p-4">
      {/* Darkened Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity touch-none"
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Floating Card Modal Panel */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl transition-all sm:max-h-[85vh] sm:rounded-2xl">
        
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-md transition hover:bg-white hover:text-black sm:right-4 sm:top-4"
        >
          ✕
        </button>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* Food Image */}
          <div className="relative h-44 w-full overflow-hidden rounded-xl sm:h-56">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 500px"
              priority
            />
          </div>

          {/* Item Details */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                {item.name}
              </h2>
              <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                {item.category}
              </span>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Description
              </label>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Responsive Footer */}
        <div className="sticky bottom-0 border-t border-gray-100 bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Quantity Controls & Price */}
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50">
                <button
                  type="button"
                  onClick={() => handleQtyChange(-1)}
                  className="flex h-9 w-9 items-center justify-center text-base font-bold text-gray-600 hover:bg-gray-200 active:bg-gray-300"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-semibold text-gray-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => handleQtyChange(1)}
                  className="flex h-9 w-9 items-center justify-center text-base font-bold text-gray-600 hover:bg-gray-200 active:bg-gray-300"
                >
                  +
                </button>
              </div>

              <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                ${totalPrice}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-2">
              <button
                type="button"
                className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-gray-800 active:scale-95 sm:w-auto sm:text-sm"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="w-full rounded-xl bg-red-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-red-700 active:scale-95 sm:w-auto sm:text-sm"
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}