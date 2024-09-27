import { motion } from "framer-motion";
import Link from "next/link";

const ScrollButton = () => {
  return (
    <Link href="#events">
      <div className="mt-16 flex w-full items-center justify-center">
        <div className="flex h-12 w-6 items-start justify-center rounded-3xl border-2 border-white-100 lg:h-16 lg:w-9 lg:border-4 lg:p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-[0.7rem] w-[0.7rem] rounded-full bg-white-100 lg:h-3 lg:w-3"
          />
        </div>
      </div>
    </Link>
  );
};

export default ScrollButton;
