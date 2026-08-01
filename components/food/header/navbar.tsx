import Link from "next/link";

export default function FoodNavbar() {
  return (
    <>
      <header className="bg-[#ce1f2c] h-[110px] sm:h-[160px] w-full rounded-b-[15px]">
        <div className="header-container h-full w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-[3%] py-2 sm:pt-[3%] sm:py-[1%]">
          
          <div className="logo mx-0 sm:mx-[8px] my-0 sm:my-[15px] text-white font-4 text-2xl xs:text-[1.75rem] sm:text-4xl tracking-wider font-bold cursor-default self-start whitespace-nowrap">
            Food & Restaurants .BL
          </div>

          <div className="h-full flex items-end self-end sm:self-auto pb-1 sm:pb-0">
            <nav className="flex text-white m-0 p-0">
              <Link className="mr-[22px] sm:mr-[30px] p-0 text-[11px] sm:text-sm font-medium" href="/food/restaurants">
                Restaurants
              </Link>
              <Link className="mr-[22px] sm:mr-[30px] p-0 text-[11px] sm:text-sm font-medium" href="/food/myorders">
                My Orders
              </Link>
              <Link className="mr-0 sm:mr-[30px] p-0 text-[11px] sm:text-sm font-medium" href="/account">
                Account
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}
