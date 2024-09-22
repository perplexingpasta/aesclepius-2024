import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CirclesAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Rainbow colors array outside of the JSX
  const rainbowColors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#8B00FF", // Violet
  ];

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "200%",
          scrub: true, // Controls the animation with scroll
          pin: true, // Keeps the circles in the center until animation completes
        },
      });

      // Loop through rainbow colors to create expanding circles
      rainbowColors.forEach((color, index) => {
        tl.to(
          `.circle-${index}`,
          {
            scale: (index + 1) * 3, // Increase the scale outward
            duration: 1.5,
            backgroundColor: color, // Change the background color
            ease: "power2.out", // Ease to smooth out animation
          },
          index * 1.5,
        ); // Stagger the animations so they happen sequentially
      });

      // Animate the final circle turning black and reveal the text
      tl.to(`.circle-6`, {
        backgroundColor: "#000000", // Change to black
        scale: 5, // Slightly bigger final circle
        duration: 2,
      }).to(textRef.current, {
        opacity: 1, // Reveal the text after black circle finishes
        y: 0,
        duration: 1,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center transition-colors duration-1000"
    >
      {/* Circle container */}
      <div className="relative flex h-screen w-full items-center justify-center">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`circle-${i} absolute rounded-full`}
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              backgroundColor: rainbowColors[i], // Start with fully visible colors
            }}
          />
        ))}
      </div>

      {/* Text container, hidden initially */}
      <div
        ref={textRef}
        className="reveal-text absolute top-1/2 -translate-y-1/2 transform p-8 text-center text-4xl text-white opacity-0"
      >
        <h2>Welcome to Our World</h2>
        <p>Scroll down to explore more...</p>
      </div>
    </div>
  );
};

export default CirclesAnimation;

<svg
  viewBox="0 0 1440 1440"
  preserveAspectRatio="xMidYMid slice"
  className="css-b99f4y"
>
  <circle cx="720" cy="720" fill="#A259FF" r="1014.4833984375"></circle>
  <circle cx="720" cy="720" fill="#C7B9FF" r="794.4833984375"></circle>
  <circle cx="720" cy="720" r="619.4833984375" fill="#5551FF"></circle>
  <circle cx="720" cy="720" r="469.4833984375" fill="#699BF7"></circle>
  <circle cx="720" cy="720" r="319.4833984375" fill="#FF8577"></circle>
  <circle cx="720" cy="720" r="109.4833984375" fill="#F24E1E"></circle>
  <circle cx="720" cy="720" r="0" fill="#FFC700"></circle>
  <circle cx="720" cy="720" r="0" fill="#0FA958"></circle>
  <circle cx="720" cy="720" r="0" fill="#000000"></circle>
</svg>;
