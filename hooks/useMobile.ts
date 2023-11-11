"use client";
import { useState, useEffect } from "react";

function useMobile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth || 0);

  useEffect(() => {
    console.log("");
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth === 0) return {};

  const isMobile = windowWidth <= 900;
  // console.log("isMobile", isMobile);
  console.log("windowWidth, isMobile", windowWidth, isMobile);
  return { isMobile, windowWidth };
}

export default useMobile;
