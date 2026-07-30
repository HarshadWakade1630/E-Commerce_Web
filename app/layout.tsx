import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "sonner";
import QueryProvider from "./providers/QueryProviders";

export const metadata: Metadata = {
  title: "Batataa-Company-LTD",
  description: "Past Batataa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
        <AuthProvider>
          {children}
          <Toaster richColors />
        </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
