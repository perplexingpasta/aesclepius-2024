import React from "react";
import FlipCardSpring from "./ui/FlipCardSpring";
import { events } from "@/data/index2";

const FlipCardSection = () => {
  return (
    <div className="mb-24 pt-10 md:mt-16" id="events">
      <h1 className="mb-8 mt-10 text-center text-5xl md:text-7xl md:my-12 font-light lowercase tracking-widest text-white">
        Events
      </h1>
      {events.map(({ id, image, title, backgroundColor, description }) => (
        <div key={id} className="grid justify-items-center">
          <FlipCardSpring
            image={image}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
            backgroundColor={backgroundColor}
            description={
              <p dangerouslySetInnerHTML={{ __html: description }} />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default FlipCardSection;
