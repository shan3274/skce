import React, { useState, useRef, useEffect, memo } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Searchbox from "./Searchbox";

import { BackgroundBeams } from "@/utils/background-beams";
import Phoneheader from "./Phoneheader";
import Subheader from "./Subheader";

import {
  AiFillClockCircle,
  AiFillFacebook,
  AiFillMail,
  AiFillPhone,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { subHeader } from "@/utils/subHeader";

const Nheader = ({ scrollLength, currHeight }) => {
  const [stdAreana, setstdAreana] = useState(false);
  const [about, setAbout] = useState(false);
  const [adm, setAdm] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [contact, setContact] = useState(false);

  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <Phoneheader currHeight={currHeight} scrollLength={scrollLength} />
      </div>

      <div className="hidden lg:block relative">
        <div className="w-full flex flex-col gap-10 items-center justify-center bg-transparent absolute top-0">
          <div className="w-full h-[3rem]  bg-[#1f104e] z-[999] relative flex items-center justify-center text-white">
            <div className="absolute left-5 text-[12px] flex gap-2 items-center">
              {" "}
              <p className="flex gap-1 items-center">
                {" "}
                <AiFillMail /> info@sreekrishnaengcollege.com
              </p>{" "}
              <p className="flex gap-1 items-center">
                | <AiFillPhone /> 9894216849 / 9443322420
              </p>
            </div>
            <p>Sree krishna college of engineering</p>
            <div className="absolute right-5 text-[12px] flex gap-2 items-center">
              <p className="flex gap-1 items-center">
                <AiFillClockCircle /> COUNSELLING CODE - 1438
              </p>
            </div>
          </div>
          <div
            className={
              scrollLength > 70
                ? "w-[100%] h-[5rem] bg-[#1f104e] z-[9999] fixed top-0 duration-700 flex items-center justify-evenly text-white rounded-none "
                : "w-[60%] h-[5rem] bg-[#1f104e] z-[9999] sticky top-0 duration-700  flex  items-center justify-evenly text-white rounded-lg "
            }
          >
            <div className="w-full h-full relative flex items-center justify-evenly">
              <div className="absolute w-[30%] h-[2rem] bg-[rgb(30,64,120)] right-0 top-[100%] rounded-sm ">
                <div className="w-full h-full relative bg-[rgb(30,64,120)] flex items-center justify-around rounded-sm ">
                  <div
                    className={
                      scrollLength > 70
                        ? "clippath absolute w-[2rem] h-full bg-[rgb(30,64,120)] left-[-1.9rem]"
                        : "clippath absolute w-[2rem] h-full bg-[rgb(30,64,120)] left-[-1.9rem]"
                    }
                  ></div>
                  <Link
                    href={"#"}
                    className="py-1 px-2 bg-blue-500 text-white text-[10px] rounded-lg"
                  >
                    PLACEMENT / TRAINING
                  </Link>
                  <div className="flex gap-5 text-white">
                    <AiFillFacebook size={20} />
                    <AiFillTwitterSquare size={20} />
                    <AiFillYoutube size={20} />
                  </div>
                </div>
              </div>
              <Link href="/">
                <Image
                  src={logo}
                  width={200}
                  className="cursor-pointer relative z-[9999]"
                />
              </Link>

              <ul
                className={
                  scrollLength > 70
                    ? "lg:flex  h-full  hidden gap-2 text-[12px] items-center justify-evenly"
                    : "lg:flex h-full  hidden gap-2 text-[12px] items-center justify-evenly"
                }
              >
                <li
                  className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => setAbout(true)}
                  onMouseLeave={() => setAbout(false)}
                >
                  <Link
                    href="/about"
                    className="hover:scale-[1.02] duration-300"
                  >
                    About SKCE
                  </Link>
                </li>
                <Subheader
                  data={subHeader}
                  isMenuopen={about}
                  scrollLength={scrollLength}
                />
                <li
                  className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => setstdAreana(true)}
                  onMouseLeave={() => setstdAreana(false)}
                >
                  <Link href="#" className="hover:scale-[1.02] duration-300">
                    STUDENT ARENA
                  </Link>
                  <div
                    className={
                      stdAreana
                        ? ` absolute top-[8vh] left-0 duration-300 w-[15vw] h-[15vh]`
                        : "absolute top-[8vh] left-0 w-[15vw] h-0 duration-300  overflow-hidden"
                    }
                  >
                    <ul
                      className={`bg-white text-black w-full h-full relative  flex flex-col items-center justify-around rounded-md py-[2vh] gap-2 drop-shadow-md border`}
                    >
                      <li>
                        <Link href="/student/Feedback">Student Feedback</Link>
                      </li>
                      <li>
                        <Link href="/student/Enquery">Student Enquery</Link>
                      </li>
                      <li>
                        <Link href="#">example</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => setAdm(true)}
                  onMouseLeave={() => setAdm(false)}
                >
                  <Link href="#">ADMISSIONS</Link>
                  <div
                    className={
                      adm
                        ? ` absolute top-[8vh] left-0 duration-300 w-[15vw] h-[15vh]`
                        : "absolute top-[8vh] left-0 w-[15vw] h-0 duration-300  overflow-hidden"
                    }
                  >
                    <ul
                      className={`bg-white text-black w-full h-full relative  flex flex-col items-center justify-around rounded-md py-[2vh] gap-2 drop-shadow-md border`}
                    >
                      <li>
                        <Link href="#">example</Link>
                      </li>
                      <li>
                        <Link href="#">example</Link>
                      </li>
                      <li>
                        <Link href="#">example</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => setGallery(true)}
                  onMouseLeave={() => setGallery(false)}
                >
                  <Link href="/gallery">GALLERY</Link>
                </li>
                <li
                  className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => setContact(true)}
                  onMouseLeave={() => setContact(false)}
                >
                  <Link href="/contact">CONTACT US</Link>
                  <div
                    className={
                      contact
                        ? ` absolute top-[8vh] left-0 duration-300 w-[15vw] h-[15vh]`
                        : "absolute top-[8vh] left-0 w-[15vw] h-0 duration-300  overflow-hidden"
                    }
                  ></div>
                </li>
              </ul>
              {scrollLength > 70 && (
                <div className=" flex items-center justify-center absolute right-[15%] lg:right-[5%]">
                  <button>
                    <CiSearch
                      size={20}
                      onClick={() => setSearch(true)}
                      className="z-[999]"
                    />
                  </button>
                </div>
              )}
              {scrollLength > 70 && (
                <div className="absolute right-[5%] lg:hidden">
                  {!isMenuOpen ? (
                    <CiMenuBurger
                      size={20}
                      onClick={() => setIsMenuOpen(true)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <IoMdClose
                      size={20}
                      onClick={() => setIsMenuOpen(false)}
                      className="cursor-pointer lg:hidden"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {search && (
          <Searchbox
            scrollLength={scrollLength}
            currHeight={currHeight}
            setSearchs={setSearch}
          />
        )}

        {scrollLength > 70 && (
          <div
            className={
              isMenuOpen
                ? "fixed w-full h-[50vh] bg-[#951022] z-[969] top-[5.5rem] lg:hidden duration-500 overflow-hidden flex flex-col text-white pl-5 pt-5"
                : "fixed w-full h-0 bg-[#951022] z-[969] top-[5.1rem] lg:hidden duration-300 overflow-hidden text-white pl-5 pt-5"
            }
          ></div>
        )}
      </div>
    </>
  );
};

export default Nheader;
