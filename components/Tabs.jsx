"use client";

import Image from "next/image";
import { Tabs } from "@/utils/tabs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AiOutlineSend } from "react-icons/ai";

export function TabsDemo() {
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
  const tabs = [
    {
      title: "FACULTY LIST",
      value: "FACULTY LIST",
      content: (
        <div className="relative h-[80vh] overflow-scroll w-[100%] py-10 rounded-md bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center gap-5 duration-300 ">
          <div className="w-[90%] h-[40px] bg-black/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white relative top-0">
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
      ),
    },
    {
      title: "LABORATORIES",
      value: "LABORATORIES",
      content: (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="  w-[100%] h-[70vh] relative"
        >
          <SwiperSlide>
            <div className="relative w-[full] h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
              <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Civil-Engineering-Department-.jpg)]"></div>
              <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                  <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      STRENGTH OF MATERIALS LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      SURVEY LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      HYDRAULIC ENGINEERING LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      HIGHWAY ENGINEERING LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      STRENGTH OF MATERIALS LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      SURVEY LAB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
              <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Civil-Engineering-Department-2.jpg)]"></div>
              <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                <div className="text-white flex flex-col gap-5 relative z-[1] top-[20%] right-[5%]">
                  <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      HYDRAULIC ENGINEERING LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      HIGHWAY ENGINEERING LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      CONCRETE LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      SOIL MECHANICS LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      CAD LAB
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      ENVIRONMENTAL ENGINEERING LAB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ),
    },
    {
      title: "MAJOR EQUIPMENTS",
      value: "MAJOR EQUIPMENTS",
      content: (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="  w-[100%] h-[70vh] relative"
        >
          <SwiperSlide>
            <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
              <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/Civil-Engineering-Department-01.jpg)]"></div>
              <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                <div className="text-white flex flex-col gap-5 relative z-[1] top-[10%] right-[5%]">
                  <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      TOTAL STATION ( KOLIDA ) – 3 N0S
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      ELECTRONIC THEODOLITE – 2 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      VERNIER THEODOLITE – 8 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      AUTO LEVEL – 2 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      TILTING LEVEL – 2NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      DUMPY LEVEL – 8 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      PRISMATIC COMPASS – 8 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      PLANE TABLE ASSEMBLY – 8 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      METALIC CHAIN – 8 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      FREE MAN’S TAPE – 10NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      CROSS STAFF – 8 NOS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full  rounded-md bg-black/50 backdrop-blur-lg flex overflow-hidden  items-center justify-center gap-5 duration-300">
              <div className="w-[70%] h-full  bg-no-repeat bg-cover bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-20.jpg)]"></div>
              <div className="w-[30%] h-full bg-[#4d23c1] relative ">
                <div className="w-[150%] h-[150%] bg-[#4d23c1] absolute rotate-[35deg]  left-[-15vw] z-[1]"></div>

                <div className="text-white flex flex-col gap-5 relative z-[1] top-[10%] right-[5%]">
                  <ul className="flex flex-col gap-5 list-arrow w-[120%]">
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      RANGING ROD – 40 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      GPS – 2NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      ALUMINIUM STAFF 5M HT – 12 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      ALUMINIUM STAFF 4M HT – 12 NOS
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      U.T.M 40 T CAPACITY – 1NO
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      TORSION TESTING MACHINE – 1NO
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      C.T.M 2000 KN – 1N0
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      ROCKWELL HARDNESS – 1NO
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      SPRING TESTING MACHINE – 1NO
                    </li>
                    <li className="font-titlefont flex items-center gap-2">
                      <AiOutlineSend />
                      IZOD TESTING MACHINE – 1NO
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  gap-10 items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
