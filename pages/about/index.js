import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import imgdata from "@/utils/imgdata";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import Imagemodal from "@/components/Imagemodal";

const index = () => {
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

  const datas = [
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-65-1.jpg",
      name: "this is img one",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-64.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-29.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-46.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-66.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-52.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-65-1.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-64.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-29.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-46.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-66.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
    {
      img: "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-52.jpg",
      name: "this is img two",
      description: "this is dsecription",
    },
  ];
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(true);
  const [img6, setImg6] = useState(false);
  const [img7, setImg7] = useState(false);
  const [img8, setImg8] = useState(false);
  const [img9, setImg9] = useState(false);

  const [isOpen, setIsopen] = useState(false);
  const [index, setIndex] = useState();

  const mouseEnter = (setState) => {
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);
    setImg6(false);
    setImg7(false);
    setImg8(false);
    setImg9(false);
    setState(true);
  };

  return (
    <div className="bg-[#383838]">
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full h-screen flex items-center justify-center overflow-hidden ">
        <div className="w-[70%] h-full bg-[url(https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-67.jpg)] bg-no-repeat bg-cover flex items-center relative">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
        </div>
        <div className="w-[30%] h-full bg-purple-950 relative flex items-center justify-center flex-col gap-5">
          <div className="absolute lg:w-full w-[200%] h-[120%] bg-purple-950 rotate-[10deg] lg:rotate-[30deg] left-[-50%] lg:top-[5%] z-0]"></div>
          <div className="z-[1] relative w-[100%] right-[15%] top-[5%]">
            <p className="text-[#fff] font-titlefont text-[20px]">Welcome To</p>
            <h2 className="text-[#ff3535] font-titlefont text-[25px]">
              SREE KRISHNA COLLEGE OF ENGINEERING
            </h2>
          </div>
          <p className="relative z-[1] text-white right-[15%]  top-[5%]">
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
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center h-[20vh] text-[#f63b3b]">
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
      <div className="w-full h-[60vh] flex items-center justify-center relative">
        <div className="w-[80%] h-full flex items-center justify-center gap-5 p-20">
          <div
            onMouseEnter={() => {
              mouseEnter(setImg1);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(0);
            }}
            className={
              img1
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[0].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg2);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(1);
            }}
            className={
              img2
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md ] `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md ] `
            }
            style={{
              backgroundImage: `url(${datas[1].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg3);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(2);
            }}
            className={
              img3
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[2].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg4);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(3);
            }}
            className={
              img4
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md `
            }
            style={{
              backgroundImage: `url(${datas[3].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg5);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(4);
            }}
            className={
              img5
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[4].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg6);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(5);
            }}
            className={
              img6
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[5].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg7);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(6);
            }}
            className={
              img7
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[6].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg8);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(7);
            }}
            className={
              img8
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[7].img})`,
            }}
          ></div>
          <div
            onMouseEnter={() => {
              mouseEnter(setImg9);
            }}
            onClick={() => {
              setIsopen(true);
              setIndex(8);
            }}
            className={
              img9
                ? `w-[70%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
                : `w-[10%] h-[100%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
            }
            style={{
              backgroundImage: `url(${datas[8].img})`,
            }}
          ></div>
        </div>
      </div>
      <Footer />

      {isOpen && <Imagemodal data={datas} setClose={setIsopen} index={index} />}
    </div>
  );
};

export default index;
