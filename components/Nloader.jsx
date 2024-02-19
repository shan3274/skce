import Image from "next/image";
import React, { useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import img1 from "@/public/images/image-1.jpg";
import img2 from "@/public/images/image-2.jpg";
import img3 from "@/public/images/image-3.jpg";
import img4 from "@/public/images/image-4.jpg";
import main_image from "@/public/images/image-4.jpg";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
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
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
};

const Nloader = ({ setLoading }) => {
  return (
    <LayoutGroup id="loader">
      {" "}
      <motion.div className="loader">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="loader-inner"
          onAnimationComplete={() => setLoading(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.6,
            }}
            exit={{
              opacity: 0,
              y: -200,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            className={`image-block image-1`}
          >
            <Image src={img1} width={300} />;
          </motion.div>
          <motion.div
            className={`image-block  absolute left-[30vw] top-[20vh] `}
            layoutId="main-image-1"
            variants={itemMain}
            exit={{
              scale: 6,
              x: 100,
              y: 100,
            }}
            transition={{ duration: 1 }}
          >
            <Image src={main_image} width={300} layoutId="main-image-1" />;
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.6,
            }}
            exit={{
              opacity: 0,
              y: -200,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            variants={item}
            className={`image-block image-2`}
          >
            <Image src={img2} width={300} />;
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.6,
            }}
            exit={{
              opacity: 0,
              y: -200,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            variants={item}
            className={`image-block image-3`}
          >
            <Image src={img3} width={300} />;
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.6,
            }}
            exit={{
              opacity: 0,
              y: -200,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            variants={item}
            className={`image-block image-4`}
          >
            <Image src={img4} width={300} />;
          </motion.div>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};

export default Nloader;
