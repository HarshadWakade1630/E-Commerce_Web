export default function SearchSection() {
  return (
    <section className="search-section w-full bg-white p-5 sm:p-7 md:p-[40px] rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[1920px] mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold mb-4 sm:mb-5 text-gray-900 tracking-tight">
        Discover the best food near you
      </h1>

      <div className="search-box flex items-center w-full lg:w-[80%] gap-2 sm:gap-3">
        <input 
          type="text" 
          placeholder="Search for restaurant or dish" 
          autoFocus 
          className="min-w-0 flex-1 h-12 sm:h-14 px-4 rounded-xl border border-[#ddd] outline-none text-sm sm:text-base transition-colors text-gray-800 placeholder:text-gray-400"
        />
        <button className="h-12 sm:h-14 px-5 sm:px-8 rounded-xl bg-[#ce1f2c] text-white text-sm sm:text-base font-semibold hover:bg-[#cc2f3c] transition-colors shrink-0 flex items-center justify-center">
          Search
        </button>
      </div>
    </section>
  );
}