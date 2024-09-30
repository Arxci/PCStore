import { useState, useLayoutEffect, useCallback, useRef } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export interface WindowSize {
  width: number;
  height: number;
}

export type WindowSizeCallback = (size: WindowSize) => void;

export default function useWindowDimensions(
  callback?: WindowSizeCallback,
  debounceDelay = 200
): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(
    getWindowDimensions()
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); //

  const handleResize = useCallback(() => {
    const newSize = getWindowDimensions();
    setWindowSize(newSize);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (callback) {
        callback(newSize);
      }
    }, debounceDelay);
  }, [callback, debounceDelay]);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleResize]);

  return windowSize;
}
