"use client";
import React from "react";

import dynamic from "next/dynamic";
import GridAndDotBg from "@/components/ui/GridAndDotBg";
import Home from "@/components/Home";
import Hero from "@/components/Hero2";

const DynamicFooter = dynamic(() => import("@/components/Footer3"), {
  ssr: false,
});
const DynamicScroll = dynamic(() => import("../components/ui/ScrollButton"), {
  ssr: false,
});
// const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"), {
//   ssr: false,
// });

const Page = () => {
  return (
    <div className="overflow-clip bg-black-100">
      <Hero />
      <div className="mt-4 md:mt-6 flex flex-col items-center justify-center text-center text-xl font-medium text-white lg:text-4xl">
        <p>
          7th International {" "}
          <br className="md:hidden" />
          UG Medical Conference
        </p>
        <p className="text-red-300 mt-2 lg:text-3xl">22-25th October</p>
        <DynamicScroll />
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          {/* <GridAndDotBg /> */}
          <Home />
          {/* <DynamicWhatsapp /> */}
        </div>
      </div>
      <footer className="bg-black">
        <DynamicFooter />
      </footer>
    </div>
  );
};

export default Page;
