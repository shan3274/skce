import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";

import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";

import useMedia from "../../utils/useMedia";
import data from "../../utils/imgdata";

import styles from "../../styles/parallaxswiper.module.css";

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
      <div className="w-full h-[70vh] flex items-center justify-center relative top-10">
        <div className="w-[60%] h-full ">
          <Masonry />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function Masonry() {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  // Hook2: Measure the width of the container element
  const [ref, { width }] = useMeasure();
  // Hook3: Hold items
  const [items, set] = useState(data);
  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 4000);
    return () => clearInterval(t);
  }, []);
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const x = (width / columns) * column; // x = container width / number of columns * column index,
      const y = (heights[column] += child.height / 2) - child.height / 2; // y = it's just the height of the current column
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, items, width]);
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  // Render the grid
  return (
    <div
      ref={ref}
      className={styles.list}
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a.div style={style}>
          <div
            style={{
              backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
            }}
          />
        </a.div>
      ))}
    </div>
  );
}

export default index;
