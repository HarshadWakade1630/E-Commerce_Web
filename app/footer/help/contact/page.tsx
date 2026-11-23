"use client";

import { useRouter } from "next/navigation";
import { MessageSquare, Phone, Mail, Clock, ArrowLeft, HelpCircle } from 'lucide-react';

export default function ContactPage() {

const router = useRouter();
  return (
    <>
      <main className="min-h-screen bg-red-50">
        {/* Header Section */}
        <section className="border-b border-red-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
              Contact Us
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Let’s talk food, orders, or ideas.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Have a question, feedback, or a collaboration inquiry? Reach out directly—no forms, bots, or waiting queues.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">

            {/* Contact Hero Container */}
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600">
                <MessageSquare className="h-10 w-10" />
              </div>

              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Get in Touch Directly
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                Whether it’s about your meal, feedback on the website, or a business inquiry, you can connect straight with Harsh Wakade.
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
                      Call / Phone
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
                      Email
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
                    <span className="font-semibold text-red-600">Best Way to Reach Out:</span> Call{' '}
                    <span className="font-medium text-black">+91 94202 01240</span> for quick questions, or email{' '}
                    <span className="font-medium text-black">harshadwakade1234@gmail.com</span> for detailed messages and feedback.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                   onClick={() => router.push("/footer/help/faqs")}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  <HelpCircle className="h-4 w-4" /> Browse FAQs
                </a>

              </div>
            </div>

            <hr className="my-10 border-red-200" />

            {/* What You Can Reach Out About */}
            <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
              What You Can Reach Out For
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                  Order & Menu Inquiries
                </h3>
                <p className="leading-8 text-gray-700">
                  Need help with an existing order, item availability, or special requests? Contact us directly and we will help sort it out promptly.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
                  Feedback & Collaborations
                </h3>
                <p className="leading-8 text-gray-700">
                  Have suggestions to improve the menu or platform experience, or want to discuss a partnership? Send an email anytime—every message is read personally.
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-12 rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
              Good conversations start with a simple hello. Reach out anytime—we’d love to hear from you.
            </blockquote>
          </div>
        </article>
      </main>
    </>
  );
}