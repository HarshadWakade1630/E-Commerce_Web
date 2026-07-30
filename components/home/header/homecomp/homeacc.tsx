'use client'

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function HomeAcc() {

    const router = useRouter();
    return (
        <>
            <div className="z-10 w-[100%] p-[10px] h-max">
                <Link href="/account" onClick={() => {
                    router.refresh();
                }} className="inline-block text-center">
                    <Image src="/img/user.png" height={0} width={0} alt="userpng" className="cursor-pointer text-white h-4 w-auto sm:h-5 md:h-6 lg:h-7" />
                </Link>
            </div>
        </>
    )
}