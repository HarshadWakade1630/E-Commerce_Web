"use client";

import { useEffect, useState } from "react";

export default function UserLocation() {
  const [location, setLocation] = useState("No location");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // User allowed location
        setLoading(true);

        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `/api/location?lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch location");
          }

          const data = await response.json();

          setLocation(data.location);
        } catch (error) {
          console.error("Location error:", error);
          setLocation("No location");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);

        // Permission denied or location unavailable
        setLoading(false);
        setLocation("No location");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  return (
    <>
    {loading ? "Loading..." : location}
    </>
  );
}