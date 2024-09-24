"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero3";
import { SparklesPreview } from "@/components/SparklesPreview";
import FlipCardSection from "../components/FlipCardSection";
import Events3 from "@/components/Events3";
import FigmaCircles from "@/components/FigmaCircles";
import CircleAnimation from "@/components/FigmaCirclesInspect";
import FollowMouse from "@/components/FollowMouse";
// import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer4"), {
  ssr: false,
});
const DynamicReadyTo = dynamic(() => import("../components/ReadyTo"), {
  ssr: false,
});

const Home = () => {
  // useLocomotiveScroll();

  // useEffect(() => {
  //   async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   };
  // }, []);

  return (
    <div className="overflow-clip bg-black-100">
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
    </div>
  );
};

export default Home;
