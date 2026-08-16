"use client";

import { useEffect, useState } from "react";

export default function UserLocation() {
  const [location, setLocation] = useState<string>("Locating...");
  const [loading, setLoading] = useState<boolean>(true);
  const [permissionState, setPermissionState] = useState<PermissionState | "unsupported">("prompt");
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      setLoading(false);
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLocation("Fetching address...");
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });

        try {
          const response = await fetch(`/api/location?lat=${latitude}&lon=${longitude}`);
          if (!response.ok) throw new Error("Geocoding failed");

          const data = await response.json();
          setLocation(data.location || "Location found");
        } catch {
          setLocation("Nearby location");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.warn("Geolocation error:", error.message);
        setLoading(false);

        if (error.code === error.PERMISSION_DENIED) {
          setPermissionState("denied");
          setLocation("Location Blocked (Click to enable)");
        } else {
          setLocation("Unable to retrieve location");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    if (typeof window === "undefined" || !navigator.permissions) {
      requestLocation();
      return;
    }

    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      setPermissionState(result.state);

      if (result.state === "denied") {
        setLoading(false);
        setLocation("Location Blocked");
      } else {
        requestLocation();
      }

      result.onchange = () => {
        setPermissionState(result.state);
        if (result.state === "granted" || result.state === "prompt") {
          requestLocation();
        }
      };
    });
  }, []);

  const handleClick = () => {
    if (permissionState === "denied") {
      alert(
        "Location access is blocked in your browser.\n\nTo reset:\n1. Click the lock/tune icon next to the URL in your browser bar.\n2. Turn Location ON or click 'Reset Permission'.\n3. Refresh the page."
      );
      return;
    }

    if (coordinates) {
      window.open(
        `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`,
        "_blank"
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`transition-colors cursor-pointer ${
        permissionState === "denied"
          ? "text-red-600 font-medium hover:underline"
          : "text-gray-800 hover:text-red-600"
      }`}
    >
      {loading ? "Detecting.." : location}
    </button>
  );
}