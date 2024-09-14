import React from "react";
import FlipCardSpring from "./ui/FlipCardSpring";
import { events } from "@/data/index2";

const FlipCardSection = () => {
  return (
    <div className="mb-24 block pt-10 md:hidden" id="events">
      <h1 className="mb-8 text-center text-4xl font-light tracking-wider text-white">
        Events
      </h1>
      {events.map(({ id, image, title, backgroundColor, description }) => (
        <div key={id} className="grid justify-items-center">
          <FlipCardSpring
            image={image}
            title={title}
            backgroundColor={backgroundColor}
            // description={description}
            description={<div dangerouslySetInnerHTML={{ __html: description }} />}
          />
        </div>
      ))}
    </div>
  );
};

export default FlipCardSection;
