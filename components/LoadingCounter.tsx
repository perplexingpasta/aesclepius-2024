// this one works but not bars
"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

interface LoadingCounterProps {
  onComplete?: () => void; // Optional onComplete function
}

const LoadingCounter: React.FC<LoadingCounterProps> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval: number;

    const startLoader = () => {
      let currentValue = 0;

      interval = window.setInterval(() => {
        // Generate a random increment between 1 and 10 (you can adjust these values)
        const randomIncrement = Math.floor(Math.random() * 10) + 1;
        currentValue += randomIncrement;

        // Ensure it does not exceed 100
        if (currentValue >= 100) {
          currentValue = 100;
          setCounter(currentValue);
          clearInterval(interval); // Stop the counter

          // Trigger the GSAP animations after counter hits 100
          gsap.to(".counter", {
            opacity: 0,
            duration: 0.25,
            onComplete: () => {
              if (onComplete) {
                onComplete(); // Safely call onComplete if it exists
              }
            },
          });

          // Animate bars
          gsap.to(".bar", {
            height: 0,
            stagger: {
              amount: 0.5,
            },
            ease: "power4.inOut",
            duration: 1.5,
          });
        }

        setCounter(currentValue);
      }, 150);
    };

    startLoader();

    return () => {
      // Cleanup interval if the component unmounts
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black-100">
      <h1 className="counter fixed bottom-4 right-6 z-50 flex items-end justify-end text-[35vw] font-black tracking-wider text-violet-500 md:text-[25vh] lg:right-12">
        {counter}
      </h1>

      {/* Overlay with bars */}
      <div className="fixed z-10 flex h-screen w-screen">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bar h-full w-full bg-black-100"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingCounter;
