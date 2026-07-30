
import FoodFilter from "./section/section1/foodfilter"
import MenuTab from "./section/section1/menutab"
import SearchSection from "./section/section1/searchsection"
import PopularFoodScroll from "./section/section2/popularfoodscroll"

export default function FoodMain() {
    return (
        <>
            <div className="w-full bg-[#fef6f6] px-[20px] py-[2%]">
                <section>
                    <MenuTab />
                    <FoodFilter />
                    <SearchSection />
                </section>
                <section>
                    <PopularFoodScroll />
                </section>
            </div>

        </>
    )
}