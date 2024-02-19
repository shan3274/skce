import React, { useEffect, useState } from "react";
import Header from "./Header";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Hero = ({ scrollLength, currHeight }) => {
  const [width, setWidth] = useState(0);

  const [mouseText, setMouseText] = useState("one");

  useEffect(() => {
    setWidth(window.innerWidth);
    let heroContent = document.querySelector("#hero-content");
    let cursor = document.querySelector("#cursor");

    heroContent.addEventListener("mousemove", (path) => {
      if (path.pageX > width / 2) {
        setMouseText("third");
      } else if (path.pageX > width / 3 && path.pageX < width / 2) {
        setMouseText("second");
      } else {
        setMouseText("first");
      }

      gsap.to(cursor, {
        x: path.pageX,
        y: path.pageY,
      });
    });
    heroContent.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
      });
    });
    heroContent.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
      });
    });
  }, []);

  return (
    <>
      <main className="w-full  bg-[#bababa]  overflow-hidden text-white cursor-default relative">
        <div
          id="cursor"
          style={{ top: `${-scrollLength}px` }}
          className={`h-[7.5vw] w-[7.5vw] bg-white/30 backdrop-blur-sm rounded-full  fixed z-[9] flex items-center justify-center  translate-x-[-50%] translate-y-[-50%] cursor-pointer`}
        >
          <h5>{mouseText}</h5>
        </div>
        <video
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/MjgRnsb1qL_HD.mp4"
          autoPlay
          loop
          muted
          className="h-[100vh] w-[100vw] object-cover absolute z-[1]"
        ></video>
        <section
          id="hero-content"
          className="h-[100vh] w-[100vw] relative z-[10] flex flex-col justify-end items-center "
        >
          <Header />
          <h1
            className={
              scrollLength < 10
                ? "company fixed  top-[56vh] left-[15vw]    duration-700 text-[28vw] "
                : " company fixed top-[-9.1vh] duration-700  left-[2vw] text-[4vw]  lg:text-[4vw] text-black "
            }
          >
            <span>S</span>
            <span>K</span>
            <span>C</span>
            <span>E</span>
          </h1>
        </section>
        {scrollLength > 10 && (
          <div className=" absolute inset-0 h-[100vh] lg:w-[50vw] flex flex-col items-start pl-[10vw] justify-center  gap-5 z-[10]">
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
        )}
      </main>
    </>
  );
};

export default Hero;
