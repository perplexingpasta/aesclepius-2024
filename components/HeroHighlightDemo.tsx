"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        // className="mx-auto max-w-4xl px-4 text-center text-2xl text-[40px] font-black uppercase leading-snug md:leading-relaxed tracking-wide text-black-100 dark:text-white md:text-5xl lg:max-w-6xl lg:text-6xl lg:leading-snug"
        className="text-2xl font-black uppercase leading-snug tracking-wide text-black-100 md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-snug"
      >
        Asclepius <Highlight className="text-black-100">2024</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
