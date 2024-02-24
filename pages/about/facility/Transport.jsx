import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";

const Treansport = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const data = {
    h1: "TRANSPORT",
    p1: "A fleet of buses are provided for the benefit of the students and staff covering all the areas of vellore district to reach the college safely on time.",
    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/skcevellore14-1024x654.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/skcevellore13-1024x654.jpg",
    ],
  };

  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <Layout1 data={data} />
      <Footer />
    </div>
  );
};

export default Treansport;
