"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";


// Map technology names to icon sources
// Using DevIcons for better reliability, especially for Java
const iconMap: { [key: string]: { name: string; source: 'devicons' | 'simpleicons' } } = {
  "TypeScript": { name: "typescript", source: "simpleicons" },
  "Java": { name: "java", source: "devicons" },
  "Python": { name: "python", source: "simpleicons" },
  "C#": { name: "csharp", source: "simpleicons" },
  "Golang": { name: "go", source: "simpleicons" },
  "React": { name: "react", source: "simpleicons" },
  "Next.js": { name: "nextdotjs", source: "simpleicons" },
  "Angular": { name: "angular", source: "simpleicons" },
  "Node.js": { name: "nodedotjs", source: "simpleicons" },
  "Spring Boot": { name: "spring", source: "simpleicons" },
  "ASP.NET Core": { name: "dotnet", source: "simpleicons" },
  "Django": { name: "django", source: "simpleicons" },
  "FastAPI": { name: "fastapi", source: "simpleicons" },
  "PostgreSQL": { name: "postgresql", source: "simpleicons" },
  "MongoDB": { name: "mongodb", source: "simpleicons" },
  "MySQL": { name: "mysql", source: "simpleicons" },
  "Redis": { name: "redis", source: "simpleicons" },
  "AWS": { name: "amazonaws", source: "simpleicons" },
  "Azure": { name: "microsoftazure", source: "simpleicons" },
  "GCP": { name: "googlecloud", source: "simpleicons" },
  "Docker": { name: "docker", source: "simpleicons" },
  "Kubernetes": { name: "kubernetes", source: "simpleicons" },
};

// Icon component for technologies with tooltip
const TechIcon = ({ name }: { name: string }) => {
  const iconInfo = iconMap[name];
  const [iconSrc, setIconSrc] = useState<string>("");
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    if (!iconInfo) return;
    
    // Special handling for Java - use multiple reliable sources
    if (iconInfo.name === "java") {
      // Try Simple Icons CDN first (colored)
      setIconSrc(`https://cdn.simpleicons.org/java`);
    } else if (iconInfo.source === "devicons") {
      // Use DevIcons CDN
      setIconSrc(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconInfo.name}/${iconInfo.name}-original.svg`);
    } else {
      // Use Simple Icons CDN (colored icons)
      setIconSrc(`https://cdn.simpleicons.org/${iconInfo.name}`);
    }
  }, [iconInfo]);

  if (!iconInfo) return null;

  const handleError = () => {
    if (!iconInfo) return;
    
    // Special fallback chain for Java
    if (iconInfo.name === "java") {
      if (errorCount === 0) {
        // Try GitHub raw content
        setIconSrc(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/java.svg`);
        setErrorCount(1);
      } else if (errorCount === 1) {
        // Try jsDelivr
        setIconSrc(`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg`);
        setErrorCount(2);
      } else if (errorCount === 2) {
        // Try DevIcons
        setIconSrc(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`);
        setErrorCount(3);
      } else if (errorCount === 3) {
        // Try Iconify
        setIconSrc(`https://api.iconify.design/simple-icons/java.svg`);
        setErrorCount(4);
      }
    } else {
      // Fallback for other icons
      if (errorCount === 0) {
        if (iconInfo.source === "devicons") {
          setIconSrc(`https://cdn.simpleicons.org/${iconInfo.name}`);
        } else {
          setIconSrc(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconInfo.name}/${iconInfo.name}-original.svg`);
        }
        setErrorCount(1);
      } else if (errorCount === 1) {
        setIconSrc(`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconInfo.name}.svg`);
        setErrorCount(2);
      } else if (errorCount === 2) {
        setIconSrc(`https://api.iconify.design/simple-icons/${iconInfo.name}.svg`);
        setErrorCount(3);
      }
    }
  };

  if (!iconSrc) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex items-center justify-center w-24 h-24">
        <img 
          src={iconSrc}
          alt={name} 
          className="w-16 h-16 hover:opacity-80 transition-opacity duration-200"
          loading="lazy"
          onError={handleError}
        />
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700 text-center">{name}</span>
    </div>
  );
};

export default function Skills() {
  const categories = [
    {
      name: "Front-End Development",
      technologies: ["TypeScript", "React", "Next.js", "Angular"],
    },
    {
      name: "Back-End Development",
      technologies: ["Node.js", "Java", "Python", "C#", "Golang", "Spring Boot", "ASP.NET Core", "Django", "FastAPI"],
    },
    {
      name: "Database",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      name: "Cloud",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-4 sm:px-6 lg:px-8 relative bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
              Skills & Technologies
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={100}>
          <div className="space-y-10">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h3 className="text-xl font-semibold text-slate-700 mb-6 text-left">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="animate-slide-text"
                      style={{ animationDelay: `${(categoryIndex * 100 + techIndex) * 0.1}s` }}
                    >
                      <TechIcon name={tech} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

