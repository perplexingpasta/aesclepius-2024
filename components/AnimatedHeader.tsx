// // components/AnimatedHeader.tsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface AnimatedHeaderProps {
//   text: string;
// }

// const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ text }) => {
//   const headerRef = useRef<HTMLHeadingElement | null>(null);

//   useEffect(() => {
//     const currentHeader = headerRef.current;

//     if (currentHeader) {
//       // Clear previous children (if any)
//       currentHeader.innerHTML = "";

//       const letters = text.split("").map((letter) => {
//         const span = document.createElement("span");
//         span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
//         span.style.display = "inline-block"; // Required for the animation
//         span.style.opacity = "0"; // Set initial opacity to 0
//         currentHeader.appendChild(span);
//         return span;
//       });

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: currentHeader,
//           start: "top 80%", // Trigger when the top of the element hits 80% from the top of the viewport
//           toggleActions: "play none none reverse",
//         },
//       });

//       letters.forEach((letter, index) => {
//         timeline.to(
//           letter,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             delay: index * 0.05, // Stagger the animation
//           },
//           0,
//         );
//       });

//       return () => {
//         gsap.killTweensOf(letters); // Cleanup on unmount
//       };
//     }
//   }, [text]);

//   return (
//     <h1
//       ref={headerRef}
//       className="mb-10 text-4xl font-extrabold uppercase" // Removed initial opacity from here
//     />
//   );
// };

// export default AnimatedHeader;

// components/AnimatedHeader.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeaderProps {
  text: string;
  subText?: string; // Optional subText prop
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ text, subText }) => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const subHeaderRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const currentHeader = headerRef.current;
    const currentSubHeader = subHeaderRef.current;

    if (currentHeader) {
      // Clear previous children (if any)
      currentHeader.innerHTML = "";

      const letters = text.split("").map((letter) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
        span.style.display = "inline-block"; // Required for the animation
        span.style.opacity = "0"; // Set initial opacity to 0
        span.style.transform = "translateY(20px)"; // Start slightly below
        currentHeader.appendChild(span);
        return span;
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentHeader,
          start: "top 70%", // Trigger when the top of the element hits 80% from the top of the viewport
          toggleActions: "play none none reverse",
        },
      });

      letters.forEach((letter, index) => {
        timeline.to(
          letter,
          {
            opacity: 1,
            y: 0, // Animate to the normal position
            duration: 0.5,
            delay: index * 0.05, // Stagger the animation
          },
          0,
        );
      });

      // Subheading fade-in animation
      if (currentSubHeader) {
        timeline.to(
          currentSubHeader,
          {
            opacity: 1,
            duration: 0.5,
            delay: letters.length * 0.05 + 0.3, // Delay to start after the main heading
          },
          0,
        );
      }

      return () => {
        gsap.killTweensOf(letters); // Cleanup on unmount
        gsap.killTweensOf(currentSubHeader); // Cleanup for subheading
      };
    }
  }, [text, subText]);

  return (
    <div className="mb-10 lg:mb-20">
      <h1
        ref={headerRef}
        className="mb-1 text-4xl lg:text-6xl font-extrabold uppercase" // Keep the h1 styling
      />
      {subText && (
        <p
          ref={subHeaderRef}
          className="text-2xl lg:text-4xl font-light uppercase tracking-widest opacity-0" // Start with opacity 0 for fade-in
        >
          {subText}
        </p>
      )}
    </div>
  );
};

export default AnimatedHeader;
