import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";

const Canteen = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const data = {
    h1: "CANTEEN",
    p1: "Our college has a canteen/cafetaria for the benefit of the students and staff. It offers quality and many varities of food snacks, puffs, fresh juices, hot and cold beverages, Ice creams, stationaries, and also it is attached with a mini departmental store for the benefit of the students.",
    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/SREE-KRISHNA-COLLEGE-OF-ENGG-01.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/SREE-KRISHNA-COLLEGE-OF-ENGG-02.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/skcevellore11-1024x654.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/skcevellore12-1024x654.jpg",
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

export default Canteen;
