import React from "react";
import { useState, useEffect } from "react";
import client from "../../utils/sanity";
import PhotoCard from "../reusables/PhotoCard";
import { Link } from "react-router-dom";

const RecentStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "story" && publishedAt < now()] | order(_createdAt desc) [0...5] {
          "slug": slug.current,
          "_id": _id,
          "title": title,
          "category": categories[]->title,
          "mainImage": mainImagePC.asset->url,
          "description": description,
          "photo1": photo1,
          "photo2": photo2,
          "photo3": photo3,
          "photo4": photo4,
          "photo5": photo5,
          "photo6": photo6,
          "photo7": photo7,
          "photo8": photo8,
          "photo9": photo9,
          "photo10": photo10
          
        }
        `
      )
      .then((data) => {
        setStories(data);
      });
  }, []);

  let content;

  if (stories) {
    content = stories.map((story) => <PhotoCard key={story._id} story={story} />);
  }

  return (
    <div className="bg-secondary/5 py-32" >
      <div className="pb-5">
          <div className=" text-2xl click hover:text-dark flex flex-col items-center gap-3 ">
            <h2 className=" lg:text-5xl font-display text-base font-thin">
              RECENT STORIES
            </h2>
            <h2 className=" lg:text-lg mt-4 tracking-wider text-center  font-primary text-base  ">
              I love to help people embrace imperfections and cherish genuine
              moments, creating a meaningful experience to treasure forever.
            </h2>
          </div>
        </div>
      <div className="container mx-auto px-5 my-10">
        <div className="grid grid-cols-3 gap-7">
          {content}
        </div>
        <div className="text-center mt-10 flex flex-col justify-center items-center">
            <Link className="text-3xl font-display hover:scale-105 transition-all" to='/'>VIEW MORE STORIES</Link>
            <div className="w-[15rem] border-t border-red-600  mt-3"></div>
        </div>
      
      </div>
    </div>
  );
};

export default RecentStories;
