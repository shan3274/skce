import Image from "next/image";
import React, { useEffect, useState } from "react";
import Imageshow from "./Imageshow";
import { motion } from "framer-motion";

const Sliders = () => {
  const imageUrls = [
    "https://i.ibb.co/qCkd9jS/img1.jpg",
    "https://i.ibb.co/jrRb11q/img2.jpg",
    "https://i.ibb.co/NSwVv8D/img3.jpg",
    "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    "https://i.ibb.co/jTQfmTq/img5.jpg",
    "https://i.ibb.co/RNkk6L0/img6.jpg",
  ];

  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    setInterval(() => {
      if (c > imageUrls.length - 2) c = 0;
      c++;

      setCount(c);
    }, 4000);

    console.log(window.innerWidth);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="absolute sm:w-[100%] sm:h-[80%] flex items-center justify-start ">
        <Imageshow bg={imageUrls[count - 1]} />
      </div>
      {count == 0 && <Imageshow bg={imageUrls[0]} />}
      {count == 1 && <Imageshow bg={imageUrls[1]} />}
      {count == 2 && <Imageshow bg={imageUrls[2]} />}
      {count == 3 && <Imageshow bg={imageUrls[3]} />}
      {count == 4 && <Imageshow bg={imageUrls[4]} />}
      {count == 5 && <Imageshow bg={imageUrls[5]} />}
    </div>
  );
};

export default Sliders;
