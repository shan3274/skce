import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getElement } from "@/utils/firebase";
const Right = ({ data, count, color }) => {
  return (
    color != undefined && (
      <div
        className="w-[50%] h-full flex flex-col items-center justify-center bg-white relative z-[-1] duration-300 rounded-br-[70px]"
        style={{
          backgroundColor: `${color[count]}`,
        }}
      >
        <motion.div
          animate={{
            width: "45%",
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="flex items-end justify-center w-[25%]  h-[60%] bg-black rounded-[50px] bg-cover relative left-10 "
          style={{
            backgroundImage: `url(${data.bg[0]})`,
          }}
        >
          <h1 className="absolute z-[3] bottom-6 text-white bg-black/30 backdrop-blur-lg px-3 py-1 rounded-full">
            hello
          </h1>
        </motion.div>
      </div>
    )
  );
};

export default Right;
