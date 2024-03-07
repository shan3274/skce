import React from "react";
import ScrollableSVG from "../ScrollableSVG";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Left1 = ({ count, bgColor, data }) => {
  const route = useRouter();
  return (
    <div
      className="w-[50%] relative h-full rounded-b-[70px]   flex flex-col items-start justify-center gap-5 drop-shadow-xl pl-5"
      style={{
        background: `${bgColor}`,
      }}
    >
      <div
        className="absolute w-[40%] h-[40%]  top-[20vh] right-[-20%] rounded-[100%] flex items-center justify-center"
        style={{
          background: `${bgColor}`,
        }}
      >
        <ScrollableSVG count={count} />
        <motion.div
          animate={{ x: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative left-[-50px] text-white w-[60%] text-center font-titlefont"
        >
          {data.h1}
        </motion.div>
      </div>
      <motion.div
        animate={{ y: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative top-[-50px] text-white w-[60%] text-[30px] text-left font-titlefont"
      >
        {data.h1}
      </motion.div>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative left-[-50px] text-white w-[60%] text-[17px] text-left font-titlefont"
      >
        {data.h2}
      </motion.div>

      <motion.div
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative left-[-50px] text-white w-[60%] text-[12px] text-justify font-titlefont"
      >
        {data.p1}
      </motion.div>
      <motion.div
        animate={{ x: -50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative left-[50px] text-white w-[60%] text-[12px] text-justify font-titlefont"
      >
        {data.p2}
      </motion.div>
      <motion.div
        animate={{ x: -50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative left-[50px] text-white w-[60%] text-[12px] text-justify font-titlefont"
      >
        {data.p3}
      </motion.div>
      <motion.button
        onClick={() => route.push(data.pathName)}
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className=" relative left-[-50px] w-[150px] h-[40px] font-titlefont bg-white rounded-3xl drop-shadow-lg"
      >
        Read more
      </motion.button>
    </div>
  );
};

export default Left1;
