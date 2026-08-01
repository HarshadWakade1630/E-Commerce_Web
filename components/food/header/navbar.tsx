import Link from "next/link";

export default function FoodNavbar() {
  return (
    <>
      <header className="bg-[#ce1f2c] h-[115px] sm:h-[160px] w-full rounded-b-[15px]">
        <div className="header-container h-full w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-[3%] py-3 sm:py-[1%]">
          
          {/* Main Title: Larger on mobile */}
          <div className="logo mx-0 sm:mx-[8px] my-0 sm:my-[15px] text-white font-4 text-2xl xs:text-3xl sm:text-4xl tracking-wider font-bold cursor-default self-start">
            Food & Restaurants .BL
          </div>

          <div className="h-full flex items-end self-end sm:self-auto pb-1 sm:pb-0">
            {/* Nav Links: Slightly smaller on mobile */}
            <nav className="flex text-white">
              <Link className="mr-3 sm:mr-[30px] pb-[5px] text-[11px] sm:text-sm tracking-tight sm:tracking-normal font-medium" href="/food/restaurants">
                Restaurants
              </Link>
              <Link className="mr-3 sm:mr-[30px] pb-[5px] text-[11px] sm:text-sm tracking-tight sm:tracking-normal font-medium" href="/food/myorders">
                My Orders
              </Link>
              <Link className="mr-0 sm:mr-[30px] pb-[5px] text-[11px] sm:text-sm tracking-tight sm:tracking-normal font-medium" href="/account">
                Account
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}
