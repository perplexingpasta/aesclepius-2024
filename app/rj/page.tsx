// import React from "react";

// const page = () => {
//   return (
//     <div className="overflow-clip bg-black-100">
//       <main className="relative top-1/2 flex flex-col items-center justify-center text-center text-5xl text-white">
//       <div className="font-extralight lowercase">Developed by</div>
//       <div className="font-extrabold tracking-widest">rishabh</div>
//     </main>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SparklesRJ } from "@/components/SparklesRJ";

const Page = () => {
  const rjRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Set initial opacity to 0
      gsap.set(rjRef.current, { opacity: 0 });

      tl.to(rjRef.current, { opacity: 1, duration: 1 })
        .fromTo(
          ".fade-in-image", // Apply to elements with this class
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "power3.out" },
        )
        .fromTo(
          ".fly-in-dev",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=1.5",
        )
        .fromTo(
          ".fade-in-rj",
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "power3.out" },
          "-=0.5",
        );
    }, rjRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div
      ref={rjRef}
      className="flex h-screen items-center justify-center overflow-hidden bg-black-100 opacity-0"
    >
      <SparklesRJ />
      <main className="text-center">
        <div className="fly-in-dev mb-5 text-4xl font-extralight lowercase text-white md:mb-10 md:text-6xl xl:mb-12 xl:text-8xl">
          Developed by
        </div>
        <div className="fade-in-rj text-4xl font-extrabold tracking-widest text-white md:text-6xl xl:text-8xl">
          rj
        </div>
      </main>
    </div>
  );
};

export default Page;
