import React from "react";
import { FiCalendar, FiMail, FiPhoneCall } from "react-icons/fi";

const CallToAction = ({ scrolltoAppointment }) => {
  return (
    <div className="max-w-6xl mx-auto flex justify-center my-5 md:mt-14 xl:mt-24">
      <div
        className={`text-gray-700 grid grid-cols-3 text-sm md:text-base lg:text-base xl:text-2xl  gap-5 p-3`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <a
          className=" rounded-xl p-5 lg:p-12 flex flex-col items-center gap-5 lg:px-24"
          href="tel:+61415865704"
         
        >
          <button className="font-primary lg:py-4 lg:px-7 px-3 py-2 whitespace-nowrap border-gray-700 font-semibold hover:bg-gray-700 hover:text-white hover:rounded-full transition-all">
            Let's have a call
          </button>
     
          <FiPhoneCall className="text-primary transition-all text-4xl lg:text-[6rem]  " />
        </a>
        <a
          className="rounded-xl p-5 lg:p-12 flex flex-col items-center gap-5 lg:px-24"
          href="mailto:stan.visuals01@gmail.com"
        >
          <button className="font-primary  lg:py-4 lg:px-7 px-3 py-2 whitespace-nowrap border-gray-700  font-semibold hover:bg-gray-700 hover:text-white hover:rounded-full  transition-all">
           Mail Me
          </button>
       
          <FiMail className="text-primary transition-all text-4xl lg:text-[6rem]  " />
        </a>
        <a
          onClick={scrolltoAppointment}
          className="rounded-xl p-5 lg:p-12 flex flex-col items-center gap-5 lg:px-24"
        >
          <button className="font-primary lg:py-4 lg:px-7 px-3 py-2 whitespace-nowrap border-gray-700 font-semibold hover:bg-gray-700 hover:text-white hover:rounded-full transition-all">
            Book a meeting
          </button>
        
          <FiCalendar className="text-primary transition-all text-4xl lg:text-[6rem]  " />
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
