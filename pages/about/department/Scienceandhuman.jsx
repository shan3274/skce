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
const Scienceandhuman = () => {
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
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-[1]"></div>

          <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[30px] font-titlefont ">
              SCIENCE AND HUMANITIES
            </h1>
            <p className="text-[13px] text-justify">
              The Department of Science and Humanities of study namely
              English,Physics, Chemistry, and Mathematics. All these four
              disciplines exist and maintain individual identity. Around 30
              Well-experienced and highly qualified faculty members embellish
              with their spontaneous efforts to improve our Teaching,Learning,
              Research and Development processes. Science and Humanities have 3
              Laboratories – Physics, Chemistry & English Communication
              Laboratory.
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
          <option value="MAJOR EQUIPMENTS">
            MAJOR EQUIPMENTS - PHYSICS LABORATORY
          </option>
          <option value="CHEMISTRY DEPARTMENT">CHEMISTRY DEPARTMENT</option>
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-18.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        PHYSICS LAB
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        CHEMISTRY LAB
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        WORKSHOP
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-19.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[10%] right-[5%]">
                    <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Air Wedge Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Torsional Pendulum Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Lees Disc Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        B-H Curve Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Carey Foster Bridge
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Band Gap Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Optical Fiber Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Ultrasonic Interferometer
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Particle Size Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Semiconductor Diode Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Spectrometer
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Prism
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-63.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[10%] right-[5%]">
                    <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Ballistic Galvanometer
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Screw Gauge
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Box With Inclined 45°
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        CRO
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Grating
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Hot Plate
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Laser Diode
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Vernier Caliper
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Hg Lamp
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Na Lamp
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Travelling Microscope
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {selOption == "CHEMISTRY DEPARTMENT" && (
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-77.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Flame Photometer
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Spectrophotometer
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Conductivity Meter
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Potentiometer
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        PH Meter
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Hot Plate Heater
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Electronic Balance
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

export default Scienceandhuman;
