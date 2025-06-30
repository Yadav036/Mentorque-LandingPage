
import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
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
    <section className="py-20 bg-black relative" id="testimonials" ref={sectionRef}>
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pulse-50/10 rounded-full opacity-60 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span>Success Stories</span>
          </div>
          <h2 className="section-title mb-4 text-white">What Our Students Say</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Real stories from professionals who transformed their careers with Mentorque.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto opacity-0 fade-in-stagger">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative border border-gray-800">
            <Quote className="w-12 h-12 text-pulse-500 mb-6" />
            <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              "Doing self prep, I couldn't even clear the assessments of companies. The change Mentorque brought in the preparation strategy was phenomenal. They helped me with crucial learning materials, 1-1 mentorships, guided me with the preparation roadmap, and constant accountability tracking, which was crucial in getting me getting calls from AIB and JP Morgan."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold">N</span>
              </div>
              <div>
                <div className="font-semibold text-white">Nilesh Khatiya</div>
                <div className="text-gray-400 text-sm">Lead Data Analyst @ ATMS, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
