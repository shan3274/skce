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
const Bemechabical = () => {
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
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-09.jpg)]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-04.jpg)]"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="absolute z-[0] w-full h-full bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-08.jpg)]"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-[1]"></div>

          <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[15%]">
            <h1 className="text-[30px] font-titlefont ">
              B.E MECHANICAL ENGINEERING
            </h1>
            <h2 className="text-[#8843ff]">
              NAAN MUDALVAN SCHEME - ARTIFICIAL INTELLIGENCE AND MACHINE
              LEARNING
            </h2>
            <p className="text-[13px] text-justify">
              Mechanical Engineering Department, have established at the
              equipment cost of Rs. 65 lakhs, contains Manufacturing Technology
              Laboratory, Engineering Practice Laboratory, Fluid Mechanics
              Laboratory, Strength of Material laboratory and Computer Aided
              Design Laboratory.Mechanical engineering is the second largest
              engineering discipline and one of the oldest. Mechanical engineers
              apply the principles of mechanics and energy to the design of
              machines and devices. Mechanical engineers are involved with the
              design of structures, operation and maintenance of mechanical
              systems. They are involved in the designing and fabricating of
              automobiles, trucks, airplanes, and trains for transportation;
              tractors for food production; interplanetary space vehicles;
              copying machines fax machines, staplers, used in the office; and
              lathes, milling machines, grinders, and drill presses used in the
              manufacture of goods; and just about anything that moves.
              Mechanical engineers also design and operate power plants and are
              concerned with the economical combustion of fuels, the conversion
              of heat energy into mechanical energy, and the use of mechanical
              energy to perform useful work. Their scope of work is truly large.
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-05.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                    <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        CAD Laboratory
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Fluid Mechanics And Machinery Lab
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Strength Of Materials Lab
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
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-06.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[5%]">
                    <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Torsion Testing Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Compression Testing Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Spring Tensile Testing Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Deflection On Beam Testing Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Cylindrical And Surface Grinder
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Slotting Machines
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Centre Lathes
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Radial Drilling Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Hacksaw Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Spring Compression And Tensile Testing Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Rockwell And Vickers Hardness Testing M/C
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Universal Testing Machine Of 100T Capacity
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Tool Dynamometer Test Facility
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Tool Makers Microscope
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Mechanical-Engineering-Department.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[5%]">
                    <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Welding Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Arc Welding With Transformers
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Basic Workshop
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Carpentry
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Fitting
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Smithy
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Foundry
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Welding
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Forging
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Sheet Metal Works
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Centre Lathes
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Pendulum Impact Testing Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Windows Server 2003
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Canon Laser Jets Printers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Mechanical-Engineering-Department-01.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[5%]">
                    <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        HP Scanner
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        AutoCAD Mechanical Desktop
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        AutoCAD Land Development Desktop
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Pro/E WILDFIRE
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Solid Works
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Bernoulli’s Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Orifice And Mouthpiece Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Notch Calibration Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Orifice Meter And Venture Meter Test Rigs
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Rotometer And Water Meter Setups
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Frictional Losses And Fitting Losses Setups
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Pitot Tube Apparatus
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Pelton Wheel Turbine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Francis Turbine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
                <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-07.jpg)]"></div>
                <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                  <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                  <div className="text-white flex flex-col gap-5 relative z-[1] top-[5%] right-[5%]">
                    <ul className="flex flex-col gap-3 list-arrow w-[120%]">
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Kaplan Turbine.
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Pump Test Rigs
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Gear Oil Pump
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Reciprocating Pump
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Submersible Pump
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Multistage Centrifugal Pump
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Single Stage Centrifugal Pump
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Machine Shop
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Planner Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Capstan Lathes
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Turret Lathes
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Surface Grinding Machine
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Shaping Machines
                      </li>
                      <li className="font-titlefont flex items-center gap-2">
                        <AiOutlineSend />
                        Milling Machines
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

export default Bemechabical;
