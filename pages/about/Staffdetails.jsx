import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import { BackgroundBeams } from "@/utils/background-beams";
import React, { useEffect, useState } from "react";

const Staffdetails = () => {
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

  const faculty = [
    {
      sno: "1",
      name: "DR S SRINIVASA RAO MADANE",
      position: "PRINCIPAL",
      qualification: "M.TECH(ECE),MTECH(ECE),Ph.D(ECE)MISTE,MIEEE MIETE",
    },
    {
      sno: "2",
      name: "DR D SIVAKUMAR",
      position: "VP",
      qualification: "MSC.,M.Phil.,B.Ed.,Ph.D",
    },
  ];
  const sh = [
    {
      sno: "1",
      name: "MR. PADMANABAN",
      position: "ASSO.PROF/PHYSICS",
      qualification: "MSC.,M.Phil.",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
    {
      sno: "2",
      name: "MR.T NARESH",
      position: "AP/CHEMISTRY",
      qualification: "MSC,M.Phil",
    },
  ];

  const [selValue, setSelValue] = useState("FACULTY DETAILS");
  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full min-h-screen overflow-scroll duration-300 flex flex-col items-center pt-[30vh] pb-10 gap-10  bg-[url(https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative">
        <div className="absolute w-full h-full z-[1] bg-black/20 backdrop-blur-[3px] top-0 "></div>
        <select
          onChange={(e) => setSelValue(e.target.value)}
          name=""
          id=""
          className="relative  bg-black/30 px-[3vw] py-[2vh] rounded-lg backdrop-blur-md text-white font-titlefont text-center z-[2]"
        >
          <option value="FACULTY DETAILS">FACULTY DETAILS</option>
          <option value="DEPARTMENT OF S&H">DEPARTMENT OF S&H</option>
          <option value="DEPARTMENT OF CIVIL">DEPARTMENT OF CIVIL</option>
          <option value="DEPARTMENT OF M.ECHANICAL">
            DEPARTMENT OF M.ECHANICAL
          </option>
          <option value="EPARTMENT OF CSE">DEPARTMENT OF CSE</option>
          <option value="DEPARTMENT OF EEE">DEPARTMENT OF EEE</option>
          <option value="DEPARTMENT OF ECE">DEPARTMENT OF ECE</option>
          <option value="ADMINISTRATION OFFICE">ADMINISTRATION OFFICE</option>
          <option value="NON-TEACHING STAFF">NON-TEACHING STAFF</option>
        </select>

        <div className="lg:w-[55%] w-[95%] gap-4  bg-black/30 backdrop-blur-lg relative z-[1] rounded-[50px] flex flex-col items-center justify-around py-10">
          <div className="w-[90%] h-[40px] bg-black/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white text-[14px]">
            <div className="w-[10%]">S.No</div>
            <div className="w-[25%]">FACULTY NAM.E</div>
            <div className="w-[25%]">POSITION</div>
            <div className="w-[50%]">QUALIFICATION</div>
          </div>
          {selValue == "DEPARTMENT OF S&H" &&
            sh.map((item) => {
              return (
                <div className="w-[90%] h-[40px] bg-gray/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white text-[14px]">
                  <div className="w-[10%]">{item.sno}</div>
                  <div className="w-[25%]">{item.name}</div>
                  <div className="w-[25%]">{item.position}</div>
                  <div className="w-[50%]">{item.qualification}</div>
                </div>
              );
            })}
          {selValue == "FACULTY DETAILS" &&
            faculty.map((item) => {
              return (
                <div className="w-[90%] h-[40px] bg-white/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white text-[14px]">
                  <div className="w-[10%]">{item.sno}</div>
                  <div className="w-[25%]">{item.name}</div>
                  <div className="w-[25%]">{item.position}</div>
                  <div className="w-[50%]">{item.qualification}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Staffdetails;
