import React from "react";
import { IoPlayOutline } from "react-icons/io5";
const Videos = () => {
  return (
    <div className="w-full h-[60vh] overflow-hidden mt-10 flex items-center justify-center relative rounded">
      <div className="w-[80%]  bg-black/50 absolute aspect-[16/9] flex flex-col items-center justify-center gap-10 ">
        <h1 className="text-[30px] font-[700] font-titlefont text-white relative after:absolute after:w-[70px] after:h-[2px] after:bg-white after:top-[120%] after:left-[50%] before:absolute before:w-[70px] before:h-[2px] before:bg-white before:top-[120%] before:right-[55%]">
          TAKE A SHORT TOUR IN SKCE
        </h1>
        <p className="w-[60%] text-center text-white ">
          Sree Krishna College of Engineering in Vellore was inaugurated in
          August 2010 by Vellore District Collector Mr.S. Rajendran. SKCE is
          managed by Lord Sree Krishna Trust.
        </p>

        <IoPlayOutline
          size={50}
          color="white"
          className="hover:scale-[1.1] relative z-[2] cursor-pointer duration-300"
        />
      </div>
      <video src="video.mp4" autoPlay loop muted className="w-[80%] "></video>
    </div>
  );
};

export default Videos;
