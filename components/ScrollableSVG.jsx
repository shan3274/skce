import React, { useEffect, useMemo, useState } from "react";

const ScrollableSVG = ({ count, color }) => {
  const [bgcolor, setBgcolor] = useState("#294366");
  const [scrollLength, setScrollLength] = useState();
  useMemo(() => {
    setScrollLength(0);
  }, []);

  useEffect(() => {
    if (color != undefined) {
      let newBgColor = color[0]; // Default color
      switch (count) {
        case 1:
          newBgColor = color[1];
          break;
        case 2:
          newBgColor = color[2];
          break;
        case 3:
          newBgColor = color[3];
          break;
        case 4:
          newBgColor = color[4];
          break;
        case 5:
        case 6:
          newBgColor = color[5];
          break;
        default:
          break;
      }
      setBgcolor(newBgColor);
      setScrollLength(135 * count);
    }
  }, [count]);
  return (
    <svg
      version="1.1"
      id="transring"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 414 414"
      style={{
        enableBackground: "new 0 0 414 414",
        backgroundColor: bgcolor,
      }}
      xmlSpace="preserve"
      className="w-[400px] rounded-full duration-300 absolute z-[0]"
    >
      <path
        id="Transparent_Ring"
        className="transrg duration-300"
        style={{
          opacity: 0.1,
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeMiterlimit: 10,
          enableBackground: "new",
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
      ></path>
      {/* Other SVG elements */}
      <path
        id="Opaque_Ring"
        className="transrgwht duration-700"
        strokeDasharray={`${scrollLength}, 1000`} // Use scrollLength to control the dash array
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeWidth: 5,
          strokeMiterlimit: 10,
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
      ></path>

      <g id="Dots1" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro1"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
          ></path>
        </g>
      </g>
      <g id="Dots2" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro2"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
          ></path>
        </g>
      </g>
      <g id="Dots3" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro3"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
          ></path>
        </g>
      </g>
      <g id="Dots4" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
          ></path>
        </g>
      </g>
      <g id="Dots5" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
          ></path>
        </g>
      </g>
      <g id="Dots6" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
          ></path>
        </g>
      </g>
      <g id="Dots7" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro7"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
          ></path>
        </g>
      </g>
      {/* Other SVG elements */}
    </svg>
  );
};

export default ScrollableSVG;
