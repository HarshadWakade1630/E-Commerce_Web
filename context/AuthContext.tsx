"use client";

import { createContext, useContext, } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "@/lib/axios";

interface User {
  id: string;
  name: string;
  email: string;
  created_at:string;
}

interface AuthContextType {
  user: User | null;

  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children, }: {
  children: React.ReactNode;
}) {
  const { data, isLoading, } = useQuery({
    queryKey: ["current-user"],

    queryFn: async () => {
      const res = await api.get("/auth/me");

      return res.data;
    },

    retry: false,
  });

  return (
    <AuthContext.Provider
      value={{
        user: data ?? null,
        loading: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}