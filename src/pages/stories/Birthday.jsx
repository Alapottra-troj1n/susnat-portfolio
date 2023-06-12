import React, { useEffect, useState } from "react";
import client from "../../utils/sanity";
import PhotoCard from "../../components/reusables/PhotoCard";
import Spinner from "../../components/reusables/Spinner";

export default function Birthday() {
  const [loading, setLoading] = useState(false);
  const [birthdays, setBirthdays] = useState(null);
  console.log(birthdays);
  const query = `*[_type == "story" && categories[0]->.title == "Birthday"] | order(_createdAt desc) [0...5] {
    "slug": slug.current,
    "_id": _id,
    "title": title,
    "mainImage": mainImagePC.asset->url,
  }`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    client
      .fetch(query)
      .then((story) => {
        setBirthdays(story);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <div className="bg-slate-400/5 py-32 flex justify-center items-center min-h-screen"><Spinner/> </div>
  }

  return (
    <div className="pt-36 pb-10 px-10 min-h-screen">
      <h2 className="text-center font-display lg:text-3xl text-xl font-bold ">
        Birthdays Unveiled: Capturing the Essence of Celebration
      </h2>
      <p className="font-primary text-center mt-3 text-sm lg:text-lg">
        Preserving Your Special Day, One Click at a Time
      </p>

      <div className=" lg:px-20 mx-auto grid grid-cols-2 lg:grid-cols-4 py-6 mt-10 gap-5">
        {birthdays && (
          birthdays.map((story) => <PhotoCard key={story.slug} story={story} />)
        )}

      </div>
      {
        !birthdays || !birthdays.length && <p className="text-center">No Stories Found</p>
      }
    </div>
  );
}
