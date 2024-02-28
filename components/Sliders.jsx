import React, { useEffect, useState } from "react";
import Imageshow from "./Imageshow";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  canteendata,
  healthcaredata,
  hosteldata,
  internetdata,
  librarydata,
  sportdata,
  transportdata,
} from "@/utils/facilitiesdata";

export const Sliders = () => {
  const datas = [
    canteendata,
    healthcaredata,
    hosteldata,
    internetdata,
    librarydata,
    sportdata,
    transportdata,
  ];
  const imageUrls = [
    datas[0]?.bg[0],
    datas[1]?.bg[0],
    datas[2]?.bg[0],
    datas[3]?.bg[0],
    datas[4]?.bg[0],
    datas[5]?.bg[0],
  ];

  const [imgs, setImgs] = useState([datas[0].bg[0], datas[0].bg[1]]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    setInterval(() => {
      if (c > imageUrls.length - 2) {
        c = 0;
        setImgs([]);
      }
      c++;
      setImgs((olded) => [...olded, imageUrls[c + 2]]);

      setCount(c);
    }, 4000);

    const img = document.querySelector("#img");

    console.log(window.innerWidth);
  }, []);

  let w = 17;

  return (
    <div className="w-full h-screen flex items-center justify-start relative overflow-hidden">
      <div className="absolute sm:w-[100%] sm:h-[80%] flex items-center justify-start ">
        <Imageshow bg={imageUrls[count - 1]} />
      </div>
      <div className="absolute w-[50vw]  z-[10] sm:right-[10vw] bottom-[25vh]">
        <div
          className="relative  w-full h-full flex gap-5  items-center      duration-300"
          style={{
            right: `${count * w}vw`,
          }}
        >
          {imageUrls.map((item, key) => {
            return (
              <motion.img
                src={item}
                alt=""
                animate={{
                  scale: key <= count ? 0 : 1,
                }}
                transition={{ duration: -1, type: "spring" }}
                className="drop-shadow-2xl relative  w-[15vw] aspect-[16/9] transition-[1s]    rounded-xl"
              />
            );
          })}
        </div>
      </div>
      {count == 0 && <Imageshow bg={imageUrls[0]} data={datas[0]} />}
      {count == 1 && <Imageshow bg={imageUrls[1]} data={datas[1]} />}
      {count == 2 && <Imageshow bg={imageUrls[2]} data={datas[2]} />}
      {count == 3 && <Imageshow bg={imageUrls[3]} data={datas[3]} />}
      {count == 4 && <Imageshow bg={imageUrls[4]} data={datas[4]} />}
      {count == 5 && <Imageshow bg={imageUrls[5]} data={datas[5]} />}
    </div>
  );
};

export default Sliders;
