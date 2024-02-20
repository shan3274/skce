import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Enquery = () => {
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
  const [selValue, setSelValue] = useState("STUDENT");

  return (
    <div>
      {" "}
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full h-screen flex items-center justify-center overflow-hidden ">
        <div className="w-[70%] h-full bg-[url(https://plus.unsplash.com/premium_photo-1681487091177-2d8881ca4000?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  flex items-center relative">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-0]"></div>

          <div className="text-white flex flex-col  relative z-[1] top-[5%] right-[25%] gap-5">
            <h1 className="text-[40px] ">STUDENT ENQUIRY</h1>
            <input
              type="text"
              placeholder="Student Name"
              className="w-[120%] h-[40px] bg-transparent border rounded-full pl-5 text-[13px]"
            />
            <input
              type="text"
              placeholder="Roll No"
              className="w-[120%] h-[40px] bg-transparent border rounded-full pl-5 text-[13px]"
            />
            <textarea
              placeholder="Your Requirement / Complaint"
              className="w-[120%] h-[100px] bg-transparent border rounded-xl p-3 text-[13px] resize-none"
            />
            <button className="w-[150px] h-[40px] bg-green-500 text-white rounded-xl duration-300 hover:scale-[1.03]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enquery;
