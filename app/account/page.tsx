'use client'

import Login from "@/components/account/login"
import Register from "@/components/account/register";
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import Profile from "../profile/page";


export default function Account() {

    const [activeForm, setActiveForm] = useState("login");
    const {user} = useAuth();
    const router = useRouter();

    // useEffect(() => {
    //     async function checkUser() {
    //         try {
    //             await axios.get("/app/api/auth/me")
    //             router.push("/account")
    //         } catch { }
    //     }
    //     checkUser()
    // }, [router])
    // console.log(user);
    

    return (
        <>

            {user ? (<Profile />) : 
                <div>
                    <Image src="https://res.cloudinary.com/dnqbr6fyr/image/upload/v1785433750/close_ae5nji.png" height={5} width={5} alt="closepng" className="invert h-6 w-6 cursor-pointer" onClick={() => {
                        router.back();
                    }} />
                    <div className='h-screen w-screen flex justify-between items-center'>
                        {activeForm === "login" && (<Login setActiveForm={setActiveForm} />)}
                        {activeForm === "register" && (<Register setActiveForm={setActiveForm} />)}
                    </div>
                </div>
            }

        </>
    )
}
