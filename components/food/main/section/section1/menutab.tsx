import Link from "next/link";

export default function MenuTab() {
  return (
    <section className="menutab h-max w-full">
      <nav className="menulink flex flex-wrap items-center gap-x-2 gap-y-1 w-full">
        <Link 
          className="text-[#4b4b4b] tracking-[1px] text-[10px] hover:text-[#961313] transition-colors" 
          href="/" 
          replace
        >
          /Home
        </Link>
        <Link 
          className="text-[#4b4b4b] tracking-[1px] text-[10px] hover:text-[#961313] transition-colors" 
          href="/food/availableoffers"
        >
          /Food_AvailableOffers
        </Link>
        <Link 
          className="text-[#4b4b4b] tracking-[1px] text-[10px] hover:text-[#961313] transition-colors" 
          href="/food/location"
        >
          /Location
        </Link>
      </nav>
    </section>
  );
}
