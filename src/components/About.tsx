
import React, { useEffect, useRef } from "react";
import { Users, Target, Award } from "lucide-react";

const About = () => {
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

  const features = [
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Connect with industry professionals from top companies like Microsoft, Google, and Amazon."
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Tailored mentorship programs designed to match your career goals and current skill level."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "90% of our students see results within 14 days, with significant improvement in interview success rates."
    }
  ];

  return (
    <section className="py-20 bg-black relative" id="about" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4 glass-chip">
            <span>About Mentorque</span>
          </div>
          <h2 className="section-title mb-4 text-white">Transforming Careers Through Mentorship</h2>
          <p className="section-subtitle mx-auto text-gray-300 max-w-3xl">
            We believe everyone deserves access to world-class mentorship. Our platform connects ambitious professionals with industry experts who provide personalized guidance, practical insights, and the support needed to accelerate career growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center opacity-0 fade-in-stagger">
              <div className="glass-card bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 glass-effect">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 opacity-0 fade-in-stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Your Success Is Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded by industry veterans who understand the challenges of career growth, Mentorque bridges the gap between talent and opportunity. We've helped thousands of professionals land their dream jobs, negotiate better salaries, and build fulfilling careers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Expert Mentors</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl glass-effect"></div>
              <div className="absolute inset-4 bg-white/10 rounded-xl glass-overlay animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
