// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { events } from "@/data/index2";

// const Events3: React.FC = () => {
//   const eventsRef = useRef(null);

//   // for events title fly-in animation
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

//   // pinned image logic
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Set z-index for photo items
//     const workInfoItems = document.querySelectorAll(".work__photo_item");
//     workInfoItems.forEach((item, index) => {
//       const element = item as HTMLElement;
//       element.style.zIndex = String(workInfoItems.length - index);
//     });

//     // Initial state for clipPath
//     gsap.set(".work__photo_item", {
//       clipPath: "inset(0px 0px 0px 0px)",
//     });

//     const animation = gsap.to(".work__photo_item:not(:last-child)", {
//       clipPath: "inset(0px 0px 100% 0px)",
//       stagger: 0.5,
//       ease: "none",
//     });

//     const scrollTrigger = ScrollTrigger.create({
//       trigger: ".work",
//       start: "top top",
//       end: "bottom bottom",
//       animation: animation,
//       scrub: 1,
//     });

//     // Cleanup function to kill scroll trigger on unmount
//     return () => {
//       scrollTrigger.kill();
//       gsap.killTweensOf(".work__photo_item");
//     };
//   }, [events]);

//   return (
//     <div className="md:mt-56">
//       <h1
//         ref={eventsRef}
//         className="mb-8 mt-10 text-center text-5xl font-light lowercase tracking-widest text-white md:my-12 md:text-7xl lg:text-8xl"
//       >
//         Events
//       </h1>
//       <div className="relative z-10 h-auto w-full">
//         <section className="work flex">
//           <div className="work__left relative z-20 w-1/2">
//             <div className="work__text mx-auto w-4/5">
//               {/* <div
//                 className="work__info flex h-screen flex-col justify-center"
//                 key={1}
//               >
//                 <div className="work__leftBl text-5xl uppercase text-white">
//                   <p>Hello 1</p>
//                 </div>
//               </div> */}

//               {events.map(({ id, description }) => (
//                 <div
//                   className="work__info flex h-screen flex-col justify-center"
//                   key={id}
//                 >
//                   <div className="work__leftBl text-white lg:text-2xl">
//                     {/* <h1 dangerouslySetInnerHTML={{ __html: title }} /> */}
//                     <p dangerouslySetInnerHTML={{ __html: description }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="work__right w-1/2">
//             <div className="work__rightBl sticky top-0 flex h-screen w-full flex-col justify-center">
//               <div className="work__photo relative h-[60vw] w-[45vw]">
//                 {/* <div
//                   className="work__photo_item absolute ml-8 h-[40vh] w-[40vw] overflow-hidden rounded-[2.5rem] lg:ml-60 lg:mt-[20vh] lg:h-2/3 lg:w-2/3 lg:rounded-[4rem]"
//                   title="1"
//                 >
//                   <Image
//                     src="/images/events/workshop.webp"
//                     alt=""
//                     layout="fill"
//                     className="block h-full w-full object-cover"
//                   />
//                 </div> */}

//                 {events.map(({ id, image }) => (
//                   <div
//                     className="work__photo_item absolute ml-8 h-[40vh] w-[40vw] overflow-hidden rounded-[2.5rem] lg:ml-60 lg:mt-[20vh] lg:h-2/3 lg:w-2/3 lg:rounded-[4rem]"
//                     key={id}
//                   >
//                     <Image
//                       src={image}
//                       alt=""
//                       layout="fill"
//                       className="block h-full w-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Events3;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { events } from "@/data/index2";
import AnimatedHeader from "./AnimatedHeader";

interface Event {
  id: string; // Change to number if needed
  description: string;
  image: string; // Assuming image is a URL
}

