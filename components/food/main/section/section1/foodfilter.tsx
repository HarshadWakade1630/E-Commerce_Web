export default function FoodFilter() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="food-filter mx-auto flex w-full max-w-[1920px] items-center gap-2 overflow-x-auto whitespace-nowrap rounded-t-2xl border-b border-black/5 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-md scrollbar-none sm:gap-3.5 sm:px-8 sm:py-3.5 md:px-10">
      <button
        onClick={() => scrollToSection('all')}
        className="shrink-0 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#222] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111] hover:text-white hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        ALL
      </button>

      <button
        onClick={() => scrollToSection('fastfood_title')}
        className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Fast Food
      </button>

      <button
        onClick={() => scrollToSection('indianmaincourse_title')}
        className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Indian Main Course
      </button>

      <button
        onClick={() => scrollToSection('chinese-items')}
        className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Chinese Items
      </button>

      <button
        onClick={() => scrollToSection('snacks')}
        className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Snacks
      </button>

      <button
        onClick={() => scrollToSection('sweets')}
        className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Sweets
      </button>

      <button
        onClick={() => scrollToSection('drinks')}
        className="shrink-0 rounded-full border border-[#111] bg-[#111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Drinks
      </button>
    </div>
  );
}
