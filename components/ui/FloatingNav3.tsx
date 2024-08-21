// SMALLER NAVBAR
// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/utils/cn";
// import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";
// import { usePathname } from "next/navigation";
// import { NavbarMobile } from "../NavbarMobile";

// export const FloatingNav3 = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.02) {
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   const pathname = usePathname();

//   return (
//     <>
//       <nav className="hidden md:block">
//         <AnimatePresence mode="wait">
//           <motion.div
//             initial={{
//               opacity: 1,
//               y: -100,
//             }}
//             animate={{
//               y: visible ? 0 : -100,
//               opacity: visible ? 1 : 0,
//             }}
//             transition={{
//               duration: 0.2,
//             }}
//             className={cn(
//               "fixed inset-x-0 top-10 z-[500] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-black-100/[0.2] bg-white px-5 py-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border dark:border-white-100/[0.2] dark:bg-black-100 dark:bg-opacity-75 dark:backdrop-blur-2xl dark:backdrop-filter",
//               className,
//             )}
//             // style={{
//             //   backdropFilter: "blur(16px) saturate(180%)",
//             //   backgroundColor: "rgba(0, 3, 25, 0.75)",
//             //   border: "1px solid rgba(255, 255, 255, 0.125)",
//             // }}
//           >
//             {navItems.map((navItem: any, idx: number) => {
//               const isActive = pathname.startsWith(navItem.link);

//               return (
//                 <Link
//                   key={`link=${idx}`}
//                   href={navItem.link}
//                   className={cn(
//                     `relative flex items-center font-semibold text-black-100 hover:text-purpledark dark:font-normal dark:text-neutral-50 dark:hover:text-purple md:space-x-1 ${isActive && navItem.link !== "/" ? "!font-bold dark:border-purpledark dark:!text-purple" : ""}`,
//                   )}
//                 >
//                   <span className="block sm:hidden">{navItem.icon}</span>
//                   <span className="!cursor-pointer text-xs md:uppercase">
//                     {navItem.name}
//                   </span>
//                 </Link>
//               );
//             })}
//             <div className="z-[1000] hidden md:block">
//               <ModeToggle />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </nav>
//       <nav className="md:hidden">
//         <NavbarMobile />
//       </nav>
//     </>
//   );
// };
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { NavbarMobile } from "../NavbarMobile";

export const FloatingNav3 = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "fixed inset-x-0 top-10 z-[500] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-black-100/[0.2] bg-white px-5 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border dark:border-white-100/[0.2] dark:bg-black-100 dark:bg-opacity-75 dark:backdrop-blur-2xl dark:backdrop-filter md:space-x-5 md:px-8",
              className,
            )}
            // style={{
            //   backdropFilter: "blur(16px) saturate(180%)",
            //   backgroundColor: "rgba(0, 3, 25, 0.75)",
            //   border: "1px solid rgba(255, 255, 255, 0.125)",
            // }}
          >
            {navItems.map((navItem: any, idx: number) => {
              const isActive = pathname.startsWith(navItem.link);

              return (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    `relative flex items-center font-semibold text-black-100 hover:text-violet-500 dark:font-normal dark:text-neutral-50 dark:hover:text-purple md:space-x-1 ${isActive && navItem.link !== "/" ? "border-b-2 border-black-100 !font-bold dark:border-purpledark dark:!text-purple" : ""}`,
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="!cursor-pointer text-xs md:text-sm md:uppercase">
                    {navItem.name}
                  </span>
                </Link>
              );
            })}
            <div className="z-[1000] hidden md:block">
              <ModeToggle />
            </div>
          </motion.div>
        </AnimatePresence>
      </nav>
      <nav className="md:hidden">
        <NavbarMobile />
      </nav>
    </>
  );
};
