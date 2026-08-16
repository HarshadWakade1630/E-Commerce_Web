export default function RestaurantsPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-50 px-5 py-12 sm:px-6 lg:px-8">
      <section className="w-full max-w-4xl">
        <div className="rounded-xl border border-red-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Restaurants
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Something Great Is Coming
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            We`re currently working on bringing restaurants to the platform.
            This section is under construction while we build a better
            experience for discovering and exploring restaurants.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-red-200 bg-red-50 px-5 py-6 sm:px-8">
            <h2 className="text-lg font-semibold text-black sm:text-xl">
              Restaurants are coming soon.
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
              We`re putting the finishing touches on this section. Check back
              soon to discover restaurants, explore their menus, and find your
              next favorite place to eat.
            </p>
          </div>

          <div className="mt-10">
            <span className="inline-flex items-center rounded-full border border-red-200 bg-white px-5 py-2 text-sm font-medium text-red-600">
              Under Construction
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}