import React from "react";
import { Link } from "react-router-dom";
const PhotoCard = ({ story }) => {
  return (
    <Link to={`/story/${story.slug}`} className="w-full">
    <div
      style={{ backgroundImage: `url(${story.mainImage})` }}
      className=" h-[15rem] lg:h-[20rem] 2xl:h-[30rem]  relative bg-cover bg-center rounded-md overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 hover:opacity-0 transition duration-500 ease-out"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white ">
              <h2 className="font-display text-sm lg:text-base whitespace-nowrap">
              {story.title}
              </h2>
            </div>
    </div>
    </Link>
  );
};

export default PhotoCard;
