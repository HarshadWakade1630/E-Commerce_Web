'use client';

interface FoodFilterProps {
  sections: string[];
}

export default function FoodFilter({ sections }: FoodFilterProps) {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="food-filter mx-auto flex w-full max-w-[1920px] items-center gap-2 overflow-x-auto whitespace-nowrap rounded-t-2xl border-b border-black/5 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-md scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-3.5 sm:px-8 sm:py-3.5 md:px-10">
      <button
        onClick={() => scrollToSection('atf')}
        className="shrink-0 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#222] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111] hover:text-white hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        ATF
      </button>

      {sections.map((section) => (
        <button
          key={section}
          onClick={() =>
            scrollToSection(section.toLowerCase().replace(/\s+/g, '-'))
          }
          className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
        >
          {section}
        </button>
      ))}
    </div>
  );
}
