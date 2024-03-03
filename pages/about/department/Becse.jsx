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
import { BackgroundBeams } from "@/utils/background-beams";
import Layout1 from "@/components/Layout1";
import Layout2 from "@/components/Layout2";
import { csedata } from "@/utils/layout2data";

const Becse = () => {
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

  const data = {
    h1: "B.E- COMPUTER SCIENCE AND ENGINEERING",
    h2: "NAAN MUDALVAN SCHEME - IOT/DATA SCIENCE/CYBER SECURITY",
    p1: "The Computer Science and Engineering Department, have established at the equipment cost Rs. 45 lakhs, contains Computer Practice Laboratory, Object Oriented Programmes Laboratory, Data structures Laboratory, Operating System Laboratory and Data Base Management Laboratory.",
    p2: "The department has well qualified, experienced, dedicted faculty members and Independent Library for staff & students. Our Department was ensuring better teacher student ratio so that a personal attention is given to each student. The students are provided with the facility to gain practical experience by arranging industrial visits, In-Plant Training & Software Courses. The Department is equipped with full-fledged computer labs consisting of more than 300 PC Systems. The Department also organises Guest Lectures, Seminars and training Programmes by experts from Nationaly and internationally reputed software development organizations such as TCS, CTS, IBM Wipro etc.",

    bg: [
      "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-57.jpg",
      "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-58.jpg",
    ],
  };
  return (
    <div className="">
      <Layout1 data={data} top={"5"} />

      <Layout2 data={csedata} />

      <Footer />
    </div>
  );
};

export default Becse;
