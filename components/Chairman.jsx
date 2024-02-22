import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "@/public/slide1.webp";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Chairman = () => {
  return (
    <div className="w-full h-screen bg-[#1E4078] flex lg:flex-row flex-col-reverse relative overflow-hidden ">
      <div className="lg:absolute left-[20vh] top-0 lg:w-[30%] h-screen flex flex-col items-start justify-center gap-2 text-white p-10">
        <h1 className="lg:text-[35px] text-[30px] font-[700]">
          Play on the Stage or on the Field
        </h1>
        <h2 className="text-[20px] font-[700]">Conservatory of Music</h2>
        <p className="lg:text-[15px] text-[13px]">
          Wheaton's world-renowned Conservatory of Music houses nine ensembles
          that are open to all Wheaton students, regardless of major. Choose
          from Chamber Music, Jazz or Percussion Ensemble, Concert Choir, Men's
          Glee Club, Women's Chorale, Symphonic Band, or Opera Mainstage.
        </p>
        <h2 className="text-[20px] font-[700]">Thunder Athletics</h2>
        <p className="g:text-[15px] text-[13px]">
          Over 25% of Wheaton’s student body participates in athletics, and it's
          no wonder with so many options available, including baseball,
          basketball, football, cross country, golf, soccer, swimming, tennis,
          softball, track and field, volleyball, and wrestling. Our Division III
          athletes are conference and national champions. But, most importantly,
          we pursue Christian faith, character, and leadership through
          competitive sports programs that “run the race to win.”
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className=" w-full h-full relative flex justify-end "
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-end justify-end">
            <div className="lg:w-[50%] relative h-[70%] flex items-center justify-center">
              <img
                src="https://pxl-wheatonedu.terminalfour.net/fit-in/1200x1200/filters:format(webp)/filters:quality(85)/prod02/channel_1/media/conservatory-of-music/Jazz-Combo-2022.jpg"
                alt=""
                className="w-[90%] aspect-[16/9] rounded-lg drop-shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-end justify-end">
            <div className="lg:w-[50%] relative h-[70%] flex items-center justify-center">
              <img
                src="https://pxl-wheatonedu.terminalfour.net/fit-in/1200x1200/filters:format(webp)/filters:quality(85)/prod02/channel_1/media/athletics/Rodriguez_Melody_2_.jpg"
                alt=""
                className="w-[90%] aspect-[16/9] rounded-lg drop-shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Chairman;
