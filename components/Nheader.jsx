import React, { useState, useRef, useEffect, memo } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Searchbox from "./Searchbox";

import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { Container, Title, Frame, Content, toggle } from "../utils/style";
import * as Icons from "../utils/icons";
import { BackgroundBeams } from "@/utils/background-beams";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function Tree({ children, name, style, defaultOpen = false }) {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }}>
          {children}
        </a.div>
      </Content>
    </Frame>
  );
}

const Nheader = ({ scrollLength, currHeight }) => {
  const [stdAreana, setstdAreana] = useState(false);
  const [about, setAbout] = useState(false);
  const [adm, setAdm] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [contact, setContact] = useState(false);

  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(scrollLength);

  return (
    <>
      <div className="lg:hidden">
        <div className="w-full flex flex-col gap-10 items-center justify-center bg-transparent absolute top-0 lg:hidden">
          <div className="w-full h-[3rem]  bg-[#351790] z-[999] relative flex items-center justify-center text-white">
            Sree krishna college of engineering
          </div>
          <div
            className={
              scrollLength > 70
                ? "w-[100%] h-[5rem] bg-[#1f104e] z-[999] fixed top-0 duration-700 flex items-center justify-evenly text-white rounded-none"
                : "w-[60%] h-[5rem] bg-[#1f104e] z-[999] sticky top-0 duration-700  flex  items-center justify-evenly text-white rounded-lg"
            }
          >
            <Image src={logo} width={200} className="" />

            {scrollLength > 70 && (
              <button className=" flex items-center justify-center absolute right-[15%] lg:right-[5%]">
                <button onClick={() => setSearch(true)} className="z-[999]">
                  <CiSearch size={20} />
                </button>
              </button>
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
                ? "fixed w-full min-h-[50vh] bg-[#951022] z-[969] top-[5.5rem] lg:hidden duration-500  flex flex-col text-white pl-5 pt-5 overflow-scroll"
                : "fixed w-full h-0 bg-[#951022] z-[969] top-[5.1rem] lg:hidden duration-300 overflow-hidden text-white pl-5 pt-5"
            }
          >
            {scrollLength > 70 && (
              <Container style={{ color: "white" }}>
                <Tree name="main">
                  <Tree name="subtree with children">
                    <Tree name="hello" />
                    <Tree name="sub-subtree with children">
                      <Tree name="child 1" style={{ color: "#37ceff" }} />
                      <Tree name="child 2" style={{ color: "#37ceff" }} />
                      <Tree name="child 3" style={{ color: "#37ceff" }} />
                      <Tree name="custom content">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: 200,
                            padding: 10,
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              background: "black",
                              borderRadius: 5,
                            }}
                          />
                        </div>
                      </Tree>
                    </Tree>
                    <Tree name="hello" />
                  </Tree>
                  <Tree name="demo">
                    <Tree name="heelo" />
                  </Tree>
                </Tree>
              </Container>
            )}
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <div className="w-full flex flex-col gap-10 items-center justify-center bg-transparent absolute top-0">
          <div className="w-full h-[3rem]  bg-[#1f104e] z-[999] relative flex items-center justify-center text-white">
            Sree krishna college of engineering
            <BackgroundBeams />
          </div>
          <div
            className={
              scrollLength > 70
                ? "w-[100%] h-[5rem] bg-[#1f104e] z-[999] fixed top-0 duration-700 flex items-center justify-evenly text-white rounded-none"
                : "w-[60%] h-[5rem] bg-[#1f104e] z-[999] sticky top-0 duration-700  flex  items-center justify-evenly text-white rounded-lg"
            }
          >
            <Link href="/">
              <Image
                src={logo}
                width={200}
                className="cursor-pointer relative z-[9999]"
              />
            </Link>
            <BackgroundBeams />
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
                <Link href="/">About SKCE</Link>
                <div
                  className={
                    about
                      ? `absolute top-[8vh] left-[-30vh] h-[50vh] duration-300 `
                      : "absolute top-[8vh] left-[-30vh]  h-0 duration-300  overflow-hidden"
                  }
                >
                  <div
                    className={`w-[70vw] h-full bg-white text-black  relative  flex  items-center justify-around rounded-md py-[2vh] gap-2 drop-shadow-md border z-[999]`}
                  >
                    <ul className="flex flex-col items-start justify-evenly h-full text-[12px] overflow-hidden ">
                      <h2 className="text-[15px] font-[700] ">About us</h2>
                      <li>
                        <Link href="/about">About The College </Link>
                      </li>
                      <li>
                        <Link href="/about/Staffdetails">
                          SKCE Staff Details{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/Misionandvision">
                          Mission And Vision{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/Fromchairman">
                          From The Chairman’s Desk{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/Fromprinciple">
                          From The Principal’s Desk{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/Aicteesen">AICTE Essentials</Link>
                      </li>
                    </ul>
                    <ul className="flex flex-col items-start justify-evenly h-full text-[12px] overflow-hidden">
                      <h2 className="text-[15px] font-[700]">DEPARTMENTSs</h2>
                      <li>
                        <Link href="/about/department/Becivil">
                          B.E. Civil Engineering <br /> (Naan Mudalvan Scheme){" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/department/Becse">
                          B.E- Computer Science <br /> (Naan Mudalvan Scheme){" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/department/Beelectrics">
                          B.E Electronics And Communication <br />
                          (Naan Mudalvan Scheme){" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/department/Beelectricandelec">
                          B.E Electrical And Electronics <br />
                          (Naan Mudalvan Scheme)
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/department/Bemechabical">
                          B.E Mechanical Engineering <br /> (Naan Mudalvan
                          Scheme){" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/department/Scienceandhuman">
                          Science And Humanities
                        </Link>
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
                <Link href="/gallery">GALLERY</Link>
              </li>
              <li
                className="relative  hover:bg-black hover:text-white px-[2vw] py-[2vh] duration-300 rounded-lg hover:scale-[1.05]"
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
              <button className=" flex items-center justify-center absolute right-[15%] lg:right-[5%]">
                <button onClick={() => setSearch(true)} className="z-[999]">
                  <CiSearch size={20} />
                </button>
              </button>
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
