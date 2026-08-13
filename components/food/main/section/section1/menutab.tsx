import UserLocation from "@/components/food/location/userlocation";
import Link from "next/link";

export default function MenuTab() {
  return (
    <section className="menutab h-max w-full">
      <nav className="flex w-full flex-wrap items-center gap-x-2 gap-y-1">

        <Link
          className="text-[10px] tracking-[1px] text-[#4b4b4b] transition-colors hover:text-[#961313]"
          href="/"
          replace
        >
          /Home
        </Link>

        <Link
          className="text-[10px] tracking-[1px] text-[#4b4b4b] transition-colors hover:text-[#961313]"
          href="/food/availableoffers"
        >
          /Food_AvailableOffers
        </Link>

        <span className="text-[10px] tracking-[1px] text-[#4b4b4b]">
          /<UserLocation />
        </span>

      </nav>
    </section>
  );
}