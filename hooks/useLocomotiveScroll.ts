// hooks/useLocomotiveScroll.ts
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer as HTMLElement,
      smooth: true,
      lerp: 0,
    });

    scroll.update();
    console.log(scroll);

    return () => {
      scroll.destroy();
    };
  }, []);
};

export default useLocomotiveScroll;
