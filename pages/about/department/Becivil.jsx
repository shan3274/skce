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
import { civildata } from "@/utils/Departmentdetails";

const Becivil = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const [selOption, setSelOption] = useState("FACULTY LIST");

  return (
    <div>
      <Layout1 data={civildata} />

      <div className="w-[100vw] min-h-screen overflow-scroll duration-300 flex flex-col items-center  pb-10 gap-10 bg-purple-950 ">
        <TabsDemo />
      </div>
      <Footer />
    </div>
  );
};

export default Becivil;
