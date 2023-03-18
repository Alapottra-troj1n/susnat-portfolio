import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/reusables/Spinner";
import client from "../utils/sanity";

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


  if(loading){
    return <div className="h-screen flex justify-center items-center bg-white"><Spinner/> </div>
  }
  const bgPhoto = story.mainImage;
  const date = new Date(story.publishedAt);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgPhoto})` }}
        className="pt-44 pb-20 px-5 lg:px-36 bg-cover bg-center text-white h-[75vh]"
      >
        <h2 className="font-hand text-6xl text-center mt-56">{story.title}</h2>
        <p className="text-center font-primary font-semibold text-xl mt-14">
          {formattedDate}
        </p>
      </div>
      <div className="py-24 lg:px-96 px-10">
        <p className="text-gray-400 font-normal leading-8 font-primary">
          Rare is that Indian Wedding celebrated with intimacy, for intimacy.
          Rare is the atypical aesthetics used to decorate an age old tradition.
          Rare is the coming together of two souls in love amidst large flowers
          and dusky skies. Rare; thats the word that best describes our bride-
          Meghna. An ardent believer that its Summer somewhere, our bride
          married the love of her life in winter but with a sunny twist.
          Celebrating the Indian traditions with close loved ones and friends
          who are family, Meghna is close to our hearts for her serene smile and
          simplistic demeanour. It was a lid back affair, with her best of
          friends being her sisters, helping her tie the knot with cheer and
          chime. Who said Love is blind..? All they had to do was see around New
          York to fall in love ; To Meghna and Karan, may the sun be bright, may
          the champagne be bubbly, and may it be summer always… Simple.
          Intimate. Easy.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] mt-20 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
