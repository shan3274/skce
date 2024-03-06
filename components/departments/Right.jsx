import React from "react";
import { motion } from "framer-motion";
const Right = ({ data, count }) => {
  const color = [
    "rgb(27,38,54)",
    "rgb(25,39,148)",
    "rgb(46,24,153)",
    "rgb(156,101,219)",
    "rgb(16,107,181)",
    "rgb(189,89,127)",
  ];
  return (
    <div
      className="w-[50%] h-full flex flex-col items-center justify-center bg-white relative z-[-1] duration-300"
      style={{
        backgroundColor: `${color[count]}`,
      }}
    >
      <motion.img
        src={data.bg[0]}
        animate={{ x: -50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute w-[60%] right-16 top-[15vh] rounded-lg"
      />
      <motion.img
        src={data.bg[1]}
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute w-[60%]  bottom-[10vh] rounded-lg"
      />
    </div>
  );
};

export default Right;
