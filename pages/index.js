import React, { useCallback, useEffect, useState, Suspense } from "react";
import { gsap } from "gsap";
import Head from "next/head";

const AnimatedLoader = React.memo(({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
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

      const animation = gsap
        .timeline()
        .add(loadingpageAnimation, 0)
        .add(imgAnimation, 0);

      return () => animation.kill();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed w-full h-screen top-0 left-0 z-[99999]">
      <div className="loadingpage w-full h-screen flex items-center justify-center bg-[#000000] flex-col gap-10">
        <img className="img w-[70%] lg:w-[50%]" src="loader.png" alt="" />
      </div>
    </div>
  );
});

const Index = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    // Simulate async data fetching
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 3000); // Adjust this value based on your loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="main-container" className="bg-transparent">
        <Head>
          <title>SKCE</title>
        </Head>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedComponents />
        </Suspense>
        <AnimatedLoader isVisible={loaderVisible} />
      </div>
    </>
  );
};

const LazyLoadedComponents = () => (
  <>
    <LazyLoadComponent component={() => import("@/components/Hero")} />
    <LazyLoadComponent component={() => import("@/components/Result")} />
    <LazyLoadComponent component={() => import("@/components/Chairman")} />
    <LazyLoadComponent component={() => import("@/components/Section2")} />
    <LazyLoadComponent component={() => import("@/components/Videos")} />
    <LazyLoadComponent component={() => import("@/components/Departments")} />
    <LazyLoadComponent component={() => import("@/components/Help")} />
    <LazyLoadComponent component={() => import("@/components/Footer")} />
    {/* Add more lazy loaded components here */}
  </>
);

const LazyLoadComponent = ({ component: Component }) => {
  const [ComponentToRender, setComponentToRender] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const { default: ImportedComponent } = await Component();
      setComponentToRender(<ImportedComponent />);
    };

    loadComponent();
  }, [Component]);

  return ComponentToRender;
};

export default Index;
