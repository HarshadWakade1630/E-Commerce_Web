"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Tag, AlertCircle, ArrowLeft } from "lucide-react";

export default function OffersPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-red-50">
      {/* Header Section */}
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Promotions & Deals
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Great food tastes even better with great savings.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Explore our latest discounts, seasonal promotions, and exclusive
            promo codes designed to make your dining experience even more enjoyable.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">
          
          {/* Empty State Container */}
          <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* Badge Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600">
              <Tag className="h-10 w-10" />
            </div>

            <h2 className="text-2xl font-bold text-black sm:text-3xl">
              No Offers Available Right Now
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
              We don’t have any active discount codes or promotions at this moment, 
              but fresh deals are cooked up regularly!
            </p>

            {/* Informational Callout */}
            <div className="mt-8 w-full max-w-lg rounded-lg border border-red-200 bg-red-50/50 p-5 text-left text-sm leading-6 text-gray-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <span className="font-semibold text-red-600">Pro Tip:</span> Check back before placing your order or subscribe to our newsletter to receive notification as soon as new coupons drop.
                </div>
              </div>
            </div>

            {/* Router Back Action Button */}
            <div className="mt-10">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4" /> Go Back
              </button>
            </div>
          </div>

          <hr className="my-10 border-red-200" />

          {/* How Offers Work Section */}
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            How Discounts Work Here
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                Automatic Savings
              </h3>
              <p className="leading-8 text-gray-700">
                When active, applicable promo codes are automatically highlighted at checkout to ensure you get the best price available without chasing dead codes.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                Transparent Terms
              </h3>
              <p className="leading-8 text-gray-700">
                No hidden minimum spend tricks or fine-print traps. All details regarding eligibility and expiration are stated clearly up front.
              </p>
            </div>
          </div>

          {/* Quote Block */}
          <blockquote className="mt-12 rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
            Good food is best enjoyed together. Stay tuned for future promotions and limited-time menu deals!
          </blockquote>
        </div>
      </article>
    </main>
  );
}