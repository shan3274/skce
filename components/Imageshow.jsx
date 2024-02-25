import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Imageshow = ({ bg }) => {
  return (
    <motion.div
      initial={{ scale: 0.3 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="sm:w-[80%] sm:h-[80%] flex items-center justify-center"
    >
      <Image
        loader={() => (bg = bg)}
        src={bg}
        width={0}
        height={0}
        className="w-[80%] rounded-xl drop-shadow-2xl imgshd"
      />
    </motion.div>
  );
};

export default Imageshow;
