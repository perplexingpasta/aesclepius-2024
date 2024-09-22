// CircleAnimation.tsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CircleAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [showText, setShowText] = useState(false);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const radiusValues = [
        1014.48, 794.48, 619.48, 469.48, 319.48, 109.48, 0, 0, 0,
      ];

      const totalHeight = window.innerHeight * 2; // Adjust this based on when you want the animation to stop
      const progress = Math.min(scrollY / totalHeight, 1);

      radiusValues.forEach((r, index) => {
        const newRadius = r * progress;
        const circle = svgRef.current?.querySelectorAll("circle")[index];
        if (circle) {
          gsap.to(circle, {
            attr: { r: newRadius },
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      // Check if the scroll position has reached the center
      if (scrollY > totalHeight - window.innerHeight) {
        setShowText(true); // Show the text when the last circle is reached
      } else if (scrollY > totalHeight / 2 - window.innerHeight / 2) {
        setIsCentered(true); // Set circles to be centered
      } else {
        setIsCentered(false); // Reset when scrolling back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 1440 1440"
        preserveAspectRatio="xMidYMid slice"
        className={`h-full w-full ${isCentered ? "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" : "relative"}`}
        ref={svgRef}
      >
        <circle cx="720" cy="720" fill="#A259FF" r="1014.48"></circle>
        <circle cx="720" cy="720" fill="#C7B9FF" r="794.48"></circle>
        <circle cx="720" cy="720" fill="#5551FF" r="619.48"></circle>
        <circle cx="720" cy="720" fill="#699BF7" r="469.48"></circle>
        <circle cx="720" cy="720" fill="#FF8577" r="319.48"></circle>
        <circle cx="720" cy="720" fill="#F24E1E" r="109.48"></circle>
        <circle cx="720" cy="720" fill="#FFC700" r="0"></circle>
        <circle cx="720" cy="720" fill="#0FA958" r="0"></circle>
        <circle cx="720" cy="720" fill="#000000" r="0"></circle>
      </svg>

      {/* {showText && (
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform">
          <h1 className="text-5xl font-bold text-white">hello</h1>
        </div>
      )} */}
    </div>
  );
};

export default CircleAnimation;
