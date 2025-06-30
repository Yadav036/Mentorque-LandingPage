
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const Weeks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeWeek, setActiveWeek] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Auto-advance the active week for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWeek((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
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
    <section className="py-20 bg-black relative overflow-hidden" id="weeks" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4 glass-chip">
            <span>4-Week Journey</span>
          </div>
          <h2 className="section-title mb-4 text-white">Your Path to Success</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Follow our proven 4-week methodology to land your dream job.
          </p>
        </div>

        {/* Journey Map */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glowing connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-y-1/2 hidden md:block">
            <div className="absolute inset-0 bg-white/20 blur-sm"></div>
            <div 
              className="absolute top-0 h-full w-1 bg-white shadow-lg shadow-white/50 transition-all duration-1000 ease-in-out"
              style={{ 
                left: `${(activeWeek * 25) + 12.5}%`,
                transform: 'translateX(-50%)'
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {weeks.map((week, index) => (
              <div 
                key={index} 
                className={`opacity-0 fade-in-stagger transition-all duration-500 ${
                  activeWeek === index ? 'scale-105' : ''
                }`}
              >
                <div className={`glass-card bg-white/5 border rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                  activeWeek === index 
                    ? 'border-white/40 bg-white/10 shadow-lg shadow-white/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  {/* Week number */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold transition-all duration-500 ${
                    activeWeek === index 
                      ? 'bg-white text-black shadow-lg shadow-white/20' 
                      : 'bg-white/20 text-white'
                  }`}>
                    {week.week}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {week.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {week.description}
                  </p>
                  
                  <div className="space-y-2">
                    {week.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                  {/* Animated glow effect for active week */}
                  {activeWeek === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 md:hidden">
            {weeks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveWeek(index)}
                className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                  activeWeek === index ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 opacity-0 fade-in-stagger">
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
