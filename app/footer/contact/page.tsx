export default function ContactPage() {
  return (
    <main className="min-h-screen bg-red-50">
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            We'd Love to Hear From You
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Whether you have a question, feedback, suggestion, or simply want
            to get in touch, we're always happy to hear from you. We'll do our
            best to respond as quickly as possible.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            We're here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Get in Touch
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              If you have questions about your account, our platform, privacy,
              security, or anything else, feel free to reach out. Every message
              is important to us.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-red-600">Email</h3>
                <p className="mt-2 text-gray-700">
                  contact@yourwebsite.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-red-600">Support</h3>
                <p className="mt-2 text-gray-700">
                  support@yourwebsite.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-red-600">Response Time</h3>
                <p className="mt-2 text-gray-700">
                  We typically reply within 24–48 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Send a Message
            </h2>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block font-medium text-black">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-red-200 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-black">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-red-200 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-black">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full rounded-lg border border-red-200 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-black">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-red-200 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-red-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <blockquote className="text-lg italic leading-8 text-gray-700 sm:text-xl">
            Every question, suggestion, and piece of feedback helps us build a
            better experience for everyone.
          </blockquote>

          <p className="mt-5 font-medium text-red-600">
            Thank you for connecting with us.
          </p>
        </div>
      </section>
    </main>
  );
}