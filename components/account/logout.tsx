'use client'

import { useState } from "react";
import axios from "axios";
import api from "@/lib/axios"
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Logout() {
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter();

    async function UserLogout(): Promise<void> {

        try {
            setIsLoading(true)
            await api.post('/auth/logout');
            queryClient.setQueryData(["current-user"], null);

            toast.success("Logged Out")
            setTimeout(() => {
                router.replace('/account');
            }, 1000)
            
            queryClient.clear();
            window.location.reload();

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.data?.message ?? "logout failed");
            }
        }

        finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <button type="submit" disabled={isLoading} onClick={UserLogout} className="bg-red-500 text-white px-5 py-2.5 **: rounded-xl font-medium hover:bg-red-700 " >{isLoading ? "Logging out.." : "Logout"}</button></>
    )
}