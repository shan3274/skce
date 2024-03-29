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
import { getElement } from "@/utils/firebase";

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

  let [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount >= 5 ? 0 : prevCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const Color = getElement(
    "colors/r1iHA62cu5KWCqgQ4fou/Departments/uSRGwOymAsQ9z7AyYnjB"
  );

  useEffect(() => {
    let newBgColor = Color?.left[count];
    const newPosi = 20 + count * 100;

    setPosi(newPosi);
    dispatch({ type: "TOGGLE", index: count });
    dispatch({ type: "REVERT", index: count === 0 ? 5 : count - 1 });
  }, [count]);

  const [posi, setPosi] = useState(20);

  return (
    <div className="w-full h-[100vh] relative  flex items-center justify-center  rounded-3xl my-10 ">
      {/* Departments menu */}
      <div className="absolute  cursor-pointer px-5 overflow-hidden h-[40px] bg-black/50 text-white backdrop-blur-md rounded-full z-[1] top-5 flex items-center justify-around">
        {/* Position indicator */}
        <div
          className="absolute duration-300 w-[100px] h-[25px] bg-white z-[2] top-1.5 left-1 rounded-full"
          style={{ left: `${posi}px` }}
        ></div>
        {/* Menu items */}
        {data.map((item, key) => (
          <p
            key={key}
            onClick={() => setCount(key)}
            style={{ color: !boxs[key] && "black" }}
            className="text-[10px] relative z-[3] w-[100px] text-center"
          >
            {item.sName}
          </p>
        ))}
      </div>
      {/* Render left and right components based on count */}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {count === index && (
            <Left1
              bgColor={Color?.left[count]}
              count={count}
              data={item}
              svgColors={Color?.left}
            />
          )}
          {count === index && (
            <Right data={item} count={count} color={Color?.right} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Departments;
