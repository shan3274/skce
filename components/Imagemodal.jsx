import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Imagemodal = ({ data, setClose, index }) => {
  const [i, setI] = useState(index);
  console.log(i);
  return (
    <div className="w-full h-screen bg-black/50 fixed z-[999] inset-0 flex items-center justify-center ">
      <div className="relative w-full h-screen flex items-center justify-center ">
        <button
          className="text-white absolute right-10 top-10"
          onClick={() => setClose(false)}
        >
          X
        </button>
        <CiCircleChevLeft
          className="absolute left-[10vw] text-white"
          size={50}
          onClick={() => {
            if (i > 0) {
              setI(i - 1);
            } else {
              setI(8);
            }
          }}
        />
        <CiCircleChevRight
          className="absolute right-[10vw] text-white"
          size={50}
          onClick={() => {
            if (i < 8) {
              setI(i + 1);
            } else {
              setI(0);
            }
          }}
        />
        <img
          src={data[i]?.img}
          alt=""
          className="w-[50%] rounded-md "
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Imagemodal;
