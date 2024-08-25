import React from "react";
import ContactCard from "./ui/ContactCard";
import { core } from "@/data/index2";

const Contact = () => {
  return (
    <div className="text-white ml-2" id="core">
      <h1 className="md:text-3xl text-2xl mb-1 md:mb-3">Core Committee</h1>
      {core.map(({ id, img, name, number }) => (
        <div key={id}>
          <ContactCard
            imageSrc={img}
            name={name}
            number={number}
          />
        </div>
      ))}
    </div>
  );
};

export default Contact;
