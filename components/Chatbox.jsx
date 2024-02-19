import React, { useState } from "react";

import { CiChat1 } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

const Chatbox = () => {
  const [clicked, setClicked] = useState(false);

  console.log(clicked);
  return (
    <div
      className={
        clicked
          ? "fixed right-10 bottom-10 w-[30vw] h-[40vh] bg-white rounded-md z-[998] flex items-center justify-center text-white cursor-pointer duration-300 overflow-hidden drop-shadow-lg"
          : "fixed right-10 bottom-10 w-[10vh] h-[10vh] bg-blue-500 rounded-full z-[999] flex items-center justify-center text-white cursor-pointer duration-300 overflow-hidden drop-shadow-lg"
      }
    >
      {!clicked && <CiChat1 size={30} onClick={() => setClicked(true)} />}
      {clicked && (
        <div className="w-full h-full relative flex items-center justify-center">
          <button
            className="absolute z-[999] text-black right-3 top-1 text-[20px]"
            onClick={() => setClicked(false)}
          >
            x
          </button>

          <div className="absolute bottom-3 w-full flex gap-3 items-center justify-center text-black">
            <input
              type="text"
              className="border border-black w-[70%]  h-[40px] rounded-l-full pl-5"
            />
            <button className="bg-blue-500 h-[40px] w-[10%] flex items-center pl-2 rounded-r-full">
              <IoMdSend color="#fff" size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
