import React, { useEffect, useReducer, useState } from "react";
import {
  civildata,
  csedatas,
  elecandcom,
  electric,
  mechdata,
  sciencedata,
} from "@/utils/Departmentdetails";

const Departments = () => {
  const data = [
    civildata,
    csedatas,
    elecandcom,
    electric,
    mechdata,
    sciencedata,
  ];

  let [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i >= 6) i = 0;
      let value = i++;
      setCount(value);
    }, 5000);
  }, []);
  console.log(count);
  const [disData, setDisData] = useState(civildata);

  useEffect(() => {
    if (count == 0) {
      setDisData(civildata);
    }
    if (count == 1) {
      setDisData(csedatas);
    }
    if (count == 2) {
      setDisData(elecandcom);
    }
    if (count == 3) {
      setDisData(electric);
    }
    if (count == 4) {
      setDisData(mechdata);
    }
    if (count == 5) {
      setDisData(sciencedata);
    }
  }, [count]);
  const changeData = (value, key) => {
    setCount(key);
    if (value == "B.E CIVIL ENGINEERING") {
      setDisData(civildata);
    }
    if (value == "B.E- COMPUTER SCIENCE AND ENGINEERING") {
      setDisData(csedatas);
    }
    if (value == "B.E ELECTRONICS AND COMMUNICATION ENGINEERING") {
      setDisData(elecandcom);
    }
    if (value == "B.E ELECTRICAL AND ELECTRONICS ENGINEERING") {
      setDisData(electric);
    }
    if (value == "B.E MECHANICAL ENGINEERING") {
      setDisData(mechdata);
    }
    if (value == "SCIENCE AND HUMANITIES") {
      setDisData(sciencedata);
    }
  };

  return (
    <div className="w-full h-[65vh] flex items-center justify-center relative  rounded-3xl my-10 ">
      <div
        className="w-[50%] h-[50vh] absolute z-[1] left-5 overflow-hidden rounded-xl drop-shadow-xl duration-300"
        style={{
          backgroundImage: `url(${disData.bg[0]})`,
        }}
      >
        <div className=" w-full h-full z-[2] bg-[rgba(0,0,0,.3)]"></div>
      </div>
      <div className="absolute w-[15vw] h-[80%] left-0 flex flex-col justify-center items-center gap-5 ml-5">
        {data?.map((item, key) => {
          return (
            <button
              onMouseEnter={() => {
                changeData(item?.h1, key);
              }}
              className={
                key == count
                  ? "w-[90%] z-[2] text-start pl-5 text-[10px] bg-white/80 backdrop-blur-sm h-[40px] rounded-xl duration-100 hover:scale-[1.1] scale-[1.1]"
                  : "w-[90%] z-[2] text-start pl-5 text-[10px] bg-white/80 backdrop-blur-sm h-[40px] rounded-xl duration-100 hover:scale-[1.1] scale-[1]"
              }
            >
              {item?.h1}
            </button>
          );
        })}
      </div>
      <div className="w-[45%] min-h-[20%] absolute right-5 py-10 bg-black/60  text-white backdrop-blur-sm rounded-xl flex flex-col items-center pt-10 gap-5 duration-700">
        <p className="text-[18px] w-[90%] text-center font-titlefont duration-300">
          {disData.h1}
        </p>
        <p className="text-[13px] w-[90%] text-center font-titlefont duration-300">
          {disData.h2}
        </p>
        <p className="text-[10px] w-[90%] text-center font-sans duration-300">
          {disData.p1}
        </p>
      </div>
    </div>
  );
};

export default Departments;
