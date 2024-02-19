import Loader from "@/components/Loader";
import React, { useEffect, useRef, useState } from "react";
import {} from "@react-spring/web";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useScroll,
  useTransform,
} from "framer-motion";
import Hero from "@/components/Hero";
import Searchbox from "@/components/Searchbox";
import Parallaxpage1 from "@/components/Parallaxpage1";
import Parallaxpage2 from "@/components/Parallaxpage2";
import Facilities from "@/components/Facilities";
import Help from "@/components/Help";
import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Chairman from "@/components/Chairman";
import Nloader from "@/components/Nloader";
import Chatbox from "@/components/Chatbox";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

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

  return loader ? (
    <AnimatePresence>
      <motion.div key="loader">
        <Loader setLoading={setLoader} />
      </motion.div>
    </AnimatePresence>
  ) : (
    <>
      <div id="main-container " className="bg-transparent">
        <Nheader scrollLength={scrollLength} currHeight={currHeight} />
        <Hero scrollLength={scrollLength} currHeight={currHeight} />

        <div className="fixed top-0 w-full h-screen bg-[#ffffff] flex items-center justify-center">
          <h1> hello</h1>
        </div>
        <Chairman scrollLength={scrollLength} currHeight={currHeight} />
        <Facilities scrollLength={scrollLength} currHeight={currHeight} />
        <Help scrollLength={scrollLength} currHeight={currHeight} />
        <Footer scrollLength={scrollLength} currHeight={currHeight} />
        <Chatbox />
      </div>
    </>
  );
};
export default index;

// import Nloader from "@/components/Nloader";
// import React, { useState } from "react";
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// import main_image from "@/public/images/image-4.jpg";
// import Image from "next/image";

// const index = () => {
//   const [loader, setLoader] = useState(true);
//   return (
//     <LayoutGroup id="main">
//       <AnimatePresence>
//         {loader && (
//           <motion.div className="" key="loader">
//             <Nloader setLoader={setLoader} />
//           </motion.div>
//         )}

//         {!loader && (
//           <motion.div className="transition-image final" layoutId="main">
//             <Image src={main_image} width={600} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </LayoutGroup>
//   );
// };

// export default index;
