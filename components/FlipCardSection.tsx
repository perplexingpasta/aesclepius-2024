import React from "react";
import FlipCardSpring from "./ui/FlipCardSpring";

const FlipCardSection = () => {
  return (
    <div className="block md:hidden mb-24">
      <h1 className="mb-8 text-center text-4xl font-light tracking-wider text-white">
        Events
      </h1>
      <div className="grid justify-items-center space-y-12">
        <FlipCardSpring
          image="/images/graphic.webp"
          title="Workshops"
          description="This is the back of the card, visible upon scroll."
        />
        <FlipCardSpring
          image="/images/graphic.webp"
          title="SE"
          description="This is the back of the card, visible upon scroll."
        />
        <FlipCardSpring
          image="/images/graphic.webp"
          title="Symposia"
          description="This is the back of the card, visible upon scroll."
        />
        <FlipCardSpring
          image="/images/graphic.webp"
          title="Parell"
          description="This is the back of the card, visible upon scroll."
        />
        <FlipCardSpring
          image="/images/graphic.webp"
          title="Quizzes"
          description="This is the back of the card, visible upon scroll."
        />
        <FlipCardSpring
          image="/images/graphic.webp"
          title="LE"
          description="This is the back of the card, visible upon scroll."
        />
      </div>
    </div>
  );
};

export default FlipCardSection;
