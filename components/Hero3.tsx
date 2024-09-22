// "use client";
// import React, { useEffect, useRef } from "react";
// import { Spotlight } from "./ui/Spotlight";
// import Image from "next/image";
// import { gsap } from "gsap";
// import ScrollButton from "./ui/ScrollButton";

// const Hero = () => {
//   const fadeInAsclepRef = useRef(null);
//   const fadeInPathosRef = useRef(null);
//   const jssMedColRef = useRef(null);
//   const datesFlyInRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       fadeInAsclepRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2, ease: "power3.out", delay: 1.5 }, // Delayed fade-in
//     );

//     gsap.fromTo(
//       fadeInPathosRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 2, ease: "power3.out", delay: 2 }, // Delayed fade-in
//     );

//     gsap.fromTo(
//       jssMedColRef.current,
//       { y: 25, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }, // Fly-in from bottom
//     );

//     gsap.fromTo(
//       datesFlyInRef.current,
//       { y: 25, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 3 }, // Fly-in from bottom
//     );
//   }, []);

//   return (
//     <>
//       <div className="relative -ml-[10%] pb-20 pt-[30vh] md:pt-[40vh] lg:-ml-[30%] lg:pt-[40vh]">
//         {/* SPOTLIGHTS */}
//         <div>
//           <Spotlight
//             className="left-80 top-0 h-[70vh] md:left-[90%] md:top-10 md:w-[200vw]"
//             fill="purple"
//           />
//           <Spotlight
//             className="left-4 top-40 h-[80vh] md:left-36 md:top-64 md:w-[100vw] lg:left-[25%]"
//             fill="blue"
//           />
//         </div>

//         <div className="relative z-10 flex justify-center">
//           <div className="heroDiv flex flex-col items-start">
//             <div
//               ref={fadeInAsclepRef}
//               className="absolute top-[-8rem] h-[13rem] w-[13rem] opacity-50 md:top-[-13rem] md:h-[22rem] md:w-[22rem] lg:h-[32rem] lg:w-[32rem]"
//             >
//               <Image
//                 src="/images/logopng.png"
//                 className="z-0"
//                 alt="Default"
//                 layout="fill"
//                 objectFit="cover"
//                 priority
//               />
//             </div>
//             {/* Apply fly-in animation to this h1 */}
//             <h1
//               ref={jssMedColRef} // Attach ref for fly-in animation
//               className="z-10 -mb-2 pl-2 text-xs uppercase tracking-widest text-white opacity-75 md:mb-0 md:pl-6 md:text-lg lg:-mb-4 lg:pl-8 lg:text-lg"
//             >
//               JSS Medical College Presents
//             </h1>
//             <h1
//               ref={fadeInAsclepRef}
//               className="z-10 mt-2 text-5xl font-black uppercase leading-tight tracking-wide text-white md:mt-0 md:text-8xl lg:text-9xl lg:!leading-snug"
//             >
//               Asclepius <br className="block lg:hidden" />
//               <span className="hidden lg:inline">&nbsp;</span>
//               <span className="gradient-text animate-gradient font-black text-transparent">
//                 2024
//               </span>
//             </h1>
//             {/* Apply fade-in animation to this paragraph */}
//             <p
//               ref={fadeInPathosRef} // Attach ref for fade-in animation
//               className="z-10 mt-2 font-lexendDeca text-base font-light uppercase italic tracking-wide text-white md:my-10 md:mt-3 md:text-2xl md:tracking-widest lg:my-0 lg:text-2xl"
//             >
//               Pathos To Praxis
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-16 flex flex-col items-center justify-center text-center text-xl font-medium text-white md:mt-12 md:text-3xl lg:text-4xl">
//         <p ref={datesFlyInRef}>
//           7th International <br className="md:hidden" />
//           UG Medical Conference
//         </p>
//         <p className="mt-2 text-purpledark lg:text-3xl">22 - 26th October</p>
//         <ScrollButton />
//       </div>
//     </>
//   );
// };

// export default Hero;

"use client";
import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollButton from "./ui/ScrollButton";

const Hero = () => {
  const heroRef = useRef(null); // One main ref for the entire Hero section

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".fade-in-image", // Apply to elements with this class
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power3.out", delay: 0.5 },
      )
        .fromTo(
          ".fly-in-jss", // Fly-in for the JSS text
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=1", // Overlap previous animation by 1.5 seconds
        )
        .fromTo(
          ".fade-in-pathos", // Fade-in for "Pathos to Praxis"
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "power3.out" },
          "-=1",
        )
        .fromTo(
          ".fly-in-tagline", // Fly-in for dates
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=1",
        )
        .fromTo(
          ".fly-in-dates",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=1",
        )
        .fromTo(
          ".fade-in-scrollButton",
          { opacity: 0 },
          { opacity: 1, duration: 3, ease: "power3.out" },
          "-=0.5",
        );
    }, heroRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div ref={heroRef}>
      <div className="relative -ml-[10%] pb-20 pt-[30vh] md:pt-[40vh] lg:-ml-[30%] lg:pt-[40vh]">
        {/* SPOTLIGHTS */}
        <div>
          <Spotlight
            className="left-80 top-0 h-[70vh] md:left-[90%] md:top-10 md:w-[200vw]"
            fill="purple"
          />
          <Spotlight
            className="left-4 top-40 h-[80vh] md:left-36 md:top-64 md:w-[100vw] lg:left-[25%]"
            fill="blue"
          />
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="flex flex-col items-start">
            <div className="absolute top-[-8rem] h-[13rem] w-[13rem] opacity-50 md:top-[-13rem] md:h-[22rem] md:w-[22rem] lg:h-[32rem] lg:w-[32rem]">
              <Image
                src="/images/logopng.png"
                className="z-0"
                alt="Default"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            {/* Fly-in animation for this h1 */}
            <h1 className="fly-in-jss z-10 -mb-2 pl-2 text-xs uppercase tracking-widest text-white opacity-75 md:mb-0 md:pl-6 md:text-lg lg:-mb-4 lg:pl-8 lg:text-lg">
              JSS Medical College Presents
            </h1>
            <h1 className="fade-in-image z-10 mt-2 text-5xl font-black uppercase leading-tight tracking-wide text-white md:mt-0 md:text-8xl lg:text-9xl lg:!leading-snug">
              Asclepius <br className="block lg:hidden" />
              <span className="hidden lg:inline">&nbsp;</span>
              <span className="gradient-text animate-gradient font-black text-transparent">
                2024
              </span>
            </h1>
            {/* Fade-in animation for this paragraph */}
            <p className="fade-in-pathos z-10 mt-2 font-lexendDeca text-base font-light uppercase italic tracking-wide text-white md:my-10 md:mt-3 md:text-2xl md:tracking-widest lg:my-0 lg:text-3xl">
              Pathos To Praxis
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center text-center text-xl font-medium text-white md:mt-12 md:text-3xl lg:text-4xl">
        <p className="fly-in-tagline">
          7th International <br className="md:hidden" />
          UG Medical Conference
        </p>
        <p className="mt-2 fly-in-dates text-purpledark lg:text-3xl">22 - 26th October</p>
        <div className="fade-in-scrollButton">
        <ScrollButton  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
