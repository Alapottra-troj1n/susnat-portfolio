import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-white pt-[5rem] xl:pt-0">
      <div className="lg:h-screen flex flex-col  justify-center container mx-auto px-5">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="font-display font-medium text-center lg:text-left mt-5 lg:mt-0 text-4xl lg:text-5xl xl:text-7xl tracking-tight">
              Hello, I'm Susnata
            </h1>
            <p className="text-sm mt-4 text-left lg:text-base xl:text-lg text-gray-600 tracking-wide lg:w-[85%] xl:w-[80%] lg:leading-7 leading-6 xl:leading-8">
              As a photographer with a keen eye for detail and a passion for
              capturing stunning images, I bring over 5 years of experience
              creating unforgettable visual stories. I take great pride in
              understanding my client's vision and transforming their ideas into
              impactful images that tell a compelling story.
            </p>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] xl:w-[35rem] xl:h-[30rem] bg-hero-photo bg-cover bg-center"></div>
          </div>
        </div>
        <div className="pb-10 lg:py-0">
          <div className="mt-10 lg:mt-24 text-2xl click hover:text-dark flex flex-col items-center gap-3 ">
          <div>
              <img
                src="/camera.svg"
                className="lg:w-16 w-12 mt-2"
                alt="fireminecrat creeper"
              />
            </div>
            <button className=" lg:text-3xl xl:text-4xl font-display text-base font-medium hover:-translate-y-1 hover:text-primary transition-all">
              CHECK MY RECENT WORKS
            </button>
            <BsChevronDoubleDown className=" text-lg lg:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
