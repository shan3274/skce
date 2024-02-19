import React, { useEffect, useRef, useState } from "react";
import chairman from "@/public/chairman.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallaxpage2 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    const handleScroll = () => {
      const calculatedScrollLength = window.scrollY;
      setScrollLength(Math.min(calculatedScrollLength, window.innerWidth));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  const first = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const second = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="w-full h-[100vh] lg:h-[60vh] flex flex-col items-center justify-evenly">
      <h1>University Exam Result April/May-2022 Final year 💯%Result</h1>
      <div className="w-[80%] h-full lg:h-[60%] flex flex-col lg:flex-row items-center gap-3 justify-evenly">
        <div className="w-[20%] h-[50%] bg-white drop-shadow-lg flex items-center justify-center">
          <h1>MANDATORY DISCLOSURE</h1>
        </div>
        <div className="w-[20%] h-[50%] bg-white drop-shadow-lg flex items-center justify-center">
          <h1>AICTE ESSENTIALS</h1>
        </div>
        <div className="w-[20%] h-[50%] bg-white drop-shadow-lg flex items-center justify-center">
          <h1>AICTE APPROVALS</h1>
        </div>
        <div className="w-[20%] h-[50%] bg-white drop-shadow-lg flex items-center justify-center">
          <h1>APPROVAL</h1>
        </div>
      </div>
    </div>
  );
};

export default Parallaxpage2;
