import React, { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";
import Searchbox from "./Searchbox";

const Nheader = ({ scrollLength, currHeight }) => {
  const [stdAreana, setstdAreana] = useState(false);
  const [about, setAbout] = useState(false);
  const [adm, setAdm] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [contact, setContact] = useState(false);

  const [search, setSearch] = useState(false);
  console.log(search);
  return (
    <>
      <div className="w-full flex flex-col gap-10 items-center justify-center bg-transparent absolute top-0">
        <div className="w-full h-[3rem]  bg-[#E21C32] z-[999] relative flex items-center justify-center text-white">
          Sree krishna college of engineering
        </div>
        <div
          className={
            scrollLength > 70
              ? "w-[100%] h-[5rem] bg-[#951022] z-[999] fixed top-0 duration-700 flex items-center justify-evenly text-white rounded-none"
              : "w-[60%] h-[5rem] bg-[#951022] z-[999] sticky top-0 duration-700  flex  items-center justify-evenly text-white rounded-lg"
          }
        >
          <Image src={logo} width={200} className="" />
          <ul
            className={
              scrollLength > 70
                ? "lg:flex  hidden gap-2 text-[15px]"
                : "lg:flex  hidden gap-2 text-[12px]"
            }
          >
            <li
              className="relative  hover:bg-black hover:text-white px-[2vw] py-[2vh] duration-300 rounded-lg hover:scale-[1.05] z-[10]"
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              <Link href="#">About SKCE</Link>
              <div
                className={
                  about
                    ? ` absolute top-[8vh] left-[-30vh] h-[50vh] duration-300 `
                    : "absolute top-[8vh] left-[-30vh]  h-0 duration-300  overflow-hidden"
                }
              >
                <div
                  className={`w-[70vw] h-full bg-white text-black  relative  flex  items-center justify-around rounded-md py-[2vh] gap-2 drop-shadow-md border z-[999]`}
                >
                  <ul className="flex flex-col items-start justify-evenly h-full text-[12px] overflow-hidden ">
                    <h2 className="text-[15px] font-[700] ">About us</h2>
                    <li>
                      <Link href="#">About The College </Link>
                    </li>
                    <li>
                      <Link href="#">SKCE Staff Details </Link>
                    </li>
                    <li>
                      <Link href="#">Mission And Vision </Link>
                    </li>
                    <li>
                      <Link href="#">From The Chairman’s Desk </Link>
                    </li>
                    <li>
                      <Link href="#">From The Principal’s Desk </Link>
                    </li>
                    <li>
                      <Link href="#">AICTE Essentials</Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-evenly h-full text-[12px] overflow-hidden">
                    <h2 className="text-[15px] font-[700]">DEPARTMENTSs</h2>
                    <li>
                      <Link href="#">
                        B.E. Civil Engineering <br /> (Naan Mudalvan Scheme){" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        B.E- Computer Science <br /> (Naan Mudalvan Scheme){" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        B.E Electronics And Communication <br />
                        (Naan Mudalvan Scheme){" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        B.E Electrical And Electronics <br />
                        (Naan Mudalvan Scheme)
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        B.E Mechanical Engineering <br /> (Naan Mudalvan Scheme){" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Science And Humanities</Link>
                    </li>
                    <li>
                      <Link href="#">MBA & MCA</Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-evenly h-full text-[12px] overflow-hidden">
                    <h2 className="text-[15px] font-[700]">FACILITIES</h2>
                    <li>
                      <Link href="#">Library </Link>
                    </li>
                    <li>
                      <Link href="#">Internet </Link>
                    </li>
                    <li>
                      <Link href="#">Health Care</Link>
                    </li>
                    <li>
                      <Link href="#">Canteen</Link>
                    </li>
                    <li>
                      <Link href="#">Hostel </Link>
                    </li>
                    <li>
                      <Link href="#">Sports</Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-evenly h-full text-[12px] overflow-hidden"></ul>
                </div>
              </div>
            </li>
            <li
              className="relative  hover:bg-black hover:text-white px-[2vw] py-[2vh] duration-300 rounded-lg hover:scale-[1.05]"
              onMouseEnter={() => setstdAreana(true)}
              onMouseLeave={() => setstdAreana(false)}
            >
              <Link href="#">STUDENT ARENA</Link>
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
              className="relative  hover:bg-black hover:text-white px-[2vw] py-[2vh] duration-300 rounded-lg hover:scale-[1.05]"
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
              className="relative  hover:bg-black hover:text-white px-[2vw] py-[2vh] duration-300 rounded-lg hover:scale-[1.05]"
              onMouseEnter={() => setGallery(true)}
              onMouseLeave={() => setGallery(false)}
            >
              <Link href="#">GALLERY</Link>
              <div
                className={
                  gallery
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
              className="relative  hover:bg-black hover:text-white px-[2vw] py-[2vh] duration-300 rounded-lg hover:scale-[1.05]"
              onMouseEnter={() => setContact(true)}
              onMouseLeave={() => setContact(false)}
            >
              <Link href="#">CONTACT US</Link>
              <div
                className={
                  contact
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
          </ul>
          {scrollLength > 70 && (
            <button className=" flex items-center justify-center absolute right-[5%]">
              <button onClick={() => setSearch(true)} className="z-[999]">
                <CiSearch size={20} />
              </button>
            </button>
          )}
        </div>
      </div>
      {search && (
        <Searchbox
          scrollLength={scrollLength}
          currHeight={currHeight}
          setSearchs={setSearch}
        />
      )}
    </>
  );
};

export default Nheader;
