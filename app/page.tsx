"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero3";
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
      <div className="mt-8 flex flex-col items-center justify-center text-center text-xl font-medium text-white md:mt-12 md:text-2xl lg:text-4xl">
        <p>
          7th International <br className="md:hidden" />
          UG Medical Conference
        </p>
        <p className="mt-2 text-purpledark lg:text-3xl">22 - 26th October</p>
        <DynamicScroll />
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          <DynamicFlipCardSection />
          <DynamicReadyTo />
          <section className="block lg:hidden">
            <Contact />
          </section>
        </div>
      </div>
      <footer id="#footer">
        <DynamicFooter />
      </footer>
    </div>
  );
};

export default page;
