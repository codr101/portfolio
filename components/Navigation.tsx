"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="hidden md:flex space-x-16">
            {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === "Home" ? "hero" : item.toLowerCase())}
                className={`text-sm font-medium transition-colors relative group tracking-wide uppercase ${
                  isScrolled
                    ? "text-white hover:text-slate-300"
                    : "text-white hover:text-slate-300"
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-slate-400" : "bg-slate-400"
                }`}></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

