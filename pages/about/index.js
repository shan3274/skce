import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";

import Head from "next/head";

const index = () => {
  console.log("something went wrong");

  const data = {
    h1: "Welcome To",
    h2: "SREE KRISHNA COLLEGE OF ENGINEERING",

    p2: "  Sree Krishna College of Engineering in Vellore was inaugurated in August 2010 by Vellore District Collector Mr.S. Rajendran. SKCE is managed by Lord Sree Krishna Trust. The founder of the Trust, Dr. A. Aranganathan, is a socialist with rich experience in Educational Institutions. Having achieved an inevitable reputation in his own profession, a keen social activist and visionary, felt the need of higher education at affordable cost to everyone.",
    h3: "The college excels in Infrastructure and has highly qualified and dedicated faculties and well equipped labs and library with huge number of collections and e-journals.",
    bg: [
      "https://images.pexels.com/photos/1025401/pexels-photo-1025401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
    ],
  };
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
      <Layout1 data={data} />
      <div className=" w-full sm:w-full flex items-center justify-center h-[20vh] text-[#8541FB]">
        <h1 className="font-titlefont text-[50px] font-[700]">
          Students Review
        </h1>
      </div>
      <div className="w-full  h-[100vh] lg:h-[60vh] relative ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={600}
          parallax={true}
          modules={[Parallax, Pagination, Autoplay]}
          className="mySwiper w-full h-full"
        >
          <div
            slot="container-start"
            className="parallax-bg w-full h-full"
            style={{
              "background-image":
                "url(https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center gap-10 bg-black/50">
              <div className="lg:w-[40%] w-[90%]  lg:h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
                <img
                  src="https://www.sreekrishnaengcollege.com/assets/img/team/1.jpg"
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="w-[70%] h-[90%] flex flex-col gap-3 justify-between text-white">
                  <p>
                    Staff of SKCE provide us with opportunity to bring out our
                    talent and motivate us to involve ourselves in various
                    competitive examinations and other value added programmes
                    for the development of students.
                  </p>
                  <div className="">
                    <h4>L. GOPINATH,</h4>
                    <span className="text-red-700">II MECHANICAL DEPT</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] w-[90%]   xl:h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
                <img
                  src="https://www.sreekrishnaengcollege.com/assets/img/team/1.jpg"
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="w-[70%] h-[90%] flex flex-col gap-3 justify-between text-white">
                  <p>
                    I am very happy joining SKCE. Our College has excellent and
                    expert staff members having rich experience in research and
                    teaching. Our staff are devoted to develop among students
                    the communication skill in English. We have well equipped
                    labs.
                  </p>
                  <div className="">
                    {" "}
                    <h4>LAVANYA,</h4>
                    <span className="text-red-700">II CIVIL DEPT</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center gap-10 bg-black/50">
              <div className="lg:w-[40%] w-[90%]  lg:h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
                <img
                  src="https://www.sreekrishnaengcollege.com/assets/img/team/1.jpg"
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="w-[70%] h-[90%] flex flex-col gap-3 justify-between text-white">
                  <p>
                    Staff of SKCE provide us with opportunity to bring out our
                    talent and motivate us to involve ourselves in various
                    competitive examinations and other value added programmes
                    for the development of students.
                  </p>
                  <div className="">
                    <h4>L. GOPINATH,</h4>
                    <span className="text-red-700">II MECHANICAL DEPT</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] w-[90%]   xl:h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
                <img
                  src="https://www.sreekrishnaengcollege.com/assets/img/team/1.jpg"
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="w-[70%] h-[90%] flex flex-col gap-3 justify-between text-white">
                  <p>
                    I am very happy joining SKCE. Our College has excellent and
                    expert staff members having rich experience in research and
                    teaching. Our staff are devoted to develop among students
                    the communication skill in English. We have well equipped
                    labs.
                  </p>
                  <div className="">
                    {" "}
                    <h4>LAVANYA,</h4>
                    <span className="text-red-700">II CIVIL DEPT</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center gap-10 bg-black/50">
              <div className="lg:w-[40%] w-[90%]  lg:h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
                <img
                  src="https://www.sreekrishnaengcollege.com/assets/img/team/1.jpg"
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="w-[70%] h-[90%] flex flex-col gap-3 justify-between text-white">
                  <p>
                    Staff of SKCE provide us with opportunity to bring out our
                    talent and motivate us to involve ourselves in various
                    competitive examinations and other value added programmes
                    for the development of students.
                  </p>
                  <div className="">
                    <h4>L. GOPINATH,</h4>
                    <span className="text-red-700">II MECHANICAL DEPT</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] w-[90%]   xl:h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
                <img
                  src="https://www.sreekrishnaengcollege.com/assets/img/team/1.jpg"
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="w-[70%] h-[90%] flex flex-col gap-3 justify-between text-white">
                  <p>
                    I am very happy joining SKCE. Our College has excellent and
                    expert staff members having rich experience in research and
                    teaching. Our staff are devoted to develop among students
                    the communication skill in English. We have well equipped
                    labs.
                  </p>
                  <div className="">
                    {" "}
                    <h4>LAVANYA,</h4>
                    <span className="text-red-700">II CIVIL DEPT</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default index;
