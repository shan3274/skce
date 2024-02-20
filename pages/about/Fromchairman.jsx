import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Fromchairman = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    const handleScroll = () => {
      const calculatedScrollLength = window.scrollY;
      setScrollLength(calculatedScrollLength);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);
  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />

      <div className="w-full h-screen relative bg-[#9e9e9e]">
        <div className="absolute w-[30%] h-[30%] bg-[#252525]  rotate-[-45deg] left-[-20vh] "></div>
        <div className="absolute w-[30%] h-[30%] bg-[#252525]  rotate-[-45deg] bottom-[-10vh] right-[-20vh] "></div>

        <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center gap-5">
          <img
            src="https://www.sreekrishnaengcollege.com/assets/img/chairman.jpg"
            alt=""
            className="lg:w-[30%] w-[80%] rounded-lg drop-shadow-xl lg:mt-20 mt-36"
          />
          <div className="lg:w-[40%] w-[90%] h-[30%] flex flex-col justify-around items-center">
            <h1 className="text-[40px] font-titlefont text-[#40269e] drop-shadow-lg">
              CHAIRMAN’S DESK
            </h1>

            <p className="font-titlefont text-center text-white">
              <Typewriter
                options={{
                  strings: [
                    " The founder of the Trust, Dr. A. Aranganathan, is a socialist with rich experience in educational institutions. Having achieved an inevitable reputation in his own profession, a keen social activist and visionary, felt the need of higher education at affordable cost to everyone.",
                  ],
                  delay: 2,

                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative bg-[#9e9e9e] overflow-hidden">
        <div className="absolute w-[30%] h-[30%] bg-[#252525]  rotate-[-45deg] top-[-5vh] left-[-20vh] "></div>
        <div className="absolute w-[30%] h-[30%] bg-[#252525]  rotate-[-45deg] bottom-[-10vh] right-[-20vh] "></div>

        <div className="w-full h-full flex  flex-col items-center justify-center gap-5">
          <img
            src="https://www.sreekrishnaengcollege.com/assets/img/slogan.jpeg"
            alt=""
            className="lg:w-[40%] w-[80%] rounded-lg drop-shadow-xl lg:mt-20 mt-36"
          />
          <div className=" w-[90%] h-[30%] flex flex-col justify-around items-center">
            <h1 className="text-[30px] text-center font-titlefont text-[#40269e] drop-shadow-lg w-[90%]">
              “EDUCATION IS A BETTER SAFEGUARD OF LIBERTY THAN A STANDING ARMY”
            </h1>

            <p className="font-titlefont text-center text-white z-[1] relative">
              <Typewriter
                options={{
                  strings: [
                    " Education is very essential among all of us, no one can deny this. It’s the education which transforms a person to live a better life and more importantly in a socially well being. Education helps us to cut the barrier of caste and creed. It helps everyone to become a pleasing personality in society. It imparts us with all the power and necessities in making a noticeable mark in any of the field. Through education one can learn to get civilized and lead a healthy life. So let us devote ourselves to educate ourselves as well as others.",
                    "At SKCE, we dedicate ourselves to provide world class quality, equity and effectiveness in education that will result in knowledge, skills and attitude which will help our students to participate in achieving national goals and positive participation in society.",
                  ],
                  delay: 2,

                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <Footer scrollLength={scrollLength} currHeight={currHeight} />
    </div>
  );
};

export default Fromchairman;
