import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import chairman from "@/public/chairman.jpg";
import privellor from "@/public/sree-krishna-college-of-engg-vellore-03.jpg";
import priciple from "@/public/Principal.jpg";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Chairman = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center mt-[25vh] drop-shadow-md">
      <div className="absolute w-[70%] h-[30%] bg-white/30 backdrop-blur-sm rounded-lg z-[2] bottom-10 p-10 ">
        <Typewriter
          options={{
            strings: [
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis reprehenderit similique molestias sequi enim aperiam! Voluptate eum quia possimus dolor velit voluptatibus sint incidunt reiciendis fuga! Perferendis, cumque tempore?",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi minima error officia eligendi, cupiditate excepturi tenetur quod ipsam suscipit reprehenderit a eius consequatur at dignissimos in aperiam quam dolorum!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-screen   overflow-hidden bg-[#1a1a1a] "
      >
        <SwiperSlide>
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-center`}
          >
            <Image
              src={chairman}
              className="w-[50%] rounded-lg drop-shadow-md  hover:scale-[1.05] duration-500"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-center`}
          >
            <Image
              src={priciple}
              className="w-[50%] rounded-lg drop-shadow-md  hover:scale-[1.05] duration-500"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-center`}
          >
            <Image
              src={privellor}
              className="w-[50%] rounded-lg drop-shadow-md  hover:scale-[1.05] duration-500"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Chairman;
