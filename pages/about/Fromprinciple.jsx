import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState } from "react";

const Fromprinciple = () => {
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
        <div className="w-[70%] h-full bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Principal.jpg)] bg-no-repeat bg-cover  flex items-center relative">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
          <div className="absolute bottom-[10vh]  left-[10vh] w-[40vw] h-[20vh] bg-white/50 backdrop-blur-md rounded-md flex flex-col p-5 justify-around">
            <h1 className="text-[30px] font-titlefont  text-[#332388]">
              PROF.DR.S.SRINIVASA RAO MADANE
            </h1>
            <p className="text-[#000000] ">
              M.TECH(ECE),M.TECH(ECE),PH.D(ECE),MISTE,MIEEE,MIETE
            </p>
            <p className="text-[#332388] font-titlefont">PRINCIPAL</p>
          </div>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-0]"></div>

          <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[40px] font-titlefont ">PRINCIPAL’S DESK</h1>
            <h2 className="text-[#8843ff]">
              “Whatever you can do or dream you can do, begin it. Boldness has
              genius, power and magic in it. Begin it now.”
            </h2>
            <p className="text-[13px]">
              It gives me a very great pleasure to reach out to you through this
              website on behalf of our SKCE. Our campus situated in a clean
              green environment situated at a distance of just 25 KM from
              Katpadi railway station and VIT Vellore and also just 10 KM from
              Sripuram well known Golden temple. Our college is well connected
              to all major cities in Tamilnadu Karnataka and Andhra Pradesh by
              roadways and Railways . Our vast serene campus includes well
              ventilated class rooms, well equipped laboratories, a state – of –
              the – art library with over a collection of 10,000 Books
              ,Magazine, National and international journals. High end computers
              with high speed internet connection, separate hostel for boys and
              girls, high profile faculties in all the departments and other
              associated facilities.
            </p>
            <h2 className="text-[#8843ff]">
              “Be a student as long as you still have something to learn, and
              this will mean all your life”.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fromprinciple;
