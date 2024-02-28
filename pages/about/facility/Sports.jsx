import Footer from "@/components/Footer";
import Nheader from "@/components/Nheader";
import Layout1 from "@/components/Layout1";
import { BackgroundBeams } from "@/utils/background-beams";
import React, { useEffect, useState } from "react";
import { sportdata } from "@/utils/facilitiesdata";

const Sports = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);
  }, [scrollLength]);

  const img = [
    "https://www.sreekrishnaengcollege.com/assets/img/49.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/55.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/60.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/61.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/60.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/61.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/62.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/63.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/SREE-KRISHNA-COLLEGE-OF-ENGG-05.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/SREE-KRISHNA-COLLEGE-OF-ENGG-06.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/64-1.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/65.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/67-1.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/54-1.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-21.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-22.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-73.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/sree-krishna-college-of-engg-vellore-74.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/66.jpg",
    "https://www.sreekrishnaengcollege.com/assets/img/skcevellore17.jpg",
  ];

  return (
    <div>
      <Nheader scrollLength={scrollLength} currHeight={currHeight} />
      <Layout1 data={sportdata} />
      <div className="w-full min-h-screen overflow-scroll flex flex-col items-center justify-start gap-5 relative top-[15vh]  ">
        <div className="fixed top-0 w-full h-screen  z-[-2] bg-[#282828]">
          <BackgroundBeams />
        </div>
        <div className="w-[80%] pb-[30vh] flex flex-wrap items-center justify-center gap-5">
          {img.map((item, key) => {
            return (
              <>
                <img
                  src={item}
                  className="w-[300px] object-cover rounded hover:scale-[1.5] duration-300"
                  style={{
                    width: key % 2 === 1 && "400px",
                  }}
                />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
