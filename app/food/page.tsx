import FoodFooter from "@/components/food/footer/footer";
import FoodNavbar from "@/components/food/header/navbar";
import FoodMain from "@/components/food/main/main";
import StickyNavbarController from "@/components/food/header/stickynavbarcontroller";
import BackToTop from "@/components/common/BackToTop";

export default function Food() {
   return (
    <div className="min-h-screen w-full bg-[#f7f7f7] relative overflow-x-hidden">
      <StickyNavbarController/>
      <FoodNavbar />
      <FoodMain />
      <FoodFooter />
      <BackToTop/>
    </div>
  );
}