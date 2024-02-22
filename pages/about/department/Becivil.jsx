import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import { AiOutlineSend } from "react-icons/ai";

import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import React, { useEffect, useState, useRef } from "react";
import { TabsDemo } from "@/components/Tabs";
const Becivil = () => {
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

  const [selOption, setSelOption] = useState("FACULTY LIST");

  const sh = [
    {
      sno: "1",
      name: "MR. PADMANABAN",
      qualification: "MSC.,M.Phil.",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",

      qualification: "MSC,M.Phil",
    },
  ];
  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full h-screen flex items-center justify-center overflow-hidden ">
        <div className="w-[70%] h-full  bg-no-repeat bg-cover  flex items-center relative">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-full relative"
          >
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-10.jpg)]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-23.jpg)]"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-[1]"></div>

          <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[30px] font-titlefont ">
              B.E CIVIL ENGINEERING
            </h1>
            <h2 className="text-[#8843ff]">
              NAAN MUDALVAN SCHEME - CONSTRUCTION/STRUCTURAL DESIGN
            </h2>
            <p className="text-[13px] text-justify">
              The Civil Engineering Department, have established at the
              equipment cost Rs. 48 lakhs, contains Survey Laboratory, Strength
              of Material Laboratory, Applied Hydraulics Laboratory, Computer
              Aided Design Laboratory.From the pyramids of Egypt to the
              international space station, civil engineers have always faced the
              challenges of the future – advancing civilization and building our
              quality of life. Civil engineers are in the forefront of
              technology. <br /> <br />
              They are the leading users of sophisticated high-tech products –
              applying the very latest concepts in computer-aided design (CAD)
              during design, construction, project scheduling, and cost control.
              Civil engineers are problem solvers, meeting the challenges of
              pollution, traffic congestion, drinking water and energy needs,
              urban redevelopment, and community planning. A civil engineer will
              perform a vital role in linking these themes and improving quality
              of life for the 21st century. The department in our college has
              qualified staff members and excellent lab facilities.
            </p>
          </div>
        </div>
      </div>
     
      <div className="w-[100vw] min-h-screen overflow-scroll duration-300 flex flex-col items-center  pb-10 gap-10 bg-purple-950 ">
        <TabsDemo />
      </div>
      <Footer />
    </div>
  );
};

export default Becivil;
