export default function FAQPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the Sign Up button, enter your details, verify your email if required, and your account will be ready to use.",
    },
    {
      question: "Can I update my profile information?",
      answer:
        "Yes. After signing in, visit your profile page where you can update your personal information whenever needed.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Use the 'Forgot Password' option on the sign in page and follow the instructions sent to your registered email address.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can visit our Support or Contact page and send us a message. We'll respond as soon as possible.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes. We follow modern security practices to help protect your account and personal information.",
    },
    {
      question: "Do I need an account to browse food items?",
      answer:
        "Most of the platform can be explored without signing in, although some features may require an account.",
    },
  ];

  return (
    <main className="min-h-screen bg-red-50">
      <section className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Help Center
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Find quick answers to the questions we receive most often. If you
            can`t find what you`re looking for, feel free to contact our support
            team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-red-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-black sm:text-xl">
                {faq.question}
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-red-200 bg-white p-6 text-center shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Still Need Help?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-700">
            If your question isn`t answered here, our support team is always
            happy to help. Visit the Support or Contact page and send us your
            query.
          </p>

          <button className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700">
            Contact Support
          </button>
        </div>
      </section>

      <section className="border-t border-red-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <blockquote className="text-lg italic leading-8 text-gray-700 sm:text-xl">
            Every question helps us improve. We`re committed to making your
            experience as simple and enjoyable as possible.
          </blockquote>

          <p className="mt-5 font-medium text-red-600">
            Thank you for choosing our platform.
          </p>
        </div>
      </section>
    </main>
  );
}