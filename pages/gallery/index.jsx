import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Nheader from "@/components/Nheader";
import { LayoutGrid } from "@/components/Picgrid";
import Footer from "@/components/Footer";
import Picgalary from "@/components/Picgalary";
import { cards, cards1 } from "@/utils/Gallerycard";
import { BackgroundBeams } from "@/utils/background-beams";

const index = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  return (
    <>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <BackgroundBeams />
      <Picgalary card={[cards, cards1]} />
      <Footer />
    </>
  );
};

export default index;
