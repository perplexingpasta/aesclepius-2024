/* eslint-disable @next/next/no-img-element */
// components/FlipCard.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FlipCardProps {
  image: string;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ rotateY: 180 });
    } else {
      controls.start({ rotateY: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="perspective-1000 relative h-80 w-64">
      <motion.div
        className="absolute h-full w-full"
        ref={ref}
        animate={controls}
        initial={{ rotateY: 0 }}
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div className="backface-hidden absolute flex h-full w-full items-center justify-center bg-white shadow-md">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
            {title}
          </h3>
        </div>

        {/* Back Side */}
        <div className="backface-hidden rotate-y-180 absolute flex h-full w-full items-center justify-center bg-blue-500 p-4 text-center text-white">
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
