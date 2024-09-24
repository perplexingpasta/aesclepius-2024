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
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop the loading after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="text-7xl relative font-bold text-white">Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
}
