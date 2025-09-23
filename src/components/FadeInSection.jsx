// src/components/FadeInSection.jsx
import React, { useState, useEffect, useRef } from "react";

const FadeInSection = ({
  children,
  direction = "up", // up, down, left, right
  duration = 1000,
  delay = 0,
  once = true, // animate only once
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            if (once) observer.unobserve(domRef.current);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay, once]);

  // Determine translate based on direction
  const getTranslate = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0" : "translate-y-10";
      case "down":
        return isVisible ? "translate-y-0" : "translate-y-[-10px]";
      case "left":
        return isVisible ? "translate-x-0" : "translate-x-[-10px]";
      case "right":
        return isVisible ? "translate-x-0" : "translate-x-10";
      default:
        return isVisible ? "translate-y-0" : "translate-y-10";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out transform ${getTranslate()} ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
