"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClass =
    direction === "up"
      ? "animate-fade-in-up"
      : direction === "left"
      ? "animate-slide-in-left"
      : direction === "right"
      ? "animate-slide-in-right"
      : "animate-fade-in";

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

