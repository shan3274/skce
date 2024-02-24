import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";

const Healthcare = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const data = {
    h1: "HEALTH CARE",
    p1: "The SKCE has dedicated medical centre. Dr. P. Balakrishnan visits once in a week and consult the students and staff. Furthermore, the sufficient quantities of medicine are kept in the medical centre. The normal complaints like fever, dysentery, head ache etc will be met by stored medicine. A Maruthi van is available to take the student in the case of emergency situations.",
    p2: "As we are highly concern about the health of our students we have routine health check up for them every week through a well qualified and experienced Doctor in our campus through our well equipped health centre.",
    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/skcevellore10.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/skcevellore09.jpg",
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

export default Healthcare;
