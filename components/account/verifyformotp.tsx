"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import api from '@/lib/axios'

type Props = { email: string; };

export default function VerifyOtpForm({ email, }: Props) {

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [seconds, setSeconds] = useState(60);

  const router = useRouter();


  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout((timer))
  }, [seconds])


  async function verifyOtp() {

    if (!otp || otp.trim().length !== 6) {
      toast.error("Please enter all 6 digits");
      return;
    }
    try {
      setLoading(true);

      const response = await axios.post("/api/auth/verify-otp",
        {
          email,
          otp,
        }
      );

      toast.success(response.data.message);
      setTimeout(() => {
        router.replace('/account');
      }, 1000)

    }

    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? "Verification failed");
        setOtp("")
      }
    }
    finally {
      setLoading(false);
    }
  }

  async function resendOtp() {
    const toastId = toast.loading("Sending OTP..")

    try {
      setIsResending(true);
      await api.post("/auth/resend-otp", { email })

      setSeconds(60);
      toast.success("OTP Sent Successfully", { id: toastId, })
    }
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error("Failed to resend OTP", { id: toastId, })
      }
    }
    finally {
      setIsResending(false)
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-black px-4">
        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            autoFocus
            maxLength={6}
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={(e) =>
              setOtp(e.target.value.replace(/[^0-9]/g, ""))
            }
            className="h-12 mb-5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-white outline-none transition focus:border-zinc-600"
          />

          <p className="mt-2 mb-2 text-sm text-zinc-400">Didn`t recieve the code!? <button type="button" disabled={isResending || seconds > 0} onClick={resendOtp} className="text-blue-500 disabled:text-gray-400 cursor-pointer">{isResending ? "Sending" : seconds > 0 ? `Resend OTP(${seconds})` : "Resend OTP"} </button></p>

          <button
            onClick={verifyOtp}
            disabled={loading}
            className="h-12 w-full rounded-xl bg-zinc-700 font-semibold text-zinc-300 active:bg-zinc-500">
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

        </div>
      </div>
    </>
  );
}
