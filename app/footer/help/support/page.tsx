import React from 'react';
import { Headphones, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';

export default function SupportPage() {
  return (
    <>
      <main className="min-h-screen bg-red-50">
        {/* Header Section */}
        <section className="border-b border-red-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
              Customer Support
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Need a hand? We’re here to help.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Reach out directly by phone or email for order assistance, menu questions,
              or general feedback.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">

            {/* Support Hero Container */}
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600">
                <Headphones className="h-10 w-10" />
              </div>

              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Direct Support Channels
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                Connect with support using the mobile number or email address below for prompt assistance.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919420201240"
                  className="flex items-start gap-3.5 rounded-lg border border-red-200 bg-red-50/50 p-5 text-left transition-colors hover:border-red-300 hover:bg-red-50"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                      Mobile Number
                    </p>
                    <p className="mt-1 text-base font-semibold text-black">
                      +91 94202 01240
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:harshadwakade1234@gmail.com"
                  className="flex items-start gap-3.5 rounded-lg border border-red-200 bg-red-50/50 p-5 text-left transition-colors hover:border-red-300 hover:bg-red-50"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                      Email Address
                    </p>
                    <p className="mt-1 break-all text-base font-semibold text-black">
                      harshadwakade1234@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Informational Callout */}
              <div className="mt-6 w-full max-w-2xl rounded-lg border border-red-200 bg-red-50/50 p-5 text-left text-sm leading-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <span className="font-semibold text-red-600">Quick Tip:</span> For urgent questions, calling <span className="font-medium text-black">9420201240</span> is fastest; for detailed inquiries or attachments, email <span className="font-medium text-black">harshadwakade1234@gmail.com</span>.
                  </div>
                </div>
              </div>

            </div>

            <hr className="my-10 border-red-200" />

            {/* How Support Works */}
            <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
              How Support Works Here
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                  Direct Response
                </h3>
                <p className="leading-8 text-gray-700">
                  Your messages go straight to the team without automated loops or ticket runarounds, keeping communication clear and practical.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                  Helpful Resolution
                </h3>
                <p className="leading-8 text-gray-700">
                  Share your order details or question clearly so we can resolve issues quickly and keep your experience smooth.
                </p>
              </div>
            </div>

            {/* Quote Block matching Offers & About Page */}
            <blockquote className="mt-12 rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
              Great food and dependable support go hand in hand—reach out anytime you need assistance.
            </blockquote>
          </div>
        </article>
      </main>
    </>
  );
}