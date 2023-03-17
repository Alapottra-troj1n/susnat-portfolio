import React from "react";
import { FiCalendar, FiMail, FiPhoneCall } from "react-icons/fi";

const CallToAction = ({scrolltoAppointment}) => {

  return (
   <div className="flex justify-center mt-60">
     <div className={`text-gray-700 flex items-center text-sm md:text-base lg:text-2xl lg:mt-5 gap-10 p-3 px-7`} style={{ transition: 'all 0.5s ease-in-out' }} >
      <a className=" rounded-xl p-12 flex flex-col items-center gap-10 px-24"  href="tel:123-456-7890">
        <button className="font-primary  border-2 py-4 px-7 border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">Let's have a call</button>
        <p className="text-base font-primary font-semibold text-gray-600">What you really need ?</p>
        <FiPhoneCall className="text-primary transition-all text-[10rem]  " />
      </a>
      <a className="rounded-xl p-12 flex flex-col items-center gap-10 px-24"  href="mailto:csusnata@gmail.com">
        <button className="font-primary  border-2 py-4 px-7 border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">Mail me if you are busy</button>
        <p className="text-base font-primary font-semibold text-gray-600">What you really want ?</p>
        <FiMail className="text-primary transition-all text-[10rem]" />
      </a>
      <a onClick={scrolltoAppointment} className="rounded-xl p-12 flex flex-col items-center gap-10 px-24" >
        <button className="font-primary  border-2 py-4 px-7 border-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all">Book a meeting</button>
        <p className="text-base font-primary font-semibold text-gray-600">What are you searching for ?</p>
        <FiCalendar className="text-primary transition-all text-[10rem] " />
      </a>
      
    </div>
   </div>
  );
};

export default CallToAction;
