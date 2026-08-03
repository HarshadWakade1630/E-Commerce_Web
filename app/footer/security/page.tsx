export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-red-50">
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Security
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Security
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Protecting your account and personal information is one of our
            highest priorities. We continuously work to maintain a secure,
            reliable, and trustworthy platform for every user.
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
              Account Security
            </h2>

            <p className="leading-8 text-gray-700">
              We encourage every user to use a strong password and keep their
              login credentials confidential. Never share your account
              information with anyone, and always sign out when using a shared
              device.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              Secure Authentication
            </h2>

            <p className="leading-8 text-gray-700">
              Authentication mechanisms are designed to help protect user
              accounts and reduce unauthorized access. Login sessions are
              managed securely to provide a safe browsing experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              Data Protection
            </h2>

            <p className="leading-8 text-gray-700">
              Personal information is handled responsibly and stored using
              modern security practices. We continuously monitor and improve our
              systems to help safeguard user data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              Safe Browsing
            </h2>

            <p className="leading-8 text-gray-700">
              Always ensure you are visiting the official website before
              entering your login credentials. Avoid using public or unsecured
              networks when accessing sensitive account information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              Reporting Security Issues
            </h2>

            <p className="leading-8 text-gray-700">
              If you discover a security vulnerability or believe your account
              has been compromised, please contact us immediately through our
              Contact page so we can investigate and respond appropriately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl">
              Continuous Improvements
            </h2>

            <p className="leading-8 text-gray-700">
              Security is an ongoing process. We regularly review and improve
              our platform, update technologies, and adopt best practices to
              provide a secure experience for all users.
            </p>
          </section>

        </div>
      </article>

      <section className="border-t border-red-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <blockquote className="text-lg italic leading-8 text-gray-700 sm:text-xl">
            Security is not just a feature—it's a commitment to protecting every
            user who trusts our platform.
          </blockquote>

          <p className="mt-5 font-medium text-red-600">
            Thank you for helping us keep our community safe.
          </p>
        </div>
      </section>
    </main>
  );
}