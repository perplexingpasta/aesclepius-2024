// import React, { useEffect, useRef } from "react";
// import { FaLocationArrow } from "react-icons/fa6";
// import { IoMdDownload } from "react-icons/io";
// import LitUpButton from "./ui/LitUpButton";
// import Link from "next/link";
// import LitUpButtonBg from "./ui/LitUpButtonBg";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const ReadyTo = () => {
//   const readyToRef = useRef(null);
//   const button1Ref = useRef(null);
//   const button2Ref = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.fromTo(
//       readyToRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: readyToRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       },
//     );
//     gsap.fromTo(
//       button1Ref.current,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1,
//         delay: 0.75,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: button1Ref.current,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       },
//     );
//     gsap.fromTo(
//       button2Ref.current,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1,
//         delay: 1.25,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: button2Ref.current,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       },
//     );
//   }, []);

//   return (
//     <div
//       className="my-36 flex flex-col items-center md:my-0 md:mb-40 lg:mb-40 lg:mt-52"
//       id="readyto"
//     >
//       <h1
//         ref={readyToRef}
//         className="mb-4 text-center text-5xl font-light lowercase leading-tight tracking-wider text-white md:max-w-[85%] md:text-6xl md:leading-tight lg:max-w-[45vw]"
//       >
//         Ready to <br className="block md:hidden" /> learn,{" "}
//         <br className="block md:hidden" /> engage &{" "}
//         <br className="block md:hidden" /> ascend?
//       </h1>
//       {/* <p className="my-5 text-center text-white-200 lg:mb-10">
//         Register for Asclepius 2024 today to...
//       </p> */}
//       <div className="my-5 flex flex-col items-center justify-center space-y-6 md:my-10 md:flex-row md:space-x-4 md:space-y-0">
//         <Link
//           ref={button1Ref}
//           href="https://jssuni.edu.in/jssaher/conference/ASCL2024/delegatereg.aspx"
//           target="_blank"
//         >
//           <LitUpButtonBg
//             title="Register Now"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </Link>
//         <Link
//           ref={button2Ref}
//           href="https://drive.google.com/file/d/1iBPIV1A_HO1wtMlz3iue_Zjt8zEC35P5/view?usp=sharing"
//           target="_blank"
//         >
//           <LitUpButton
//             title="View Brochure"
//             icon={<IoMdDownload />}
//             position="right"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default ReadyTo;

import React, { useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import LitUpButton from "./ui/LitUpButton";
import Link from "next/link";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ReadyTo = () => {
  const readyToRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

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

  return (
    <div
      className="my-36 flex flex-col items-center md:my-0 md:mb-40 lg:mb-40 lg:mt-52"
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
      {/* <p className="my-5 text-center text-white-200 lg:mb-10">
        Register for Asclepius 2024 today to...
      </p> */}
      <div className="my-5 flex flex-col items-center justify-center space-y-6 md:my-10 md:flex-row md:space-x-4 md:space-y-0">
        <Link
          ref={button1Ref}
          href="https://jssuni.edu.in/jssaher/conference/ASCL2024/delegatereg.aspx"
          target="_blank"
        >
          <LitUpButtonBg
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
        <Link
          ref={button2Ref}
          href="https://drive.google.com/file/d/1SCgqsLojctoTDgMNybps5kr5_byaao6g/view?usp=sharing"
          target="_blank"
        >
          <LitUpButton
            title="View Brochure"
            icon={<IoBook />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default ReadyTo;
