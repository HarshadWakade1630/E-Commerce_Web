'use client'
export default function HomeContainer() {

  const Scroll = () => {
    const nextSection = document.getElementById('homesec')
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  return (
    <>
      <div className="header-container max-h-[60%] justify-evenly items-center flex flex-col text-white mb-[2%]">
        <div className="header-logo w-[100%] text-[#f3fcfe] cursor-default">
          <h1 className="text-center leading-[135px] text-[clamp(5rem,10vw,10rem)] font-bold font-1">Batataa</h1>
        </div>
        <div className="header-containerp w-full font-bold flex flex-col justify-center items-center">
          <p className="header-containerpall tracking-[3px] text-center text-[150%] leading-[32px] w-full font-2 ]">#Most trustable</p>
          <p className="header-containerpall tracking-[3px] text-center text-[150%] leading-[32px] w-full font-2 ]">The Brand New Industry Of Food</p>
          <p className="header-containerpall tracking-[2px] text-center text-[150%] leading-[32px] w-full font-2 header-containerplast text-[#f0d04b]">Saves time & easy to use</p>
        </div>
        <div className="header-btncontainer mt-[20px] flex justify-center items-center" id="header-btncontainer" role="button">
          <div className="header-sdBtn font-4 p-[4px] font-extrabold font-med w-full text-white flex justify-center items-center cursor-pointer" onClick={Scroll} id="scroll-down">Scroll down<i className="fa fa-angle-double-down" id="scbtnimg"></i>
          </div>
        </div>
      </div>
    </>
  )
}