/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { events } from "@/data/index2";

const Events3: React.FC = () => {
  const eventsRef = useRef(null);

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
        className="mb-8 mt-10 text-center text-5xl font-light lowercase tracking-widest text-white md:my-12 md:text-7xl lg:text-8xl"
      >
        Events
      </h1>
      <div className="relative z-10 h-auto w-full">
        <section className="work flex">
          <div className="work__left relative z-20 w-1/2">
            <div className="work__text mx-auto w-4/5">
              {/* <div
                className="work__info flex h-screen flex-col justify-center"
                key={1}
              >
                <div className="work__leftBl text-5xl uppercase text-white">
                  <p>Hello 1</p>
                </div>
              </div> */}

              {events.map(({ description }) => (
                <div
                  className="work__info flex h-screen flex-col justify-center"
                  key={1}
                >
                  <div className="work__leftBl text-white lg:text-2xl">
                    {/* <h1 dangerouslySetInnerHTML={{ __html: title }} /> */}
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="work__right w-1/2">
            <div className="work__rightBl sticky top-0 flex h-screen w-full flex-col justify-center">
              <div className="work__photo relative h-[60vw] w-[45vw]">
                {/* <div
                  className="work__photo_item absolute ml-8 h-[40vh] w-[40vw] overflow-hidden rounded-[2.5rem] lg:ml-60 lg:mt-[20vh] lg:h-2/3 lg:w-2/3 lg:rounded-[4rem]"
                  title="1"
                >
                  <Image
                    src="/images/events/workshop.webp"
                    alt=""
                    layout="fill"
                    className="block h-full w-full object-cover"
                  />
                </div> */}

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
