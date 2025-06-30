
import React, { useEffect, useRef } from "react";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";

const BookAppointment = () => {
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

  const appointmentTypes = [
    {
      icon: Calendar,
      title: "Free Consultation",
      duration: "30 minutes",
      description: "Get to know our mentors and discuss your career goals",
      price: "Free",
      popular: false
    },
    {
      icon: Video,
      title: "1-on-1 Mentorship",
      duration: "60 minutes",
      description: "Deep dive into your specific challenges with expert guidance",
      price: "$150",
      popular: true
    },
    {
      icon: Clock,
      title: "Quick Review",
      duration: "15 minutes",
      description: "Fast feedback on resume, LinkedIn, or specific questions",
      price: "$50",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-black relative" id="book-appointment" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4 glass-chip">
            <span>Book Your Session</span>
          </div>
          <h2 className="section-title mb-4 text-white">Ready to Transform Your Career?</h2>
          <p className="section-subtitle mx-auto text-gray-300">
            Choose the mentorship session that best fits your needs and schedule.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {appointmentTypes.map((type, index) => (
            <div key={index} className={`opacity-0 fade-in-stagger relative ${type.popular ? 'scale-105' : ''}`}>
              {type.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="glass-chip bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`glass-card bg-white/5 border rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                type.popular 
                  ? 'border-white/40 bg-white/10 shadow-lg shadow-white/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 glass-effect">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {type.title}
                </h3>
                
                <div className="text-2xl font-bold text-white mb-2">
                  {type.price}
                </div>
                
                <div className="text-gray-400 text-sm mb-4">
                  {type.duration}
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {type.description}
                </p>
                
                <a 
                  href="https://calendly.com/mentorque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full transition-all duration-300 group ${
                    type.popular
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'glass-button border border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                  }`}
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Animated glow effect for popular option */}
                {type.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 rounded-2xl animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Calendly embed preview */}
        <div className="max-w-4xl mx-auto opacity-0 fade-in-stagger">
          <div className="glass-card bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Schedule Directly Below
            </h3>
            <p className="text-gray-300 mb-6">
              Click on any available time slot to book your mentorship session instantly.
            </p>
            
            {/* Calendly iframe */}
            <div className="aspect-video bg-white/10 rounded-xl overflow-hidden glass-effect">
              <iframe
                src="https://calendly.com/mentorque?embed_domain=localhost&embed_type=Inline"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
