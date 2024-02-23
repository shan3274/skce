import React from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Bubble from "@/utils/bubble";

import { Autoplay } from "swiper/modules";

const Layout1 = ({ data, top, left, right, bottom }) => {
  return (
    <div className="w-full h-screen flex items-center lg:flex-row flex-col justify-center overflow-hidden ">
      <div className="w-[70%] h-full  bg-no-repeat bg-cover flex items-center relative z-[-1]">
        <div className="absolute w-full h-full inset-0 bg-black/20"></div>
        {data?.nameplate && (
          <div className="absolute bottom-[10vh]  left-[10vh] w-[40vw] h-[20vh] bg-white/50 backdrop-blur-md rounded-md flex flex-col p-5 justify-around z-[10]">
            <h1 className="text-[30px] font-titlefont  text-[#332388]">
              {data?.nameplate?.h1}
            </h1>
          </div>
        )}

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-[100vh] h-full relative z-[0]"
        >
          {data?.bg?.map((item) => {
            return (
              <SwiperSlide>
                <div
                  className="lg:w-full w-[100vw] h-full relative z-[0] bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${item})` }}
                >
                  {item}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="layout1right w-[30%]   right-[50px] p-0  h-full bg-purple-950 relative flex items-center justify-center  flex-col gap-5 z-[10]"
      >
        <div className="absolute w-full  h-full z-[10]">
          <Bubble width={"50vw"} />
        </div>
        <div className="absolute w-[50%]  h-[50%] z-[10] left-[-30vh] bottom-0 flex items-end ">
          <Bubble width={"30vh"} />
        </div>
        <div className="absolute  hidden lg:block  lg:w-full  w-[200%] h-[150%] bg-purple-950 rotate-[30deg] lg:rotate-[30deg] left-[-50%] top-[1%] t "></div>
        <div className="incon absolute w-full h-full flex flex-col justify-center gap-4 left-[-22vh] top-0  pt-10">
          <h1 className="text-[40px] font-titlefont text-white">{data?.h1}</h1>
          <h2 className="text-[#8843ff]">{data?.h2}</h2>
          <p className="text-[15px] text-white">{data?.p1}</p>
          <h2 className="text-[#8843ff]">{data?.h3}</h2>
          <p className="text-[15px] text-white">{data?.p2}</p>
          <p className="text-[15px] text-white">{data?.p3}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Layout1;
