"use client";

import { useState } from "react";
import Image from "next/image"
import axios from "axios";
import api from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


type LoginProps = { setActiveForm: React.Dispatch<React.SetStateAction<string>>; };

export default function Login({ setActiveForm, }: LoginProps) {

    const router = useRouter();

    const [email, setEmail] = useState<string>('')
    const [password, setPass] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function findUser(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        try {
            setIsLoading(true)
            await api.post('/auth/login', {
                email,
                password,
            });

            toast.success("Login Successful");
            setTimeout(() => {
                router.replace('/profile');
            }, 1000);
            
            window.location.reload();

        } catch (error) {
            if (axios.isAxiosError((error))) {
                if (error.response?.data?.pending) {
                    router.push(`/OTP_pages/login-verify-otp?email=${encodeURIComponent(email)}`)
                    return;
                }
                toast.error(error.response?.data?.message ?? 'Login Failed')
            }

        }
        finally {
            setIsLoading(false)
        }
        setEmail('')
        setPass('')
    }

    return (
        //     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-transparent px-4">

        <div className="bg-transparent px-4 w-full h-full flex justify-center items-center">

            <div className="w-[350px] rounded-xl border border-gray-100 bg-white/80 pt-2 pb-4 px-4 shadow-2xl backdrop-blur-xl">

                <div className="mt-2 ml-1 flex-col justify-between items-center">
                    {/* <button onClick={() => setActiveForm("")} className="pl-0 text-sm text-black"><Image src="/img/close.png" height={0} width={0} alt="userpng" className="cursor-pointer invert h-5 w-auto" /></button> */}
                    <h1 className="text-black text-center text-3xl cursor-default font-bold mb-5">Login Form</h1>
                </div>

                <form onSubmit={findUser} method="post" className="w-full bg-white/80 backdrop-blur-xl rounded-xl text-center px-1 pt-3">

                    <div className="mt-4 flex flex-col gap-3">

                        <input
                            autoFocus
                            type="email"
                            placeholder="Enter Email Address"
                            className="h-10 border text-black border-gray-300 bg-gray-50 px-4 text-sm outline-none"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} value={email} />

                        <input
                            type="password"
                            minLength={8}
                            placeholder="Enter Password"
                            className="h-10 border text-black border-gray-300 bg-gray-50 px-4 text-sm outline-none"
                            onChange={(e) => {
                                setPass(e.target.value)
                            }} value={password} />

                    </div>

                    <div className="mt-5 text-center">
                        <p className="text-sm mt-10 mb-2">
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                router.push("/OTP_pages/forgotpass-verify-otp")
                            }} className="underline text-zinc-500 text-sm cursor-pointer hover:text-zinc-800">Forgot Password?</button>
                        </p>
                        <p className="text-sm text-black">
                            Register if not have an account? <button onClick={() => setActiveForm("register")} className="ml-1 mt-1 text-sm underline cursor-pointer text-zinc-500 hover:text-zinc-800">Register</button>
                        </p>
                    </div>

                    <button type="submit" disabled={isLoading} className="mt-1 mb-1 h-10 w-[45%] rounded-xl bg-zinc-800 font-medium text-zinc-300 transition-all hover:bg-black">{isLoading ? "Logging in.." : "Login"}</button>

                </form>
            </div>
        </div>
    );
}