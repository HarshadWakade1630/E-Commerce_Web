import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  // Protect dashboard routes
  // const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard")

  // if (isProtectedRoute && !token) {
  //   return NextResponse.redirect(
  //     new URL("/account", req.url)
  //   );
  // }

  // return NextResponse.next();



  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/account", req.url))
  }

  if (accessToken) {
    try {
      await verifyToken(accessToken);
      return NextResponse.next();
    } catch { }
    if (refreshToken) {
      try {
        await verifyToken(refreshToken);
        return NextResponse.next();
      } catch { }
    }

      return NextResponse.redirect(new URL("/account", req.url))

  }
}
  export const config = {
    matcher: [
      "/dashboard/:path*",
      "/providers/:path*",
      "/profile/:path*",
      "/food/myorders/:path*",
    ],
  };
