// components/FollowMouse.tsx

import React, { useEffect, useRef, useState } from "react";

const FollowMouse: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const followMouse = () => {
      const dx = (mousePos.x - ballPos.x) * 0.125;
      const dy = (mousePos.y - ballPos.y) * 0.125;

      if (Math.abs(dx) + Math.abs(dy) > 0.1) {
        setBallPos({ x: ballPos.x + dx, y: ballPos.y + dy });
      } else {
        setBallPos(mousePos);
      }

      if (ballRef.current) {
        // Offset the ball position by half its size (32px) to keep the cursor centered
        ballRef.current.style.left = `${ballPos.x - 15}px`;
        ballRef.current.style.top = `${ballPos.y - 10}px`;
      }

      requestAnimationFrame(followMouse);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animationKey = requestAnimationFrame(followMouse);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationKey);
    };
  }, [mousePos, ballPos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden 3xl:block">
      <div
        ref={ballRef}
        className="pointer-events-none absolute h-10 w-10 rounded-full border-2 border-white dark:border-black"
        style={{ left: "-9999px", top: "-9999px" }} // Initially position offscreen
      />
    </div>
  );
};

export default FollowMouse;
