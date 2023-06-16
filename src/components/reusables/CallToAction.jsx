import React from "react";
import { FiCalendar, FiMail, FiPhoneCall } from "react-icons/fi";

const CallToAction = ({ scrolltoAppointment }) => {
  return (
    <div id="calltoaction" className="flex justify-center mt-7 md:mt-14 xl:mt-24">
      <div  id="callme"
        className={`text-gray-700 flex flex-wrap justify-center items-center text-sm md:text-base lg:text-base xl:text-2xl  gap-10 p-3 px-7`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <a
          className=" rounded-xl p-5 lg:p-12 flex flex-col items-center gap-10 px-24"
          href="tel:+61415865704"
         
        >
          <button className="font-primary  border-2 py-4 px-7 whitespace-nowrap border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">
            Let's have a call
          </button>
     
          <FiPhoneCall className="text-primary transition-all text-[5rem] lg:text-[10rem]  " />
        </a>
        <a
          className="rounded-xl p-5 lg:p-12 flex flex-col items-center gap-10 px-24"
          href="mailto:stan.visuals01@gmail.com"
        >
          <button className="font-primary  border-2 py-4 px-7 whitespace-nowrap border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">
            Mail me if you are busy
          </button>
       
          <FiMail className="text-primary transition-all text-[5rem] lg:text-[10rem]" />
        </a>
        <a
          onClick={scrolltoAppointment}
          className="rounded-xl p-5 lg:p-12 flex flex-col items-center gap-10 px-24"
        >
          <button className="font-primary  border-2 py-4 px-7 whitespace-nowrap border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">
            Book a meeting
          </button>
        
          <FiCalendar className="text-primary transition-all text-[5rem] lg:text-[10rem] " />
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
