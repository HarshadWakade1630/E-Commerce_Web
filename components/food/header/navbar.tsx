import Link from "next/link";

export default function FoodNavbar() {
  return (
    <>
      <header className="bg-[#ce1f2c] h-[120px] sm:h-[160px] w-full rounded-b-[15px]">
        <div className="header-container h-full w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-[3%] pt-[3%] py-[1%]">

          {/* Logo */}
          <div className="logo mx-0 sm:mx-[8px] my-1 sm:my-[15px] text-white font-4 text-3xl xs:text-[1.75rem] sm:text-4xl tracking-wider font-bold cursor-default self-start flex flex-row items-baseline whitespace-nowrap gap-2">
            <span>Batataa</span>
            <p className="inline-block text-xl sm:text-2xl tracking-wider font-normal">
              Food Limited
            </p>
          </div>

          {/* Links */}
          <div className="h-full flex items-end self-end sm:self-auto pb-[0.5] sm:pb-0">
            <nav className="flex text-white">
              {/* Added subtle pb-1.5 for mobile mode to push links towards the bottom */}
              <Link className="mr-4 sm:mr-[30px] pb-[0.5] sm:pb-[5px] text-xs sm:text-sm" href="/food/restaurants">
                Restaurants
              </Link>
              <Link className="mr-4 sm:mr-[30px] pb-[0.5] sm:pb-[5px] text-xs sm:text-sm" href="/food/myorders">
                My Orders
              </Link>
              <Link className="mr-0 sm:mr-[30px] pb-[0.5] sm:pb-[5px] text-xs sm:text-sm" href="/account">
                Account
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}