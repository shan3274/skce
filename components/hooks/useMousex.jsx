import React, { useState, useEffect } from "react";

// Custom hook to track mouse x-coordinate
const useMouseX = () => {
  const [mouseX, setMouseX] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
    };

    // Add event listener when component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return mouseX;
};

export default useMouseX;
