import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { preLoaderAnim } from "./Animations";

// variant
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }) => {
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 4000);
  //     return () => clearTimeout(timer);
  //   });

  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <motion.div
      className="w-full h-screen  preloader    absolute top-0 left-0"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ ease: "anticipate", duration: 1 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="fixed top-[56vh] left-[15vw] lg:top-[26vh] lg:left-[15vw] flex items-center justify-center gap-2">
        <Singletext text={"S"} variants={item} />
        <Singletext text={"K"} variants={item} />
        <Singletext text={"C"} variants={item} />
        <Singletext text={"E"} variants={item} />
      </div>
    </motion.div>
  );
};

const Singletext = ({ text, variants }) => {
  return (
    <motion.div className="" variants={variants}>
      <p className="loader-text text-[28vw]">{text}</p>
    </motion.div>
  );
};

export default Loader;
