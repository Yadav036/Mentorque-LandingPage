
import React, { useEffect, useRef } from "react";
import { Target, TrendingUp, Award, Rocket, Star } from "lucide-react";

const FeaturesSection = () => {
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
      name: "Unlock Careers, Not Just Interviews",
      description: "We don't help you pull a rabbit out the hat, we stick to the fundamentals. We get hands-on with your resume, provide 1-on-1 mentorship, and leverage LinkedIn Networking to give you the tools to gain a competitive edge and attract interviews.",
      icon: Target
    },
    {
      name: "Promise and Deliver",
      description: "Learn the same methodologies successful professionals employ to skip the queue and gain traction. Track your progress with our mentors and get results, faster.",
      icon: Award
    },
    {
      name: "Improve Odds",
      description: "Mentorque helps you improve your odds for landing interviews by leveraging time tested strategies designed by recruiters.",
      icon: TrendingUp
    },
    {
      name: "Drive Results",
      description: "Build your brand and drive personal and professional growth. Leverage mental models employed by top professionals who have been there done that.",
      icon: Rocket
    },
    {
      name: "Enhance Experience",
      description: "No you don't need a mentor! You only need the information it took them to get there. Mentorque empowers you to emulate the things successful professionals do, until you become one.",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative" id="features" ref={sectionRef}>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-800/50 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-4 text-white">Why Choose Mentorque?</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Our proven methodology helps you stand out and land interviews faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 fade-in-stagger">
              <div className="bg-black/50 rounded-2xl p-6 hover:bg-black/70 transition-all duration-300 h-full border border-gray-800">
                <div className="w-12 h-12 bg-pulse-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
