import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              Background
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
              Education & <span className="gradient-text animate-gradient">Foundation</span>
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={100}>
          <div className="group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-10 card-hover border border-slate-200/60 hover:border-slate-400/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-slate-50/0 group-hover:from-slate-100/30 group-hover:to-slate-100/20 transition-all duration-500 rounded-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M12 14l-9-5M12 14l9-5M12 5v9" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-slate-700 mb-2 group-hover:text-slate-800 transition-colors">
                    UC San Diego
                  </h3>
                  <p className="text-xl gradient-text mb-3 font-semibold">
                    Bachelor's degree, Computer Science
                  </p>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base font-medium">2010 - 2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

