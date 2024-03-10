import React, { useCallback, useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";
import Hero from "@/components/Hero";
import Help from "@/components/Help";
import Footer from "@/components/Footer";
import Chairman from "@/components/Chairman";

import Chatbox from "@/components/Chatbox";
import Result from "@/components/Result";

import Head from "next/head";
import Section2 from "@/components/Section2";
import Section1 from "@/components/Section1";
import Slidders1 from "@/components/Slidders1";
import Sliders from "@/components/Sliders";
import Departments from "@/components/Departments";
import Videos from "@/components/Videos";
const AnimatedLoader = React.memo(({ setLoader }) => {
  const animateLoader = useCallback(() => {
    const loadingpageAnimation = gsap.fromTo(
      ".loadingpage",
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 2 }
    );

    const imgAnimation = gsap.fromTo(
      ".img",
      { y: 100, opacity: 1 },
      { y: 0, opacity: 0, duration: 3.5, delay: 0.5 }
    );

    return gsap.timeline().add(loadingpageAnimation, 0).add(imgAnimation, 0);
  }, []);

  const onCompleteAllAnimations = useCallback(() => {
    setLoader(false);
  }, [setLoader]);

  const onCompleteAllAnimationsMemoized = useMemo(
    () => onCompleteAllAnimations,
    []
  );
  
  useEffect(() => {
    const animation = animateLoader();

    animation.eventCallback("onComplete", onCompleteAllAnimationsMemoized);

    return () => {
      animation.kill();
    };
  }, [animateLoader, onCompleteAllAnimationsMemoized]);

  return (
    <div className="fixed w-full h-screen top-0 left-0 z-[99999]">
      <div className="loadingpage w-full h-screen flex items-center justify-center bg-[#000000] flex-col gap-10">
        <img className="img w-[70%] lg:w-[50%]" src="loader.png" alt="" />
      </div>
    </div>
  );
});

const Index = () => {
  const [loader, setLoader] = useState(true);

  return (
    <>
      <div id="main-container" className="bg-transparent">
        <Head>
          <title>SKCE</title>
        </Head>
        {loader && <AnimatedLoader setLoader={setLoader} />}
        <Hero />
        <Result />
        <Chairman />
        <Section2 />
        <Videos />
        <Departments />
        <Help />
        <Footer />
        <Chatbox />
      </div>
    </>
  );
};

export default Index;
