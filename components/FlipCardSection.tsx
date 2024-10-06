import React, { useEffect, useRef } from "react";
import FlipCardSpring from "./ui/FlipCardSpring";
import { events } from "@/data/index2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FlipCardSection = () => {
  const eventsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial opacity to 0
    gsap.set(eventsRef.current, { opacity: 0, visibility: "hidden" });

    gsap.fromTo(
      eventsRef.current,
      { y: 50, opacity: 0, visibility: "hidden" }, // Start hidden
      {
        y: 0,
        opacity: 1,
        visibility: "visible", // Make it visible when animating
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
          onEnter: () => gsap.set(eventsRef.current, { visibility: "visible" }), // Ensure visibility when entering
          onLeaveBack: () =>
            gsap.set(eventsRef.current, { visibility: "hidden" }), // Hide when scrolling back
        },
      },
    );
  }, []);

  return (
    <div className="mb-24 pt-10 md:mt-16" id="events">
      <h1
        ref={eventsRef}
        className="mb-8 mt-10 text-center text-5xl font-light lowercase tracking-widest text-white opacity-0 md:my-12 md:text-7xl"
      >
        Events
      </h1>
      {events.map(({ id, image, title, backgroundColor, description }) => (
        <div key={id} className="grid justify-items-center">
          <FlipCardSpring
            image={image}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
            backgroundColor={backgroundColor}
            description={
              <p dangerouslySetInnerHTML={{ __html: description }} />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default FlipCardSection;
