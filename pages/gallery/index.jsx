import Footer from "@/components/Footer";
import Imagemodal from "@/components/Imagemodal";
import Nheader from "@/components/Nheader";
import { FlatTree } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

  const mouseEnter = (setState, data) => {
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
    <div>
      {" "}
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full h-screen flex items-center justify-center gap-5 pt-24 p-20 relative overflow-hidden bg-[#341569] z-[0]">
        <div
          className="absolute w-[30%] h-full bg-[#5731ff] z-[-1] top-0 rotate-[30deg] left-[-20vw] duration-300"
          style={{
            rotate: `${scrollLength / 4}deg`,
          }}
        ></div>
        <div
          className="absolute w-[30%] h-full bg-[#5731ff] z-[-1]  rotate-[30deg] right-[-20vw] bottom-[50vh] duration-300"
          style={{
            rotate: `-${scrollLength / 4}deg`,
          }}
        ></div>
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md ] `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md ] `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
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
              ? `w-[70%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
              : `w-[10%] h-[70%] bg-black duration-300 bg-cover bg-no-repeat rounded-md  `
          }
          style={{
            backgroundImage: `url(${datas[8].img})`,
          }}
        ></div>
      </div>
      {isOpen && <Imagemodal data={datas} setClose={setIsopen} index={index} />}
      <Footer />
    </div>
  );
};

export default index;
