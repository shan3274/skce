import Loader from "@/components/Loader";
import React, { useEffect, useState } from "react";
import {} from "@react-spring/web";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Hero from "@/components/Hero";
import Searchbox from "@/components/Searchbox";
import Parallaxpage1 from "@/components/Parallaxpage1";
import Parallaxpage2 from "@/components/Parallaxpage2";
import Facilities from "@/components/Facilities";
import Help from "@/components/Help";
import Footer from "@/components/Footer";

const index = () => {
  const [loader, setLoader] = useState(true);

  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    const handleScroll = () => {
      const calculatedScrollLength = window.scrollY;
      setScrollLength(calculatedScrollLength);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);
  console.log(scrollLength);

  useEffect(() => {}, []);
  return loader ? (
    <AnimatePresence>
      <motion.div key="loader">
        <Loader setLoading={setLoader} />
      </motion.div>
    </AnimatePresence>
  ) : (
    <div id="main-container">
      <Hero scrollLength={scrollLength} currHeight={currHeight} />
      <Searchbox scrollLength={scrollLength} currHeight={currHeight} />
      <Parallaxpage1 scrollLength={scrollLength} currHeight={currHeight} />
      <Facilities scrollLength={scrollLength} currHeight={currHeight} />
      <Help scrollLength={scrollLength} currHeight={currHeight} />
      <Footer scrollLength={scrollLength} currHeight={currHeight} />
    </div>
  );
};

export default index;

// import React from "react";

// import { motion } from "framer-motion";

// const index = () => {
//   return (
//     <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col  text-white justify-center items-center">
//       <div className="flex">
//         <motion.p
//           className="flex text-[25vw] relative top-[-200px]"
//           transition={{ duration: 1, bounce: 5 }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           animate={{ y: 200 }}
//         >
//           S
//         </motion.p>
//         <motion.p
//           className="flex text-[25vw] relative left-[200px]"
//           transition={{ duration: 1.2 }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           animate={{ x: -200 }}
//         >
//           H
//         </motion.p>
//         <motion.p
//           className=" text-[25vw] relative top-[200px]"
//           transition={{ duration: 1.3 }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           animate={{ y: -200 }}
//         >
//           A
//         </motion.p>
//         <motion.p
//           className="flex text-[25vw] relative left-[-200px]"
//           transition={{ duration: 1.4 }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           whileHover={{ scale: 1.2 }}
//           animate={{ x: 200 }}
//         >
//           N
//         </motion.p>
//       </div>
//     </div>
//   );
// };

// export default index;
