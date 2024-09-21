"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode; 
}

function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.5,
        duration: 1,
        smoothWheel: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

// Options Explained

// lerp (Linear Interpolation):
// Type: Number (typically between 0 and 1).
// Description: This value controls how smoothly the scrolling behaves. It determines the interpolation factor for the scroll position.
// Usage: A lower value (like 0.1) means a smoother scroll but with a slower response to user input. A higher value (closer to 1) makes the scrolling feel more immediate but can be less smooth.

// duration:
// Type: Number (in seconds).
// Description: This option specifies how long the scroll animation lasts when navigating to a new section or when the user scrolls.
// Usage: A value of 1.5 seconds means it will take 1.5 seconds for the scroll animation to complete when the user initiates a scroll. This can create a more dramatic effect but may also feel slow for some users.

// smoothWheel:
// Type: Boolean (true or false).
// Description: This option enables or disables smooth scrolling for mouse wheel events.
// Usage: When set to true, it enhances the scrolling experience by smoothing out the acceleration and deceleration as the user scrolls with the mouse wheel. If set to false, the scrolling will behave more like the default browser behavior without any smoothing.