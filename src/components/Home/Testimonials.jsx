import React from "react";
import { Navigation, Pagination, A11y,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../reusables/TestimonialCard";
import client from "../../utils/sanity";

const Testimonials = () => {
  let content;
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "testimonial"]{
            "_id": id,
            "designation": designation,
            "name": name,
            "testimonial": testomonial,
            "image": clientPhoto.asset->url
          }
            `
      )
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  if(testimonials){
    content = testimonials.map(testimonial => <SwiperSlide><TestimonialCard testimonial={testimonial} /></SwiperSlide>)
  }

  return (
    <div className="bg-secondary/5 pb-32">
      <div className="  container mx-auto px-5 py-32">
        <h2 className=" lg:text-5xl font-display text-3xl font-thin text-center">
          TESTIMONIALS
        </h2>
        <p className=" lg:text-lg mt-4 tracking-wider text-center  font-primary text-sm leading-6  ">
          My satisfied clients are the heartbeat of our business. Their
          testimonials speak to my commitment to exceptional service and
          delivering outstanding results.
        </p>
      </div>

      <div className="container mx-auto">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          style={{
            paddingBottom: "3rem",
            paddingLeft: "10px",
            paddingRight: "10px",
            "--swiper-navigation-color": "#000000",
            "--swiper-navigation-size": "30px",
          }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {content}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
