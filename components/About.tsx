"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/about-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error("Error loading animation:", err);
        setAnimationData(null);
      });
  }, []);

  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-8">
              About Me
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left" delay={100}>
            <div className="w-full h-full flex items-center justify-center">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full max-w-md"
                />
              ) : (
                <div className="w-full max-w-md h-96 bg-slate-100 rounded-lg flex items-center justify-center">
                  <p className="text-slate-600 text-sm">Animation will appear here</p>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Senior Software Engineer with over 10 years of experience building dependable software that supports real business needs.
              </p>
              <p>
                Experienced in owning features end to end, improving existing systems, and delivering work that is clear, stable, and easy to maintain. Known for strong communication, teamwork, and a steady, practical approach to solving problems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