const Events3: React.FC = () => {
  const eventsRef = useRef<HTMLHeadingElement>(null);

  // for events title fly-in animation
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
          start: "top 80%", // Trigger animation when top of the h1 is 80% from the top of viewport
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  // pinned image logic
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set z-index for photo items
    const workInfoItems = document.querySelectorAll(".work__photo_item");
    workInfoItems.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.zIndex = String(workInfoItems.length - index);
    });

    // Initial state for clipPath
    gsap.set(".work__photo_item", {
      clipPath: "inset(0px 0px 0px 0px)",
    });

    const animation = gsap.to(".work__photo_item:not(:last-child)", {
      clipPath: "inset(0px 0px 100% 0px)",
      stagger: 0.5,
      ease: "none",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });

    // Cleanup function to kill scroll trigger on unmount
    return () => {
      scrollTrigger.kill();
      gsap.killTweensOf(".work__photo_item");
    };
  }, [events]);

  return (
    <div className="md:mt-56">
      <h1
        ref={eventsRef}
        className="mb-8 mt-10 text-center text-5xl font-light lowercase tracking-widest text-white md:my-12 lg:mb-24 md:text-7xl lg:text-8xl"
      >
        Events
      </h1>
      <div className="relative z-10 h-auto w-full">
        <section className="work flex">
          <div className="work__left relative z-20 w-1/2">
            <div className="work__text mx-auto w-full">
              {/* {events.map(({ id, description }) => (
                <div
                  className="work__info flex h-screen flex-col justify-center"
                  key={id}
                >
                  <div className="work__leftBl text-white lg:text-2xl">
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </div>
              ))} */}

              {/* WORKSHOPS */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  <AnimatedHeader text="WORKSHOPS" />

                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                  </h1> */}
                  <p>
                    ✦ <strong>Suturing 101</strong> <br /> Knot your average
                    workshop
                  </p>
                  <br />
                  <p>
                    ✦ <strong>POCUS</strong> (Point of Care Ultrasound)
                  </p>
                  <br />
                  <p>✦ USG Guided Nerve Block Workshop</p>
                  <br />
                  <p>
                    ✦ <strong>Case Chronicles</strong> <br /> A case report
                    writing bootcamp
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Vital Flow</strong> <br /> A Nephrology Workshop
                  </p>
                  <br />
                  <p>
                    ✦ <strong>#whodunnit</strong> <br /> Crime Scene
                    Investigation Workshop{" "}
                  </p>
                  <br />
                  <p>
                    ✦ <strong>The Olympian’s Aid</strong> <br /> From
                    Orthopaedic Injury Management to Peak Performance
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Illumineyes</strong> <br /> An eye-opening journey
                    into Opthalmology
                  </p>
                </div>
              </div>

              {/* QUIZ */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                    OCCAM&apos;S RAZOR
                    <p className="text-2xl font-light tracking-wider">
                      THE QUIZ
                    </p>
                  </h1> */}
                  <AnimatedHeader text="OCCAM'S RAZOR" subText="THE QUIZ" />
                  <p>
                    ✦ <strong>Pre & Para Clinical Quiz</strong> <br /> Showcase
                    your expertise in Phase 1 &amp; Phase 2 undergraduate
                    subjects
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Clinical Quiz</strong> <br /> This quiz is the
                    perfect opportunity to show off your knowledge gained in
                    Phase 3 part 1 & part 2 undergraduate subjects
                  </p>
                  <br />
                  <p>
                    ✦ <strong>General Quiz</strong> <br /> This quiz offers an
                    exciting experience with questions about popular medical
                    dramas &amp; trending topics in the medical field
                  </p>
                </div>
              </div>

              {/* SCIENCE */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                    SCIENTIFIC EVENTS
                  </h1> */}
                  <AnimatedHeader text="SCIENTIFIC" subText="EVENTS" />
                  {/* <AnimatedHeader text="EVENTS" /> */}
                  <p>
                    ✦ <strong>Case Presentation</strong> <br /> An opportunity
                    to present intriguing cases
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Poster Presentation</strong> <br /> Showcase your
                    unique research findings through a poster
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Medisleuth</strong> <br /> Dive into this exciting
                    adventure inside the world of forensic medicine
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Medical Shark Tank</strong> <br /> Ready to
                    revolutionize the medical field with your groundbreaking
                    ideas?
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Oral Paper Presentation</strong> <br /> Platform
                    to present unique cases
                  </p>
                </div>
              </div>

              {/* LITERARY */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                     EVENTS
                  </h1> */}
                  <AnimatedHeader text="LITERARY" subText="EVENTS" />
                  <p>
                    ✦ <strong>Medical Pictionary</strong> <br /> A unique
                    Pictionary game that combines artistic skills, creativity,
                    presence of mind &amp; teamwork
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Panacea Under a Minute</strong> <br /> Diagnosis
                    in 60 seconds
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Dialogus Medicus</strong> <br /> Medical debate
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Fever Olympics</strong> <br /> Is it just a simple
                    symptom or something much more?
                    <br />
                    Key features include symptom analysis, age-specific
                    symptomatology &amp; symptom identification
                  </p>
                </div>
              </div>

              {/* PANELS */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                    
                  </h1> */}
                  <AnimatedHeader text="PANEL" subText="DISCUSSIONS" />
                  <p>
                    ✦ <strong>Financial Literacy</strong> <br /> A program
                    equipping medical students with the skills to make informed
                    investment decisions and manage risks in healthcare,
                    focusing on medical technology, biotechnology, and
                    pharmaceuticals
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Prospectus Medicus</strong> <br /> Our renowned
                    panel of experts will explore alternative career routes,
                    help you navigate the details of different exams, and offer
                    crucial guidance for achieving a successful career
                  </p>
                </div>
              </div>

              {/* SYMPOSIUM */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                    SYMPOSIUM CEREBRI
                    <p className="text-2xl font-light tracking-wider">
                      THE NEUROLOGY SYMPOSIUM
                    </p>
                  </h1> */}
                  <AnimatedHeader
                    text="SYMPOSIUM CEREBRI"
                    subText="THE NEUROLOGY SYMPOSIUM"
                  />
                  <p>
                    Join the leading experts at the Neurology Symposium
                    organized in partnership with the Neurology Department at
                    JSS Hospital.
                  </p>
                  <br />
                  <p>
                    Dive into the abyss and curves of STROKE and its
                    DIFFERENTIALS, and gain valuable insights on the diagnosis,
                    treatment and management in the most interactive ways
                    possible which is surely going to help at all the levels of
                    your MBBS journey and beyond.
                  </p>
                </div>
              </div>

              {/* MUN */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                    MUN
                  </h1> */}
                  <AnimatedHeader text="MUN" />
                  <p>
                    JSSMCMUN is back, once again offering a platform for
                    engaging, productive discussions on global issues and the
                    creation of actionable policies aimed at the betterment of
                    humanity.
                  </p>
                  <br />
                  <p>
                    This event presents a unique opportunity for delegates from
                    diverse backgrounds to come together, fostering the
                    development of invaluable skills and a deep understanding of
                    governance and policy-making.
                  </p>
                </div>
              </div>

              {/* ONLINE */}
              <div className="work__info flex h-screen flex-col justify-center">
                <div className="work__leftBl text-white lg:text-xl">
                  {/* <h1 className="mb-10 text-4xl font-extrabold uppercase">
                    
                  </h1> */}
                  <AnimatedHeader text="ONLINE" subText="EVENTS" />
                  <p>
                    ✦ <strong>Poetic Pulse</strong> <br /> The poetry
                    competition{" "}
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Palette Pandemonium</strong> <br /> The art
                    competition{" "}
                  </p>
                  <br />
                  <p>
                    ✦ <strong>Pixel Perception</strong> <br /> The photography
                    competition{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work__right w-1/2">
            <div className="work__rightBl sticky top-0 flex h-screen w-full flex-col justify-center">
              <div className="work__photo relative h-[60vw] w-[45vw]">
                {events.map(({ id, image }) => (
                  <div
                    className="work__photo_item absolute ml-8 h-[40vh] w-[40vw] overflow-hidden rounded-[2.5rem] lg:ml-60 lg:mt-[20vh] lg:h-2/3 lg:w-2/3 lg:rounded-[4rem]"
                    key={id}
                  >
                    <Image
                      src={image}
                      alt=""
                      layout="fill"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events3;
