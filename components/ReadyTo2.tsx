import React, { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import LitUpButton from "./ui/LitUpButton";
import Link from "next/link";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import LitUpButtonMini from "./ui/LitUpButtonMini";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoHomeFill } from "react-icons/go";
import { IoPersonCircle } from "react-icons/io5";
import { SiUnitednations } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";

const ReadyTo = () => {
  const readyToRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    if (isOverlayVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayVisible]);

  const handleRegisterNowClick = () => {
    setIsOverlayVisible(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      closeOverlay();
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: readyToRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      readyToRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
    )
      .fromTo(
        button1Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "0.75", // start this animation 0.75 seconds after the previous one ends
      )
      .fromTo(
        button2Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "1.25", // start this animation 0.75 seconds after the previous one ends
      );

    // Clean up on component unmount
    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (isOverlayVisible) {
      const buttons = Array.from(buttonsRef.current?.children || []);
      // GSAP animation for buttons
      gsap.fromTo(
        buttons,
        { x: -25, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.4,
          onComplete: () => {
            // Fade in note after buttons are done
            gsap.fromTo(
              noteRef.current,
              { opacity: 0 },
              {
                opacity: 0.5,
                duration: 0.75,
                delay: 0.25,
              },
            );
          },
        },
      );
    }
  }, [isOverlayVisible]);

  return (
    <div
      className="my-[35vh] flex flex-col items-center md:my-0 md:mb-40 lg:mb-40 lg:mt-52"
      id="readyto"
    >
      <h1
        ref={readyToRef}
        className="mb-4 text-center text-5xl font-light lowercase leading-tight tracking-wider text-white md:max-w-[85%] md:text-6xl md:leading-tight lg:max-w-[45vw]"
      >
        Ready to <br className="block md:hidden" /> learn,{" "}
        <br className="block md:hidden" /> engage &{" "}
        <br className="block md:hidden" /> ascend?
      </h1>
      <div className="my-5 flex flex-col items-center justify-center space-y-6 md:my-10 md:flex-row md:space-x-4 md:space-y-0">
        <button ref={button1Ref} onClick={handleRegisterNowClick}>
          <LitUpButtonBg
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </button>
        <Link
          ref={button2Ref}
        href="https://drive.google.com/file/d/1Zsf66XgcOaCl8GpZa9TB4tXVs3-sx050/view?usp=sharing"
          target="_blank"
        >
          <LitUpButton
            title="View Brochure"
            icon={<IoBook />}
            position="right"
          />
        </Link>
      </div>

      {/* Overlay */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 z-[5000] flex items-center justify-center bg-black bg-opacity-95"
          onClick={handleOverlayClick}
        >
          <div className="flex flex-col items-start">
            <div
              ref={buttonsRef}
              className="4buttondiv flex flex-col items-start justify-start space-y-4"
            >
              <Link
                href="https://asclepius2024.azurewebsites.net/"
                target="_blank"
              >
                <LitUpButtonMini
                  title="Homepage"
                  icon={<GoHomeFill />}
                  position="left"
                />
              </Link>
              <Link
                href="https://jssuni.edu.in/jssaher/conference/ASCL2024/delegatereg.aspx?"
                target="_blank"
              >
                <LitUpButtonMini
                  title="Delegate Registration"
                  icon={<IoPersonCircle />}
                  position="left"
                />
              </Link>
              <Link
                href="https://jssuni.edu.in/jssaher/conference/ASCL2024/munreg.aspx"
                target="_blank"
              >
                <LitUpButtonMini
                  title="MUN Registration"
                  icon={<SiUnitednations />}
                  position="left"
                />
              </Link>
              <Link
                href="https://jssuni.edu.in/jssaher/conference/ASCL2024/quizreg.aspx"
                target="_blank"
              >
                <LitUpButtonMini
                  title="Quiz Registration"
                  icon={<FaQuestionCircle />}
                  position="left"
                />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1SCgqsLojctoTDgMNybps5kr5_byaao6g/view?usp=sharing"
                target="_blank"
              >
                <LitUpButtonMini
                  title="View Brochure"
                  icon={<IoBook />}
                  position="left"
                />
              </Link>
            </div>
            <div
              ref={noteRef}
              className="notediv mt-10 max-w-[75vw] items-start justify-start font-lexendDeca text-sm font-light text-white opacity-0 md:mt-16 md:max-w-[65vw] md:text-base"
            >
              <p>&bull; Visit the official homepage to learn more.</p>
              <br />
              <p>
                &bull; MUN &amp; Quiz Registration are separate from Delegate
                Registration. <br />
                Thus, you don&apos;t require a Delegate Registration to
                participate in the MUN &amp; the Quiz.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadyTo;
