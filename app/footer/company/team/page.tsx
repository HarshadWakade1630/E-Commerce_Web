export default function TeamPage() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Drizzle ORM",
    "JWT Authentication",
    "REST APIs",
    "Responsive Design",
    "Git & GitHub",
  ];

  return (
    <main className="min-h-screen bg-red-50 text-gray-900 antialiased">
      {/* Hero */}
      <section className="border-b border-red-200 bg-white">
  <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
      Meet the Creator
    </p>

    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
      Built with passion, designed by one developer.
    </h1>

    <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8">
      Behind every feature, every animation, and every line of code is a
      passion for creating a simple, modern, and enjoyable food ordering
      experience. This project represents countless hours of learning,
      designing, and building from the ground up.
    </p>
  </div>
</section>

      {/* Creator Card */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
            {/* Image */}
            <div className="relative aspect-square w-full border-b border-red-200 md:aspect-auto md:border-b-0 md:border-r">
              <img
                src="https://res.cloudinary.com/dnqbr6fyr/image/upload/v1785789748/oggy_oa81jn.jpg"
                alt="Harsh Wakade"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Profile */}
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 sm:text-sm">
                Computer Science Student
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Harsh Wakade
              </h2>

              <p className="mt-1 text-base font-medium text-gray-500 sm:text-lg">
                Aspiring Full Stack Developer
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-8">
                <p>
                  I’m a Computer Science student building expertise in modern
                  web development. I work across frontend, backend, and database
                  technologies to create complete, reliable applications.
                </p>

                <p>
                  This project demonstrates my ability to design responsive
                  interfaces, develop server-side features, and connect them
                  with structured data.
                </p>

                <p>
                  I approach each project with discipline, curiosity, and a
                  commitment to clean, maintainable code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Technology Stack
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-7">
            A modern stack for responsive interfaces, robust application logic,
            secure authentication, and reliable data management.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-red-200/80 bg-red-50/50 px-4 py-3 text-center text-sm font-semibold text-gray-800 transition-colors hover:border-red-300 hover:bg-red-100/50"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            My Vision
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-8">
            <p>
              My goal is to become a versatile developer with a strong skill set
              across multiple technologies and the ability to build dependable,
              high-quality software.
            </p>

            <p>
              I’m committed to deepening my technical knowledge, taking on
              challenging projects, and writing clean, maintainable code.
            </p>

            <p>
              I aim to grow into a developer who can design, build, and deliver
              complete solutions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-red-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <blockquote className="text-lg italic leading-relaxed text-gray-700 sm:text-xl md:text-2xl sm:leading-9">
            “Enhancing the skills and building projects”
          </blockquote>

          <p className="mt-4 text-sm font-semibold text-red-600 sm:text-base">
            — Harsh Wakade
          </p>
        </div>
      </section>
    </main>
  );
}