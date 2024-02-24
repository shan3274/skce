import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";

const Hostel = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const data = {
    h1: "HOSTEL",
    p1: "Our college offers separate and sophisticated hostel facility for boys and girls in – campus and managed by experienced wardens, so that students feel homely.",
    p2: "Students are given hygenic food, clean environment and hostels are backed up with generators for 24 hour power backup and good drinking water facilities are provided throughout the campus.",
    p3: "Separate dining area for boys and girls. Indoor games and many more….",
    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-72.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-75-1.jpg",
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

export default Hostel;
