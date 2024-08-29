// CHANGES FROM HERE ON

/* eslint-disable @next/next/no-img-element */
// components/FlipCard.tsx
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

interface FlipCardProps {
  image: string;
  title: string;
  description: string;
}

const FlipCardSpring: React.FC<FlipCardProps> = ({
  image,
  title,
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

      // Check if the element has reached 20% from the top of the viewport
      if (rect.top <= viewportHeight * 0.3) {
        setFlipped(true);
      } else {
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
    <div ref={cardRef} className="perspective-1000 relative h-96 w-80">
      {/* Front Side */}
      <animated.div
        className="backface-hidden absolute h-full w-full"
        style={{
          transform,
          opacity: opacity.to((o) => 1 - o),
          // position: "absolute",
        }}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {title}
        </h3>
      </animated.div>

      {/* Back Side */}
      <animated.div
        className="backface-hidden rotate-y-180 absolute flex h-full w-full items-center justify-center bg-blue-500 p-4 text-white"
        style={{
          transform,
          opacity,
        }}
      >
        <p className="rotate-y-180">{description}</p>
      </animated.div>
    </div>
  );
};

export default FlipCardSpring;
