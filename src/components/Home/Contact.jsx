import React from "react";
import CalendlyWidget from "../reusables/CalendlyWidget";

const Contact = ({appointment}) => {
  return (
    <div>
      <div ref={appointment} className="container mx-auto px-5 py-32 h-screen mb-20">
        <h2 className=" lg:text-5xl font-display text-3xl font-thin text-center">
          SHEDULE A MEETING
        </h2>
       <div className="px-[25rem] lg:text-lg mt-4 tracking-wider text-center  font-primary text-sm">
       <p className=" leading-6">
        Are you ready to create some amazing memories? Schedule a meeting and let's chat about how we can make that happen together!
        </p>
       </div>
        <div className="flex justify-center mt-10 mb-10 h-full ">
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
};

export default Contact;
