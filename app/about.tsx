export default function AboutPage() {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-600">
            About Batataa
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Batataa is a modern food ordering platform built to make discovering,
            ordering, and enjoying delicious meals simple, fast, and reliable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="border border-red-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-4">🍔</div>

            <h2 className="text-2xl font-semibold text-red-600">
              Fresh Food
            </h2>

            <p className="mt-3 text-gray-600">
              Carefully prepared meals made with quality ingredients and served
              with consistency.
            </p>
          </div>

          <div className="border border-red-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-4">⚡</div>

            <h2 className="text-2xl font-semibold text-red-600">
              Fast Service
            </h2>

            <p className="mt-3 text-gray-600">
              Browse, order, and enjoy your favorite food with a smooth and
              responsive experience.
            </p>
          </div>

          <div className="border border-red-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-4">❤️</div>

            <h2 className="text-2xl font-semibold text-red-600">
              Customer First
            </h2>

            <p className="mt-3 text-gray-600">
              Every feature is designed to make ordering food easier and more
              enjoyable.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-24 bg-red-50 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Delicious Food, Delivered Simply.
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            Our mission is to create a seamless food ordering experience with a
            clean interface, reliable performance, and a focus on quality.
          </p>

          <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition">
            Explore Menu
          </button>
        </div>

      </div>
    </section>
  );
}
