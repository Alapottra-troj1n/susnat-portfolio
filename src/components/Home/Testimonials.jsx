import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
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
            "testimonial": testimonial,
            "image": clientPhoto.asset->url
          }
            `
      )
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  console.log(testimonials)

  if (testimonials) {
    content = testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.name}>
        <TestimonialCard testimonial={testimonial} />
      </SwiperSlide>
    ));
  }

  return (
    <div id="testomonials" className="bg-slate-400/5 lg:pb-32">
      <div className="  mx-auto px-5 py-12 lg:py-32">
        <h2 className=" text-2xl lg:text-5xl 2xl:text-6xl font-display font-thin text-center">
          TESTIMONIALS
        </h2>
        <div
          className="text-xs md:text-sm lg:text-lg mt-3 tracking-wider text-center  font-primary px-[2rem]  xl:px-[16rem] 2xl:px-[25rem]">
          <h2 className="leading-6 text-gray-500">
            My satisfied clients are the heartbeat of the business.
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-0">
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
        >
          {content}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
