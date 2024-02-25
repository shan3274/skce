import React, { useEffect, useLayoutEffect, useState } from "react";
import Nheader from "./Nheader";
import useScroll from "./hooks/useScroll";

const Hero = () => {
  const scrollLength = useScroll();
  console.log("hero rerendered");
  return (
    <div id="hero-content" className="w-full h-screen">
      <Nheader scrollLength={scrollLength} />
      <main className=" w-full h-screen  bg-[#bababa]  overflow-hidden text-white cursor-default relative">
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
