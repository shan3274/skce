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

      <div className="w-full h-[10vh] bg-purple-950 flex items-center justify-center">
        <select
          onChange={(e) => setSelOption(e.target.value)}
          name=""
          id=""
          className="w-[25vw] px-5 h-[40px] text-white bg-black/50 backdrop-blur-md rounded-full"
        >
          <option value="FACULTY LIST">FACULTY LIST</option>
          <option value="LABORATORIES">LABORATORIES</option>
          <option value="SOFTWARE AVAILABLE">SOFTWARE AVAILABLE</option>
          <option value="SYSTEM CONFIGURATION">SYSTEM CONFIGURATION</option>
        </select>
      </div>
      <div className="w-full min-h-screen overflow-scroll duration-300 flex flex-col items-center  pb-10 gap-10 bg-purple-950 ">
        {selOption == "FACULTY LIST" && (
          <div className="relative w-[80%] py-10 rounded-md bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center gap-5 duration-300">
            <div className="w-[90%] h-[40px] bg-black/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white">
              <div className="w-[20%]">S.NO</div>
              <div className="w-[40%]">FACULTY NAME</div>
              <div className="w-[40%]">QUALIFICATION</div>
            </div>
            {sh.map((item) => {
              return (
                <div className="w-[90%] h-[40px] bg-black/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white">
                  <div className="w-[20%]">{item.sno}</div>
                  <div className="w-[40%]">{item.name}</div>
                  <div className="w-[40%]">{item.qualification}</div>
                </div>
              );
            })}
          </div>
        )}
        {selOption == "LABORATORIES" && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="  w-[80%] h-[70vh] relative"
          >
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-61.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Computer Practice Laboratory – I
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Computer Practice Laboratory – II
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Data Structures Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Object Oriented Programming Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Operating Systems Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Data Base Management Systems Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Networks Laboratory
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-62.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        System Software Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Java Programming Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Object Oriented Analysis And Design Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Internet Programming Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Computer Graphics Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Open Source Laboratory- 1NO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {selOption == "SOFTWARE AVAILABLE" && (
          <div className="relative w-[80%] h-[70vh]  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
            <div className="w-[70%] h-full bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
            <div className="w-[30%] h-full bg-[#4d23c1] relative ">
              <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

              <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] ">
                <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    M.S OFFICE 2003
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    TURBO C++
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    ORACLE 11g
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    MSDN AA
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    SQL 2010 SERVER
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    .NET FRAME WORK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {selOption == "SYSTEM CONFIGURATION" && (
          <div className="relative w-[80%] h-[70vh]  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
            <div className="w-[70%] h-full bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
            <div className="w-[30%] h-full bg-[#4d23c1] relative ">
              <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

              <div className="text-white flex flex-col gap-5 relative z-[1] py-10 ">
                <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      MOTHERBOARD
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      G41 CHIPSET ON HCL OEM
                    </p>
                  </li>
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      PROCESSOR
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      INTEL DUAL CORE @ 3.2 GHz
                    </p>
                  </li>
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      MEMORY
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      1 GB DDR3 RAM
                    </p>
                  </li>
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      HARD DRIVE
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      160 GB SATA
                    </p>
                  </li>
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      INPUT DEVICES
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      MULTIMEDIA KEYBOARD <br /> OPTICAL MOUSE
                    </p>
                  </li>
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      DISPLAY
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      HCL 18.5” TFT MONITOR
                    </p>
                  </li>
                  <li className="font-titlefont flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineSend />
                      OPERATING SYSTEM
                    </div>
                    <p className="pl-6 text-gray-300 text-[13px]">
                      DOS PRELOADED
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Becse;
