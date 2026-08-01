'use client'

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HomeAcc() {
    const router = useRouter();

    return (
        <div className="z-10 w-full p-2 sm:p-3 md:p-4 h-max">
            <Link 
                href="/account" 
                onClick={() => {
                    router.refresh();
                }} 
                className="inline-flex items-center justify-center p-1 sm:p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
                <Image 
                    src="https://res.cloudinary.com/dnqbr6fyr/image/upload/v1785433742/user_vtawza.png" 
                    width={32} 
                    height={32} 
                    alt="User Account" 
                    className="cursor-pointer object-contain h-4 sm:h-5 md:h-6 lg:h-7 w-auto" 
                    priority
                />
            </Link>
        </div>
    )
}
