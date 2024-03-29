import React from "react";
import CalendlyWidget from "../reusables/CalendlyWidget";

const Contact = ({ appointment }) => {
  return (
    <div id="contact">
      <div
        ref={appointment}
        className="max-w-6xl mx-auto px-5 py-12 lg:px-0 min-h-screen"
      >
        <h2 className=" text-2xl lg:text-5xl 2xl:text-6xl font-display font-thin text-center">
          SHEDULE A MEETING
        </h2>
        <div className="px-[2rem]  xl:px-[16rem] 2xl:px-[25rem] lg:text-lg mt-4 tracking-wider text-center  font-primary text-sm">
          <p className=" leading-6 text-gray-500">
            Schedule a meeting and let's chat about how we can make that happen
            together!
          </p>
        </div>
        <div className="flex justify-center mt-4 lg:mt-10 lg:mb-10 h-[50rem] lg:h-[45rem]">
          
          <CalendlyWidget />

        </div>
      </div>
    </div>
  );
};

export default Contact;
