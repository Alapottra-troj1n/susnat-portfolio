import React from "react";
import { Link } from "react-router-dom";
const PhotoCard = ({ story }) => {
  return (
    <Link to={`/story/${story.slug}`} className="w-full">
    <div
      style={{ backgroundImage: `url(${story.mainImage})` }}
      className="h-[20rem] 2xl:h-[30rem]  relative bg-cover bg-center rounded-md overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 hover:opacity-0 transition duration-500 ease-out"></div>
      <p className="relative z-10 text-white font-display text-center top-[13rem] 2xl:top-[20rem] text-2xl">{story.title}</p>
    </div>
    </Link>
  );
};

export default PhotoCard;
