import React, { useEffect } from "react";

const StoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const templatePhoto =
    "https://images.squarespace-cdn.com/content/v1/56f65cf85559866730c088c2/1618687504509-UXMM5M7A0L0V43XPATKY/YOGL6872.jpg?format=2500w";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${templatePhoto})` }}
        className="pt-44 pb-20 px-5 lg:px-36 bg-cover bg-center text-white h-[75vh]"
      >
        <h2 className="font-hand text-6xl text-center mt-56">
          Nisarga and Rahul
        </h2>
        <p className="text-center font-primary font-semibold text-xl mt-14">
          July 9, 2022
        </p>
      </div>
      <div className="py-24 px-96">
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

        <div className="grid grid-cols-[60%,40%] mt-20 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>

        <div className="grid grid-cols-[40%,60%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>

        <div className="grid grid-cols-[60%,40%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>
        <div className="grid grid-cols-[40%,60%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>

        <div className="grid grid-cols-[60%,40%] mt-5 gap-5">
          <div className="bg-red-500 h-[35rem] "></div>
          <div className="bg-red-500 h-[35rem] ]"></div>
        </div>


      </div>
    </div>
  );
};

export default StoryPage;
