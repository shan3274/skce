import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";

import Picgalary from "@/components/Picgalary";
import { cards } from "@/utils/Gallerycard";

const index = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  return (
    <div className="bg-purple-950">
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full h-screen flex items-center justify-center overflow-hidden ">
        <div className="w-[70%] h-full bg-[url(https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover flex items-center relative">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
        </div>
        <motion.div
          animate={{ x: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-[30%] right-[50px] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5"
        >
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-0]"></div>
          <div className="z-[1] relative w-[100%] right-[15%] top-[5%]">
            <motion.p
              animate={{ x: 50 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-[#fff] font-titlefont text-[20px] relative right-[50px]"
            >
              Welcome To
            </motion.p>
            <motion.h2
              animate={{ x: 50 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-[#8541FB] font-titlefont text-[25px] relative right-[50px]"
            >
              SREE KRISHNA COLLEGE OF ENGINEERING
            </motion.h2>
          </div>
          <motion.p
            animate={{ x: 50 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-[1] text-white right-[15%] text-justify  top-[5%] ml-[-50px] "
          >
            Sree Krishna College of Engineering in Vellore was inaugurated in
            August 2010 by Vellore District Collector Mr.S. Rajendran. SKCE is
            managed by Lord Sree Krishna Trust. The founder of the Trust, Dr. A.
            Aranganathan, is a socialist with rich experience in Educational
            Institutions. <br /> <br />
            Having achieved an inevitable reputation in his own profession, a
            keen social activist and visionary, felt the need of higher
            education at affordable cost to everyone. <br />
            <br />
            The college excels in Infrastructure and has highly qualified and
            dedicated faculties and well equipped labs and library with huge
            number of collections and e-journals.
          </motion.p>
        </motion.div>
      </div>
      <div className=" w-full flex items-center justify-center h-[20vh] text-[#8541FB]">
        <h1 className="font-titlefont text-[50px] font-[700]">
          Students Review
        </h1>
      </div>
      <div className="w-full h-[60vh] relative ">
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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper w-full h-[60vh]"
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
            <div className="w-full h-full flex items-center justify-center gap-10 bg-black/50">
              <div className="w-[40%] h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
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
              <div className="w-[40%] h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
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
            <div className="w-full h-full flex items-center justify-center gap-10 bg-black/50">
              <div className="w-[40%] h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
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
              <div className="w-[40%] h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
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
            <div className="w-full h-full flex items-center justify-center gap-10 bg-black/50">
              <div className="w-[40%] h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
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
              <div className="w-[40%] h-[70%] bg-white/30 backdrop-blur-lg rounded-lg flex gap-5 justify-center pt-10">
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
      <div className="w-full h-[100vh] flex items-center justify-center relative top-[-10vh]">
        <Picgalary card={[cards, cards]} />
      </div>
      <Footer />
    </div>
  );
};

export default index;
