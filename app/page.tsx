// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import Hero from "@/components/Hero3";
// import { SparklesPreview } from "@/components/SparklesPreview";
// import FlipCardSection from "../components/FlipCardSection";
// import Events3 from "@/components/Events3";
// import FollowMouse from "@/components/FollowMouse";

// const DynamicContact = dynamic(() => import("@/components/Contact"), {
//   ssr: false,
// });
// const DynamicFooter = dynamic(() => import("@/components/Footer4"), {
//   ssr: false,
// });
// const DynamicReadyTo = dynamic(() => import("../components/ReadyTo"), {
//   ssr: false,
// });

// const Home = () => {
//   return (
//     <div className="overflow-clip bg-black-100">
//       <SparklesPreview />
//       <FollowMouse />
//       <Hero />
//       <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
//         <div className="w-full max-w-7xl">
//           {/* <CircleAnimation /> */}
//           <section className="block md:hidden">
//             <FlipCardSection />
//           </section>
//           <section className="hidden md:block">
//             <Events3 />
//           </section>
//           <section>
//             <DynamicReadyTo />
//           </section>
//           <section className="block lg:hidden">
//             <DynamicContact />
//           </section>
//         </div>
//       </main>
//       <footer id="#footer">
//         <DynamicFooter />
//       </footer>
//     </div>
//   );
// };

// export default Home;

"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero3";
import { SparklesPreview } from "@/components/SparklesPreview";
import FlipCardSection from "../components/FlipCardSection";
import Events3 from "@/components/Events3";
import FollowMouse from "@/components/FollowMouse";
import LoadingCounter from "@/components/LoadingCounter";

const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer4"), {
  ssr: false,
});
const DynamicReadyTo = dynamic(() => import("../components/ReadyTo2"), {
  ssr: false,
});

// CHANGES FOR LOADING ANIMATION

const Home = () => {
  const [loading, setLoading] = useState(true); // Controls loading screen visibility

  const handleAnimationComplete = () => {
    setLoading(false); // Hide the loading screen once the animation is complete
  };

  return (
    <div className="overflow-clip bg-black-100">
      {loading && <LoadingCounter onComplete={handleAnimationComplete} />}
      {!loading && (
        <>
          <SparklesPreview />
          <FollowMouse />
          <Hero />
          <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
            <div className="w-full max-w-7xl">
              {/* <CircleAnimation /> */}
              <section className="block md:hidden">
                <FlipCardSection />
              </section>
              <section className="hidden md:block">
                <Events3 />
              </section>
              <section>
                <DynamicReadyTo />
              </section>
              <section className="block lg:hidden">
                <DynamicContact />
              </section>
            </div>
          </main>
          <footer id="#footer">
            <DynamicFooter />
          </footer>
        </>
      )}
    </div>
  );
};

export default Home;
