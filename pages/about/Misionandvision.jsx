import Footer from "@/components/Footer";
import Layout3 from "@/components/Layout3";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState } from "react";

const Misionandvision = () => {
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    setScrollLength(100);
  }, [scrollLength]);
  const data = {
    h1: "OUR MISSION",
    p1: "Our mission is to offer excellent quality education with a high standard of academic excellence, academic support and developmental education courses and experiences designed to prepare students for success in transfer, technical education and to create a highly qualified pool of engineers who can play a vital role in technological innovations and work towards the benefit of society. We are committed to give Training activities and services to expand life skills and knowledge of our students.",
    h2: "OUR VISION",
    p2: "We mould our students techonologically superior, ethically strong and want them to be recognized as an international leader in engineering education, cutting-edge research, and the application of knowledge to benefit society locally and globally. The college aims to prepare students for employment and assists them in pursuing their educational, career and personal goals through a variety of learning opportunities. We always committed to achieve Student-centered learning, academic excellence, innovation, integrity and effective communication among students.",
    bg: [
      "https://images.unsplash.com/photo-1581092917372-d2db8f7904c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };
  return (
    <div>
      <Nheader scrollLength={scrollLength} />
      <Layout3 data={data} />
      <Footer />
    </div>
  );
};

export default Misionandvision;
