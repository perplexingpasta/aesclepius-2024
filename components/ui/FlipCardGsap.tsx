/* eslint-disable @next/next/no-img-element */
// components/FlipCard.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FlipCardProps {
  image: string;
  title: string;
  description: string;
}

const FlipCardGsap: React.FC<FlipCardProps> = ({ image, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;

    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      element,
      { rotateY: 0 },
      {
        rotateY: 180,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Trigger when the card enters the viewport
          end: "bottom 20%", // Define how long the animation stays active
          scrub: true, // Smooth scroll effect
          toggleActions: "play reverse play reverse", // Controls the animation on scroll
        },
        duration: 1,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <div ref={cardRef} className="perspective-1000 relative h-80 w-64">
      {/* Front Side */}
      <div className="backface-hidden absolute flex h-full w-full items-center justify-center bg-white shadow-md">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Back Side */}
      <div className="backface-hidden rotate-y-180 absolute flex h-full w-full items-center justify-center bg-blue-500 p-4 text-center text-white">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FlipCardGsap;
