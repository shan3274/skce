import React, { useEffect, useState } from "react";
import Header from "./Header";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Hero = ({ scrollLength, currHeight }) => {
  return (
    <>
      <main className="w-full h-screen  bg-[#bababa]  overflow-hidden text-white cursor-default relative">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/skce-fbc64.appspot.com/o/videos%2FIISER%20Thiruvananthapuram%20Drone%20Shots%20_%20Most%20Beautiful%20Campus%20in%20India%20(1).mp4?alt=media&token=b74671e3-fe2b-431d-a96d-34bb12e3d460"
          autoPlay
          loop
          muted
          className="h-[100vh] w-[100vw] object-cover absolute z-[1]"
        ></video>
        <section
          id="hero-content"
          className="h-[100vh] w-[100vw] relative  flex flex-col justify-end items-center "
        ></section>

        <div className=" absolute inset-0 h-[100vh] lg:w-[50vw] flex flex-col items-start pl-[10vw] justify-center  gap-5 z-[1]">
          <motion.p
            animate={{ y: -100 }}
            transition={{ duration: 1 }}
            className="relative top-[100px]"
          >
            Welcome To SREE KRISHNA COLLEGE OF ENGINEERING
          </motion.p>
          <motion.a
            href="#"
            animate={{ y: -100 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-[.5px] border-white py-[1.5vh] px-[2vw] relative top-[100px] duration-300 hover:bg-black hover:scale-[1.5] z-[10]"
          >
            Get more
          </motion.a>
        </div>
      </main>
    </>
  );
};

export default Hero;
