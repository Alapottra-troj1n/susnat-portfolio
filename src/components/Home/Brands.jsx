import React from "react";
import google from '/google.png'
import fashionHubb from '/fashionhubb.png'
import latrobe from '/latrobe.png'
import alexandria from '/alexandria.png'

const Brands = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-32">
        <h2 className=" lg:text-5xl font-display text-base font-thin text-center">
          BRANDS AND COLLABORATIONS
        </h2>
        <div className="flex gap-10 mt-10 items-center justify-center flex-wrap">
          <img src={google} className="w-48" alt="" />
          <img src={fashionHubb} className="w-[170px] mb-3" alt="" />
          <img src={latrobe} className="w-48" alt="" />
          <img src={alexandria} className="w-48" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
