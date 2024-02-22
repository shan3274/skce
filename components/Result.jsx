import { BackgroundBeams } from "@/utils/background-beams";
import React from "react";

const Result = ({ scollLength, currentHieght }) => {
  return (
    <div className="w-full h-[50vh] relative flex flex-col items-center justify-center bg-[#F6F9F5] gap-5 overflow-hidden">
      <div
        className="absolute h-full w-[40%] lg:w-[20%] bg-[#225872] left-[-15vh] top-[-20vh] lg:top-[-10vh] z-[0] rotate-[30deg] duration-300 rounded-full"
        style={{ rotate: `${scollLength / 7}deg` }}
      ></div>
      <div
        className="absolute h-full w-[30%] lg:w-[10%] bg-[#225872] right-[-20vh] bottom-[-25vh] z-[0] rotate-[30deg] duration-300 rounded-full"
        style={{ rotate: `${scollLength / 7}deg` }}
      ></div>
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
