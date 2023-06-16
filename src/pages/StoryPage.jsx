import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/reusables/Spinner";
import client from "../utils/sanity";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const StoryPage = () => {
  const [story, setStory] = useState({});
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);

  const query = `*[slug.current == '${slug}'][0]{
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
    "photo10": photo10,
    "publishedAt": publishedAt
    
  }`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    client
      .fetch(query)
      .then((story) => {
        setStory(story);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-white">
        <Spinner />{" "}
      </div>
    );
  }
  const bgPhoto = story.mainImage;
  const date = new Date(story.publishedAt);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgPhoto})`}}
        
        className="2xl:pt-44 2xl:pb-20 py-24 px-5 lg:px-36 bg-cover bg-center text-white 2xl:h-[75vh]"
      >
  

        <h2 className="font-hand text-3xl lg:text-6xl text-center mt-56">{story.title}</h2>
        <p className="text-center font-primary font-semibold lg:text-xl text-base mt-3">
          {formattedDate}
        </p>
      </div>
      <div className="py-24 lg:px-40 2xl:px-96 px-10">
        <p className="text-gray-400 font-normal leading-8 font-primary text-sm lg:text-base">
          {story.description}
        </p>
        <PhotoProvider
          maskOpacity={0.5}
          toolbarRender={({ onScale, scale }) => {
            return (
              <>
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale + 1)}
                />
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale - 1)}
                />
              </>
            );
          }}
        >
          <div className="grid grid-cols-2 mt-20 gap-5">
            <PhotoView src={story.photo1}>
              <img className="cursor-pointer" src={story.photo1} alt="" />
            </PhotoView>
            <PhotoView src={story.photo2}>
              <img className="cursor-pointer" src={story.photo2} alt="" />
            </PhotoView>
          </div>

          <div className="grid grid-cols-2 mt-20 gap-5">
            <PhotoView src={story.photo3}>
              <img className="cursor-pointer" src={story.photo3} alt="" />
            </PhotoView>
            <PhotoView src={story.photo4}>
              <img className="cursor-pointer" src={story.photo4} alt="" />
            </PhotoView>
          </div>

          <div className="grid grid-cols-2 mt-20 gap-5">
            <PhotoView src={story.photo5}>
              <img className="cursor-pointer" src={story.photo5} alt="" />
            </PhotoView>
            <PhotoView src={story.photo6}>
              <img className="cursor-pointer" src={story.photo6} alt="" />
            </PhotoView>
          </div>
          <div className="grid grid-cols-2 mt-20 gap-5">
            <PhotoView src={story.photo7}>
              <img className="cursor-pointer" src={story.photo7} alt="" />
            </PhotoView>
            <PhotoView src={story.photo8}>
              <img className="cursor-pointer" src={story.photo8} alt="" />
            </PhotoView>
          </div>

          <div className="grid grid-cols-2 mt-20 gap-5">
            <PhotoView src={story.photo9}>
              <img className="cursor-pointer " src={story.photo9} alt="" />
            </PhotoView>
            <PhotoView src={story.photo10}>
              <img className="cursor-pointer" src={story.photo10} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default StoryPage;
