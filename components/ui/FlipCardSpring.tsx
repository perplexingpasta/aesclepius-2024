/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface FlipCardProps {
  image: string;
  title: any;
  backgroundColor: any;
  description: any;
}

const FlipCardSpring: React.FC<FlipCardProps> = ({
  image,
  title,
  backgroundColor,
  description,
}) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Flip animation using React Spring
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Flip the card when it is 30% from the top of the viewport
      if (rect.top <= viewportHeight * 0.3) {
        setFlipped(true);
      }

      // Define threshold for flipping back (e.g., 20% out of the viewport)
      const flipBackThreshold = viewportHeight * 0.3;

      // Flip back to front when the card leaves the viewport with threshold
      if (
        rect.bottom < flipBackThreshold ||
        rect.top > viewportHeight - 2 * flipBackThreshold
      ) {
        setFlipped(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="perspective-1000 relative mb-10 h-96 w-80 md:h-[70vh] md:w-[75vw]"
    >
      {/* Front Side */}
      <animated.div
        className="backface-hidden absolute h-full w-full"
        style={{
          transform,
          opacity: opacity.to((o) => 1 - o),
        }}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-3xl object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />

        <div className="absolute bottom-6 left-5 text-xl font-black tracking-wide text-white md:text-4xl">
          {title}
        </div>
      </animated.div>

      {/* Back Side */}
      <animated.div
        className="backface-hidden rotate-y-180 absolute flex h-full w-full items-center justify-center rounded-3xl p-4 text-white"
        style={{
          transform,
          opacity,
          backgroundColor,
        }}
      >
        <div className="rotate-y-180 font-lexendDeca text-[0.9rem] md:text-2xl">
          {description}
        </div>
      </animated.div>
    </div>
  );
};

export default FlipCardSpring;
