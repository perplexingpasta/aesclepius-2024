// import PacmanLoader from "react-spinners/PacmanLoader";

// const loading = () => {
//   return (
//     <>
//       <div className="mt-72 flex h-full w-full items-center justify-center text-center text-2xl font-bold uppercase text-white md:text-5xl">
//         loading
//         <br />
//         {/* <br /> */}
//         {/* <PacmanLoader color="#fff" /> */}
//         &gt;.&lt;
//       </div>
//     </>
//   );
//   // return (
//   //   <div className="absolute flex items-center justify-center bg-black bg-opacity-50">
//   //     <PacmanLoader color="#fff" />
//   //   </div>
//   // );
// };

// export default loading;

// import React from "react";

// const Loading: React.FC<{ progress: number }> = ({ progress }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
//       <div className="text-white">
//         <div className="relative w-64 h-4 bg-gray-300 rounded">
//           <div
//             className="absolute top-0 left-0 h-full bg-green-500 rounded"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//         <p className="mt-2 text-lg">{progress}%</p>
//       </div>
//     </div>
//   );
// };

// export default Loading;

"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Loading = () => {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const handleStart = () => {
      setCounter(0);
      interval = setInterval(() => {
        setCounter((prev) => (prev < 90 ? prev + 1 : prev)); // Mimic the progress (up to 90%)
      }, 50); // Adjust this for speed
    };

    const handleComplete = () => {
      clearInterval(interval);
      setCounter(100); // Immediately complete when page is fully loaded
      setTimeout(() => setCounter(0), 500); // Optional: Reset after complete
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      clearInterval(interval); // Cleanup on component unmount
    };
  }, [router]);

  if (counter === 100) return null; // Hide the loading screen when fully loaded

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="text-6xl font-bold text-white">{counter}%</h1>
    </div>
  );
};

export default Loading;
