import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import LitUpButton from "./ui/LitUpButton";
import Link from "next/link";
import LitUpButtonBg from "./ui/LitUpButtonBg";
// import { BackgroundGradientAnimation } from "./ui/GradientBg";
// import { BackgroundLines } from "./ui/background-lines";

const ReadyTo = () => {
  return (
    <div
      className="my-36 flex flex-col items-center md:my-52 lg:mb-16"
      id="readyto"
    >
      {/* <BackgroundLines className="relative flex w-full flex-col items-center justify-center bg-transparent"> */}
      <h1 className="mb-4 text-center text-5xl font-light lowercase leading-tight tracking-wider text-white md:max-w-[85%] md:text-6xl md:leading-tight lg:max-w-[45vw] lg:text-5xl">
        Ready to <br className="block md:hidden" /> learn,{" "}
        <br className="block md:hidden" /> engage &{" "}
        <br className="block md:hidden" /> ascend?
      </h1>
      {/* <p className="my-5 text-center text-white-200 lg:mb-10">
        Register for Asclepius 2024 today to...
      </p> */}
      <div className="my-5 flex flex-col items-center justify-center space-y-6 md:my-10 md:flex-row md:space-x-4 md:space-y-0">
        <Link
          href="https://jssuni.edu.in/jssaher/conference/ASCL2024/delegatereg.aspx"
          target="_blank"
        >
          <LitUpButtonBg
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
        <a
          href="/images/logo.svg"
          download="Asclepius Logo.svg"
          target="_blank"
        >
          <LitUpButton
            title="View Brochure"
            icon={<IoMdDownload />}
            position="right"
          />
        </a>
      </div>
      {/* </BackgroundLines> */}
    </div>
  );
};

export default ReadyTo;
