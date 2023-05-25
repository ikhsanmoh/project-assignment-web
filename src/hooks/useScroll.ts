import { useRef } from "react";

export const useScroll = () => {
  const scrollToRef = useRef(null);

  const scrollTo = () => {
    if (scrollToRef.current) {
      window.scrollTo({
        top: scrollToRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return {
    scrollToRef,
    scrollTo,
  };
};
