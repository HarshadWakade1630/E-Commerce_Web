import BFooter from "@/components/footer/bottomfooter";
import TFooter from "@/components/footer/topfooter";

export default function HomeFooter() {
    return (
        <>
            <footer className="bg-[#1c1c1c] px-[6%] pt-[50px] pb-[20px] mt-[80px]">
                <TFooter />
                <BFooter />
            </footer>
        </>
    )
}