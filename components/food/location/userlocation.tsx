"use client";

import { useEffect, useState } from "react";

export default function UserLocation() {
  const [location, setLocation] = useState("No location");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLoading(true);

        const { latitude, longitude } = position.coords;

        setCoordinates({
          latitude,
          longitude,
        });

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
          console.error(error);
          setLocation("No location");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
        setLocation("No location");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  const openMaps = () => {
    if (!coordinates) return;

    const { latitude, longitude } = coordinates;

    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <button
      type="button"
      onClick={openMaps}
      disabled={!coordinates}
      className="cursor-pointer text-gray-800 hover:text-red-600 disabled:cursor-default"
    >
      {loading ? "Accessing.." : location}
    </button>
  );
}