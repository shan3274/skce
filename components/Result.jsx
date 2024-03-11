import { GiWorld } from "react-icons/gi";
import React from "react";
import Bubble from "@/utils/bubble";
import { IoBookSharp } from "react-icons/io5";
import { FaSwatchbook } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const Result = ({ scollLength, currentHieght }) => {
  return (
    <div className="w-full min-h-[50vh] relative flex flex-col items-center justify-center bg-[#F6F9F5] gap-5 overflow-hidden">
      <div className="absolute h-full w-full  top-[-50vh] left-[-15vw]   z-[0] duration-300 ">
        <Bubble color={"#0A2647"} width={"40vw"} />
      </div>
      <div className="absolute h-full w-full  top-[20vh] left-[140vh]   z-[0] duration-300 ">
        <Bubble color={"#0A2647"} width={"40vw"} />
      </div>
      <h1 className="lg:text-[35px] text-[20px]  lg:w-[60%] text-center  font-[700] z-[1]">
        University Exam Result April/May-2023 Final year 100% Result
      </h1>
      <p className="font-[100] ">-------- ----</p>
      <div className="w-[70%] flex justify-around flex-wrap gap-y-3 overflow-hidden">
        <div className="w-[250px] h-[100px] bg-[#0A2647] relative rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1] duration-300 cursor-pointer">
          <div className="absolute left-[-20%]">
            {" "}
            <Bubble />
          </div>
          <IoBookSharp color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            MANDATORY DISCLOSURE
          </p>
        </div>
        <div className="w-[250px] h-[100px] bg-[#0A2647] relative rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1] duration-300 cursor-pointer">
          <div className="absolute right-[-60%]">
            {" "}
            <Bubble />
          </div>
          <FaSwatchbook color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            AICTE ESSENTIALS
          </p>
        </div>
        <div className="w-[250px] h-[100px] bg-[#0A2647] relative rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1] duration-300 cursor-pointer">
          <div className="absolute right-[-80%]">
            {" "}
            <Bubble />
          </div>
          <FaComputer color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            AICTE APPROVALS
          </p>
        </div>
        <div className="w-[250px] h-[100px] bg-[#0A2647] relative rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1] duration-300 cursor-pointer">
          <div className="absolute right-[-50%]">
            {" "}
            <Bubble />
          </div>
          <GiWorld color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">APPROVAL</p>
        </div>
      </div>
      <button className="bg-[#0A2647] text-white w-[220px] h-[50px]">
        Know more
      </button>
    </div>
  );
};

export default Result;
