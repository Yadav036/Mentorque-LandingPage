
import React, { useEffect, useRef } from "react";
import { Calendar, Clock, Shield, CheckCircle } from "lucide-react";

const SupportSection = () => {
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

  const supportFeatures = [
    {
      name: "Easy Booking",
      icon: Calendar
    },
    {
      name: "24/7 Support",
      icon: Clock
    },
    {
      name: "ATS Proof",
      icon: Shield
    },
    {
      name: "Vetted and Verified",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-black relative" id="support" ref={sectionRef}>
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pulse-50/10 rounded-full opacity-60 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span>Support</span>
          </div>
          <h2 className="section-title mb-4 text-white">Complete Support System</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Everything you need for a seamless mentorship experience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="text-center opacity-0 fade-in-stagger">
              <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
                <div className="w-12 h-12 bg-pulse-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {feature.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
