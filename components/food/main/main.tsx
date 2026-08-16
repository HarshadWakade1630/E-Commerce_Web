import { db } from "@/db";
import { foodcards } from "@/db/schema";
import FoodFilter from "./section/section1/foodfilter";
import MenuTab from "./section/section1/menutab";
import SearchSection from "./section/section1/searchsection";
import PopularFoodScroll from "./section/section2/popularfoodscroll";
import FoodClientContainer from "./foodclientcontainer";

export default async function FoodMain() {
  const foods = await db.select().from(foodcards);
  const sections = [...new Set(foods.map((food) => food.section))];

  return (
    <div className="w-full bg-[#fef6f6] px-[10px] md:px-[20px] py-[2%]">
      <section>
        <MenuTab />
        <FoodFilter sections={sections} />
        <SearchSection foods={foods} />
      </section>

      <section>
        <PopularFoodScroll />
      </section>

      <section>
        <FoodClientContainer sections={sections} foods={foods} />
      </section>
    </div>
  );
}