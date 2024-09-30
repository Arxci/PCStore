import { useState, useEffect, useCallback, useRef } from "react";

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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Ref to store the timeout

  const handleResize = useCallback(() => {
    const newSize = getWindowDimensions();
    setWindowSize(newSize); // Update the window size state

    // Clear the existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout for the callback
    timeoutRef.current = setTimeout(() => {
      if (callback) {
        callback(newSize); // Call the callback after the delay
      }
    }, debounceDelay);
  }, [callback, debounceDelay]);

  useEffect(() => {
    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up event listener and timeout on unmount
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleResize]);

  return windowSize;
}
