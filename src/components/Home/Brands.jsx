import React from "react";
import google from '/google.png'
import fashionHubb from '/fashionhubb.png'
import latrobe from '/latrobe.png'
import alexandria from '/alexandria.png'

const Brands = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-5 lg:px-0 py-12 lg:py-32">
        <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-display font-thin text-center">Brand Collaborations</h2>
        <div className="flex gap-10 mt-10 items-center justify-center lg:justify-between flex-wrap">
          <img src={google} className="w-28 lg:w-48" alt="" />
          <img src={fashionHubb} className="w-28 lg:w-[170px] mb-3" alt="" />
          <img src={latrobe} className="w-28 lg:w-48" alt="" />
          <img src={alexandria} className="w-28 lg:w-48" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Brands;
