import React, { useEffect, useState } from "react";
import Nheader from "./Nheader";
import useScroll from "./hooks/useScroll";
import { FaHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= 6) i = 0;
      let value = i++;
      setCount(value);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLength = useScroll();

  return (
    <div id="hero-content" className="w-full h-screen relative">
      <Nheader scrollLength={scrollLength} />
      <main className="w-full h-screen bg-[#bababa] flex items-center justify-center overflow-hidden text-white cursor-default relative">
        <div className="absolute flex items-center w-full h-[40px] bg-black/30 backdrop-blur-sm z-[2] bottom-5">
          <div class="marquee-container">
            <div class="marquee-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              facere laborum repellat rerum neque, libero modi ratione natus
              corporis cupiditate non. Est consequatur atque quia error tempora
              quos assumenda sapiente. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque maiores eos voluptas officiis laudantium!
              Quis asperiores temporibus nostrum, debitis sed ea molestias?
              Tempore incidunt deleniti accusantium impedit adipisci rerum quos.
            </div>
          </div>
        </div>

        <AnimatePresence>
          {count % 2 === 0 ? (
            <motion.div
              key="vels"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-[90%] lg:w-[50%] h-[40%] bg-black/30 z-[3] rounded-[50px] top-[30%] flex flex-col items-center justify-center gap-5 duration-300"
            >
              <div className="flex items-center justify-center gap-5">
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
              key="admissions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
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
        </AnimatePresence>
        <video
          src="bgv.mp4"
          autoPlay
          loop
          muted
          className="h-[100vh] w-[100vw] object-cover absolute z-[1]"
        ></video>
      </main>
    </div>
  );
};

export default Hero;
