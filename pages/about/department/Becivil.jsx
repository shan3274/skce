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
import Layout1 from "@/components/Layout1";
const Becivil = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
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

  const data = {
    h1: "B.E CIVIL ENGINEERING",
    h2: "NAAN MUDALVAN SCHEME - CONSTRUCTION/STRUCTURAL DESIGN",
    p1: "The Civil Engineering Department, have established at the equipment cost Rs. 48 lakhs, contains Survey Laboratory, Strength of Material Laboratory, Applied Hydraulics Laboratory, Computer Aided Design Laboratory.From the pyramids of Egypt to the international space station, civil engineers have always faced the challenges of the future – advancing civilization and building our quality of life. Civil engineers are in the forefront of technology.",
    p2: "They are the leading users of sophisticated high-tech products – applying the very latest concepts in computer-aided design (CAD) during design, construction, project scheduling, and cost control. Civil engineers are problem solvers, meeting the challenges of pollution, traffic congestion, drinking water and energy needs,  urban redevelopment, and community planning. A civil engineer will perform a vital role in linking these themes and improving quality of life for the 21st century. The department in our college has  qualified staff members and excellent lab facilities.",

    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-10.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-23.jpg",
    ],
  };
  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <Layout1 data={data} />

      <div className="w-[100vw] min-h-screen overflow-scroll duration-300 flex flex-col items-center  pb-10 gap-10 bg-purple-950 ">
        <TabsDemo />
      </div>
      <Footer />
    </div>
  );
};

export default Becivil;
