import React from 'react';
import { ShieldCheck, AlertCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-red-50">
        {/* Header Section */}
        <section className="border-b border-red-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
              Privacy & Data Care
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Your privacy matters, kept clear and simple.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Learn what information is handled when you browse the menu, reach out for support, or contact us directly.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">

            {/* Top Badge & Summary */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600">
                <ShieldCheck className="h-10 w-10" />
              </div>

              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Privacy Policy
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                We collect only what is needed to respond to your inquiries and keep the platform running smoothly.
              </p>

              {/* Contact / Privacy Callout */}
              <div className="mt-8 w-full max-w-2xl rounded-lg border border-red-200 bg-red-50/50 p-5 text-left text-sm leading-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <span className="font-semibold text-red-600">Privacy Questions:</span> Reach out directly at{' '}
                    <a
                      href="mailto:harshadwakade1234@gmail.com"
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
            </div>

            <hr className="my-10 border-red-200" />


            {/* Quote Block */}
            <blockquote className="mt-12 rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
              Respecting your privacy is part of building trust—clear policies, straight answers, and zero unnecessary clutter.
            </blockquote>
          </div>
        </article>
      </main>
    </>
  );
}