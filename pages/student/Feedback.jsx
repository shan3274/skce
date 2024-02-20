import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Feedback = () => {
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
  const [selValue, setSelValue] = useState("STUDENT");

  return (
    <div>
      {" "}
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full min-h-screen flex  relative overflow-hidden bg-[#d2d2d2]">
        <div className="fix w-[20%] h-screen bg-[#211772] flex flex-col items-center justify-center gap-5">
          <select
            onChange={(e) => setSelValue(e.target.value)}
            name=""
            id=""
            className="relative  bg-black/50  h-[40px]  rounded-lg backdrop-blur-md text-white text-[15px] font-titlefont w-[90%]"
          >
            <option value="STUDENT">STUDENT</option>
            <option value="FACULTY">FACULTY</option>
          </select>
        </div>
        <div className="w-[80%] min-h-screen overflow-scroll duration-300 flex flex-col items-center pt-[25vh] pb-10 gap-10 bg-[url(https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
          {selValue == "STUDENT" ? (
            <div className="w-[80%] h-[100vh] bg-black/30 backdrop-blur-lg relative z-[1] rounded-xl flex flex-col items-center justify-around py-10">
              <input
                type="text"
                placeholder="Student Id"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Student Name"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <select
                name=""
                id=""
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              >
                <option value="">- Select Gender -</option>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
              </select>
              <input
                type="text"
                placeholder="Aadhaar Number"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Primary Email id"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />

              <p className="font-titlefont text-white">
                Basic Details of institue
              </p>
              <Link href="" className="text-blue-500">
                Click here to serach your college
              </Link>
              <input
                type="text"
                placeholder="AICTE Permanent Id"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Institute Name"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Institute State"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Institute Address"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <div className="w-full  flex justify-center gap-5">
                <button className="bg-red-500 w-[150px] h-[40px] text-white rounded-lg duration-300 hover:scale-[1.03]">
                  Back
                </button>
                <button className="bg-green-500 w-[150px] h-[40px] text-white rounded-lg duration-300 hover:scale-[1.03]">
                  Proceed Further
                </button>
              </div>
            </div>
          ) : (
            <div className="w-[80%] min-h-[100vh] bg-black/30 backdrop-blur-lg relative z-[1] rounded-xl flex flex-col items-center gap-5 py-10">
              <input
                type="text"
                placeholder="Faculty Id"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Faculty Name"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <select
                name=""
                id=""
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              >
                <option value="">- Select Gender -</option>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
              </select>
              <input
                type="text"
                placeholder="Aadhaar Number"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Primary Email id"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />

              <select
                name=""
                id=""
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              >
                <option value="">- Select Qualificantion -</option>
                <option value="B. Tech">B. Tech</option>
                <option value="M. Tech">M. Tech</option>
                <option value="PHD">PHD</option>
              </select>
              <select
                name=""
                id=""
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              >
                <option value="">- Select Type of Employement -</option>
                <option value="Regular">Regular</option>
                <option value="Contract">Contract</option>
                <option value="Adhoc">Adhoc</option>
              </select>
              <select
                name=""
                id=""
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              >
                <option value="">- Select Courses Handled per week -</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <p className="font-titlefont text-white">
                Basic Details of institue
              </p>
              <Link href="" className="text-blue-500">
                Click here to serach your college
              </Link>
              <input
                type="text"
                placeholder="AICTE Permanent Id"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Institute Name"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Institute State"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <input
                type="text"
                placeholder="Institute Address"
                className="w-[80%] h-[40px] bg-white/80 backdrop-blur-sm rounded-full pl-5"
              />
              <div className="w-full  flex justify-center gap-5">
                <button className="bg-red-500 w-[150px] h-[40px] text-white rounded-lg duration-300 hover:scale-[1.03]">
                  Back
                </button>
                <button className="bg-green-500 w-[150px] h-[40px] text-white rounded-lg duration-300 hover:scale-[1.03]">
                  Proceed Further
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-[50vh] right-[-10vw] w-[30%] h-screen bg-[#100b3a] rotate-[45deg]"></div>
        <div className="absolute bottom-[52vh] right-[-5vw] w-[30%] h-screen bg-[#5542fda9] rotate-[-65deg]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
