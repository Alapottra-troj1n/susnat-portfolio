import React, { useEffect, useState } from "react";
import client from "../../utils/sanity";
import PhotoCard from "../../components/reusables/PhotoCard";
import Spinner from "../../components/reusables/Spinner";

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const query = `*[_type == "story" && categories[0]->.title == "Product"] | order(_createdAt desc) [0...5] {
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
        setProducts(story);
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
      <h2 className="text-center font-display lg:text-3xl text-xl  font-bold">
      Shining Spotlight: Illuminating Product Photography Mastery
      </h2>
      <p className="font-primary text-center mt-3 text-sm lg:text-lg">
      Preserving the Brilliance of Your Creations, Frame by Frame
      </p>

      <div className=" lg:px-20 mx-auto grid grid-cols-2 lg:grid-cols-4 py-6 mt-10 gap-5">
        {products &&
          products.map((story) => (
            <PhotoCard key={story.slug} story={story} />
          ))}
      </div>
      {!products || !products.length && <p className="text-center">No Stories Found</p>}
    </div>
  );
}
