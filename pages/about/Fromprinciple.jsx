import Footer from "@/components/Footer";
import Layout3 from "@/components/Layout3";
import Nheader from "@/components/Nheader";
import { getElement } from "@/utils/firebase";
import React, { useEffect, useState } from "react";

const Fromprinciple = () => {
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    setScrollLength(100);
  }, []);
  const data = getElement(
    "about/CVsB5xL9VXqTcPngbEi2/princilpledesk/IJJ2fG8Y7SKErDP1GwSt"
  );
  console.log(data?.position);
  return (
    <div>
      <Layout3 data={data} />
      <Footer />
    </div>
  );
};

export default Fromprinciple;
