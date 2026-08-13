"use client";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <style>{`
        @keyframes spinner-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "4px solid #fee2e2", 
          borderTopColor: "#dc2626",  
          borderRightColor: "#dc2626",
          animation: "spinner-rotate 0.8s linear infinite",
        }}
      />
    </div>
  );
}