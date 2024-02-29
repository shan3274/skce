import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Bubble from "@/utils/bubble";
import style from "@/styles/Section1.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Section1 = () => {
  return (
    <div className="w-full h-[50vh] bg-[#F6F9F5] relative overflow-hidden">
      <div className="absolute h-full w-full  top-[-50vh] left-[-15vw]   z-[0] duration-300 ">
        <Bubble color={"#144272"} width={"40vw"} />
      </div>
      <div className="absolute h-full w-full  top-[20vh] left-[140vh]   z-[0] duration-300 ">
        <Bubble color={"#0A2647"} width={"40vw"} />
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-[100%] h-[50vh] relative flex items-center justify-center"
      >
        <SwiperSlide>
          <div className="w-[100%] h-full relative flex items-center justify-center">
            <div className={`${style.container} w-[80%]`}>
              <div className={style.card__container}>
                <article className={style.card__article}>
                  <img
                    src="https://www.sreekrishnaengcollege.com/assets/img/SREE-KRISHNA-COLLEGE-OF-ENGG-01.jpg"
                    alt="image"
                    className={`${style.card__img} ${style.img}`}
                  />

                  <div className={style.card__data}>
                    <span className="card__description">CANTEEN</span>
                    <h2 className={style.card__title}>
                      Our college canteen/cafetaria
                    </h2>
                    <a href="#" className={style.card__button}>
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className={style.card__container}>
                <article className={style.card__article}>
                  <img
                    src="https://www.sreekrishnaengcollege.com/assets/img/08.jpg"
                    alt="image"
                    className={`${style.card__img} ${style.img}`}
                  />

                  <div className={style.card__data}>
                    <span className="card__description">LIBRARY</span>
                    <h2 className={style.card__title}>
                      As reading is the fountain of wisdom
                    </h2>
                    <a href="#" className={style.card__button}>
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className={style.card__container}>
                <article className={style.card__article}>
                  <img
                    src="https://www.sreekrishnaengcollege.com/assets/img/30.jpg"
                    alt="image"
                    className={`${style.card__img} ${style.img}`}
                  />

                  <div className={style.card__data}>
                    <span className="card__description">INTERNET</span>
                    <h2 className={style.card__title}>
                      The computer lab has more than 300 computers
                    </h2>
                    <a href="#" className={style.card__button}>
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%] h-full relative flex items-center justify-center">
            <div className={`${style.container} w-[80%]`}>
              <div className={style.card__container}>
                <article className={style.card__article}>
                  <img
                    src="https://www.sreekrishnaengcollege.com/assets/img/event/2.jpg"
                    alt="image"
                    className={`${style.card__img} ${style.img}`}
                  />

                  <div className={style.card__data}>
                    <span className="card__description">
                      Vancouver Mountains, Canada
                    </span>
                    <h2 className={style.card__title}>The Great Path</h2>
                    <a href="#" className={style.card__button}>
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className={style.card__container}>
                <article className={style.card__article}>
                  <img
                    src="https://www.sreekrishnaengcollege.com/assets/img/event/2.jpg"
                    alt="image"
                    className={`${style.card__img} ${style.img}`}
                  />

                  <div className={style.card__data}>
                    <span className="card__description">
                      Vancouver Mountains, Canada
                    </span>
                    <h2 className={style.card__title}>The Great Path</h2>
                    <a href="#" className={style.card__button}>
                      Read More
                    </a>
                  </div>
                </article>
              </div>
              <div className={style.card__container}>
                <article className={style.card__article}>
                  <img
                    src="https://www.sreekrishnaengcollege.com/assets/img/event/2.jpg"
                    alt="image"
                    className={`${style.card__img} ${style.img}`}
                  />

                  <div className={style.card__data}>
                    <span className="card__description">
                      Vancouver Mountains, Canada
                    </span>
                    <h2 className={style.card__title}>The Great Path</h2>
                    <a href="#" className={style.card__button}>
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section1;
