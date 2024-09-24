import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

interface WindowSize {
  width: number;
  height: number;
}

type WindowSizeCallback = (size: WindowSize) => void;

export default function useWindowDimensions(
  callback?: WindowSizeCallback
): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: getWindowDimensions().width,
    height: getWindowDimensions().height,
  });

  useEffect(() => {
    function handleResize() {
      const newSize = getWindowDimensions();

      setWindowSize(newSize);

      if (callback) {
        callback(newSize);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
