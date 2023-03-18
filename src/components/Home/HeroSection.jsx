import React, { useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
const HeroSection = () => {
  const [mute, setMute] = useState(false);
  console.log(mute);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted={mute ? true : false}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-150"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center z-10 bottom-[-54rem] left-[113rem]">
        {!mute ? (
          <button onClick={() => setMute(true)}>
            <GoUnmute className="text-white text-2xl" />
          </button>
        ) : (
          <button onClick={() => setMute(false)}>
            <GoMute className="text-white text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
