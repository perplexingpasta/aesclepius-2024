"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";

export function SparklesPreview() {
  return (
    <div className="h-full fixed w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
