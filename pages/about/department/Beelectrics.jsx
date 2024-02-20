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
const Beelectrics = () => {
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
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-11.jpg)]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-12.jpg)]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Electronics-and-Communication-Engineering-01-.jpg)]"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-[1]"></div>

          <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[30px] font-titlefont ">
              B.E ELECTRONICS AND COMMUNICATION ENGINEERING
            </h1>
            <h2 className="text-[#8843ff]">
              NAAN MUDALVAN SCHEME - ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
              MANAGEMENT
            </h2>
            <p className="text-[13px] text-justify">
              The Electronics and Communication Engineering Department, have
              established at the equipment cost Rs. 40 lakhs, contains
              Electronic Circuits Laboratory, Linear Integrated Circuits
              Laboratory, Digital Electronics Laboratory, Microprocessor and
              Micro Controller Laboratory.The department start functioning with
              the first batch of students admitted into the department in 2011,
              with an intake of 60 in UG program. This course has been designed
              with an aim to meet industry requirements in the field of
              Electronics by studying hardware and interfacing of computer
              systems, programming skills and applications of computer emphasis
              on latest technological development. The Electronics and
              Communication Engineering is one of the largest and fastest
              growing fields. It covers wide range of applications that we use
              daily. The modern society is increasingly depending on the
              communication of information to make our life easier. Students
              taking their degree learn about the operating principles and
              design of devices ranging from mobile phones, wireless and
              satellite communication systems.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-purple-950 flex items-center justify-center">
        <select
          onChange={(e) => setSelOption(e.target.value)}
          name=""
          id=""
          className="w-[25vw] px-5 h-[40px] text-white bg-black/50 backdrop-blur-md rounded-full"
        >
          <option value="FACULTY LIST">FACULTY LIST</option>
          <option value="LABORATORIES">LABORATORIES</option>
          <option value="MAJOR EQUIPMENTS">MAJOR EQUIPMENTS</option>
          <option value="CONSISTS OF LOGIC EDITION EDK, SYSTEM GENERATION">
            CONSISTS OF LOGIC EDITION EDK, SYSTEM GENERATION
          </option>
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Electronics-and-Communication-Engineering-01-04.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Circuits & Devices Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Electronic Circuits I Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Digital Electronics Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Electronic Circuits II & Simulation Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Linear Integrated Circuits Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Microprocessor & Microcontroller Lab
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Electronics-and-Communication-Engineering-02.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Communication System Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Digital Signal Processing Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        VLSI Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Computer Networks Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Optical & Microwave Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Electronic System Design Lab
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {selOption == "MAJOR EQUIPMENTS" && (
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Regulated Power Supply
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        30 MHZ Cathode Ray Oscilloscope
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Fixed Power Supply
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Regulated Power Supply
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        30 MHZ Cathode Ray Oscilloscope
                      </li>

                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Fixed Power Supply
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {selOption == "CONSISTS OF LOGIC EDITION EDK, SYSTEM GENERATION" && (
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Fixed power supply
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Regulated Power supply
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        30 MHZ cathode Ray Oscilloscope
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Multisim software PSPICE Simulation
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        8085 Microprocessor kits
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        8086 Microprocessor kits
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        8051 Microcontroller kits
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Interface cards 8255,8251,8259,8279
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Stepper motor Interface cards
                      </li>

                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        DC motor Interface cards
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        MASM simulation software for 8086
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Xillinx software for education version
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Cadence Tools
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Model sim mentor graphics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Beelectrics;
