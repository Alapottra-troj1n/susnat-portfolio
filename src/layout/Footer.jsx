import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-400/5 py-32 relative">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 font-semibold text-center lg:text-center 2xl:text-left">
        <div>
          <h3 className="font-display text-2xl">Get In Touch</h3>
          <div className="flex flex-col mt-2">
            <a className="text-gray-500" href="mailto:csusnata@gmail.com">
              csusnata@gmail.com
            </a>
            <a className="text-gray-500" href="mailto:csusnata@gmail.com">
              connect@stanvisuals.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl">Social Media</h3>
          <div className="flex flex-col mt-2">
            <a className="text-gray-500" href="mailto:csusnata@gmail.com">
              Linkedin
            </a>
            <a className="text-gray-500" href="mailto:csusnata@gmail.com">
              Instagram
            </a>
          </div>
        </div>
      
        <div>
          <h3 className="font-display text-2xl">Quick Links</h3>
          <div className="flex flex-col mt-2 text-gray-500">
                <Link>About Me</Link>
                <Link>Stories</Link>
                <Link>Testimonials</Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl">Support</h3>
          <div className="flex flex-col mt-2 text-gray-500">
                <Link>Frequently Asked Questions</Link>
                <Link>Pricing & Packages</Link>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2  bottom-2">
        <p className="text-xs lg:text-md whitespace-nowrap">Copyright 2023. All rights reversed by Susnata</p>
      </div>
    </div>
  );
};

export default Footer;
