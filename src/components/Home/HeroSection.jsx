import { useEffect, useRef, useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
const HeroSection = () => {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.muted = true;
  }, []);

  return (
    <div className="hidden lg:block relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="scale-150 "
        title="video-background"
        width="100%"
        height="100%"
        loop
        muted={mute}
        controls={true}
        
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
      <div>
        <span className="z-50 absolute bottom-4 right-7">
          {!mute ? (
            <button onClick={() => setMute("true")}>
              <GoUnmute className="text-white text-2xl" />
            </button>
          ) : (
            <button onClick={() => setMute("false")}>
              <GoMute className="text-white text-2xl" />
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
