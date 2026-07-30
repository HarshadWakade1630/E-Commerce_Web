import Image from "next/image"

export default function BFooter() {
    return (
        <>
            <div className="mt-[24] text-center">
                <p className="text-white text-[14px] font-[600] mb-[12]">Download Our App</p>

                <div className="inline-flex justify-center gap-[10px]">
                    <a href="#" className="inline-flex items-center justify-center w-[120px] h-[38px] rounded-[6px] transition-transform transition-shadow duration-[250ms] ease-in-out hover:translate-y-[-2px] hover:shadow-[0_3px_8px_rgba(0,0,0,.15)] md:w-[110px] md:h-[36px]">
                        <Image className="v w-max-[100%] h-max-[75%] h-auto block pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play" width={100} height={30}></Image>
                    </a>

                    <a href="#" className="inline-flex items-center justify-center w-[120px] h-[38px] rounded-[6px] transition-transform transition-shadow duration-[250ms] ease-in-out hover:translate-y-[-2px] hover:shadow-[0_3px_8px_rgba(0,0,0,.15)] md:w-[110px] md:h-[36px]">
                        <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="Download on the App Store" width={100} height={30}></Image>
                    </a>
                </div>
            </div>
        </>
    )
}