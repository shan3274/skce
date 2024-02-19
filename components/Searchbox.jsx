import React, { useEffect, useState } from "react";

const Searchbox = ({ scrollLength, currHeight }) => {
  const searchData = [
    { name: "apple" },
    { name: "mango" },
    { name: "alpine" },
    { name: "appse" },
    { name: "magneta" },
    { name: "ap" },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="w-full  flex items-center justify-center">
      <div
        className={
          scrollLength > 10
            ? "fixed bottom-[5vh] duration-700 w-[50vw] h-[5vh] bg-white/30 backdrop-blur-sm  rounded-full z-[998] "
            : "fixed bottom-[0vh] w-[0vw] h-[0vh] duration-700 hidden"
        }
      >
        <div className="w-full h-full relative">
          {search != "" && (
            <div className="absolute bottom-[6vh]  w-full py-[2vh] bg-white rounded-md flex flex-col p-5 drop-shadow-lg">
              {searchData.map((item) => {
                if (item.name.includes(search)) {
                  return <div className="">{item.name}</div>;
                }
              })}
            </div>
          )}
          <input
            type="text"
            name=""
            id=""
            className="w-full h-full rounded-full bg-transparent pl-5 border-none focus"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
