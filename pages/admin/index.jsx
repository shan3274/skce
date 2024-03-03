import React from "react";

const index = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[50%] h-[40%] bg-white border drop-shadow-lg flex flex-col items-center justify-center gap-5 rounded-lg">
        <h1 className="text-[30px] font-titlefont text-gray-500">
          Admin Login
        </h1>
        <input
          type="email"
          className="w-[60%] h-[40px] pl-5 border border-gray-300 rounded-full"
          placeholder="Admin email"
        />
        <input
          type="password"
          className="w-[60%] h-[40px] pl-5 border border-gray-300 rounded-full"
          placeholder="Admin password"
        />
        <button className="w-[150px] h-[40px] bg-green-500 text-white rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default index;
