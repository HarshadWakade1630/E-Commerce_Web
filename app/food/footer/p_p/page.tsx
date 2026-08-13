export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-red-50">
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Legal
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Your privacy matters to us. This Privacy Policy explains how we
            collect, use, and protect the information you provide while using
            our platform.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12">

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              1. Introduction
            </h2>

            <p className="leading-8 text-gray-700">
              We value your trust and are committed to protecting your personal
              information. This Privacy Policy describes how information is
              collected, stored, and used whenever you access or interact with
              our website and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              2. Information We Collect
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-700">
              <li>Name and profile information.</li>
              <li>Email address used for authentication.</li>
              <li>Account login information.</li>
              <li>Food preferences and order history.</li>
              <li>Technical information such as browser type and device.</li>
              <li>Cookies required for authentication and security.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              3. How We Use Your Information
            </h2>

            <p className="leading-8 text-gray-700">
              Information is collected solely to improve your experience,
              process orders, secure your account, personalize content, and
              maintain the reliability of our services. We continuously work to
              improve our platform using anonymous usage insights.
            </p>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              4. Data Security
            </h2>

            <p className="leading-8 text-gray-700">
              We use modern security practices to help protect user data from
              unauthorized access, misuse, or disclosure. Authentication,
              encrypted communication, and secure database practices are used to
              safeguard information whenever possible.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              5. Cookies
            </h2>

            <p className="leading-8 text-gray-700">
              Cookies help us remember your preferences, maintain secure login
              sessions, and improve website performance. You may disable cookies
              through your browser settings, although some features may not work
              correctly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              6. Third-Party Services
            </h2>

            <p className="leading-8 text-gray-700">
              Our platform may integrate trusted third-party services for
              authentication, hosting, analytics, or media delivery. These
              providers have their own privacy policies governing how data is
              handled.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              7. Your Rights
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-700">
              <li>Access your account information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Delete your account where applicable.</li>
              <li>Manage communication preferences.</li>
              <li>Request additional information regarding your data.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-black">
              8. Changes to This Policy
            </h2>

            <p className="leading-8 text-gray-700">
              This Privacy Policy may be updated periodically to reflect changes
              in our services or legal requirements. Any updates will be posted
              on this page with the revised date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-black">
              9. Contact
            </h2>

            <p className="leading-8 text-gray-700">
              If you have questions regarding this Privacy Policy or how your
              information is handled, please contact us through the contact page
              available on our website.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
