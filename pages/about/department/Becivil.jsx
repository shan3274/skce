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

import React from "react";

import Layout1 from "@/components/Layout1";
import { civildata } from "@/utils/Departmentdetails";
import Layout2 from "@/components/Layout2";
import { civildatas } from "@/utils/layout2data";

const Becivil = () => {
  return (
    <div>
      <Layout1 data={civildata} />
      <Layout2 data={civildatas} />
      <Footer />
    </div>
  );
};

export default Becivil;
