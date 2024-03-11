import React, { useEffect, useState } from "react";
import Nheader from "./Nheader";
import Image from "next/image";

const Layout3 = ({ data }) => {
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    setScrollLength(100);
  }, [scrollLength]);

  const bg = data?.bg[0].split(".");

  return (
    <div>
      <Nheader scrollLength={scrollLength} />
      <div className="w-full h-screen bg-[#6c46f5]">
        <div className="w-full h-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-white rounded-[50px] relative top-10 drop-shadow-xl border flex items-center justify-center ">
            <div className="w-[50%] h-full flex flex-col justify-center items-center pl-10 gap-10">
              {data?.h1 && (
                <h1 className="w-full h-[40px] flex items-center justify-center font-titlefont rounded-full pt-1 text-[35px]">
                  {data.h1}
                </h1>
              )}
              {data?.h3 && (
                <h1 className="w-full h-[40px] flex items-center justify-center font-titlefont rounded-full pt-1 text-[15px]">
                  {data.h3}
                </h1>
              )}
              {data?.p1 && (
                <p className="text-[13px] text-justify font-poppins text-gray-500">
                  {data.p1}
                </p>
              )}
              {data?.h2 && (
                <h1 className="w-full h-[40px] flex items-center justify-center font-titlefont rounded-full pt-1 text-[35px]">
                  {data?.h2}
                </h1>
              )}

              {data?.p2 && (
                <p className="text-[12px] text-justify font-poppins text-gray-500">
                  {data.p2}
                </p>
              )}
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center p-10 gap-5">
              <img
                src={
                  bg != undefined && bg[2] != "jpg"
                    ? data?.bg[0]
                    : bg != undefined && `${bg[1]}.${bg[2]}`
                }
                alt={bg != undefined && bg[1]}
                className="rounded-[50px] border drop-shadow-2xl"
              />
              {data?.nameplate && (
                <div className="w-full pl-10 relative flex flex-col gap-2 top-10 bg-black/30 backdrop-blur-xl p-5 rounded-[30px] text-white">
                  <h1 className="text-[25px] font-titlefont font-[700]">
                    {data?.principlename}
                  </h1>
                  <h2 className="text-[15px] font-Comfortaa font-[500]">
                    {data?.princilplequalification}
                  </h2>
                  <p className="text-[12px] font-Comfortaa font-[500]">
                    {data?.position}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
