import React from "react";
import { useState, useEffect } from "react";
import client from "../../utils/sanity";
import PhotoCard from "../reusables/PhotoCard";
import { Link } from "react-router-dom";
import Spinner from "../reusables/Spinner";

const RecentStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    client
      .fetch(
        `*[_type == "story" && publishedAt < now()] | order(_createdAt desc) [0...5] {
          "slug": slug.current,
          "_id": _id,
          "title": title,
          "mainImage": mainImagePC.asset->url,
        }
        `
      )
      .then((data) => {
        setStories(data);
        setLoading(false)
      })
      .catch((err)=> {
          console.log(err)
          setLoading(false)
      })
  }, []);



  if(loading){
    return <div className="bg-slate-400/5 py-32 flex justify-center items-center "><Spinner/> </div>
  }

  let content;

  if (stories) {
    content = stories.map((story) => (
      <PhotoCard key={story._id} story={story} />
    ));
  }
  if (!stories.length) {
    content = <p className="text-center">No Stories Found</p>
  }


  return (
    <div className="bg-slate-400/5 py-32 px-5">
      <div className="pb-5">
        <div className=" text-2xl click hover:text-dark flex flex-col items-center gap-3 ">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-display font-thin text-center">
            RECENT STORIES
          </h2>
          <div
            className=" md:text-sm lg:text-lg mt-0 tracking-wider text-center px-[2rem] md:px-[10rem] lg:px-[15rem] xl:px-[20rem] 2xl:px-[37rem] font-primary text-xs
            "
          >
            <h2 className="leading-6 text-gray-500">
              I love to help people embrace imperfections and cherish genuine
              moments, creating a meaningful experience to treasure forever.
            </h2>
          
          </div>
        </div>
      </div>
      <div className="container mx-auto px-7 md:px-9 lg:px-14 xl:px-28 2xl:px-56 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {content}
        </div>
        <div className="text-center mt-10 flex flex-col justify-center items-center">
          <Link
            className="text-xl lg:text-3xl font-display hover:scale-105 transition-all"
            to="/"
          >
            VIEW MORE STORIES
          </Link>
          <div className="w-[8rem] lg:w-[15rem] border-t border-red-600  mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default RecentStories;
