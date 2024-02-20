import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Aicteesen = () => {
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

  const data = [
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },

    {
      vale: "All Weather Approach",
      url: "https://www.sreekrishnaengcollege.com/assets/img/All-Weather-Approach.pdf",
    },
  ];
  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <div className="w-full min-h-screen overflow-scroll duration-300 flex flex-col items-center pt-[30vh] pb-10 gap-10 bg-[url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
        <div className="relative w-[80%] py-10 rounded-md bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center gap-5 duration-300">
          <div className="w-[90%] h-[40px] bg-black/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white">
            <div className="w-[80%]">POSITION</div>
            <div className="w-[20%]">QUALIFICATION</div>
          </div>
          {data.map((item) => {
            return (
              <div className="w-[90%] h-[40px] bg-white/50 rounded-md backdrop-blur-md flex items-center justify-around pl-5 text-white ">
                <div className="w-[80%]">{item.vale}</div>
                <div className="w-[20%] relative">
                  <Link
                    href={item.url}
                    className="bg-green-500 px-10 py-2 h-[30px] text-[13px] rounded-lg  "
                  >
                    Click here
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aicteesen;
