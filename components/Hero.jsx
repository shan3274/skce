import React, { useEffect, useState } from "react";
import Nheader from "./Nheader";
import useScroll from "./hooks/useScroll";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i >= 6) i = 0;
      let value = i++;
      setCount(value);
    }, 3000);
  }, []);
  const scrollLength = useScroll();

  return (
    <div id="hero-content" className="w-full h-screen ">
      <Nheader scrollLength={scrollLength} />
      <main className=" w-full h-screen  bg-[#bababa] flex items-center justify-center  overflow-hidden text-white cursor-default relative">
        {count % 2 == 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="absolute w-[90%] lg:w-[50%] h-[40%] bg-black/30 z-[3] rounded-[50px] top-[30%] flex flex-col items-center justify-center gap-5 duration-300"
          >
            <div className=" flex items-center justify-center gap-5">
              <img
                src="https://vistas.ac.in/wp-content/uploads/2021/01/New-Project-27.png"
                alt=""
                className="w-[250px]"
              />
              <FaHandshake size={30} />
              <img
                src="https://www.sreekrishnaengcollege.com/assets/img/logo.png"
                alt=""
                className="w-[250px]"
              />
            </div>
            <h1 className="lg:text-[40px] text-[30px] font-sans lg:w-[60%] text-center font-[700]">
              Tied up with VELS
            </h1>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="absolute w-[90%] lg:w-[50%] h-[40%] bg-black/30 z-[3] rounded-[50px] top-[30%] flex flex-col items-center justify-center gap-5 duration-300"
          >
            <h1 className="lg:text-[40px] text-[30px] font-sans lg:w-[60%] text-center font-[700]">
              Admissions Announcement 2023-24
            </h1>
            <button className="lg:text-[25px] font-sans px-5 py-3 bg-yellow-500 rounded-lg hover:scale-[1.05] duration-75 hover:bg-blue-500">
              Apply Now
            </button>
          </motion.div>
        )}
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
