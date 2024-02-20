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
    <div
      id="chairmain"
      className="relative w-full h-screen flex items-center justify-center mt-[25vh] drop-shadow-md overflow-hidden"
    >
      <div className="chair absolute w-[30%]  h-[30%]  rounded-lg z-[2] top-[22vh] p-10 right-[13vw] font-titlefont">
        <h1 className="text-[100px] text-white font-[700] drop-shadow-2xl font-titlefont">
          CHAIRMAN
        </h1>
        <h1 className="text-[100px] text-[#CFFA1E] font-[700] font-titlefont">
          POSITION
        </h1>
        <p className="text-white w-[100%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non
          ducimus cupiditate est nam aliquam eligendi commodi consequatur.
          Quidem numquam praesentium eius perferendis? Doloremque necessitatibus
          tempore cum aspernatur tenetur harum?
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-screen   overflow-hidden bg-[#212121] "
      >
        <SwiperSlide>
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-start pl-[15vw] relative`}
          >
            <div className="absolute h-screen w-[1px] bg-white left-[5vw] side-line"></div>
            <Image
              src={chairman}
              className="w-[50%] rounded-lg drop-shadow-md  hover:scale-[1.05] duration-500 img-round"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-start pl-[15vw] relative`}
          >
            <div className="absolute h-screen w-[1px] bg-white left-[5vw] side-line"></div>
            <Image
              src={privellor}
              className="w-[50%] rounded-lg drop-shadow-md  hover:scale-[1.05] duration-500 img-round"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-start pl-[15vw] relative`}
          >
            <div className="absolute h-screen w-[1px] bg-white left-[5vw] side-line"></div>
            <Image
              src={priciple}
              className="w-[50%] rounded-lg drop-shadow-md  hover:scale-[1.05] duration-500 img-round"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Chairman;
