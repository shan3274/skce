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
const Beelectricandelec = () => {
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
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Electrical-and-Electronics-Engineering-Department-01.jpg)]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Electrical-and-Electronics-Engineering-Department-02.jpg)]"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-[1]"></div>

          <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[30px] font-titlefont ">
              B.E ELECTRICAL AND ELECTRONICS ENGINEERING
            </h1>
            <h2 className="text-[#8843ff]">
              NAAN MUDALVAN SCHEME - POWER GRID/RES
            </h2>
            <p className="text-[13px] text-justify">
              The Electrical and Electronics Engineering Department, have
              established at the equipment cost Rs. 20 lakhs, contains Power
              Electronics Laboratory, Measurement and Instrumentation
              Laboratory, Control System Laboratory, Electrical Machines
              Laboratory and Electrical Circuits Laboratory. The Department of
              Electrical & Electronics Engineering has well-qualified and
              experienced faculty members with specialization in varied fields
              like Electrical Machines, Electrical Drives, Power Electronics,
              High Voltage Engineering, Power Systems and Control Systems,
              Senior Professional and technocrats from industry visit the
              department periodically and deliver special lectures on topics of
              current interest to the UG students.
              <br />
              The areas of specialization include Communication Systems,
              Semiconductor Electronics, Control & Guidance, Applied
              Electronics, VLSI Design. Our Mission is to educate students from
              all over India, including those from the local and rural areas, so
              that they become enlightened individuals, improving the living
              standards of their families, industry and society. We provide
              individual attention and world class quality of education. The EEE
              Department has been organizing industrial visits, guest lectures
              and the IEEE Chapter. The Department has well equipped facilities
              like Standard labs and a Seminar hall.
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-55.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Electrical Machines Laboratories.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Circuits And Measurements Laboratories.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Analog And Digital Electronics Laboratories.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Microprocessor And Microcontroller Laboratories.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Power Electronics Laboratories.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Control Systems Laboratories.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Power System Simulation Laboratories.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {selOption == "MAJOR EQUIPMENTS" && (
          <div className="relative w-[80%] h-[70vh]  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
            <div className="w-[70%] h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Electrical-and-Electronics-Engineering-Department-03.jpg)]"></div>
            <div className="w-[30%] h-full bg-[#4d23c1] relative ">
              <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

              <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] ">
                <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    Digital CRO
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    Analog And Digital Converter
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    Series Generator
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    Shunt Generator
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />3 Phase Motors
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />1 Phase Motors
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />3 Phase Transformer
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    Auto Transformer
                  </li>
                  <li className="font-titlefont flex items-center gap-2">
                    <AiOutlineSend />
                    Transfer Function Of Motors
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

export default Beelectricandelec;
