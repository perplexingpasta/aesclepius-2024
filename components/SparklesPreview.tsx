"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/Sparkles";

export function SparklesPreview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <div
        style={{ transitionDuration: "3500ms" }}
        className={`absolute inset-0 h-screen w-full transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
