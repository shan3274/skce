import { BackgroundBeams } from "@/utils/background-beams";
import React from "react";
import Bubble from "@/utils/bubble";

const Result = ({ scollLength, currentHieght }) => {
  return (
    <div className="w-full h-[50vh] relative flex flex-col items-center justify-center bg-[#F6F9F5] gap-5 overflow-hidden">
      <div className="absolute h-full w-full  top-[-50vh] left-[-20vw]   z-[0] duration-300 ">
        <Bubble color={"#225872"} width={"40vw"} />
      </div>
      <div className="absolute h-full w-full  top-[20vh] left-[160vh]   z-[0] duration-300 ">
        <Bubble color={"#225872"} width={"40vw"} />
      </div>
      <h1 className="lg:text-[50px] text-[30px]  lg:w-[60%] text-center  font-[700] z-[1]">
        University Exam Result April/May-2023 Final year 100%Result
      </h1>
      <p className="font-[100] ">-------- ----</p>
      <button className="bg-[#225872] text-white w-[220px] h-[50px]">
        Know more
      </button>
    </div>
  );
};

export default Result;
