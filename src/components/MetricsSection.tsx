
import React, { useEffect, useRef } from "react";

const MetricsSection = () => {
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

  const metrics = [
    {
      name: "Results within 14 Days",
      value: "90%",
      description: "Nearly 4/5 students started seeing results within 14 days of just after 1-2 calls with our mentors."
    },
    {
      name: "Resume Shortlist Rate",
      value: "120%",
      description: "Resume shortlist rate improved by 120% after following the career clarity sprint."
    },
    {
      name: "Call Back Rate",
      value: "96%",
      description: "Cent percent students got at least 1 call back after going through the Networking Sprint."
    }
  ];

  return (
    <section className="py-20 bg-black relative" id="metrics" ref={sectionRef}>
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50/10 rounded-full opacity-60 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span>Proven Results</span>
          </div>
          <h2 className="section-title mb-4 text-white">Success by the Numbers</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Real metrics from students who transformed their careers with Mentorque.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center opacity-0 fade-in-stagger">
              <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-pulse-500 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {metric.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
