export default function HomeHeaderVid() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full -z-10 overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          disablePictureInPicture 
          controlsList="nodownload"
          className="absolute top-1/2 left-1/2 min-w-[102vw] min-h-[102vh] w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none scale-105"
        >
          <source 
            src="https://res.cloudinary.com/dnqbr6fyr/video/upload/v1785433610/bgcompressed_qlzqgi.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
    </>
  );
}
