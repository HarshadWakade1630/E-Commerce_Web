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

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(
        lat
      )}&lon=${encodeURIComponent(lon)}&format=json&addressdetails=1`,
      {
        headers: {
          "User-Agent": "Batataa-Food-App/1.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Reverse geocoding failed");
    }

    const data = await response.json();

    const address = data.address;

    const location =
      address.city ||
      address.town ||
      address.village ||
      address.suburb ||
      "Unknown location";

    const state = address.state || "";

    return NextResponse.json({
      location: state ? `${location}, ${state}` : location,
      latitude: lat,
      longitude: lon,
    });
  } catch (error) {
    console.error("Location API error:", error);

    return NextResponse.json(
      { error: "Unable to determine location" },
      { status: 500 }
    );
  }
}