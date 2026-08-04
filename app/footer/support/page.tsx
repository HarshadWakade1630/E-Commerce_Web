export default function SupportPage() {
  return (
    <main className="min-h-screen bg-red-50">
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Support
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            How Can We Help?
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            We're committed to providing the best possible experience. Whether
            you have a question, need technical assistance, or would like to
            report an issue, our support team is here to help.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Fast, reliable, and friendly support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Support Information
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              If you're experiencing any issues or have questions regarding
              your account, orders, payments, or the platform, we're happy to
              assist you.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-red-600">
                  General Support
                </h3>
                <p className="mt-2 text-gray-700">
                  support@yourwebsite.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-red-600">
                  Technical Support
                </h3>
                <p className="mt-2 text-gray-700">
                  tech@yourwebsite.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-red-600">
                  Support Hours
                </h3>
                <p className="mt-2 text-gray-700">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-red-600">
                  Average Response Time
                </h3>
                <p className="mt-2 text-gray-700">
                  Within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Request Support
            </h2>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block font-medium text-black">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
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
                  Issue Category
                </label>

                <select className="w-full rounded-lg border border-red-200 px-4 py-3 outline-none transition focus:border-red-500">
                  <option>Account</option>
                  <option>Orders</option>
                  <option>Payments</option>
                  <option>Technical Issue</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-black">
                  Describe Your Issue
                </label>

                <textarea
                  rows={6}
                  placeholder="Explain your issue in detail..."
                  className="w-full rounded-lg border border-red-200 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="text-xl font-bold text-black sm:text-2xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-black">
                How long does it take to receive a reply?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Most support requests receive a response within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">
                Can I update my account information?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. You can manage your account information through your
                profile settings after signing in.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">
                Where can I report a bug?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                You can use the support form above or contact our technical
                support email with detailed information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-red-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <blockquote className="text-lg italic leading-8 text-gray-700 sm:text-xl">
            Great support is built on listening, understanding, and solving
            problems together.
          </blockquote>

          <p className="mt-5 font-medium text-red-600">
            We're always here to help.
          </p>
        </div>
      </section>
    </main>
  );
}