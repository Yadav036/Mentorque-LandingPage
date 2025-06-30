
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const Weeks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Calculate scroll progress through the section
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + elementHeight)
        ));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weeks = [
    {
      week: 1,
      title: "Foundation & Assessment",
      description: "Resume review, skill assessment, and goal setting with your dedicated mentor.",
      tasks: ["Resume optimization", "Skills audit", "Career goal mapping", "Industry analysis"]
    },
    {
      week: 2,
      title: "Strategy Development",
      description: "Create your personalized job search strategy and application materials.",
      tasks: ["Job search strategy", "LinkedIn optimization", "Cover letter templates", "Portfolio review"]
    },
    {
      week: 3,
      title: "Application & Networking",
      description: "Start applying strategically while building your professional network.",
      tasks: ["Strategic applications", "Network building", "Interview preparation", "Follow-up systems"]
    },
    {
      week: 4,
      title: "Interview & Negotiation",
      description: "Master interviews and learn to negotiate offers like a pro.",
      tasks: ["Mock interviews", "Salary negotiation", "Offer evaluation", "Onboarding prep"]
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-screen" id="weeks" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4 glass-chip">
            <span>4-Week Journey</span>
          </div>
          <h2 className="section-title mb-4 text-white">Your Path to Success</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Follow our proven 4-week methodology to land your dream job.
          </p>
        </div>

        {/* Vertical Stacking Cards */}
        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/30 via-white/20 to-white/10 transform -translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            ></div>
          </div>

          <div className="space-y-8">
            {weeks.map((week, index) => {
              const cardProgress = Math.max(0, Math.min(1, (scrollProgress * 4) - index));
              const isActive = cardProgress > 0;
              const scale = 0.9 + (cardProgress * 0.1);
              const translateY = (1 - cardProgress) * 50;
              const opacity = 0.3 + (cardProgress * 0.7);

              return (
                <div 
                  key={index}
                  className="relative"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  <div className={`glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? 'border-white/40 bg-white/10 shadow-lg shadow-white/10' 
                      : 'border-white/10 bg-white/5'
                  }`}>
                    {/* Week number positioned on the line */}
                    <div className={`absolute left-1/2 top-0 w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 transform -translate-x-1/2 -translate-y-6 z-10 ${
                      isActive 
                        ? 'bg-white text-black shadow-lg shadow-white/20' 
                        : 'bg-white/20 text-white'
                    }`}>
                      {week.week}
                    </div>
                    
                    <div className="text-center pt-8">
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        {week.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {week.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {week.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0 text-white/60" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animated glow effect for active week */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-2xl animate-pulse"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a 
            href="https://calendly.com/mentorque"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-button px-8 py-3 rounded-full border border-white/20 hover:border-white/40 text-white transition-all duration-300 hover:scale-105 group"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Weeks;
