"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  industry: string;
  image?: string;
  imageAlt?: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Aya Healthcare Staffing Platform",
    description: "Contributed to Aya Healthcare's staffing platform by developing scalable full-stack features using React, Node.js, TypeScript, and AWS, improving clinician job-matching workflows and credentialing automation.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    industry: "Healthcare Staffing",
    image: "/projects/ayahealthcare.png",
    imageAlt: "Aya Healthcare Staffing Platform",
    url: "https://www.ayahealthcare.com/",
  },
  {
    title: "Brightree Post-Acute Care System",
    description: "Helped enhance Brightree's post-acute care system by building .NET and Angular modules for pharmacy, HME operations, patient management, and billing automation within a cloud-based healthcare workflow.",
    technologies: [".NET", "Angular", "Cloud", "Healthcare"],
    industry: "Post-Acute Care",
    image: "/projects/brightree.png",
    imageAlt: "Brightree Post-Acute Care System",
    url: "https://www.brightree.com/",
  },
  {
    title: "Finom European Fintech Platform",
    description: "Worked on Finom's European fintech platform by implementing microservices in Java/Spring Boot and modern React/TypeScript interfaces supporting digital banking, invoicing, and real-time financial automation.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Microservices"],
    industry: "Fintech",
    image: "/projects/finom.png",
    imageAlt: "Finom European Fintech Platform",
    url: "https://finom.co/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 relative bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
              Featured Projects
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer"
              >
                {project.image && (
                  <div className="relative w-full h-48 bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Hide image if it doesn't exist
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-3">
                      {project.industry}
                    </span>
                    <h3 className="text-xl font-bold text-slate-700 mb-3">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

