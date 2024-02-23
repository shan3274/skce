import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useScroll,
  useTransform,
} from "framer-motion";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Help from "@/components/Help";
import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Chairman from "@/components/Chairman";
import Nloader from "@/components/Nloader";
import Chatbox from "@/components/Chatbox";
import Result from "@/components/Result";

const index = () => {
  const [loader, setLoader] = useState(true);

  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    const handleScroll = () => {
      const calculatedScrollLength = window.scrollY;
      setScrollLength(calculatedScrollLength);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  useEffect(() => {
    gsap.fromTo(
      ".loadingpage",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 2,
      }
    );
    gsap.fromTo(
      ".img",
      { y: 100, opacity: 1 },
      {
        y: 0,
        opacity: 1,
        duration: 3.5,
        delay: 0.5,
        opacity: 0,
      }
    );

    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return (
    <>
      <div id="main-container " className="bg-transparent">
        {loader && (
          <div className="fixed w-full h-screen top-0 left-0 z-[9999]">
            <div className="loadingpage w-full h-screen flex items-center justify-center bg-[#000000] flex-col gap-10">
              <img className="img w-[70%] lg:w-[50%]" src="logo.png" alt="" />
            </div>
          </div>
        )}
        <Nheader scrollLength={scrollLength} currHeight={currHeight} />
        <Hero scrollLength={scrollLength} currHeight={currHeight} />
        <Result scollLength={scrollLength} currentHieght={currHeight} />
        <Chairman scrollLength={scrollLength} currHeight={currHeight} />
        <Facilities scrollLength={scrollLength} currHeight={currHeight} />
        <Help scrollLength={scrollLength} currHeight={currHeight} />
        <Footer scrollLength={scrollLength} currHeight={currHeight} />
        <Chatbox />
      </div>
    </>
  );
};
export default index;
