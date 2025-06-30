
import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const MentorsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-20 bg-gray-900 relative" id="mentors" ref={sectionRef}>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-gray-800/50 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span>Expert Mentors</span>
          </div>
          <h2 className="section-title mb-4 text-white">Learn from Industry Experts</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Get 1-on-1 guidance from professionals at top companies.
          </p>
        </div>
        
        <div className="max-w-md mx-auto opacity-0 fade-in-stagger">
          <div className="bg-black/50 rounded-2xl p-8 text-center border border-gray-800 hover:border-pulse-500/50 transition-colors duration-300">
            <div className="w-20 h-20 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Agniva Dutta</h3>
            <p className="text-pulse-400 font-medium mb-4">Senior Software Engineer @ Microsoft</p>
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Dublin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
