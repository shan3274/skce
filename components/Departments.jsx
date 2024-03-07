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
// Reducer function to handle state updates
const boxesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return state.map((box, index) => (index === action.index ? !box : box));
    case "REVERT":
      return state.map((box, index) => (index === action.index ? !box : box));
    default:
      return state;
  }
};

const Departments = () => {
  const data = [
    civildata,
    csedatas,
    elecandcom,
    electric,
    mechdata,
    sciencedata,
  ];

  const [boxs, dispatch] = useReducer(boxesReducer, [
    false,
    true,
    true,
    true,
    true,
    true,
  ]);

  const toggleBox = (index) => {
    dispatch({ type: "TOGGLE", index });
  };

  const revertBox = (index) => {
    dispatch({ type: "REVERT", index });
  };

  let [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i >= 6) i = 0;
      let value = i++;
      setCount(value);
    }, 5000);
  }, []);

  const colors = [
    "#294366",
    "#071169",
    "#6245f5",
    "#541899",
    "#022745",
    "#a10e46",
    "#a10e46",
  ];

  const [posi, setPosi] = useState(0);
  const [bgColor, setBgColor] = useState(colors[0]); //

  useEffect(() => {
    if (count == 0) {
      setBgColor(colors[0]);
      setPosi(20);
      toggleBox(0);
      revertBox(5);
    }
    if (count == 1) {
      setBgColor(colors[1]);
      setPosi(posi + 100);
      revertBox(0);
      toggleBox(1);
    }
    if (count == 2) {
      setBgColor(colors[2]);
      setPosi(posi + 100);
      toggleBox(2);
      revertBox(1);
    }
    if (count == 3) {
      setBgColor(colors[3]);
      setPosi(posi + 100);
      toggleBox(3);
      revertBox(2);
    }
    if (count == 4) {
      setBgColor(colors[4]);
      setPosi(posi + 100);
      toggleBox(4);
      revertBox(3);
    }
    if (count == 5) {
      setBgColor(colors[5]);
      setPosi(posi + 100);
      toggleBox(5);
      revertBox(4);
    }
  }, [count]);

  const [onMenu, setOnMenu] = useState(false);
  console.log(boxs);
  return (
    <div className="w-full h-[100vh] relative  flex items-center justify-center  rounded-3xl my-10 ">
      <div
        className="absolute  cursor-pointer px-5 overflow-hidden h-[40px] bg-black/50 text-white backdrop-blur-md rounded-full z-[1] top-5 flex items-center justify-around"
        onMouseEnter={() => setOnMenu(true)}
        onMouseLeave={() => setOnMenu(false)}
      >
        <div
          className="absolute duration-300 w-[100px] h-[25px] bg-white z-[2] top-1.5 left-1 rounded-full"
          style={{
            left: `${posi}px`,
          }}
        ></div>
        {data.map((item, key) => {
          return (
            <p
              onClick={() => {
                setCount(key);
              }}
              style={{
                color: !boxs[key] && "black",
              }}
              className="text-[10px] relative z-[3] w-[100px] text-center"
            >
              {item.sName}
            </p>
          );
        })}
      </div>
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
