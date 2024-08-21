"use client";

import { services } from "@/data/index2";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-20" id="services">
      {/* GRID/DOT BACKGROUND */}
      {/* <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div> */}

      <h1 className="heading relative block !font-extrabold uppercase dark:hidden">
        Our{" "}
        <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
          Services
        </span>
      </h1>
      <h1 className="heading relative !font-extrabold hidden uppercase dark:block">
        Our <span className="text-purple">Services</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-x-32 p-4 lg:grid-cols-2">
        {services.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <ServiceCard title={item.title} des={item.des} img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
