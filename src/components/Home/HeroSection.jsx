import React, { useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
const HeroSection = () => {
  const [mute, setMute] = useState(true);
  console.log(mute);

  return (
    <div className="hidden lg:block relative h-screen overflow-hidden">

      <iframe
      className="scale-150"
        title="video-background"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/ELK5du6HhzY?autoplay=1&loop=1&mute=${mute ? '1' : '0'}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
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
