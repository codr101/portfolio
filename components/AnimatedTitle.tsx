"use client";

import { useEffect, useState } from "react";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
}

export default function AnimatedTitle({ 
  text, 
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  initialDelay = 0
}: AnimatedTitleProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(text.length);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before animation starts
    if (!hasStarted && initialDelay > 0) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
        setDisplayedText("");
        setCurrentIndex(0);
      }, initialDelay);
      return () => clearTimeout(startTimer);
    }

    if (!hasStarted) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase - left to right
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase - right to left
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting, reset and start typing again
        setCurrentIndex(0);
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration, initialDelay, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      {hasStarted && <span className="inline-block w-1.5 h-[0.8em] bg-white ml-2 mt-1 animate-pulse"></span>}
    </span>
  );
}

