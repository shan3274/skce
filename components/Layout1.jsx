"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Bubble from "@/utils/bubble";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useScroll from "./hooks/useScroll";
import Nheader from "./Nheader";

const Layout1 = ({ data, top, left, right, bottom }) => {
  const [scrollLength, setScrollLength] = useState(0);
  useEffect(() => {
    setScrollLength(100);
  }, [scrollLength]);
  console.log("read layout");
  return (
    <>
      <Nheader scrollLength={scrollLength} />
      <div className="w-full h-screen hidden xl:flex  justify-center overflow-hidden ">
        <div className="w-[70%] h-full  bg-no-repeat bg-cover  relative z-[-1]">
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
            className="w-full h-full relative z-[0]"
          >
            {data?.bg?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="lg:w-full w-[100vw] h-full relative z-[0] bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${item})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <motion.div
          animate={{ x: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className=" w-[30%]   right-[50px] p-0  h-full bg-purple-950 relative flex items-center justify-center  flex-col gap-5 z-[10]"
        >
          <div className="absolute w-full  h-full z-[10]">
            <Bubble width={"50vw"} />
          </div>
          <div className="absolute w-[50%]  h-[50%] z-[10] left-[-30vh] bottom-0 flex items-end ">
            <Bubble width={"30vh"} />
          </div>
          <div className="absolute w-full h-[150%] bg-purple-950 rotate-[30deg] lg:rotate-[30deg] left-[-60%] top-[1%] t "></div>
          <div
            className="incon absolute w-full h-full flex flex-col justify-center gap-4 left-[-22vh] top-0  pt-10"
            style={{
              top: `${top}vh`,
              left: `${left}vw`,
              right: `${right}vw`,
              bottom: `${bottom}vh`,
            }}
          >
            <h1 className="text-[40px] w-full font-titlefont text-white ml-[10vh]">
              {data?.h1}
            </h1>
            <h2 className="text-[#8843ff] ml-[10vh] w-full">{data?.h2}</h2>
            <p className="text-[15px] text-white ml-[10vh] w-full">
              {data?.p1}
            </p>
            <h2 className="text-[#8843ff] ml-[10vh] w-full">{data?.h3}</h2>
            <p className="text-[15px] text-white ml-[10vh] w-full">
              {data?.p2}
            </p>
            <p className="text-[15px] text-white ml-[10vh] w-full">
              {data?.p3}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="xl:hidden w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute w-[100vw]  h-full z-[10] bottom-[-50vh] overflow-hidden">
          <Bubble width={"50vw"} />
        </div>
        <div className="w-full h-[60vh]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-full relative z-[0]"
          >
            {data?.bg?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className=" w-[100vw] h-full relative z-[0] bg-no-repeat bg-cover aspect-square"
                  style={{ backgroundImage: `url(${item})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full min-h-[60vh]  before:z-[1] bg-purple-950 relative before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:bg-purple-950 before:top-[-20vh] lg:before:top-[-50vh]  before:rotate-[-15deg] lg:before:rotate-[-30deg]">
          <div className="incon absolute z-[20] bg-transparent w-full min-h-full flex flex-col justify-center gap-4  l  pt-10 lg:pl-[10vw]">
            <h1 className="text-[40px] w-full font-titlefont text-white ml-[10vh]">
              {data?.h1}
            </h1>
            <h2 className="text-[#8843ff] ml-[10vh]  w-[90%]">{data?.h2}</h2>
            <p className="text-[12px] text-white ml-[10vh]  w-[90%]">
              {data?.p1}
            </p>
            <h2 className="text-[#8843ff] ml-[10vh] w-[90%]">{data?.h3}</h2>
            <p className="text-[12px] text-white ml-[10vh] w-[90%]">
              {data?.p2}
            </p>
            <p className="text-[12px] text-white ml-[10vh] w-[90%]">
              {data?.p3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout1;
