import Image from "next/image";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  url?: string;
  logo?: string;
  description?: string[];
  type: "work" | "education";
}

const experiences: ExperienceItem[] = [
  {
    company: "iconic",
    role: "Senior Software Engineer",
    period: "April 2023 - Present (2 years 9 months)",
    location: "Los Angeles, California, United States",
    description: [
      "Led development and maintenance of core internal systems supporting artist and business operations.",
      "Collaborated closely with product, operations, and stakeholders to deliver reliable features and improvements.",
      "Took ownership of complex tasks, improving system stability, performance, and overall code quality.",
    ],
    type: "work",
  },
  {
    company: "Through6",
    role: "Associate Software Developer → Software Developer → Senior Software Developer",
    period: "March 2019 - March 2023 (4 years 1 month)",
    description: [
      "Senior Software Developer: Owned larger features from planning through release, resolved high-impact production issues, and reviewed code to keep systems stable.",
      "Software Developer: Built customer-facing and internal features, investigated bugs reported from production, and supported regular releases.",
      "Associate Software Developer: Contributed to feature development and bug fixes, learning best practices and supporting team deliverables.",
    ],
    type: "work",
  },
  {
    company: "SUNRISE LOGISTICS SOLUTIONS (AMERICA), LTD. CORPORATION",
    role: "Java and VB.NET Developer",
    period: "October 2015 - February 2019 (3 years 5 months)",
    location: "Torrance, CA",
    description: [
      "Developed and maintained enterprise applications using Java and VB.NET technologies.",
      "Collaborated with team members to deliver reliable software solutions for logistics operations.",
    ],
    type: "work",
  },
  {
    company: "UC San Diego",
    role: "Bachelor's degree\nComputer Science",
    period: "2010 - 2015",
    type: "education",
  },
];

import AnimatedSection from "./AnimatedSection";
import TypewriterText from "./TypewriterText";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-4 sm:px-6 lg:px-8 relative bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              Career
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
              Experience & Education
            </h2>
          </div>
        </AnimatedSection>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Left side */}
          <div className="absolute left-[35%] md:left-[30%] top-0 bottom-0 w-0.5 bg-slate-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const periodParts = exp.period.split(" - ");
              const startDate = periodParts[0];
              const endDate = periodParts[1]?.split(" (")[0] || "Current";
              
              return (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <div className="relative flex items-start gap-6 md:gap-12">
                    {/* Left Side - Company Name and Dates */}
                    <div className="w-full md:w-[30%] md:pr-12 text-right">
                      {/* Timeline Dot */}
                      <div className="absolute left-[35%] md:left-[30%] transform -translate-x-1/2 -translate-y-1 z-10">
                        <div className="w-3 h-3 rounded-full bg-slate-500 border-2 border-white"></div>
                      </div>

                      {/* Company/Institution Name */}
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-lg md:text-xl font-bold text-slate-700 hover:text-slate-800 transition-colors mb-1"
                        >
                          <TypewriterText 
                            text={exp.company} 
                            delay={80}
                            className="animate-swipe-right"
                          />
                        </a>
                      ) : (
                        <div className="inline-block text-lg md:text-xl font-bold text-slate-700 mb-1">
                          <TypewriterText 
                            text={exp.company} 
                            delay={80}
                            className="animate-swipe-right"
                          />
                        </div>
                      )}
                      
                      {/* Dates */}
                      <div className="text-sm text-slate-700 font-semibold animate-swipe-right" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                        <TypewriterText 
                          text={`${startDate} - ${endDate}`} 
                          delay={60}
                        />
                      </div>
                    </div>

                    {/* Right Side - Role and Description */}
                    <div className="w-full md:w-[calc(70%-20px)] md:pl-12 text-slate-700">
                      {/* Job Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 animate-swipe-left" style={{ animationDelay: `${index * 200 + 200}ms` }}>
                        {exp.type === "education" && exp.role.includes("\n") ? (
                          <>
                            {exp.role.split("\n")[0]}
                            <br />
                            <span className="text-lg md:text-xl font-normal text-slate-600">
                              {exp.role.split("\n")[1]}
                            </span>
                          </>
                        ) : (
                          <TypewriterText 
                            text={exp.role} 
                            delay={70}
                          />
                        )}
                      </h3>
                      
                      {/* Responsibilities - Bulleted List */}
                      {exp.description && exp.description.length > 0 && (
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li 
                              key={itemIndex} 
                              className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-relaxed animate-swipe-left"
                              style={{ animationDelay: `${index * 200 + 300 + itemIndex * 100}ms` }}
                            >
                              <span className="text-slate-500 mt-1.5 flex-shrink-0 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

