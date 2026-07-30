
export default function HomeHeaderVid() {
    return (
        <>
            <div className="inset-0 absolute -z-10">
                <video autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload"
                    className="absolute w-[100%] h-screen block pointer-events-none object-cover">
                    <source src={'/vid/bgcompressed.mp4'} type="video/mp4" />
                </video>
            </div>
        </>
    )
}


//bg-video absolute w-[100%] h-screen block pointer-events-none object-cover
// absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover