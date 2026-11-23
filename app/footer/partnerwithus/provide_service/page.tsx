'use client'
import React from 'react';
import { Handshake, AlertCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

import { useRouter } from "next/navigation";

export default function PartnerWithUsPage() {
     const router = useRouter();
  return (
    <>
      <main className="min-h-screen bg-red-50">
        {/* Header Section */}
        <section className="border-b border-red-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
              Partner With Us
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Grow your kitchen or food brand alongside us.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Explore service integrations, kitchen partnerships, and API onboarding options to reach hungry customers seamlessly.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">

            {/* Partnership / Service API Status Container */}
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600">
                <Handshake className="h-10 w-10" />
              </div>

              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Partner Onboarding & Service API Paused
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                Self-serve service API integrations and new partner onboarding are currently paused while we operate independently—reach out directly to register early interest.
              </p>

              {/* Informational Callout */}
              <div className="mt-8 w-full max-w-lg rounded-lg border border-red-200 bg-red-50/50 p-5 text-left text-sm leading-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <span className="font-semibold text-red-600">Early Access & Inquiries:</span> Want to integrate via our Service API or collaborate as a food partner? Email{' '}
                    <a
                      href="mailto:harshadwakade1234@gmail.com?subject=Partner%20%26%20Service%20API%20Inquiry"
                      className="font-medium text-black underline decoration-red-300 underline-offset-2 hover:text-red-600"
                    >
                      harshadwakade1234@gmail.com
                    </a>{' '}
                    or call{' '}
                    <a
                      href="tel:+919420201240"
                      className="font-medium text-black underline decoration-red-300 underline-offset-2 hover:text-red-600"
                    >
                      +91 94202 01240
                    </a>.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:harshadwakade1234@gmail.com?subject=Partner%20With%20Us%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  <Mail className="h-4 w-4" /> Request Partnership
                </a>

                <a
                  href="tel:+919420201240"
                  className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  <Phone className="h-4 w-4" /> Call Directly
                </a>

                <a
                  onClick={() => router.back()}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Explore Our Menu
                </a>
              </div>
            </div>

            <hr className="my-10 border-red-200" />

            {/* Partnership & Service API Overview */}
            <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
              How Partnerships & Service APIs Work
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                  Menu & Order Service API
                </h3>
                <p className="leading-8 text-gray-700">
                  Designed for clean integration between kitchen catalogs, live item availability, and streamlined order routing when partner onboarding opens.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                  Direct & Transparent Collaboration
                </h3>
                <p className="leading-8 text-gray-700">
                  No hidden commission layers or complicated middlemen—work directly with Harsh Wakade to build reliable, customer-first food experiences.
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-12 rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
              Great partnerships are built on trust, clean technology, and a shared commitment to serving great food.
            </blockquote>
          </div>
        </article>
      </main>
    </>
  );
}