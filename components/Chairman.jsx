import { BackgroundBeams } from "@/utils/background-beams";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Chairman = () => {
  const [interval, setInterval] = useState(0);
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setInterval(interval + 1);
    }, 1000);
  }, []);
  console.log(interval);
  let img1 = "https://www.sreekrishnaengcollege.com/assets/img/chairman.jpg";
  return (
    <div className="w-[full] h-[80vh] bg-[#dedede] relative overflow-hidden flex items-center justify-center">
      <BackgroundBeams />
      <Image
        loader={() => (img1 = img1)}
        src={img1}
        width={0}
        height={0}
        className="w-[80%] object-cover z-[1]  drop-shadow-2xl relative "
      />
    </div>
  );
};

export default Chairman;
