import React, { useEffect, useState } from "react";
import client from "../../utils/sanity";
import PhotoCard from "../../components/reusables/PhotoCard";

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

  return (
    <div className="pt-36 pb-10">
      <h2 className="text-center font-display text-3xl">
      Shining Spotlight: Illuminating Product Photography Mastery
      </h2>
      <p className="font-primary text-center mt-3 text-lg">
      Preserving the Brilliance of Your Creations, Frame by Frame
      </p>

      <div className="px-20 mx-auto grid grid-cols-4 py-6 mt-10">
        {products &&
          products.map((story) => (
            <PhotoCard key={story.slug} story={story} />
          ))}
      </div>
      {!products || !products.length && <p className="text-center">No Stories Found</p>}
    </div>
  );
}
