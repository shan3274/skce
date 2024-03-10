import React, { useEffect, useState } from "react";
import Nheader from "./Nheader";
import Image from "next/image";

const Layout3 = ({ data }) => {
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    setScrollLength(100);
  }, [scrollLength]);

  return (
    <div>
      <Nheader scrollLength={scrollLength} />
      <div className="w-full h-screen bg-[#EFD6AC] flex items-center justify-around">
        <img
          src={data?.bg}
          alt=""
          className="w-[40%] drop-shadow-2xl rounded-[50px]"
        />
        <div className="w-[50%] h-full flex gap-5 flex-col justify-center">
          <h1 className="font-titlefont text-5xl">{data?.h1}</h1>
          <p className="text-[13px] w-[80%] text-justify font-poppins text-gray-500">
            {data?.p1}
          </p>
          <h1 className="font-titlefont text-5xl">{data?.h2}</h1>
          <p className="text-[13px] w-[80%] text-justify font-poppins text-gray-500">
            {data?.p2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
