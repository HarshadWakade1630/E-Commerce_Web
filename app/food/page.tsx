'use client'

import FoodFooter from "@/components/food/footer/footer";
import FoodNavbar from "@/components/food/header/navbar";
import FoodMain from "@/components/food/main/main";
import { useEffect, useState } from "react";

export default function Food() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <>
            <div className="min-h-screen w-full bg-[#f7f7f7] relative overflow-x-hidden">
                <FoodNavbar />
                <FoodMain />
                <FoodFooter />
                {showBtn && (
                    <button 
                        id="backToTop" 
                        onClick={scrollToTop} 
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_4px_10px_rgba(0,0,0,0.12)] cursor-pointer transition-all duration-300 hover:-translate-y-[2px] active:scale-95"
                    >
                        ↑
                    </button>
                )}
            </div>
        </>
    )
}