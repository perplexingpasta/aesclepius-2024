"use client";
import React, { useEffect, useRef } from "react";
import ContactCard from "./ui/ContactCard";
import { core } from "@/data/index2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const eventsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      eventsRef.current,
      { opacity: 0 },
      {
        // y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  return (
    <div className="ml-2 pt-12 text-white md:mb-16 md:pt-40" id="core">
      <h1
        ref={eventsRef}
        className="mb-8 text-center text-5xl font-light lowercase tracking-wider text-white md:mb-12 md:text-6xl md:leading-tight"
      >
        organising committee
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:w-1/2">
          {core.slice(0, 3).map(({ id, img, name, desig, number }) => (
            <div key={id} className="font-lexendDeca">
              <ContactCard
                imageSrc={img}
                name={name}
                designation={desig}
                number={number}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:w-1/2">
          {core.slice(3).map(({ id, img, name, desig, number }) => (
            <div key={id} className="font-lexendDeca">
              <ContactCard
                imageSrc={img}
                name={name}
                designation={desig}
                number={number}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;