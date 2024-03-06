import React, { useEffect, useReducer, useState } from "react";
import {
  civildata,
  csedatas,
  elecandcom,
  electric,
  mechdata,
  sciencedata,
} from "@/utils/Departmentdetails";

import Left1 from "./departments/Left1";
import Right from "./departments/Right";

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

  const [disData, setDisData] = useState(civildata);

  const colors = [
    "#294366",
    "#071169",
    "#6245f5",
    "#541899",
    "#022745",
    "#a10e46",
    "#a10e46",
  ];

  const [bgColor, setBgColor] = useState(colors[0]); //
  useEffect(() => {
    if (count == 0) {
      setDisData(civildata);
      setBgColor(colors[0]);
    }
    if (count == 1) {
      setDisData(csedatas);
      setBgColor(colors[1]);
    }
    if (count == 2) {
      setDisData(elecandcom);
      setBgColor(colors[2]);
    }
    if (count == 3) {
      setDisData(electric);
      setBgColor(colors[3]);
    }
    if (count == 4) {
      setDisData(mechdata);
      setBgColor(colors[4]);
    }
    if (count == 5) {
      setDisData(sciencedata);
      setBgColor(colors[5]);
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
    <div className="w-full h-[100vh] relative  flex items-center justify-center  rounded-3xl my-10 ">
      {count == 0 && <Left1 bgColor={bgColor} count={count} data={data[0]} />}
      {count == 1 && <Left1 bgColor={bgColor} count={count} data={data[1]} />}
      {count == 2 && <Left1 bgColor={bgColor} count={count} data={data[2]} />}
      {count == 3 && <Left1 bgColor={bgColor} count={count} data={data[3]} />}
      {count == 4 && <Left1 bgColor={bgColor} count={count} data={data[4]} />}
      {count == 5 && <Left1 bgColor={bgColor} count={count} data={data[5]} />}
      {count == 0 && <Right data={data[0]} count={count} />}
      {count == 1 && <Right data={data[1]} count={count} />}
      {count == 2 && <Right data={data[2]} count={count} />}
      {count == 3 && <Right data={data[3]} count={count} />}
      {count == 4 && <Right data={data[4]} count={count} />}
      {count == 5 && <Right data={data[5]} count={count} />}
    </div>
  );
};

export default Departments;
