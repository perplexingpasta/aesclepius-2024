"use client";
import React from "react";

import dynamic from "next/dynamic";
// import GridAndDotBg from "@/components/ui/GridAndDotBg";
import Hero from "@/components/Hero2";
import Contact from "@/components/Contact";
import { SparklesPreview } from "@/components/SparklesPreview";

const DynamicFooter = dynamic(() => import("@/components/Footer4"), {
  ssr: false,
});
const DynamicScroll = dynamic(() => import("../components/ui/ScrollButton"), {
  ssr: false,
});
const DynamicFlipCardSection = dynamic(
  () => import("../components/FlipCardSection"),
  {
    ssr: false,
  },
);
const DynamicReadyTo = dynamic(() => import("../components/ReadyTo"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="overflow-clip bg-black-100">
      {/* <div className="overflow-clip"> */}
      <SparklesPreview />
      <Hero />
      <div className="mt-4 flex flex-col items-center justify-center text-center text-xl font-medium text-white md:mt-6 lg:text-4xl">
        <p>
          7th International <br className="md:hidden" />
          UG Medical Conference
        </p>
        <p className="mt-2 text-purpledark lg:text-3xl">22 - 26th October</p>
        <DynamicScroll />
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          {/* <GridAndDotBg /> */}
          {/* <Home /> */}
          <DynamicFlipCardSection />
          <DynamicReadyTo />
          <section className="block md:hidden">
            <Contact />
          </section>
        </div>
      </div>
      <footer className="bg-black" id="#footer">
        <DynamicFooter />
      </footer>
    </div>
  );
};

export default page;
