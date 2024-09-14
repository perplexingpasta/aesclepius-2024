import React from "react";
import ContactCard from "./ui/ContactCard";
import { core } from "@/data/index2";

const Contact = () => {
  return (
    <div className="ml-2 text-white" id="core">
      {/* <h1 className="md:text-3xl text-2xl mb-1 md:mb-3">Core Committee</h1> */}
      <h1 className="mb-4 text-center text-3xl font-light tracking-wider text-white">
        Organising Committee
      </h1>
      {core.map(({ id, img, name, desig, number }) => (
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
  );
};

export default Contact;
