import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Facilities = ({ scrollLength, currHeight }) => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);

  console.log(scrollLength);
  console.log(currHeight);

  const [screenWidth, setScreenWidth] = useState(0);
  const [slideperView, setSlidePerView] = useState(3);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 1000) {
      setSlidePerView(3);
    } else if (screenWidth > 600 && screenWidth < 1000) {
      setSlidePerView(2);
    } else if (screenWidth < 600) {
      setSlidePerView(1);
    }
  }, [screenWidth]);
  return (
    <>
      <div className="w-[100vw] h-screen flex items-center justify-center bg-[#fff] overflow-hidden relative z-[10]">
        {scrollLength > currHeight + currHeight / 3 && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={slideperView}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-[80vw] h-[70vh] flex items-center justify-evenly "
          >
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className=" w-[20vw] h-[60vh]  rounded-[50px] duration-300  hover:w-[25vw] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover drop-shadow-lg"
                onMouseEnter={() => setBox1(true)}
                onMouseLeave={() => setBox1(false)}
                style={{
                  backgroundImage: "url(application-form.jpg)",
                }}
              >
                <p
                  className={
                    box1
                      ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                      : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  vitae, obcaecati eaque tempora, hic totam aperiam placeat
                  aliquam provident ratione debitis, corporis molestiae tenetur
                  amet aspernatur quasi sapiente rem. Rem.
                </p>
                <p
                  className={
                    !box1
                      ? "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-100 duration-300"
                      : "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-0 duration-300"
                  }
                >
                  Example learn more
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className=" w-[20vw] h-[60vh]  rounded-[50px] duration-300  hover:w-[25vw] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
                onMouseEnter={() => setBox2(true)}
                onMouseLeave={() => setBox2(false)}
                style={{
                  backgroundImage: "url(67-1.jpg)",
                }}
              >
                <p
                  className={
                    box2
                      ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                      : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  vitae, obcaecati eaque tempora, hic totam aperiam placeat
                  aliquam provident ratione debitis, corporis molestiae tenetur
                  amet aspernatur quasi sapiente rem. Rem.
                </p>
                <p
                  className={
                    !box2
                      ? "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-100 duration-300"
                      : "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-0 duration-300"
                  }
                >
                  Example learn more
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className=" w-[20vw] h-[60vh]  rounded-[50px] duration-300  hover:w-[25vw] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
                onMouseEnter={() => setBox3(true)}
                onMouseLeave={() => setBox3(false)}
                style={{
                  backgroundImage: "url(64-1.jpg)",
                }}
              >
                <p
                  className={
                    box3
                      ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                      : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  vitae, obcaecati eaque tempora, hic totam aperiam placeat
                  aliquam provident ratione debitis, corporis molestiae tenetur
                  amet aspernatur quasi sapiente rem. Rem.
                </p>
                <p
                  className={
                    !box1
                      ? "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-100 duration-300"
                      : "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-0 duration-300"
                  }
                >
                  Example learn more
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className=" w-[20vw] h-[60vh]  rounded-[50px] duration-300  hover:w-[25vw] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
                onMouseEnter={() => setBox1(true)}
                onMouseLeave={() => setBox1(false)}
                style={{
                  backgroundImage: "url(application-form.jpg)",
                }}
              >
                <p
                  className={
                    box1
                      ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                      : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  vitae, obcaecati eaque tempora, hic totam aperiam placeat
                  aliquam provident ratione debitis, corporis molestiae tenetur
                  amet aspernatur quasi sapiente rem. Rem.
                </p>
                <p
                  className={
                    !box1
                      ? "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-100 duration-300"
                      : "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-0 duration-300"
                  }
                >
                  Example learn more
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className=" w-[20vw] h-[60vh]  rounded-[50px] duration-300  hover:w-[25vw] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
                onMouseEnter={() => setBox2(true)}
                onMouseLeave={() => setBox2(false)}
                style={{
                  backgroundImage: "url(67-1.jpg)",
                }}
              >
                <p
                  className={
                    box2
                      ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                      : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  vitae, obcaecati eaque tempora, hic totam aperiam placeat
                  aliquam provident ratione debitis, corporis molestiae tenetur
                  amet aspernatur quasi sapiente rem. Rem.
                </p>
                <p
                  className={
                    !box1
                      ? "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-100 duration-300"
                      : "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-0 duration-300"
                  }
                >
                  Example learn more
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: -100 }}
                transition={{ duration: 1 }}
                className=" w-[20vw] h-[60vh]  rounded-[50px] duration-300  hover:w-[25vw] relative top-[100px] overflow-hidden  flex items-center justify-center bg-cover "
                onMouseEnter={() => setBox3(true)}
                onMouseLeave={() => setBox3(false)}
                style={{
                  backgroundImage: "url(64-1.jpg)",
                }}
              >
                <p
                  className={
                    box2
                      ? "w-[100%] absolute bottom-[0vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                      : "w-[100%] absolute bottom-[-30vh] duration-300 bg-white/30 p-[5%] backdrop-blur-sm"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  vitae, obcaecati eaque tempora, hic totam aperiam placeat
                  aliquam provident ratione debitis, corporis molestiae tenetur
                  amet aspernatur quasi sapiente rem. Rem.
                </p>
                <p
                  className={
                    !box3
                      ? "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-100 duration-300"
                      : "absolute z-[1] w-full h-[15%] bg-black/80 text-white bottom-0 p-5 opacity-0 duration-300"
                  }
                >
                  Example learn more
                </p>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>{" "}
    </>
  );
};

export default Facilities;
