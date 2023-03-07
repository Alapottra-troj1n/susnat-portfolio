import React from "react";
import { FiCalendar, FiMail, FiPhoneCall } from "react-icons/fi";

const CallToAction = ({scrolltoAppointment}) => {

  return (
    <div className={`flex items-center text-sm md:text-base lg:text-2xl lg:mt-5 gap-5 bg-gray-500 p-3 px-7 rounded-md text-white`} style={{ transition: 'all 0.5s ease-in-out' }} >
      <a href="tel:123-456-7890">
        <FiPhoneCall className="hover:text-primary transition-all" />
      </a>
      <a href="mailto:csusnata@gmail.com">
        <FiMail className="hover:text-primary transition-all" />
      </a>
      <span onClick={scrolltoAppointment}>
        <FiCalendar className="hover:text-primary transition-all" />
      </span>
    </div>
  );
};

export default CallToAction;
