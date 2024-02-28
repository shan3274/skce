import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Imageshow = ({ bg, data }) => {
  return (
    data?.pathName && (
      <Link
        className="w-full h-screen flex items-center justify-start relative overflow-hidden"
        href={data?.pathName}
      >
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="sm:w-[80%]  sm:h-[80%] flex items-center justify-center relative "
        >
          <div className="w-[80%] aspect-[16/9] absolute  z-[1]">
            <div className=" w-full h-[65vh]  flex justify-end pb-5  pl-5 overflow-hidden flex-col gap-5">
              <motion.p
                animate={{ y: 100 }}
                transition={{ duration: 0.5 }}
                className="text-black bg-white/30 w-[50%] backdrop-blur-md font-michroma text-[40px] py-2 px-3 rounded-md relative top-[-100px] "
              >
                {data?.h1}
              </motion.p>
              <motion.p
                animate={{ y: 100 }}
                transition={{ duration: 0.5 }}
                className="text-black bg-white/30 backdrop-blur-md font-michroma text-[14px]  py-2 px-3 rounded-md w-[50%] relative top-[-100px]"
              >
                {data?.p1}
              </motion.p>
            </div>
          </div>
          <Image
            loader={() => (bg = bg)}
            src={bg}
            width={0}
            height={0}
            className="w-[80%] aspect-[16/9]  drop-shadow-2xl imgshd"
          />
        </motion.div>
      </Link>
    )
  );
};

export default Imageshow;
