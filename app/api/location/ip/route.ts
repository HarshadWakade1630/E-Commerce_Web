import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // 1. Instant Edge Headers (0ms latency on Vercel deployments)
    const vercelCity = request.headers.get("x-vercel-ip-city");
    const vercelRegion = request.headers.get("x-vercel-ip-country-region");
    const vercelLat = request.headers.get("x-vercel-ip-latitude");
    const vercelLon = request.headers.get("x-vercel-ip-longitude");

    if (vercelCity) {
      const city = decodeURIComponent(vercelCity);
      const region = vercelRegion ? decodeURIComponent(vercelRegion) : "";
      return NextResponse.json({
        location: region ? `${city}, ${region}` : city,
        latitude: vercelLat ? parseFloat(vercelLat) : null,
        longitude: vercelLon ? parseFloat(vercelLon) : null,
      });
    }

    // 2. Client IP Extraction
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "";

    // Handle Localhost during dev — strip port if present or fallback to empty string
    const isLocalhost = !ip || ip === "::1" || ip === "127.0.0.1" || ip.startsWith("192.168.");

    // If testing locally, call ipapi.co without IP parameter to fetch server's external IP
    const targetUrl = isLocalhost
      ? "https://ipapi.co/json/"
      : `https://ipapi.co/${ip}/json/`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500); // 3.5s safety timeout

    try {
      const response = await fetch(targetUrl, {
        cache: "no-store",
        headers: {
          // Provide a proper identifying User-Agent to avoid instant 403/429 blocks
          "User-Agent": "FoodAppIpLocation/1.0",
        },
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`IP API lookup failed with status ${response.status}`);

      const data = await response.json();

      // Check if API returned an explicit error object (e.g., rate limit reached)
      if (data.error) throw new Error(data.reason || "IP API returned error");

      const city = data.city || "";
      const state = data.region || "";

      return NextResponse.json({
        location: city ? (state ? `${city}, ${state}` : city) : "Nearby location",
        latitude: data.latitude ? Number(data.latitude) : null,
        longitude: data.longitude ? Number(data.longitude) : null,
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    console.error("IP location API error:", error);
    return NextResponse.json({
      location: "Nearby location",
      latitude: null,
      longitude: null,
    });
  }
}