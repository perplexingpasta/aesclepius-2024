import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";
import Link from "next/link";
import LitUpButtonBg from "./ui/LitUpButtonBg";

const ReadyTo = () => {
  return (
    <div className="mb-32 md:mb-16 flex flex-col items-center" id="readyto">
      <h1 className="text-center text-4xl font-light tracking-wider text-white md:text-5xl lg:max-w-[45vw]">
        Ready to learn, engage & ascend?
      </h1>
      <p className="my-5 text-center text-white-200 md:mb-10">
        Register for Asclepius 2024 today to...
      </p>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <LitUpButtonBg
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <LitUpButton
            title="View Brochure"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default ReadyTo;
