import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";
import { canteendata } from "@/utils/facilitiesdata";
import Layout3 from "@/components/Layout3";

const Canteen = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <Layout3 data={canteendata} />
      <Footer />
    </div>
  );
};

export default Canteen;
