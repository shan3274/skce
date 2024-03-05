import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useElementPosition from "./hooks/useElementposition";
import { IoIosArrowForward } from "react-icons/io";

const refsItem = (intdex) => {
  const item = [];
  for (let i = 0; i < intdex; i++) {
    item.push(useRef(null));
  }
  return item;
};
const getPostion = (num, item) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(useElementPosition(item[i]));
  }
  return arr;
};
const Layout2 = ({ data }) => {
  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const position1 = useElementPosition(elementRef1);
  const position2 = useElementPosition(elementRef2);
  const position3 = useElementPosition(elementRef3);

  const [screenHeight, setScreenHiegth] = useState(0);

  // for useRef(null) in arrays
  const items = refsItem(data?.softwareData?.data.length);
  const fisrtItems = refsItem(data?.systemconfig?.data.length);
  const thirdtItems = refsItem(data?.laboratoryData?.data.length);

  // const itempostion = useElementPosition(elementRef3);
  let itemsPosition = getPostion(data?.softwareData?.data.length, items);
  let firstitemsPosition = getPostion(
    data?.systemconfig?.data.length,
    fisrtItems
  );
  let thirdItemsPosition = getPostion(
    data?.laboratoryData?.data.length,
    thirdtItems
  );

  useEffect(() => {
    setScreenHiegth(window.innerHeight);
  }, []);

  const scrollTrigger = screenHeight - screenHeight / 10;
  console.log(thirdItemsPosition);

  return (
    <motion.div className="w-full min-h-screen  flex flex-col gap-5 items-center justify-center py-10">
      {data?.systemconfig != undefined && (
        <motion.div className="lg:w-[80%] w-full overflow-hidden h-[70vh] flex items-start justify-around mt-10">
          <div className="w-[30%] min-h-[20%]  drop-shadow-lg p-10">
            <p className="font-titlefont lg:text-[37px] mb-5">
              {data?.systemconfig?.title}
            </p>
            {data?.systemconfig?.data?.map((item, key) => {
              return (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  animate={{
                    y: scrollTrigger > firstitemsPosition[key] ? 0 : -20,
                    opacity: scrollTrigger > firstitemsPosition[key] ? 1 : 0,
                  }}
                  ref={fisrtItems[key]}
                  className=" flex flex-col mb-5"
                >
                  {item?.title != undefined && (
                    <p className="font-sans text-[15px] flex items-center gap-1">
                      {" "}
                      <IoIosArrowForward />
                      {item.title}
                    </p>
                  )}
                  {item?.name != undefined && (
                    <p className="font-sans text-[15px] flex items-center gap-1">
                      {" "}
                      <IoIosArrowForward />
                      {item.name}
                    </p>
                  )}
                  {item?.description != undefined && (
                    <p className="font-serif  pl-5 text-[10px]">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
          <motion.img
            initial={{ x: 250 }}
            transition={{ duration: 0.5, opacity: 0 }}
            animate={{
              x: scrollTrigger > position1 ? 0 : 250,
              opacity: scrollTrigger > position1 ? 1 : 0,
            }}
            ref={elementRef1}
            src={data?.systemconfig?.bg[0]}
            className="w-[60%] rounded-[50px]"
          />
        </motion.div>
      )}
      {data?.softwareData != undefined && (
        <motion.div className="lg:w-[80%]overflow-hidden h-[70vh] flex items-center justify-around">
          <motion.img
            src={data?.softwareData?.bg[0]}
            className="w-[60%] rounded-[50px]"
            ref={elementRef2}
            initial={{ x: -250 }}
            transition={{ duration: 0.5, opacity: 0 }}
            animate={{
              x: scrollTrigger > position2 ? 0 : -250,
              opacity: scrollTrigger > position2 ? 1 : 0,
            }}
          />
          <div className="w-[30%] min-h-[20%]  rounded-md drop-shadow-lg p-10">
            <p className="font-titlefont lg:text-[37px] mb-5">
              {data?.softwareData?.title}
            </p>
            {data?.softwareData?.data?.map((item, key) => {
              return (
                <div className=" flex flex-col mb-5">
                  <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      y: scrollTrigger > itemsPosition[key] ? 0 : -20,
                      opacity: scrollTrigger > itemsPosition[key] ? 1 : 0,
                    }}
                    ref={items[key]}
                    className="font-sans text-[15px] flex items-center gap-1"
                  >
                    <IoIosArrowForward />
                    {item.name}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
      {data?.laboratoryData != undefined && (
        <div className="w-[80%] overflow-hidden h-[70vh] flex items-center justify-around">
          <div className="w-[30%] h-[70vh] overflow-scroll flex-wrap  drop-shadow-lg p-10">
            <p className="font-titlefont text-[37px] mb-5">
              {data?.laboratoryData?.title}
            </p>
            {data?.laboratoryData?.data?.map((item, key) => {
              console.log(item);
              return (
                <div className=" flex flex-col mb-5 ">
                  <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      y: scrollTrigger > thirdItemsPosition[key] ? 0 : -20,
                      opacity: scrollTrigger > thirdItemsPosition[key] ? 1 : 0,
                    }}
                    ref={thirdtItems[key]}
                    className="font-sans text-[15px] flex items-center gap-1"
                  >
                    <IoIosArrowForward /> {item.name}
                  </motion.p>
                </div>
              );
            })}
          </div>
          <motion.img
            initial={{ x: 250 }}
            transition={{ duration: 0.5, opacity: 0 }}
            animate={{
              x: scrollTrigger > position3 ? 0 : 250,
              opacity: scrollTrigger > position3 ? 1 : 0,
            }}
            ref={elementRef3}
            src={data?.laboratoryData?.bg[0]}
            className="w-[60%] rounded-[50px]"
          />
        </div>
      )}

      {data?.facultydata != undefined && (
        <div
          className="w-full min-h-screen flex items-center justify-center bg-[url(https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10)]
      bg-cover mt-10
      "
        >
          <div className="relative w-[60%] py-10 rounded-[50px] bg-black/30 backdrop-blur-lg bg-cover flex flex-col items-center justify-center gap-5 duration-300">
            <div className="w-[90%] h-[40px] bg-white/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 ">
              <div className="w-[20%]">S.NO</div>
              <div className="w-[40%]">FACULTY NAME</div>
              <div className="w-[40%]">QUALIFICATION</div>
            </div>
            {data?.facultydata?.map((item) => {
              return (
                <div className="w-[90%] h-[40px] bg-white/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 ">
                  <div className="w-[20%]">{item.sno}</div>
                  <div className="w-[40%]">{item.name}</div>
                  <div className="w-[40%]">{item.qualification}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Layout2;
