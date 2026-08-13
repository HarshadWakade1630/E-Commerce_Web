

export default function AboutPage(){
    return(
        <>
        <main className="min-h-screen bg-red-50">
  <section className="border-b border-red-200 bg-white">
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
        About
      </p>

      <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
        Good food should be simple, fresh, and worth sharing.
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
        We built this platform with one goal—to make discovering delicious food
        easy. No unnecessary distractions, no complicated layouts, just quality
        meals presented in a clean and enjoyable experience.
      </p>
    </div>
  </section>

  <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-14">
      <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
        Our Story
      </h2>

      <div className="space-y-6 text-[15px] leading-8 text-gray-700 sm:text-base sm:leading-9">
        <p>
          Every great meal begins with fresh ingredients, careful preparation,
          and people who genuinely enjoy serving others. Our platform was
          created to celebrate that experience by connecting customers with
          food they love in a clean, modern, and reliable way.
        </p>

        <p>
          Instead of overwhelming visitors with unnecessary information, we
          focus on what matters most—beautiful food, clear pricing, detailed
          descriptions, and an effortless browsing experience.
        </p>

        <p>
          Whether you`re craving burgers, pizzas, refreshing drinks,
          traditional dishes, or quick snacks, our menu is organized into
          categories that are easy to explore.
        </p>
      </div>

      <hr className="my-10 border-red-200" />

      <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
        What We Believe
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
            Fresh Ingredients
          </h3>

          <p className="leading-8 text-gray-700">
            Quality begins with fresh ingredients. Every great meal deserves
            care from preparation to presentation.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
            Honest Pricing
          </h3>

          <p className="leading-8 text-gray-700">
            Good food should provide value. Clear prices and transparent
            information help customers make better choices.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-red-600 sm:text-xl">
            Simple Experience
          </h3>

          <p className="leading-8 text-gray-700">
            Technology should make ordering easier, not harder. Our design
            focuses on speed, simplicity, and accessibility across all devices.
          </p>
        </div>
      </div>

      <hr className="my-10 border-red-200" />

      <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
        Our Mission
      </h2>

      <div className="space-y-6 text-gray-700">
        <p className="leading-8">
          Our mission is to create a food platform where discovering meals
          feels natural and enjoyable. We combine thoughtful design with a
          carefully organized menu so customers spend less time searching and
          more time enjoying great food.
        </p>

        <p className="leading-8">
          Every update we make is focused on improving speed, usability, and
          reliability. As our menu grows, our commitment remains the same:
          provide an experience that is clean, trustworthy, and enjoyable for
          everyone.
        </p>
      </div>

      <blockquote className="mt-12 rounded-lg border-l-4 border-red-500 bg-red-50 p-5 text-base italic leading-8 text-gray-700 sm:p-8 sm:text-lg">
        Food has a unique way of bringing people together. Our goal is to make
        finding your next favorite meal as enjoyable as sharing it.
      </blockquote>
    </div>
  </article>
</main>
        </>
    )
}
