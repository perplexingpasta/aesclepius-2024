// components/LoadingCounter.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

interface LoadingCounterProps {
  onComplete: () => void; // Callback when loading is complete
}

const LoadingCounter: React.FC<LoadingCounterProps> = ({ onComplete }) => {
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1",
    );

    const animateCounter = () => {
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < maxDuration && counterRef.current) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue,
          );
          counterRef.current.textContent = currentValue.toString();
          setTimeout(updateCounter, updateInterval);
        } else if (counterRef.current) {
          counterRef.current.textContent = endValue.toString();
          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onComplete: onComplete, // Notify when the animation is done
            });
          }, 500);
        }
      };
      updateCounter();
    };

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });
  }, [onComplete]);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="relative z-0 h-5 w-10 text-center">
        <p ref={counterRef} className="relative block translate-y-5 transform">
          0
        </p>
      </div>
    </div>
  );
};

export default LoadingCounter;
