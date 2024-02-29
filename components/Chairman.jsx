"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/Imageslider";

const Chairman = () => {
  const images = [
    "https://img.freepik.com/free-photo/chinese-city_1127-3682.jpg?t=st=1709234584~exp=1709238184~hmac=3ab6e4673d58a79b4d74f3ca605f92a797c4726bd97531cc3f84449d8e9136f0&w=1380",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt212d0e91f98751c5/60deab39a7778f4ac1bb405f/7e219b7de2d88da80bdd8bcc8eb789ec69b07604.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://lh3.googleusercontent.com/proxy/oRnXsmlJbE1PrqfAd0XPw1RpDfsyxdGvNCh5kOwV2LmfTfpzDZzqrKR66C5cnT26mi8uHVcOXAT1K79fXAw4ukKLP_uKXqjJAzx_1EJfEd5tDeeRDd_-MUQy-v4",
  ];

  let img1 = "https://www.sreekrishnaengcollege.com/assets/img/chairman.jpg";
  let img2 = "https://www.sreekrishnaengcollege.com/assets/img/library7.jpg";
  let img3 = "https://www.sreekrishnaengcollege.com/assets/img/library6.jpg";

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/50 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

const Images = ({ img }) => {
  return (
    <motion.img
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.4,
        type: "spring",
      }}
      src={img}
      className="w-[50%] rounded-xl drop-shadow-xl"
      alt=""
    />
  );
};
export default Chairman;
