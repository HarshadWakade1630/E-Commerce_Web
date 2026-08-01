export default function HomeHeaderVid() {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          disablePictureInPicture 
          controlsList="nodownload"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
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
