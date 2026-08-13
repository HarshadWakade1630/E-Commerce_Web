export default function TermsPage() {
  return (
    <main className="min-h-screen bg-red-50">
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Legal
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            These Terms & Conditions explain the rules, responsibilities, and
            guidelines for using our platform. By accessing or using this
            website, you agree to comply with these terms.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12 rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              1. Acceptance of Terms
            </h2>

            <p className="leading-8 text-gray-700">
              By accessing or using this website, you agree to be bound by
              these Terms & Conditions. If you do not agree with any part of
              these terms, please discontinue using the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              2. Use of the Platform
            </h2>

            <p className="leading-8 text-gray-700">
              Our platform is intended to help users browse food items,
              discover menus, and access related services. You agree to use
              the website responsibly and in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              3. User Accounts
            </h2>

            <p className="leading-8 text-gray-700">
              You are responsible for maintaining the confidentiality of your
              account credentials. Any activity performed using your account
              is considered your responsibility.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              4. Acceptable Use
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-700">
              <li>Do not misuse or attempt to disrupt the platform.</li>
              <li>Do not upload harmful or malicious content.</li>
              <li>Respect the rights and privacy of other users.</li>
              <li>Comply with all applicable laws while using the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              5. Intellectual Property
            </h2>

            <p className="leading-8 text-gray-700">
              All content, including text, graphics, branding, design,
              and software used on this platform, is protected by applicable
              intellectual property laws. Unauthorized reproduction or
              distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              6. Limitation of Liability
            </h2>

            <p className="leading-8 text-gray-700">
              While we strive to provide accurate and reliable information,
              we cannot guarantee uninterrupted availability or error-free
              operation. Use of the platform is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              7. Changes to the Terms
            </h2>

            <p className="leading-8 text-gray-700">
              These Terms & Conditions may be updated periodically to reflect
              improvements, legal requirements, or changes to our services.
              Continued use of the platform after updates indicates acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              8. Contact
            </h2>

            <p className="leading-8 text-gray-700">
              If you have questions regarding these Terms & Conditions,
              please contact us through the Contact page available on
              our website.
            </p>
          </section>
        </div>
      </article>

      <section className="border-t border-red-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <blockquote className="text-lg italic leading-8 text-gray-700 sm:text-xl">
            We are committed to providing a safe, transparent, and reliable
            experience for every visitor using our platform.
          </blockquote>

          <p className="mt-5 font-medium text-red-600">
            Thank you for being part of our community.
          </p>
        </div>
      </section>
    </main>
  );
}