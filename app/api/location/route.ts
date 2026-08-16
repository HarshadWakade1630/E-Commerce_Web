import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    if (!lat || !lon) {
      return NextResponse.json(
        { error: "Latitude and longitude are required" },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(
          lat
        )}&lon=${encodeURIComponent(lon)}&format=json&addressdetails=1`,
        {
          headers: {
            "User-Agent": "FoodAppLocationService/1.0",
          },
          signal: controller.signal,
          cache: "no-store",
        }
      );

      if (!response.ok) throw new Error("Geocoding failed");

      const data = await response.json();
      const addr = data.address || {};

      const city =
        addr.city ||
        addr.town ||
        addr.village ||
        addr.suburb ||
        addr.municipality ||
        addr.county ||
        "Nearby location";

      const state = addr.state || "";

      return NextResponse.json({
        location: state ? `${city}, ${state}` : city,
        latitude: Number(lat),
        longitude: Number(lon),
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return NextResponse.json(
      { location: "Nearby location", error: "Geocoding service unavailable" },
      { status: 500 }
    );
  }
}