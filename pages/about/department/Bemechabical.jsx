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
import Layout1 from "@/components/Layout1";
import { mechdata } from "@/utils/Departmentdetails";
import Layout2 from "@/components/Layout2";
import { mechdatas } from "@/utils/layout2data";
const Bemechabical = () => {
  return (
    <div>
      <Layout1 data={mechdata} />
      <Layout2 data={mechdatas} />
      <Footer />
    </div>
  );
};

export default Bemechabical;
