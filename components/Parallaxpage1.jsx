import React, { useEffect, useRef, useState } from "react";
import chairman from "@/public/chairman.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallaxpage1 = ({ scrollLength, currHeight }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const first = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const second = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="absolute text-white z-[5] px-20 py-10"
      >
        <p> Welcome To</p>
        <div className="text-[25px] hover:scale-[1.03] duration-300 cursor-default">
          SREE KRISHNA COLLEGE OF ENGINEERING
        </div>
      </motion.div>
      <div
        className="w-full h-[100vh] overflow-hidden relative flex items-center justify-evenly bg-[#262626]"
        ref={ref}
      >
        {scrollLength > currHeight / 3 && (
          <motion.div
            animate={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            className="bg-blue-500 w-[70%] lg:w-[40%] absolute lg:top-0 top-[20vh] lg:relative lg:left-0 left-10 rounded-md overflow-hidden"
          >
            <Image
              src={chairman}
              className="rounded-md hover:scale-105 duration-300"
            />
          </motion.div>
        )}
        {scrollLength > currHeight / 3 && (
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-lg w-[70%] lg:w-[40%] h-[60%] absolute lg:top-[-22vh] top-[20vh] lg:relative lg:right-0 right-10 p-10 text-white"
            style={{ y: first }}
          >
            <motion.p
              animate={{ y: -100 }}
              transition={{ duration: 0.5 }}
              className="relative top-[100px]"
            >
              Sree Krishna College of Engineering in Vellore was inaugurated in
              August 2010 by Vellore District Collector Mr.S. Rajendran. SKCE is
              managed by Lord Sree Krishna Trust. The founder of the Trust, Dr.
              A. Aranganathan, is a socialist with rich experience in
              Educational Institutions. Having achieved an inevitable reputation
              in his own profession, a keen social activist and visionary, felt
              the need of higher education at affordable cost to everyone. The
              college excels in Infrastructure and has highly qualified and
              dedicated faculties and well equipped labs and library with huge
              number of collections and e-journals.
            </motion.p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Parallaxpage1;
