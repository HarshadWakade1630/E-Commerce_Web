'use client'
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, AlertCircle, ArrowLeft, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'How do I place an order?',
    answer:
      'Browse the menu on our Food page, select your favorite items, customize your quantities, and proceed to checkout. You will see the complete price breakdown before confirming.',
  },
  {
    question: 'Are there any active promo codes or discounts right now?',
    answer:
      'Any active promotions are listed on our Offers page and automatically highlighted at checkout when eligible. If no offers are active, check back soon for seasonal deals.',
  },
  {
    question: 'How can I contact support if there is an issue with my order?',
    answer:
      'You can reach support directly by calling +91 94202 01240 for immediate help, or by emailing harshadwakade1234@gmail.com with your order details.',
  },
  {
    question: 'Do you include hidden fees or minimum spend traps on deals?',
    answer:
      'No. All pricing, applicable charges, and promotional eligibility rules are displayed clearly up front before you place your order.',
  },
  {
    question: 'Can I request changes or cancel an order after placing it?',
    answer:
      'Please call +91 94202 01240 as soon as possible after placing your order. If preparation has not started yet, we will do our best to accommodate changes.',
  },
];

export default function FaqsPage() {
  return (
    <>
      <main className="min-h-screen bg-red-50">
        {/* Header Section */}
        <section className="border-b border-red-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
              Help & Answers
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently asked questions, answered clearly.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Find quick answers about ordering, offers, pricing, and getting in touch with support.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">

            {/* Top Icon & Intro */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600">
                <HelpCircle className="h-10 w-10" />
              </div>

              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Common Questions
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                Everything you need to know before placing your next order.
              </p>
            </div>

            {/* Pure CSS Accordion List */}
            <div className="mt-6 space-y-4">
              {faqs.map((item, index) => (
                <details
                  key={index}
                  open={index === 0}
                  className="group overflow-hidden rounded-lg border border-red-200 bg-white transition-colors"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-red-50/50 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-semibold text-black sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-red-600 transition-transform duration-200 group-open:rotate-180" />
                  </summary>

                  <div className="border-t border-red-100 bg-red-50/30 px-5 py-4 text-sm leading-7 text-gray-700 sm:px-6 sm:text-base">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Still Need Help Callout */}
            <div className="mt-10 rounded-lg border border-red-200 bg-red-50/50 p-5 text-left text-sm leading-6 text-gray-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <span className="font-semibold text-red-600">Still have a question?</span> Call us directly at{' '}
                  <a
                    href="tel:+919420201240"
                    className="font-medium text-black underline decoration-red-300 underline-offset-2 hover:text-red-600"
                  >
                    +91 94202 01240
                  </a>{' '}
                  or write to{' '}
                  <a
                    href="mailto:harshadwakade1234@gmail.com"
                    className="font-medium text-black underline decoration-red-300 underline-offset-2 hover:text-red-600"
                  >
                    harshadwakade1234@gmail.com
                  </a>.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                
                className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
              >
                <Phone className="h-4 w-4" /> Contact Support
              </a>

            </div>

            <hr className="my-10 border-red-200" />

            {/* Quote Block */}
            <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
              Clear answers and simple ordering—so you can focus on enjoying great food without the guesswork.
            </blockquote>
          </div>
        </article>
      </main>
    </>
  );
}