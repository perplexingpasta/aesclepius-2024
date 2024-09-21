import Script from "next/script";
import React from "react";

const EventsMdLg = () => {
  return (
    <div className="relative text-6xl text-white">
      HELLO
      {/* <Script src=" https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js " /> */}
      <Script
        type="text/partytown"
        src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"
      />
      <Script
        type="text/partytown"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
      />
      <Script
        type="text/partytown"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"
      />
    </div>
  );
};

export default EventsMdLg;
