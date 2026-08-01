
import { foodcards } from "@/db/schema";
import FoodFilter from "./section/section1/foodfilter"
import MenuTab from "./section/section1/menutab"
import SearchSection from "./section/section1/searchsection"
import PopularFoodScroll from "./section/section2/popularfoodscroll"
import { db } from "@/db";
import FoodCard from "./section/section3/foodscroll";

export default async function FoodMain() {

    const foods = await db.select().from(foodcards);
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
                <section className="mx-auto my-6 w-full max-w-screen-2xl rounded-xl bg-white px-3 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:my-8 sm:px-6 sm:py-8 lg:px-10 lg:py-10">

                    <h2
                        id="all_title"
                        className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl"
                    >
                        All Foods
                    </h2>

                    <div
                        className="  grid  grid-cols-2  gap-3  sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6 2xl:grid-cols-5"
                    >
                        {foods.map((food) => (
                            <FoodCard key={food.id} {...food} />
                        ))}
                    </div>

                </section>
            </div>

        </>
    )
}
