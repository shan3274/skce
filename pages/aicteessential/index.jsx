import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import { getElement } from "@/utils/firebase";
import React, { useEffect, useState } from "react";

const index = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    setCount(100);
  }, []);

  const data = getElement("aicteessentials/Xx9cMye0LVakZphsKgwQ");
  console.log(data);
  return (
    <div className="w-full min-h-screen bg-[url(https://images.pexels.com/photos/20291106/pexels-photo-20291106/free-photo-of-a-small-house-on-top-of-a-hill-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10)] bg-cover">
      <Nheader scrollLength={count} />
      <div className="w-full min-h-screen flex items-center justify-center pt-10 mt-10 mb-20">
        <div className="w-[60%] min-h-[80vh] bg-white/30 backdrop-blur-xl relative top-10 rounded-[50px] flex flex-col items-center justify-center gap-5 pt-10">
          <h1 className="font-Comfortaa text-white text-[30px] text-center font-[700]">
            {data?.h1}
          </h1>
          <h2 className="font-Comfortaa w-[60%] text-white text-[15px] text-center font-[500]">
            {data?.h2}
          </h2>
          <div className="flex p-10">
            {" "}
            <div className=" flex pl-10 flex-col justify-center gap-2">
              {data?.items?.map((item) => {
                return <p className="text-[15px] w-[60%] text-white">{item}</p>;
              })}
            </div>
            <div className=" flex pl-10 flex-col justify-center gap-4">
              {data?.downloadlink?.map((item) => {
                return (
                  <a
                    className="text-[15px]  border-b border-b-black  duration-300 hover:text-white hover:border-b-white"
                    href={item}
                  >
                    Download
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
