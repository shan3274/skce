import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState } from "react";

const Misionandvision = () => {
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
  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full h-screen flex items-center justify-center overflow-hidden ">
        <div className="w-[70%] h-full bg-[url(https://images.unsplash.com/photo-1581092917372-d2db8f7904c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  flex items-center relative">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-0]"></div>

          <div className="text-white flex flex-col  relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[40px] ">OUR MISSION</h1>
            <p className="text-[13px]">
              Our mission is to offer excellent quality education with a high
              standard of academic excellence, academic support and
              developmental education courses and experiences designed to
              prepare students for success in transfer, technical education and
              to create a highly qualified pool of engineers who can play a
              vital role in technological innovations and work towards the
              benefit of society. We are committed to give Training activities
              and services to expand life skills and knowledge of our students.
            </p>
          </div>

          <div className="text-white flex flex-col  relative z-[1]  top-[5%] right-[15%]">
            <h1 className="text-[40px] ">OUR VISION</h1>
            <p className="text-[13px]">
              We mould our students techonologically superior, ethically strong
              and want them to be recognized as an international leader in
              engineering education, cutting-edge research, and the application
              of knowledge to benefit society locally and globally. The college
              aims to prepare students for employment and assists them in
              pursuing their educational, career and personal goals through a
              variety of learning opportunities. We always committed to achieve
              Student-centered learning, academic excellence, innovation,
              integrity and effective communication among students.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Misionandvision;
