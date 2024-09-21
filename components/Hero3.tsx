"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative -ml-[10%] pb-20 pt-[30vh] md:pt-[40vh] lg:-ml-[30%] lg:pt-[40vh]">
      {/* SPOTLIGHTS */}
      <div>
        {/* <Spotlight
          className="left-80 top-10 h-screen md:-left-32 md:-top-20"
          fill="white"
        /> */}
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
        <div className="heroDiv flex flex-col items-start">
          <div className="absolute top-[-8rem] h-[13rem] w-[13rem] opacity-50 md:top-[-13rem] md:h-[22rem] md:w-[22rem] lg:h-[32rem] lg:w-[32rem]">
            <Image
              src="/images/logo.svg"
              className="z-0"
              alt="Default"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h1 className="z-10 -mb-2 pl-2 text-xs uppercase tracking-widest text-white opacity-75 md:mb-0 md:pl-6 md:text-lg lg:-mb-4 lg:pl-8 lg:text-lg">
            JSS Medical College Presents
          </h1>
          <h1 className="z-10 mt-2 text-5xl font-black uppercase leading-tight tracking-wide text-white md:mt-0 md:text-8xl lg:text-9xl lg:!leading-snug">
            Asclepius <br className="block lg:hidden" />
            {/* <span className="block md:hidden">
              <br />
            </span> */}
            <span className="hidden lg:inline">&nbsp;</span>
            <span className="gradient-text animate-gradient font-black text-transparent">
              2024
            </span>
          </h1>
          <p className="z-10 mt-2 font-lexendDeca text-base font-light uppercase italic tracking-wide text-white md:my-10 md:mt-3 md:text-2xl md:tracking-widest lg:my-0 lg:text-2xl">
            Pathos To Praxis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
