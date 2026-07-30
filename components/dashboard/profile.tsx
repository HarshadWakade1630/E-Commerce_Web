"use client"

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Logout from "../account/logout";
import Link from "next/link";


export default function Profileform() {

    const { user } = useAuth();

    return (
        <>
            <div>
                <div className="p-5">

                    <div className="w-full bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-5">

                                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                                    <Image src="/img/pp.jpg" width={10} height={10} alt="profile" className="w-full h-full object-cover" />
                                </div>

                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>

                                    <p className="text-gray-500">{user?.email}</p>

                                    <p className="text-gray-400 text-sm">Member since {user?.created_at}</p>
                                </div>

                            </div>

                            <div className="flex justify-between items-center gap-1">
                                <button className="px-5 py-2.5 bg-black text-white **: rounded-xl font-medium hover:bg-gray-800 "  >
                                    Edit Profile
                                </button>
                                <Logout />
                            </div>
                        </div>
                    </div>

                    {/* New Section */}
                    <div className="flex justify-between items-center text-center w-full mt-4 py-2 px-5">

                        {/* 1stdiv */}

                        <div className="h-95 ">
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 p-5 w-90 h-full">

                                <button className="bg-gray-50 h-35 rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition">
                                    <Link href={'/profile/orders'}>
                                        <h3 className="font-semibold text-lg text-gray-900">
                                            My Orders
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Manage orders
                                        </p>
                                    </Link>
                                </button>

                                <button className="bg-gray-50 h-35 rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition">
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        Wishlist
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Saved products
                                    </p>
                                </button>

                                <button className="bg-gray-50 h-35 rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition">
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        Payments
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Cards & UPI
                                    </p>
                                </button>

                                {/* <button className="bg-gray-50 h-35 rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition">
                                <h3 className="font-semibold text-lg text-gray-900">
                                    Coupons
                                </h3>
                                <p className="text-gray-500 text-sm mt-2">
                                    Offers & rewards
                                </p>
                            </button> */}

                            </div>
                        </div>


                        {/* 2stdiv */}

                        <div className="h-95 w-full">
                            <div className="w-full p-5 h-full ">
                                <div className="h-full bg-white shadow-xl border border-gray-100"><h1><strong>jkdsddd</strong></h1></div>
                            </div>
                        </div>

                    </div>

                    <Link href='/profile/settings' className="underline text-blue-600">settings</Link>

                    <div className='mt-10 '>
                        <div>
                            <p className='w-[60%]'>Your account is the center of experience, providing secure access, personalized settings, and control over your information.</p>
                            <p>Securely manage your account details and stay connected with everything the platform has to offer.</p>
                            <Logout />
                        </div>
                    </div>
                    <div>
                    </div>


                </div>
            </div>
        </>
    )
}