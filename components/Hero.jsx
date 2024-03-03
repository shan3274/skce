import React, { useEffect, useLayoutEffect, useState } from "react";
import Nheader from "./Nheader";
import useScroll from "./hooks/useScroll";


const Hero = () => {
  const scrollLength = useScroll();

  return (
    <div id="hero-content" className="w-full h-screen ">
      <Nheader scrollLength={scrollLength} />
      <main className=" w-full h-screen  bg-[#bababa] flex items-center justify-center  overflow-hidden text-white cursor-default relative">
        <div className="absolute w-[90%] lg:w-[50%] h-[40%] bg-black/30 z-[3] rounded-[50px] top-[30%] flex flex-col items-center justify-center gap-5 ">
          <h1 className="lg:text-[40px] text-[30px] font-sans lg:w-[60%] text-center font-[700]">
            Admissions Announcement 2023-24
          </h1>
          <button
           
            className="lg:text-[25px] font-sans px-5 py-3 bg-yellow-500 rounded-lg hover:scale-[1.05] duration-75 hover:bg-blue-500"
          >
            Apply Now
          </button>
        </div>
        <video
          src="bgv.mp4"
          autoPlay
          loop
          muted
          className=" h-[100vh] w-[100vw] object-cover absolute z-[1]"
        ></video>
        <section
          id="hero-content"
          className="h-[100vh] w-[100vw]  relative  flex flex-col justify-end items-center "
        ></section>
      </main>
    </div>
  );
};

export default Hero;
