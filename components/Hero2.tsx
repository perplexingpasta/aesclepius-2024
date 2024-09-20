"use client";
import React from "react";

import ScrollButton from "./ui/ScrollButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative -left-72 pb-20 pt-16 md:pt-64">
      {/* SPOTLIGHTS */}
      <div>
        <Spotlight
          className="top-16 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-1 h-[70vh] md:left-full md:top-10 md:h-[80vh] md:w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-52 h-[80vh] md:left-80 md:top-28 md:w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="relative z-10 my-5 ml-96 mt-52 flex justify-center pl-8 md:my-12 md:ml-0 md:mt-24 md:pl-0">
        <div className="ml-24 flex flex-col items-start md:ml-0">
          <div className="absolute -top-32 h-[13rem] w-[13rem] opacity-50 md:-top-72 md:h-[22rem] md:w-[22rem] lg:left-80 lg:h-[32rem] lg:w-[32rem]">
            <Image
              src="/images/logo.svg"
              className="z-0 saturate-50 duration-300 ease-in-out hover:saturate-100"
              alt="Default"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h1 className="z-10 text-sm uppercase tracking-widest text-white-100 md:pl-12 lg:-mb-4 lg:pl-8 lg:text-lg">
            JSS Medical College Presents
          </h1>

          {/* HERO BIG TEXT */}
          {/* <div className="mx-auto max-w-5xl px-4 lg:mb-10"> */}
          <h1 className="z-10 mt-2 text-5xl font-black uppercase leading-tight tracking-wide text-white md:mt-0 md:text-7xl lg:text-9xl lg:!leading-snug">
            Asclepius {/* <br className="hidden lg:block" /> */}
            <span className="gradient-text animate-gradient font-black text-transparent">
              2024
            </span>
          </h1>
          {/* </div> */}
          {/* <div className="lg:mb-10">
            <HeroHighlightDemo />
          </div> */}

          <p className="z-10 mt-2 font-lexendDeca text-base font-light uppercase italic text-white md:my-10 md:mt-0 md:text-lg md:tracking-widest lg:my-0 lg:text-2xl">
            Pathos To Praxis
          </p>

          {/* <p className="my-10 mt-32 flex justify-center items-center text-center text-base text-white md:text-lg lg:text-5xl">
            7th International UG Medical Conference
          </p> */}

          {/* CTA BUTTONS */}
          {/* <Link
            href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
            target="_blank"
          >
            <div className="hidden dark:block">
              <MagicButton
                title="BOOK A CALL NOW"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
            <div className="block dark:hidden">
              <LitUpButton
                title="BOOK A CALL NOW"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
