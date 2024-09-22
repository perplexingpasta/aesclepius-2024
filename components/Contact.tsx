import React from "react";
import ContactCard from "./ui/ContactCard";
import { core } from "@/data/index2";

const Contact = () => {
  return (
    <div className="ml-2 pt-12 text-white md:mb-16 md:pt-40" id="core">
      <h1 className="mb-8 text-center text-5xl font-light lowercase tracking-wider text-white md:mb-12 md:text-6xl md:leading-tight">
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

// import React, { useEffect, useRef } from "react";
// import ContactCard from "./ui/ContactCard";
// import { core } from "@/data/index2";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Contact = () => {
//   const orgRef = useRef<HTMLHeadingElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Define type here

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Fly-in effect for the title
//     gsap.fromTo(
//       orgRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: orgRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       },
//     );

//     // Fly-in effect for each contact card
//     cardRefs.current.forEach((card) => {
//       if (card) {
//         // Check if card is not null
//         gsap.fromTo(
//           card,
//           { y: 50, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%", // Start the animation when 90% of the card is in view
//               toggleActions: "play none none reset",
//             },
//           },
//         );
//       }
//     });
//   }, []);

//   return (
//     <div className="ml-2 pt-12 text-white md:mb-16 md:pt-0" id="core">
//       <h1
//         ref={orgRef}
//         className="mb-8 text-center text-5xl font-light lowercase tracking-wider text-white md:mb-12 md:text-6xl md:leading-tight"
//       >
//         Organising Committee
//       </h1>
//       <div className="flex flex-col md:flex-row md:justify-between">
//         <div className="flex flex-col md:w-1/2">
//           {core.slice(0, 3).map(({ id, img, name, desig, number }, index) => (
//             <div
//               key={id}
//               className="font-lexendDeca"
//               ref={(el) => {
//                 cardRefs.current[index] = el; // Assign each card a ref
//               }}
//             >
//               <ContactCard
//                 imageSrc={img}
//                 name={name}
//                 designation={desig}
//                 number={number}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col md:w-1/2">
//           {core.slice(3).map(({ id, img, name, desig, number }, index) => (
//             <div
//               key={id}
//               className="font-lexendDeca"
//               ref={(el) => {
//                 cardRefs.current[index + 3] = el; // Assign each card a ref
//               }}
//             >
//               <ContactCard
//                 imageSrc={img}
//                 name={name}
//                 designation={desig}
//                 number={number}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
