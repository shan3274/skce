import React from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import {
  canteendata,
  healthcaredata,
  hosteldata,
  internetdata,
  librarydata,
  sportdata,
  transportdata,
} from "@/utils/facilitiesdata";
import Link from "next/link";
const Slidders1 = () => {
  let imgs = [
    "https://images.pexels.com/photos/415980/pexels-photo-415980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/963278/pexels-photo-963278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/842158/pexels-photo-842158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const datas = [
    canteendata,
    healthcaredata,
    hosteldata,
    internetdata,
    librarydata,
    sportdata,
    transportdata,
  ];

  console.log(datas[0].bg[0]);
  return (
    <div className="w-full  flex items-center justify-center pt-[20vh] relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="swiper_container w-[80%] h-[50vh]  relative"
      >
        {datas.map((item) => {
          return (
            <SwiperSlide
              style={{
                width: "50%",
                height: "0",
                position: "relative",
              }}
            >
              <img
                src={item?.bg[0]}
                loading="lazy"
                alt=""
                className=" w-full h-[50vh] object-cover rounded-2xl drop-shadow-2xl"
              />
              <Link href={item?.pathName}>
                <div className="absolute inset-0 z-[10] w-full h-[50vh] bg-black/10 flex flex-col justify-end pb-5 pl-5 gap-5 rounded-2xl">
                  <motion.h1 className="text-black font-michroma bg-white/80 backdrop-blur-xl w-[30%] text-[15px] py-2 pl-5 rounded-lg ">
                    {item?.h1}
                  </motion.h1>
                  <motion.p className="text-black font-titlefont p-5 bg-white/80 backdrop-blur-xl w-[50%] text-[12px] py-2 pl-5 rounded-lg">
                    {item?.p1}
                  </motion.p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slidders1;
