"use client";

import Link from "next/link";

export default function StickyFoodNavbar() {
  return (
    <header className="fixed top-0 right-0 z-[9999] h-[48px] min-w-[200px] sm:min-w-[240px]">
      
      <div className="absolute inset-0 -z-10 h-full w-full filter drop-shadow-md">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full fill-[#ce1f2c]"
        >
          <path d="M 0 0 L 100 0 L 100 100 Q 0 110 0 0 Z" />
        </svg>
      </div>

      <div className="flex h-full items-center justify-end pr-4 pl-12 sm:pr-6 sm:pl-16 lg:pr-8">
        <nav className="flex items-center gap-3 text-white sm:gap-5 lg:gap-6">
          <Link
            href="/food/myorders"
            className="whitespace-nowrap text-xs font-medium transition-opacity hover:opacity-80 sm:text-sm"
          >
            My Orders
          </Link>

          <Link
            href="/account"
            className="whitespace-nowrap text-xs font-medium transition-opacity hover:opacity-80 sm:text-sm"
          >
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
}