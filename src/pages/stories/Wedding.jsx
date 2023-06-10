import React, { useEffect, useState } from "react";
import client from "../../utils/sanity";
import PhotoCard from "../../components/reusables/PhotoCard";

export default function Wedding() {
  const [loading, setLoading] = useState(false);
  const [weddings, setWeddings] = useState(null);
  console.log(weddings);
  const query = `*[_type == "story" && categories[0]->.title == "Wedding"] | order(_createdAt desc) [0...5] {
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
        setWeddings(story);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);
  console.log(weddings);

  return (
    <div className="pt-36 pb-10 px-10">
      <h2 className="text-center font-display lg:text-3xl text-xl  font-bold">
        Love's Eternal Bond: Capturing the Magic of Matrimony
      </h2>
      <p className="font-primary text-center mt-3 text-sm lg:text-lg">
        Preserving Your Wedding Day, One Click at a Time
      </p>

      <div className=" lg:px-20 mx-auto grid grid-cols-2 lg:grid-cols-4 py-6 mt-10 gap-5">
        {weddings &&
          weddings.map((story) => (
            <PhotoCard key={story.slug} story={story} />
          ))}
      </div>
      {!weddings || !weddings.length && <p className="text-center">No Stories Found</p>}
    </div>
  );
}
