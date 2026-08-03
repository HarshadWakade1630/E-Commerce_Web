
import { foodcards } from "@/db/schema";
import FoodFilter from "./section/section1/foodfilter"
import MenuTab from "./section/section1/menutab"
import SearchSection from "./section/section1/searchsection"
import PopularFoodScroll from "./section/section2/popularfoodscroll"
import { db } from "@/db";
import FoodCard from "./section/section3/foodscroll";

export default async function FoodMain() {

    const foods = await db.select().from(foodcards);
    const sections = [...new Set(foods.map((food) => food.section))];
    return (
        <>
            <div className="w-fullbg-[#fef6f6] px-[10px] md:px-[20px] py-[2%]">
                <section>
                    <MenuTab />
                    <FoodFilter />
                    <SearchSection />
                </section>
                <section>
                    <PopularFoodScroll />
                </section>
{sections.map((section) => (
  <section key={section} className="mx-auto my-6 w-full max-w-screen-2xl rounded-xl bg-white px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:my-8 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
    <div className="w-full pb-5 pt-3" id={section.toLowerCase().replace(/\s+/g, '-')}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-1.5">
        <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#111]">
          {section}
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {foods
        .filter((food) => food.section === section)
        .map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
    </div>
  </section>
))}

            </div>

        </>
    )
}
