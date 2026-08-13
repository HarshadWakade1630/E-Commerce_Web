export default function ChaoticOrbit() {
  return (
    <div className="flex items-center justify-center p-6">
      {/* Self-contained CSS Animation Styles */}
      <style>{`
        @keyframes rotate936 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes orbit {
          0%, 100% { transform: translate(12.5px) scale(0.73684); opacity: 0.65; }
          5% { transform: translate(10px) scale(0.684208); opacity: 0.58; }
          10% { transform: translate(7.5px) scale(0.631576); opacity: 0.51; }
          15% { transform: translate(5px) scale(0.578944); opacity: 0.44; }
          20% { transform: translate(2.5px) scale(0.526312); opacity: 0.37; }
          25% { transform: translate(0px) scale(0.47368); opacity: 0.3; }
          30% { transform: translate(-2.5px) scale(0.526312); opacity: 0.37; }
          35% { transform: translate(-5px) scale(0.578944); opacity: 0.44; }
          40% { transform: translate(-5px) scale(0.578944); opacity: 0.44; }
          45% { transform: translate(-10px) scale(0.684208); opacity: 0.58; }
          50% { transform: translate(-12.5px) scale(0.73684); opacity: 0.65; }
          55% { transform: translate(-10px) scale(0.789472); opacity: 0.72; }
          60% { transform: translate(-7.5px) scale(0.842104); opacity: 0.79; }
          65% { transform: translate(-5px) scale(0.894736); opacity: 0.86; }
          70% { transform: translate(-2.5px) scale(0.947368); opacity: 0.93; }
          75% { transform: translate(0px) scale(1); opacity: 1; }
          80% { transform: translate(2.5px) scale(0.947368); opacity: 0.93; }
          85% { transform: translate(5px) scale(0.894736); opacity: 0.86; }
          90% { transform: translate(7.5px) scale(0.842104); opacity: 0.79; }
          95% { transform: translate(10px) scale(0.789472); opacity: 0.72; }
        }

        .spin-container {
          animation: rotate936 1.33s linear infinite !important;
        }

        .dot-1 {
          animation: orbit 0.8s linear infinite !important;
        }

        .dot-2 {
          animation: orbit 0.8s linear -0.4s infinite !important;
        }
      `}</style>

      {/* Main Container */}
      <div className="spin-container relative flex h-[25px] w-[25px] items-center justify-center">
        {/* Dot 1 */}
        <div className="dot-1 absolute h-[15px] w-[15px] shrink-0 rounded-full bg-black" />
        
        {/* Dot 2 */}
        <div className="dot-2 absolute h-[15px] w-[15px] shrink-0 rounded-full bg-black" />
      </div>
    </div>
  );
}