import React from "react";
import ContactCard from "./ui/ContactCard";
import { core } from "@/data/index2";

const Contact = () => {
  return (
    <div className="ml-2 pt-12 md:pt-0 md:mb-16 text-white" id="core">
      <h1 className="mb-8 text-center text-5xl font-light lowercase tracking-wider text-white md:mb-12 md:text-6xl md:leading-tight">
        Organising Committee
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:w-1/2">
          {core.slice(0, 3).map(({ id, img, name, desig, number }) => (
            <div key={id} className="font-lexendDeca">
              <ContactCard
                imageSrc={img}
                name={name}
                designation={desig}
                number={number}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:w-1/2">
          {core.slice(3).map(({ id, img, name, desig, number }) => (
            <div key={id} className="font-lexendDeca">
              <ContactCard
                imageSrc={img}
                name={name}
                designation={desig}
                number={number}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
