"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero3";
import { SparklesPreview } from "@/components/SparklesPreview";
import ScrollButton from "@/components/ui/ScrollButton";
import FlipCardSection from "../components/FlipCardSection";
import EventsMdLg from "@/components/EventsMdLg";

const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer4"), {
  ssr: false,
});
const DynamicReadyTo = dynamic(() => import("../components/ReadyTo"), {
  ssr: false,
});
// const DynamicScroll = dynamic(() => import("../components/ui/ScrollButton"), {
//   ssr: false,
// });
// const DynamicFlipCardSection = dynamic(
//   () => import("../components/FlipCardSection"),
//   {
//     ssr: false,
//   },
// );

const page = () => {
  return (
    <div className="overflow-clip bg-black-100">
      {/* <div className="overflow-clip"> */}
      <SparklesPreview />
      <Hero />
      <div className="mt-16 flex flex-col items-center justify-center text-center text-xl font-medium text-white md:mt-12 md:text-3xl lg:text-4xl">
        <p>
          7th International <br className="md:hidden" />
          UG Medical Conference
        </p>
        <p className="mt-2 text-purpledark lg:text-3xl">22 - 26th October</p>
        <ScrollButton />
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          {/* <DynamicFlipCardSection /> */}
          <section className="block lg:hidden">
            <FlipCardSection />
          </section>
          <section className="hidden md:block">
            <EventsMdLg />
          </section>
          <section>
            <DynamicReadyTo />
          </section>
          <section className="block lg:hidden">
            <DynamicContact />
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
