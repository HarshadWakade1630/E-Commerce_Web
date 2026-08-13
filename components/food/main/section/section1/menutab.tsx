'use client'
import UserLocation from "@/components/food/location/userlocation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MenuTab() {
  const router = useRouter();
  return (
    <section className="menutab h-max w-full">
      <nav className="flex w-full flex-wrap items-center gap-x-2 gap-y-1">

        <button
          className="text-[10px] tracking-[1px] text-[#4b4b4b] transition-colors hover:text-[#961313]"
          onClick={()=>{router.back()}}
        >
          /Home
        </button>

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