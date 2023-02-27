import React from 'react';
import { BsChevronDoubleDown } from "react-icons/bs";

const Introduction = () => {
    return (
        <div className="bg-white pt-[5rem]">
      <div className="pt-16 lg:pt-24 flex flex-col  justify-center container mx-auto px-5">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10 lg:relative">
          <div className="flex flex-col justify-center order-2 bg-white lg:absolute lg:w-[60%] lg:p-10 lg:top-11 lg:right-[-15px]  2xl:top-32 xl:top-24 xl:right-[-12px] 2xl:right-7">
            <h1 className="font-display lg:absolute xl:top-[-35px] lg:top-[-29px] text-primary font-bold text-center lg:text-left mt-5 lg:mt-0 text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Heyyy There
            </h1>
            <p className="text-sm mt-4 font-display text-left lg:text-base xl:text-lg text-gray-700 font-medium tracking-wide lg:w-[85%] xl:w-[80%] lg:leading-7 leading-6 xl:leading-8">
              My Name is Susnat Chakma, a photographer with a keen eye for detail and a passion for
              capturing stunning images, I bring over 5 years of experience
              creating unforgettable visual stories. I take great pride in
              understanding my client's vision and transforming their ideas into
              impactful images that tell a compelling story.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
            <p className="font-hand font-medium text-2xl lg:text-3xl xl:text-4xl text-primary whitespace-nowrap">Creating visual stories, one shot at a time.</p>
            <p className="font-primary font-light transition-all lg:text-xl xl:text-2xl tracking-widest text-primary lg:relative xl:top-12 lg:top-12 xl:right-[230px] lg:right-[200px] whitespace-nowrap">LET'S CONNECT</p>
            </div>
          </div>

          <div className="flex justify-center items-center order-1">
            <div className="w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[33rem] bg-hero-photo bg-cover bg-center"></div>
          </div>
        </div>
        <div className="pb-5 ">
          <div className="mt-10 text-2xl click hover:text-dark flex flex-col items-center gap-3 ">
          <div>
              <img
                src="/camera.svg"
                className="lg:w-16 w-12 mt-2"
                alt="fireminecrat creeper"
              />
            </div>
            <button className=" lg:text-2xl  font-display text-base font-medium hover:-translate-y-1 hover:text-primary transition-all">
              CHECK MY RECENT WORKS
            </button>
            <BsChevronDoubleDown className=" text-lg lg:text-3xl" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Introduction;