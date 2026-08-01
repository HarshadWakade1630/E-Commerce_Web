import Link from "next/link";

export default function FoodNavbar() {
  return (
    <>
      <header className="bg-[#ce1f2c] h-auto sm:h-[160px] w-full rounded-b-[15px]">
        <div className="header-container h-full w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-[4%] sm:px-[3%] pt-3 sm:pt-[3%] pb-2 sm:py-[1%]">
          
          <div className="logo mx-0 sm:mx-[8px] my-1 sm:my-[15px] text-white font-4 text-3xl sm:text-4xl tracking-[2px] font-bold cursor-default self-start">
            Food & Restaurants .BL
          </div>

          <div className="w-full sm:w-auto flex items-end justify-start sm:justify-end self-start sm:self-auto pt-2 pb-1 sm:pb-0">
            <nav className="flex text-white">
              <Link className="mr-[22px] sm:mr-[30px] pb-[5px] text-xs sm:text-sm font-medium" href="/food/restaurants">
                Restaurants
              </Link>
              <Link className="mr-[22px] sm:mr-[30px] pb-[5px] text-xs sm:text-sm font-medium" href="/food/myorders">
                My Orders
              </Link>
              <Link className="mr-0 sm:mr-[30px] pb-[5px] text-xs sm:text-sm font-medium" href="/account">
                Account
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}
