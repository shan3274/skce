import React, { useEffect, useState } from "react";
import Header from "./Header";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Hero = ({ scrollLength, currHeight }) => {
  return (
    <div id="hero-content" className="w-full h-screen">
      <main className=" w-full h-screen  bg-[#bababa]  overflow-hidden text-white cursor-default relative">
        <video
          src="main.mp4"
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
