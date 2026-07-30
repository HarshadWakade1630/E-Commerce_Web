"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import axios from "axios";
import { toast } from "sonner";

export default function ResetPasswordFlow() {

    const router = useRouter();
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    async function sendOtp() {
        try {
            setIsLoading(true);

            await api.post("/auth/forgot-password",
                {
                    email,
                }
            );

            toast.success("OTP sent");

            setOtpSent(true);
            setStep(2);

        } catch (error) {

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? "Failed");
            }

        } finally {
            setIsLoading(false);
        }
    }

    async function verifyOtp() {
        try {

            if (!/^\d{6}$/.test(otp)) {
                toast.error("Enter valid 6 digit OTP");
                return;
            }

            if (otp.length !== 6) {
                toast.error("Enter valid 6 digit OTP");
                return;
            }

            setIsLoading(true);

            await api.post("/auth/verify-reset-otp",
                {
                    email,
                    otp,
                }
            );

            toast.success("OTP verified");

            setStep(3);

        } catch (error) {

            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                    "Verification failed"
                );
            }

            setOtp("");

        } finally {
            setIsLoading(false);
        }
    }


    async function resetPassword() {
        try {

            if (password.length < 8) {
                toast.error("Password must be atleast 8 character");
                return;
            }

            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            setIsLoading(true);

            await api.post("/auth/reset-password",
                {
                    email,
                    password,
                }
            );

            toast.success("Password updated");

            setTimeout(() => {
                router.push("/profile/account");
            }, 1000)


        } catch (error) {

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? "Reset failed");
            }

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4">

            <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">

                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Forgot Password
                    </h1>

                    <p className="mt-2 text-sm text-zinc-400">
                        Recover access to your account
                    </p>
                </div>


                {step === 1 && (
                    <>
                        <input
                            autoFocus
                            type="email"
                            placeholder="Enter Email"
                            className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-white outline-none transition focus:border-zinc-600"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            } />

                        <div className="mt-10 h-12 w-full text-center">
                            <button
                                type="button"
                                className="text-sm text-zinc-400 transition hover:text-white"
                                onClick={() => {
                                    router.back();
                                }}>
                                Back to login
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={sendOtp}
                            disabled={isLoading || otpSent}
                            className="h-12 w-full rounded-xl bg-zinc-700 font-semibold text-zinc-300 active:bg-zinc-500"
                        >
                            {isLoading ? "Sending" : otpSent ? "OTP Sent" : "Send OTP"}
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>

                        <div className="flex gap-2 justify-center">

                            <input
                                autoFocus
                                type="text"
                                maxLength={6}
                                className="h-12 w-full rounded-xl border-zinc-800 bg-zinc-900 text-center text-lg font-semibold text-white outline-none transition focus:border-zinc-500"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(
                                        e.target.value.replace(/\D/g, "")
                                    )
                                } />

                        </div>

                        <button
                            onClick={verifyOtp}
                            className="mt-5 h-12 w-full rounded-xl bg-zinc-700 font-semibold text-zinc-300 active:bg-zinc-500"
                            disabled={isLoading}   >
                            Verify OTP
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <input
                            autoFocus
                            type="password"
                            minLength={8}
                            placeholder="New Password"
                            className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-white  outline-none transition focus:border-zinc-600"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            } />

                        <input
                            type="password"
                            minLength={8}
                            placeholder="Confirm Password"
                            className="mt-3 h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-white  outline-none transition focus:border-zinc-600"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            } />

                        <button
                            className="mt-5 h-12 w-full rounded-xl bg-white font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
                            onClick={resetPassword}
                            disabled={isLoading}    >
                            {isLoading ? "Processing" : "Reset Password"}
                        </button>
                    </>
                )}


            </div>

        </div>

    );
}
