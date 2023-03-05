import React from "react";
import { FiCalendar, FiMail, FiPhoneCall } from "react-icons/fi";
import { useSelector } from "react-redux";

const CallToAction = () => {

  const scroll = useSelector(state => state.app.scroll)
  console.log('sad' + scroll)
  return (
    <div className={`flex items-center ${scroll > 0 ? 'fixed top-24 right-5 z-50' : ''} text-sm md:text-base lg:text-2xl lg:mt-5 gap-5 bg-gray-500 p-3 px-7 rounded-md text-white`} style={{ transition: 'all 0.5s ease-in-out' }} >
      <a href="tel:123-456-7890">
        <FiPhoneCall className="hover:text-primary transition-all" />
      </a>
      <a href="mailto:csusnata@gmail.com">
        <FiMail className="hover:text-primary transition-all" />
      </a>
      <span>
        <FiCalendar className="hover:text-primary transition-all" />
      </span>
    </div>
  );
};

export default CallToAction;
