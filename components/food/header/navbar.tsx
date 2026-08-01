import Link from "next/link";

export default function FoodNavbar() {
  return (
    <>
      <header className="bg-[#ce1f2c] h-[120px] sm:h-[160px] w-full rounded-b-[15px]">
        <div className="header-container h-full w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-[3%] pt-3 pb-0 sm:py-[1%]">
          
          {/* Main Title: Bigger on mobile */}
          <div className="logo mx-0 sm:mx-[8px] my-0 sm:my-[15px] text-white font-4 text-3xl sm:text-4xl tracking-wider font-bold cursor-default self-start">
            Food & Restaurants .BL
          </div>

          {/* Nav Container: Anchored right to the bottom on mobile */}
          <div className="w-full sm:w-auto flex items-end justify-end sm:self-auto p-0 m-0">
            <nav className="flex text-white p-0 m-0">
              <Link className="mr-4 sm:mr-[30px] p-0 m-0 text-[11px] sm:text-sm tracking-tight sm:tracking-normal font-medium" href="/food/restaurants">
                Restaurants
              </Link>
              <Link className="mr-4 sm:mr-[30px] p-0 m-0 text-[11px] sm:text-sm tracking-tight sm:tracking-normal font-medium" href="/food/myorders">
                My Orders
              </Link>
              <Link className="mr-0 sm:mr-[30px] p-0 m-0 text-[11px] sm:text-sm tracking-tight sm:tracking-normal font-medium" href="/account">
                Account
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}
