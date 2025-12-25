"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="flex flex-col items-center">
          {/* Text Content */}
          <div className="flex-1 text-center">
            <div className="mb-6">
              <span
                className={`inline-block px-4 py-2 bg-slate-100 border border-slate-300 rounded-full text-xs font-medium text-slate-700 mb-8 tracking-wider shadow-sm ${
                  mounted ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                SENIOR SOFTWARE ENGINEER
              </span>
            </div>
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              Kenny Mai
            </h1>
            <div
              className={`mb-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-xl md:text-2xl text-slate-200 font-light mb-2 animate-slide-text">
                TypeScript • Java • Python • C# • Golang
              </p>
              <p className="text-lg text-slate-600 font-medium animate-swipe">
                ⚡ 30% Performance Boost Across Full Stack
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-slate-600 text-white rounded-lg font-semibold shadow-lg shadow-slate-500/25 hover:shadow-slate-500/40 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Hire me</span>
                <div className="absolute inset-0 bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#experience"
                className="px-8 py-4 bg-white border-2 border-slate-600 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                View Experience
              </a>
            </div>
            <p
              className={`text-sm text-slate-300 font-light tracking-wide ${
                mounted ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.9s" }}
            >
              Houston, Texas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

