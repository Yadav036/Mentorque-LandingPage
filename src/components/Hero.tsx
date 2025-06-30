
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      id="hero"
    >
      {/* Orange to black gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-orange-400 via-orange-500 to-black"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div 
              className="glass-chip mb-6 opacity-0 animate-fade-in inline-flex" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2 text-xs font-bold">01</span>
              <span className="text-black font-medium">Get Hired Fast</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-in text-black mb-6" 
              style={{ animationDelay: "0.3s" }}
            >
              Mentorque: 1-1 Mentorship<br className="hidden sm:inline" />
              <span className="text-white">to Get Hired, Fast</span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="text-lg sm:text-xl leading-relaxed opacity-0 animate-fade-in text-black mb-8 max-w-2xl"
            >
              Land Interviews Faster. Build a Career You Deserve. Mentorque is a turnkey solution engineered to help students and professionals land interviews within 4 weeks.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-center lg:justify-start" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="https://calendly.com/mentorque" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-black text-white hover:bg-gray-800 font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* Appointment booking card with updated styling */}
            <div className="glass-card bg-black/20 border border-white/20 rounded-2xl p-8 backdrop-blur-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 glass-effect">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Schedule Your Free Session
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Get personalized career guidance from industry experts. No commitment required.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>30-minute consultation</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Expert career guidance</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Personalized action plan</span>
                  </div>
                </div>
                
                <a 
                  href="https://calendly.com/mentorque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button border border-white/20 hover:border-white/40 text-white py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2 group w-full justify-center hover:bg-white/10"
                >
                  Book Now - It's Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="hidden lg:block absolute bottom-10 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
    </section>
  );
};

export default Hero;
