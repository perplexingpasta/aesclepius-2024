"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero3";
import { SparklesPreview } from "@/components/SparklesPreview";
import FlipCardSection from "../components/FlipCardSection";
import Events3 from "@/components/Events3";

const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer4"), {
  ssr: false,
});
const DynamicReadyTo = dynamic(() => import("../components/ReadyTo"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="overflow-clip bg-black-100">
      <SparklesPreview />
      <Hero />
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          {/* <DynamicFlipCardSection /> */}
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
      </div>
      <footer id="#footer">
        <DynamicFooter />
      </footer>
    </div>
  );
};

export default page;
