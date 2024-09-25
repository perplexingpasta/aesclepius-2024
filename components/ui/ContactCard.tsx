"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ContactCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  number: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  imageSrc,
  name,
  designation,
  number,
}) => {
  const eventsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      eventsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
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
    <div
      ref={eventsRef}
      className="flex items-center rounded-lg py-3 shadow-sm"
    >
      <Image
        src={imageSrc}
        alt="Profile Picture"
        width={50}
        height={50}
        className="mr-5 h-[3.4rem] w-[3.4rem] rounded-full"
      />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm uppercase opacity-50">{designation}</div>
        <div className="text-sm opacity-50">{number}</div>
      </div>
    </div>
  );
};

export default ContactCard;
