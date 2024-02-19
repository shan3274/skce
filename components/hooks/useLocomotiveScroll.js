import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const useLocomotiveScroll = (start) => {
  useEffect(() => {
    
    let scrollEl = document.querySelector("#main-container");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
};

export default useLocomotiveScroll;
