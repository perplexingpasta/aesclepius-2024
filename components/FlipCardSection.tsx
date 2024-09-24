// import React, { useEffect, useRef } from "react";
// import FlipCardSpring from "./ui/FlipCardSpring";
// import { events } from "@/data/index2";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const FlipCardSection = () => {
//   const eventsRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.fromTo(
//       eventsRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: eventsRef.current,
//           start: "top 80%", // Trigger animation when top of the h1 is 80% from the top of viewport
//           toggleActions: "play none none reset",
//         },
//       },
//     );
//   }, []);

//   return (
//     <div className="mb-24 pt-10 md:mt-16" id="events">
//       <h1
//         ref={eventsRef}
//         className="mb-8 mt-10 text-center text-5xl font-light lowercase tracking-widest text-white md:my-12 md:text-7xl"
//       >
//         Events
//       </h1>
//       {events.map(({ id, image, title, backgroundColor, description }) => (
//         <div key={id} className="grid justify-items-center">
//           <FlipCardSpring
//             image={image}
//             title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
//             backgroundColor={backgroundColor}
//             description={
//               <p dangerouslySetInnerHTML={{ __html: description }} />
//             }
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FlipCardSection;

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
    gsap.set(eventsRef.current, { opacity: 0 });

    gsap.to(eventsRef.current, { opacity: 1, duration: 1 });
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
