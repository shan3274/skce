import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";

const Internet = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const data = {
    h1: "INTERNET",
    p1: "All the laboratories are emphatically spacious and well furnished. The computer lab has more than 300 computers and Air-Conditioned with 24 hour internet facilities for the convenience of the students. All the labs are equipped with modern infrastructure.",

    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/30.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/31.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/32.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/34-1.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/33.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/internet01.png",
      "https://www.sreekrishnaengcollege.com/assets/img/internet.png",
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

export default Internet;
