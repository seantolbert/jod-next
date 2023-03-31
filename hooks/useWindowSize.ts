import { useState, useEffect } from "react";

const useWindowSize = (): number => {
  const [windowWidth, setWindowWidth] = useState<any>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export default useWindowSize;
