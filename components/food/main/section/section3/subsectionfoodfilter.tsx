'use client';

interface Props {
  section: string;
  subsections: string[];
}

export default function SubsectionFilter({
  section,
  subsections,
}: Props) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-3 flex w-full items-center gap-2 overflow-x-auto whitespace-nowrap rounded-t-2xl border-b border-black/5 bg-white/95 px-3 py-3 shadow-sm backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-3 sm:px-6 lg:px-8">
      {subsections.map((subsection) => (
        <button
          key={subsection}
          onClick={() =>
            scrollToSection(
              `${section}-${subsection}`
                .toLowerCase()
                .replace(/\s+/g, "-")
            )
          }
          className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium tracking-wide text-[#222] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111] hover:text-white hover:shadow-md sm:px-5"
        >
          {subsection}
        </button>
      ))}
    </div>
  );
}